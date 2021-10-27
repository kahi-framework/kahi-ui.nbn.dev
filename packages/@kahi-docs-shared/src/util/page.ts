import type {Page} from "@sveltejs/kit";

import {is_internal_url, normalize_pathname} from "./url";

export function is_current_page(page: Page, href: string): boolean {
    if (is_internal_url(href)) {
        return normalize_pathname(page.path) === normalize_pathname(href);
    }

    return false;
}
