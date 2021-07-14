import {join} from "path";

import type {RequestHandler} from "@sveltejs/kit";

import {IDocumentationRender, read_documentation} from "@kahi-docs/markdown";

import APPLICATION_CONFIG from "../../../../../../../.kahi-docs/application.config";

import type {IDocumentationGet, IRouteError} from "../../../../../../shared/api";

export const get: RequestHandler = async (request) => {
    const {category = "", document = ""} = request.params;
    const path = join(
        APPLICATION_CONFIG.paths.content,
        APPLICATION_CONFIG.paths.documentation,
        `${category}/${document}.md`
    );

    let render: IDocumentationRender;
    try {
        render = await read_documentation(path);
    } catch (err) {
        // TODO: Switch to custom exception types
        if (err instanceof TypeError) {
            return {
                status: 500,
                headers: {
                    "content-type": "application/json",
                },

                body: {
                    code: "InvalidFrontmatter",
                    message: err.message,
                } as IRouteError,
            };
        }

        return {
            status: 404,
            headers: {
                "content-type": "application/json",
            },

            body: {
                code: "InvalidPath",
                message: `invalid path '${category}/${document}'`,
            } as IRouteError,
        };
    }

    return {
        status: 200,
        headers: {
            "content-type": "application/json",
        },

        // HACK: Apparently `JSONValue` doesn't like my purely JSON data?
        body: {
            data: render,
        } as IDocumentationGet as any,
    };
};
