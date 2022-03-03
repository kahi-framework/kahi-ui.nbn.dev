import GithubSlugger from "github-slugger";
import type MarkdownIt from "markdown-it";

import {hash_string} from "@kahi-docs/shared";

import type {ISnippet} from "../types/page";

export enum SNIPPET_MODE {
    default = "default",

    repl = "repl",
}

export interface ISnippetsPluginEnvironment {
    snippets?: ISnippet[];
}

export function SnippetsPlugin(md: MarkdownIt) {
    const {renderer} = md;
    const {fence} = renderer.rules;

    const slugger = new GithubSlugger();

    renderer.rules.fence = (tokens, idx, _options, env: ISnippetsPluginEnvironment, self) => {
        const {snippets = []} = env;
        env.snippets = snippets;

        const token = tokens[idx];

        const script = token.content.trim();
        const syntax = token.info.trim();

        const draft = (token.attrGet("draft") ?? "").toLowerCase() === "true";
        const mode = token.attrGet("mode") ?? SNIPPET_MODE.default;
        const repl = mode === SNIPPET_MODE.repl;
        const title = token.attrGet("title") ?? hash_string(script);
        const identifier = token.attrGet("identifier") ?? slugger.slug(title);

        token.attrSet("identifier", identifier);
        token.attrSet("mode", mode);
        token.attrSet("script", script);
        token.attrSet("syntax", syntax);
        token.attrSet("title", title);

        if (!draft && repl && syntax === "svelte") {
            snippets.push({
                identifier,
                script,
                syntax,
                title,
            });
        }

        return fence
            ? fence(tokens, idx, _options, env, self)
            : self.renderToken(tokens, idx, _options);
    };
}
