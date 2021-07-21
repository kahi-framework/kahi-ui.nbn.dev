import type MarkdownIt from "markdown-it";

import {is_internal_url} from "@kahi-docs/shared";

const EXTENSION_MARKDOWN = ".md";

export function LocalLinkPlugin(md: MarkdownIt) {
    const {renderer} = md;
    const {link_open} = renderer.rules;

    renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        let href = token.attrGet("href") ?? "";

        if (is_internal_url(href)) {
            const {pathname} = new URL(href, "http://fake.invalid");
            if (pathname.toLowerCase().endsWith(EXTENSION_MARKDOWN)) {
                href = href.replace(pathname, pathname.slice(0, -EXTENSION_MARKDOWN.length));
            }

            token.attrSet("href", href);
        }

        return link_open
            ? link_open(tokens, idx, options, env, self)
            : self.renderToken(tokens, idx, options);
    };
}
