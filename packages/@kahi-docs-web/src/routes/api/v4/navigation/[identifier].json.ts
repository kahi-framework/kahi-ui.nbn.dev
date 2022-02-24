import {dev} from "$app/env";
import type {RequestHandler} from "@sveltejs/kit";

import type {INavigationMenu} from "@kahi-docs/config";
import {is_internal_url, memoize} from "@kahi-docs/shared";

import NAVIGATION_CONFIG from "../../../../../../../.kahi-docs/navigation.config";

import type {INavigationGet} from "../../../../lib/shared/api";
import {read_content} from "../../../../lib/server/content";

function read_navigation_menus(menus: INavigationMenu[]): Promise<INavigationMenu[]> {
    const promises = menus.map(async ({items = [], text = ""}) => {
        const promises = items.map(async ({badge = "", href = "", text = ""}) => {
            if (!text && is_internal_url(href)) {
                // TODO: error handling
                const render = await read_content(`${href}.md`.replace(/^([\/]*)/, ""));

                text = render.metadata.title;
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

const _read_navigation_menus = dev ? read_navigation_menus : memoize(read_navigation_menus)[0];

export const get: RequestHandler = async (request) => {
    const {identifier = ""} = request.params;

    const menus = NAVIGATION_CONFIG[identifier];

    return {
        status: 200,
        headers: {
            "content-type": "application/json",
        },

        // HACK: Apparently `JSONValue` doesn't like my purely JSON data?
        body: {
            data: menus ? await _read_navigation_menus(menus) : null,
        } as INavigationGet as any,
    };
};
