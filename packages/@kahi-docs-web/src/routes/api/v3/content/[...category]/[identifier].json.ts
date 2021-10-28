import {join} from "path";

import type {RequestHandler} from "@sveltejs/kit";

import {IDocumentationRender, read_documentation} from "@kahi-docs/markdown";

import type {IContentGet, IRouteError} from "../../../../../shared/api";
import {PATH_CONTENT} from "../../../../../server/constants";

export const get: RequestHandler = async (request) => {
    const {category = "", identifier = ""} = request.params;
    const path = join(PATH_CONTENT, category, `${identifier}.md`);

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
                message: `invalid path '${category}/${identifier}'`,
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
        } as IContentGet as any,
    };
};