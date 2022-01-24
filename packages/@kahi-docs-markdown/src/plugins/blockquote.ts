import type MarkdownIt from "markdown-it";

export enum BLOCKQUOTE_MODE {
    deprecated = "deprecated",

    important = "important",

    note = "note",

    warning = "warning",
}

const BLOCKQUOTE_PALETTES: Record<string, string | undefined> = {
    [BLOCKQUOTE_MODE.deprecated]: "negative",

    [BLOCKQUOTE_MODE.important]: "negative",

    [BLOCKQUOTE_MODE.note]: "accent",

    [BLOCKQUOTE_MODE.warning]: "alert",
};

const EXPRESSION_PREFIX = /^\*\*(\w+)\*\*:/;

export function BlockquotePlugin(md: MarkdownIt) {
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
