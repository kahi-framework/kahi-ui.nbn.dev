import {join} from "path";
import {cwd} from "process";

import type {RequestHandler} from "@sveltejs/kit";

import type {INavigationMenu} from "@kahi-docs/config";
import {read_documentation} from "@kahi-docs/markdown";
import {is_internal_url} from "@kahi-docs/shared";

import NAVIGATION_CONFIG from "../../../../../../../.kahi-docs/navigation.config";

import type {INavigationTitlesGet, IRouteError} from "../../../../shared/api";
import {PATH_CONTENT} from "../../../../server/constants";

function read_navigation_menus(menus: INavigationMenu[]): Promise<INavigationMenu[]> {
    const promises = menus.map(async ({items = [], text = ""}) => {
        const promises = items.map(async ({badge = "", href = "", text = ""}) => {
            if (!text && is_internal_url(href)) {
                // TODO: error handling
                const file_path = join(PATH_CONTENT, `${href}.md`);
                const render = await read_documentation(file_path);

                text = render.properties.title || "N/A";
            } else text = "N/A";

            return {
                badge,
                href,
                text,
            };
        });

        return {
            text,
            items: await Promise.all(promises),
        };
    });

    return Promise.all(promises);
}

export const get: RequestHandler = async (request) => {
    const {category = ""} = request.params;

    const menus = NAVIGATION_CONFIG[category];
    if (!menus) {
        return {
            status: 404,
            headers: {
                "content-type": "application/json",
            },

            body: {
                code: "InvalidPath",
                message: `invalid navigation menu '${category}'`,
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
            data: await read_navigation_menus(menus),
        } as any,
    };
};
