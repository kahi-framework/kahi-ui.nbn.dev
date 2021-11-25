import type MarkdownIt from "markdown-it";

import {
    append_pathname,
    is_internal_url,
    is_relative_pathname,
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
            if (href.toLowerCase().endsWith(EXTENSION_MARKDOWN)) {
                href = href.replace(href, href.slice(0, -EXTENSION_MARKDOWN.length));
            }

            token.attrSet("href", is_relative_pathname(href) ? href : append_pathname(base, href));
            token.attrSet("svelte:prefetch", "true");
        }

        return link_open
            ? link_open(tokens, idx, options, env, self)
            : self.renderToken(tokens, idx, options);
    };
}
