import type MarkdownIt from "markdown-it";

export interface ITitlePluginEnvironment {
    title?: string;
}

export function TitlePlugin(md: MarkdownIt) {
    const {renderer} = md;
    const {heading_open} = renderer.rules;

    let current_level: number | null = null;

    renderer.rules.heading_open = (tokens, idx, _options, env: ITitlePluginEnvironment, self) => {
        const token = tokens[idx];
        const sibling_token = tokens[idx + 1];

        const level = token.markup.length;
        if (!current_level || current_level > level) {
            const content = sibling_token.content.trim();

            current_level = level;
            env.title = content;
        }

        return heading_open
            ? heading_open(tokens, idx, _options, env, self)
            : self.renderToken(tokens, idx, _options);
    };
}
