import type MarkdownIt from "markdown-it";

import type {IPluginOptions} from "./types";

export function ScrollablesPlugin(md: MarkdownIt, options: IPluginOptions) {
    const {renderer} = md;

    renderer.rules.table_close = (tokens, idx, options, env, self) => {
        const markup = self.renderToken(tokens, idx, options);

        return `${markup}</div>`;
    };

    renderer.rules.table_open = (tokens, idx, options, env, self) => {
        const markup = self.renderToken(tokens, idx, options);

        return `<div class="scrollable">${markup}`;
    };
}
