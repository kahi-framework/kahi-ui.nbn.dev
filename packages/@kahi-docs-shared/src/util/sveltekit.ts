import {is_internal_url, normalize_pathname} from "./url";

export function is_current_page(page: {url: URL}, href: string): boolean {
    if (is_internal_url(href)) {
        return normalize_pathname(page.url.pathname) === normalize_pathname(href);
    }

    return false;
}
