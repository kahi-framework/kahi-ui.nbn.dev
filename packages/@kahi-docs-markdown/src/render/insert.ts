import {ExternalLinkPlugin} from "../plugins/external_link";
import {LocalLinkPlugin} from "../plugins/local_link";

import type {IMarkdownPlugin} from "./render";
import {render_markdown} from "./render";

export interface IInsertOptions {
    base: string;

    plugins: IMarkdownPlugin[];
}

function InsertOptions(options: Partial<IInsertOptions> = {}): IInsertOptions {
    const {base = "/", plugins = []} = options;

    return {
        base,
        plugins,
    };
}

export function render_insert(text: string, options: Partial<IInsertOptions> = {}): string {
    const normalized_options = InsertOptions(options);

    const [, , render] = render_markdown<unknown, unknown>(
        text,
        undefined,
        [
            [LocalLinkPlugin, {base: normalized_options.base}],
            ExternalLinkPlugin,
            ...normalized_options.plugins,
        ],
        true
    );

    return render;
}
