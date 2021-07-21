import type MarkdownIt from "markdown-it";

const BLOCKQUOTE_PALETTES: Record<string, string | undefined> = {
    important: "negative",

    note: "accent",

    warning: "alert",
};

const EXPRESSION_PREFIX = /^\*\*(\w+)\*\*:/;

export function BlockquoteLevels(md: MarkdownIt) {
    const {renderer} = md;

    renderer.rules.blockquote_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const sibling_token = tokens[idx + 2];

        const text = sibling_token.content.trim();
        const matches = text.match(EXPRESSION_PREFIX);

        if (matches) {
            const [, prefix] = matches;
            const palette = BLOCKQUOTE_PALETTES[prefix.toLowerCase()];

            if (palette) token.attrSet("data-palette", palette);
        }

        return self.renderToken(tokens, idx, options);
    };
}
