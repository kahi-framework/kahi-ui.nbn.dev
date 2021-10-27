import {join} from "path";

import type {RequestHandler} from "@sveltejs/kit";

import {parse_navigation_titles} from "@kahi-docs/markdown";

import type {INavigationTitlesGet} from "../../../../../shared/api";

import APPLICATION_CONFIG from "../../../../../../../../.kahi-docs/application.config";
import NAVIGATION_CONFIG from "../../../../../../../../.kahi-docs/navigation.config";

const PATH_DOCUMENTATION = join(
    APPLICATION_CONFIG.paths.content,
    APPLICATION_CONFIG.paths.documentation
);

export const get: RequestHandler = async (request) => {
    const titles = await parse_navigation_titles(
        PATH_DOCUMENTATION,
        "/docs",
        NAVIGATION_CONFIG.documentation
    );

    return {
        status: 200,
        headers: {
            "content-type": "application/json",
        },

        // HACK: Apparently `JSONValue` doesn't like my purely JSON data?
        body: {
            data: Object.fromEntries(titles.entries()),
        } as INavigationTitlesGet as any,
    };
};
