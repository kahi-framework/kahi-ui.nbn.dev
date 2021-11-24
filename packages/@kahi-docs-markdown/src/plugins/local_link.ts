import type MarkdownIt from "markdown-it";

import {
    DEFAULT_ORIGIN,
    append_pathname,
    is_internal_url,
    normalize_pathname,
} from "@kahi-docs/shared";

const EXTENSION_MARKDOWN = ".md";

export interface ILocalLinkPluginOptions {
    base: string;
}

export function LocalLinkPlugin(md: MarkdownIt, options: Partial<ILocalLinkPluginOptions> = {}) {
    const {renderer} = md;
    const {link_open} = renderer.rules;

    const base = normalize_pathname(options.base ?? "/");

    renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        let href = token.attrGet("href") ?? "";

        if (is_internal_url(href)) {
            const {pathname} = new URL(href, DEFAULT_ORIGIN);
            if (pathname.toLowerCase().endsWith(EXTENSION_MARKDOWN)) {
                href = href.replace(pathname, pathname.slice(0, -EXTENSION_MARKDOWN.length));
            }

            token.attrSet("href", append_pathname(base, href));
        }

        return link_open
            ? link_open(tokens, idx, options, env, self)
            : self.renderToken(tokens, idx, options);
    };
}
