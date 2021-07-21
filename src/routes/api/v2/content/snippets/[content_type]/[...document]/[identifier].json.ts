import {join} from "path";

import type {RequestHandler} from "@sveltejs/kit";

import {IDocumentationRender, read_documentation} from "@kahi-docs/markdown";

import APPLICATION_CONFIG from "../../../../../../../../.kahi-docs/application.config";

import type {IRouteError, ISnippetGet} from "../../../../../../../shared/api";

export const get: RequestHandler = async (request) => {
    // NOTE: Content type is a separate path segment so incase future handling of different format
    // of Markdown files needs to be handled
    const {content_type = "", document = "", identifier = ""} = request.params;
    const path = join(APPLICATION_CONFIG.paths.content, content_type, `${document}.md`);

    // TODO: Create custom renderer just for looking up snippets
    let render: IDocumentationRender;
    try {
        render = await read_documentation(path);
    } catch (err) {
        return {
            status: 404,
            headers: {
                "content-type": "application/json",
            },

            body: {
                code: "InvalidPath",
                message: `invalid path '${content_type}/${document}'`,
            } as IRouteError,
        };
    }

    const snippet = render.properties.snippets.find((snippet) => snippet.identifier === identifier);
    if (!snippet) {
        return {
            status: 404,
            headers: {
                "content-type": "application/json",
            },

            body: {
                code: "InvalidSnippet",
                message: `invalid snippet '${identifier}'`,
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
            data: snippet,
        } as ISnippetGet as any,
    };
};
