import type MarkdownIt from "markdown-it";

import {is_external_url} from "@kahi-docs/shared";

export function ExternalLinkPlugin(md: MarkdownIt) {
    const {renderer} = md;
    const {link_open} = renderer.rules;

    renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        let href = token.attrGet("href") ?? "";

        if (is_external_url(href)) {
            token.attrSet("target", "_blank");
            token.attrSet("rel", "noopener noreferrer");
        }

        return link_open
            ? link_open(tokens, idx, options, env, self)
            : self.renderToken(tokens, idx, options);
    };
}
