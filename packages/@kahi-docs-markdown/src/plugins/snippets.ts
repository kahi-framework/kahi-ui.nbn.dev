import GithubSlugger from "github-slugger";
import type MarkdownIt from "markdown-it";
import Prism from "prismjs";

import {escape_html, hash_string} from "@kahi-docs/shared";

import "../syntaxes/prism-bash";
import "../syntaxes/prism-svelte";

import type {IPluginOptions} from "./types";

// TODO: Use JSON5 for the metastrings instead

enum SNIPPET_MODES {
    default = "default",

    repl = "repl",
}

export interface ISnippetsPluginOptions extends IPluginOptions {
    identifier: string;
}

function HighlightSnippet(
    text: string,
    syntax: string,
    identifier: string,
    document_identifier: string
) {
    const rendered = Prism.highlight(text, Prism.languages[syntax], syntax);

    return `<pre class="language-${syntax} snippet-highlight" data-document=${document_identifier} data-identifier="${identifier}"><code class="language-${syntax}">${rendered}</code></pre>`;
}

function REPLSnippet(identifier: string, document_identifier: string): string {
    // HACK: Hidden anchor is needed for `adapter-static` to
    // find the embed for prerendering

    // TODO: Accept prefixing base URL

    return `<iframe class="snippet-repl" data-document=${document_identifier} data-identifier="${identifier}" src="/repl/${document_identifier}/${identifier}?rotation=horizontal" loading="lazy"></iframe>
    <a href="/repl/${document_identifier}/${identifier}?rotation=horizontal" hidden sveltekit:prefetch></a>`;
}

function ProcessSnippet(
    text: string,
    syntax: string,
    mode: SNIPPET_MODES,
    identifier: string,
    document_identifier: string
): string {
    if (mode === SNIPPET_MODES.repl) return REPLSnippet(identifier, document_identifier);
    return HighlightSnippet(text, syntax, identifier, document_identifier);
}

export function SnippetsPlugin(md: MarkdownIt, options: ISnippetsPluginOptions) {
    const {renderer} = md;
    const {identifier: document_identifier} = options;
    const {cache} = options;

    const snippets = (cache.snippets = cache.snippets ?? []);
    const slugger = new GithubSlugger();

    renderer.rules.fence = (tokens, idx) => {
        // TODO: Switch to JSON5 parsing with automatic encapsulation via `{}`
        const token = tokens[idx];

        const code = (token.content as string).trim();
        const info = (token.info as string).trim().split(" ");

        const [syntax, mode = SNIPPET_MODES.default, ...rest] = info;
        const title = rest.length > 0 ? rest.join(" ") : hash_string(code);
        const identifier = slugger.slug(title);

        snippets.push({
            identifier,
            script: escape_html(code),
            syntax,
            title,
        });

        return ProcessSnippet(code, syntax, mode as SNIPPET_MODES, identifier, document_identifier);
    };
}
