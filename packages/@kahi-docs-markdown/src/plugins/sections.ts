import GithubSlugger from "github-slugger";
import type MarkdownIt from "markdown-it";

import type {ISection} from "../types/page";

export interface ISectionsPluginEnvironment {
    sections?: ISection[];
}

export function SectionsPlugin(md: MarkdownIt) {
    const {renderer} = md;
    const {heading_open} = renderer.rules;

    const slugger = new GithubSlugger();

    renderer.rules.heading_open = (
        tokens,
        idx,
        _options,
        env: ISectionsPluginEnvironment,
        self
    ) => {
        const {sections = []} = env;
        env.sections = sections;

        const token = tokens[idx];
        const sibling_token = tokens[idx + 1];

        const level = token.markup.length;

        const {content} = sibling_token;
        const slug = slugger.slug(content);

        token.attrSet("id", slug);
        sections.push({identifier: slug, level, text: content});

        return heading_open
            ? heading_open(tokens, idx, _options, env, self)
            : self.renderToken(tokens, idx, _options);
    };
}
