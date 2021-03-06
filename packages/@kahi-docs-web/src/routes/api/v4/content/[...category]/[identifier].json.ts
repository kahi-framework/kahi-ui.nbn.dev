import type {RequestHandler} from "@sveltejs/kit";

import type {IPageRender} from "@kahi-docs/markdown";

import type {IContentGet, IRouteError} from "../../../../../lib/shared/api";

import {read_content} from "../../../../../lib/server/content";

export const get: RequestHandler = async (request) => {
    const {category = "", identifier = ""} = request.params;

    let render: IPageRender;
    try {
        render = await read_content(`${category}/${identifier}.md`);
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
                code: "InvalidIdentifier",
                message: `invalid content '${category}/${identifier}'`,
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
