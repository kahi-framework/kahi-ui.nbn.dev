import {dev} from "$app/env";
import fg from "fast-glob";
import type {RequestHandler} from "@sveltejs/kit";

import {memoize} from "@kahi-docs/shared";

import {GLOB_CONTENT} from "../../../../lib/server/constants";
import {read_content} from "../../../../lib/server/content";

import type {IRouteSuccess} from "../../../../lib/shared/api";

import type {ISnippetRecord} from "./[identifier].json";

export type ISnippetIndex = readonly ISnippetsRecord[];

export interface ISnippetsGet extends IRouteSuccess {
    data: ISnippetIndex;
}

export interface ISnippetsRecord {
    readonly title: string;

    readonly snippets: ISnippetRecord[];
}

async function get_snippets_index(): Promise<ISnippetIndex> {
    const file_paths = await fg(GLOB_CONTENT);

    const index = await Promise.all(
        file_paths.map(async (file_path) => {
            // TODO: error handling
            const content = await read_content(file_path);

            return {
                title: content.metadata.title,
                snippets: content.metadata.snippets
                    .map((snippet) => {
                        return {
                            identifier: snippet.identifier,
                            script: snippet.script,
                            title: snippet.title,
                        };
                    })
                    .sort((snippet_a, snippet_b) =>
                        snippet_a.identifier > snippet_b.identifier ? 1 : -1
                    ),
            };
        })
    );

    return index
        .filter((category) => category.snippets.length > 0)
        .sort((category_a, category_b) =>
            category_a.title.toLowerCase() > category_b.title.toLowerCase() ? 1 : -1
        );
}

const _get_snippets_index = dev ? get_snippets_index : memoize(get_snippets_index)[0];

export const get: RequestHandler = async (request) => {
    return {
        status: 200,

        // HACK: Apparently `JSONValue` doesn't like my purely JSON data?
        body: {
            data: await _get_snippets_index(),
        } as ISnippetsGet as any,
    };
};
