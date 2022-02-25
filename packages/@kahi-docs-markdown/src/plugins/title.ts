import type MarkdownIt from "markdown-it";

export interface ITitlePluginEnvironment {
    title?: string;
}

export function TitlePlugin(md: MarkdownIt) {
    const {renderer} = md;
    const {heading_close, heading_open, text} = renderer.rules;

    renderer.rules.heading_open = (tokens, idx, _options, env: ITitlePluginEnvironment, self) => {
        if (!env.title) {
            const sibling_token = tokens[idx + 1];
            const content = sibling_token.content.trim();

            sibling_token.hidden = true;
            env.title = content;

            if (heading_open) heading_open(tokens, idx, _options, env, self);
            return "";
        }

        return heading_open
            ? heading_open(tokens, idx, _options, env, self)
            : self.renderToken(tokens, idx, _options);
    };

    renderer.rules.heading_close = (tokens, idx, _options, env: ITitlePluginEnvironment, self) => {
        const sibling_token = tokens[idx - 1];
        if (sibling_token.hidden) return "";

        return heading_close
            ? heading_close(tokens, idx, _options, env, self)
            : self.renderToken(tokens, idx, _options);
    };

    renderer.rules.text = (tokens, idx, _options, env: ITitlePluginEnvironment, self) => {
        if (env.title) {
            const token = tokens[idx];
            const content = token.content.trim();

            if (env.title === content) return "";
        }

        return text
            ? text(tokens, idx, _options, env, self)
            : self.renderToken(tokens, idx, _options);
    };
}
