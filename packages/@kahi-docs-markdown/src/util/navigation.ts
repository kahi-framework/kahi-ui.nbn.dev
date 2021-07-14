import {relative, join} from "path";

import {INavigationBar, INavigationMenu, is_navigation_submenu} from "@kahi-docs/config";
import {is_navigation_anchor} from "@kahi-docs/config";
import {can_read} from "@kahi-docs/node";
import {is_internal_url} from "@kahi-docs/shared";

import {read_documentation} from "../renderers/documentation";

export type INavigationTitles = ReadonlyMap<string, string>;

export async function parse_navigation_titles(
    directory: string,
    base: string,
    items: (INavigationBar | INavigationMenu)[],
    cache: Map<string, string> = new Map()
): Promise<INavigationTitles> {
    await Promise.all(
        items.map<any | Promise<any>>(async (item) => {
            if (is_navigation_anchor(item)) {
                const {href} = item;
                let {text} = item;

                if (!text && is_internal_url(href) && !cache.has(href)) {
                    let path = relative(base, href);
                    path = join(directory, `${path}.md`);

                    if (await can_read(path)) {
                        // TODO: use specialized light-weight renderer
                        const documentation = await read_documentation(path);
                        const {title} = documentation.properties;

                        cache.set(href, title);
                    }
                }
            } else if (is_navigation_submenu(item) && item.items.length > 0) {
                await parse_navigation_titles(directory, base, item.items, cache);
            }
        })
    );

    return cache;
}
