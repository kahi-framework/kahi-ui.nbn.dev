import type {SvelteComponent} from "svelte";

import {append_pathname, is_external_url} from "@kahi-docs/shared";

export interface INavigationMapOptions {
    base: string;

    default_no_scroll: boolean;

    default_prefetch: boolean;

    default_title: string;

    title_map: Record<string, string | undefined>;
}

export interface INavigationItem {
    icon?: typeof SvelteComponent;

    text?: string;

    on_click?: (event: MouseEvent) => void;
}

export interface INavigationAnchor extends INavigationItem {
    href: string;

    is_external?: boolean;

    no_scroll?: boolean;

    prefetch?: boolean;
}

export interface INavigationSeparator {
    separator: string;
}

export interface INavigationSubMenu extends INavigationSeparator {
    items: INavigationMenu[];
}

export type INavigationBar = INavigationAnchor | INavigationItem;

export type INavigationMenu =
    | INavigationAnchor
    | INavigationItem
    | INavigationSeparator
    | INavigationSubMenu;

export function is_navigation_anchor(item: any): item is INavigationAnchor {
    return typeof item === "object" && "href" in item;
}

export function is_navigation_item(item: any): item is INavigationItem {
    return typeof item === "object" && "text" in item;
}

export function is_navigation_submenu(item: any): item is INavigationSubMenu {
    return typeof item === "object" && "items" in item && "separator" in item;
}

export function map_navigation_items<T extends INavigationBar | INavigationMenu>(
    items: T[],
    options: Partial<INavigationMapOptions> = {}
): T[] {
    const {
        base = "",
        default_no_scroll = false,
        default_prefetch = false,
        default_title = "N/A",
        title_map = {},
    } = options;

    return items.map<T>((item) => {
        if (is_navigation_anchor(item)) {
            const {href, text} = item;
            let {
                is_external = false,
                no_scroll = default_no_scroll,
                prefetch = default_prefetch,
            } = item;

            if (!is_external) is_external = is_external_url(href);

            return {
                ...item,
                is_external,
                href: is_external ? href : append_pathname(base, href),
                no_scroll: is_external ? undefined : no_scroll || undefined,
                prefetch: is_external ? undefined : prefetch || undefined,
                text: text ?? title_map[href] ?? default_title,
            };
        } else if (is_navigation_submenu(item) && item.items.length > 0) {
            const {items: sub_items, separator} = item;

            return {
                ...item,
                items: map_navigation_items<T>(
                    // @ts-expect-error - HACK: ?
                    sub_items,
                    options
                ),
                separator: separator ?? default_title,
            };
        } else if (is_navigation_item(item)) {
            const {text} = item;

            return {
                ...item,
                text: text ?? default_title,
            };
        }

        return {...item};
    });
}
