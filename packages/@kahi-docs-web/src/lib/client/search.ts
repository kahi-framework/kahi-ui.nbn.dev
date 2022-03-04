import {dev} from "$app/env";
import FlexSearch from "flexsearch";

import {memoize} from "@kahi-docs/shared";

import type {ISearchGet} from "../shared/api";
import type {ISearchIndex, ISearchRecord} from "../shared/search";

enum SEARCH_WEIGHTS {
    text,

    title,

    identifier,
}

export type ISearcher = (query: string) => ISearchResult[];

export interface ISearchResult {
    identifier: string;

    title: string;
}

async function fetch_search_index(): Promise<ISearchIndex> {
    const response = await fetch("/api/v4/search.json");
    const data = (await response.json()) as ISearchGet;

    return data.data;
}

async function _make_searcher(): Promise<ISearcher> {
    const documents = new FlexSearch.Document<ISearchRecord>({
        tokenize: "full",
        preset: "match",

        document: {
            id: "identifier",
            index: ["identifier", "text", "title"],
        },
    });

    const index = await fetch_search_index();
    const lookup = new Map<string, string>();

    await Promise.all(
        index.map((entry) => {
            const {identifier, text, title} = entry;

            lookup.set(identifier, title);
            return documents.addAsync(entry.identifier, {identifier, text, title});
        })
    );

    return (query) => {
        const rankings = new Map<string, number>();
        const search_results = documents.search(query, 10);

        for (const results of search_results) {
            const weight = SEARCH_WEIGHTS[results.field as keyof typeof SEARCH_WEIGHTS];

            for (const identifier of results.result) {
                const rank = rankings.get(identifier as string) ?? 0;

                rankings.set(identifier as string, rank + weight);
            }
        }

        return Array.from(rankings.entries())
            .sort((ranking_a, ranking_b) => ranking_b[1] - ranking_a[1])
            .slice(0, 9)
            .map((ranking) => {
                const [identifier] = ranking;
                const title = lookup.get(identifier) as string;

                return {
                    identifier,
                    title,
                };
            });
    };
}

export const make_searcher = dev ? _make_searcher : memoize(_make_searcher)[0];
