import {relative} from "path";

import {dev} from "$app/env";
import {load} from "cheerio";
import fg from "fast-glob";
import type {RequestHandler} from "@sveltejs/kit";

import {read_documentation} from "@kahi-docs/markdown";
import type {ISearchIndex} from "@kahi-docs/shared";
import {memoize} from "@kahi-docs/shared";

import {GLOB_CONTENT, PATH_CONTENT} from "../../../../server/constants";
import type {ISearchGet} from "../../../../shared/api";

// TODO: cache results, empty cache on file watch change

async function get_search_index(): Promise<ISearchIndex> {
    const file_paths = await fg(GLOB_CONTENT);

    return Promise.all(
        file_paths.map(async (file_path) => {
            const identifier = relative(PATH_CONTENT, file_path).replace(".md", "");

            const content = await read_documentation(file_path);
            const $ = load(content.render);

            $("iframe, hr, pre").remove();

            return {
                identifier,
                title: content.properties.title,
                text: $.text(),
            };
        })
    );
}

const _get_search_index = dev ? get_search_index : memoize(get_search_index);

export const get: RequestHandler = async (request) => {
    return {
        status: 200,

        // HACK: Apparently `JSONValue` doesn't like my purely JSON data?
        body: {
            data: await _get_search_index(),
        } as ISearchGet as any,
    };
};
