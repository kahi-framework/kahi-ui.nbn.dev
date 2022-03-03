import {dev} from "$app/env";
import fg from "fast-glob";
import type {RequestHandler} from "@sveltejs/kit";

import {memoize} from "@kahi-docs/shared";

import {GLOB_CONTENT} from "../../../../lib/server/constants";
import {read_content} from "../../../../lib/server/content";

import type {IRouteError, IRouteSuccess} from "../../../../lib/shared/api";

export interface ISnippetGet extends IRouteSuccess {
    data: ISnippetRecord;
}

export interface ISnippetRecord {
    readonly identifier: string;

    readonly script: string;

    readonly title: string;
}

async function get_snippets_index(): Promise<ISnippetRecord[]> {
    const file_paths = await fg(GLOB_CONTENT);
    const index = await Promise.all(
        file_paths.map(async (file_path) => {
            // TODO: error handling
            const content = await read_content(file_path);

            return content.metadata.snippets
                .filter(({draft, repl, syntax}) => !draft && repl && syntax === "svelte")
                .map((snippet) => {
                    return {
                        identifier: snippet.identifier,
                        script: snippet.script,
                        title: snippet.title,
                    };
                });
        })
    );

    return index.flat().sort((entry_a, entry_b) => {
        return entry_a.identifier > entry_b.identifier ? 1 : -1;
    });
}

const _get_snippets_index = dev ? get_snippets_index : memoize(get_snippets_index)[0];

export const get: RequestHandler = async (request) => {
    const {identifier = ""} = request.params;

    const snippets = await _get_snippets_index();
    const snippet = snippets.find((_snippet) => _snippet.identifier === identifier);

    if (!snippet) {
        return {
            status: 404,
            headers: {
                "content-type": "application/json",
            },

            body: {
                code: "InvalidIdentifier",
                message: `invalid snippet '${identifier}'`,
            } as IRouteError as any,
        };
    }

    return {
        status: 200,

        // HACK: Apparently `JSONValue` doesn't like my purely JSON data?
        body: {
            data: snippet,
        } as ISnippetGet as any,
    };
};
