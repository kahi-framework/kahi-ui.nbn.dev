import MarkdownIt from "markdown-it";

import type {IFrontmatterProperties} from "../frontmatter/types";

import {ExternalLinkPlugin} from "../plugins/external_link";
import {LocalLinkPlugin} from "../plugins/local_link";

import type {IRender} from "./types";

export type IInsertRender = IRender<IFrontmatterProperties>;

export function render_insert(text: string): IInsertRender {
    const md = new MarkdownIt({
        html: true,
        linkify: true,
    });

    md.use(LocalLinkPlugin).use(ExternalLinkPlugin);

    const render = md.render(text);

    return {
        properties: {},
        render,
    };
}
