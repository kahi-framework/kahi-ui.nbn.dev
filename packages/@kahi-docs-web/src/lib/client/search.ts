import {dev} from "$app/env";
import FlexSearch from "flexsearch";

import {memoize} from "@kahi-docs/shared";

import type {ISearchGet} from "../shared/api";
import type {ISearchIndex, ISearchRecord} from "../shared/search";

export type ISearcher = (query: string) => ISearchResult[];

export interface ISearchResult {
    identifier: string;

    title: string;
}

async function fetch_search_index(): Promise<ISearchIndex> {
    const response = await fetch("/api/v3/search.json");
    const data = (await response.json()) as ISearchGet;

    return data.data;
}

async function _make_searcher(): Promise<ISearcher> {
    const documents = new FlexSearch.Document<ISearchRecord>({
        tokenize: "full",
        preset: "match",

        document: {
            id: "identifier",
            index: ["title", "text"],
        },
    });

    const title_lookup = new Map();
    const index = await fetch_search_index();

    await Promise.all(
        index.map((entry) => {
            title_lookup.set(entry.identifier, entry.title);
            return documents.addAsync(entry.identifier, entry);
        })
    );

    return (query) => {
        const combined_results = new Set<string>();
        const search_results = documents.search(query, 10);

        for (const unit of search_results) {
            for (const identifier of unit.result) combined_results.add(identifier as string);
        }

        return (
            Array.from(combined_results)
                // NOTE: When combining title + text search results, there
                // might be more than ten (10) results. So we need to limit here
                .slice(0, 9)
                .map((identifier) => {
                    return {
                        identifier,
                        title: title_lookup.get(identifier),
                    };
                })
        );
    };
}

export const make_searcher = dev ? _make_searcher : memoize(_make_searcher)[0];
