import type MarkdownIt from "markdown-it";

import {highlight} from "@kahi-docs/highlight";

import type {SNIPPET_MODE} from "./snippets";

function RenderCode(
    identifier: string,
    script: string,
    syntax: string,
    mode: SNIPPET_MODE
): string {
    const rendered = highlight(script, syntax);

    return `<pre class="language-${syntax}" data-identifier="${identifier}" data-mode="${mode}" data-syntax="${syntax}"><code>${rendered}</code></pre>`;
}

export function HighlightPlugin(md: MarkdownIt) {
    const {renderer} = md;

    renderer.rules.fence = (tokens, idx, _options, env, self) => {
        const token = tokens[idx];

        const identifier = token.attrGet("identifier") as string;
        const mode = token.attrGet("mode") as SNIPPET_MODE;
        const script = token.attrGet("script") as string;
        const syntax = token.attrGet("syntax") as string;

        return RenderCode(identifier, script, syntax, mode);
    };
}
