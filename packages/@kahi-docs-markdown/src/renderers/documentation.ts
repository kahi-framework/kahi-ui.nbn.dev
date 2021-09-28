import {promises} from "fs";
const {readFile} = promises;

import MarkdownIt from "markdown-it";

import {read_timestamps} from "@kahi-docs/node";
import {memoize} from "@kahi-docs/shared";

import type {IReferenceMap} from "../types/reference";
import type {ISection} from "../types/section";
import type {ISnippet} from "../types/snippet";

import type {IDocumentationProperties} from "../frontmatter/documentation";
import {extract_documentation_properties} from "../frontmatter/documentation";
import type {IFrontmatterProperties} from "../frontmatter/types";

import type {IPluginCache, IPluginOptions} from "../plugins/types";
import {BlockquoteLevels} from "../plugins/blockquote_levels";
import {ExternalLinkPlugin} from "../plugins/external_link";
import {LocalLinkPlugin} from "../plugins/local_link";
import {ScrollablesPlugin} from "../plugins/scrollables";
import {SectionsPlugin} from "../plugins/sections";
import type {ISnippetsPluginOptions} from "../plugins/snippets";
import {SnippetsPlugin} from "../plugins/snippets";
import {TitlePlugin} from "../plugins/title";

import {resolve_file_identifier, resolve_parent_identifier} from "../util/path";

import type {IRender} from "./types";

export type IDocumentationRender = IRender<IDocumentationRenderProperties>;

export interface IDocumentationRenderProperties extends IFrontmatterProperties {
    created_at: number;

    custom_properties: IReferenceMap;

    events: IReferenceMap;

    identifier: string;

    modified_at: number;

    properties: IReferenceMap;

    sections: ISection[];

    slots: IReferenceMap;

    snippets: ISnippet[];

    title: string;
}

export interface IDocumentationRenderOptions {
    created_at?: number;

    identifier?: string;

    modified_at?: number;
}

function DocumentationRenderProperties(
    properties: IDocumentationProperties,
    cache: IPluginCache,
    options: IDocumentationRenderOptions
): IDocumentationRenderProperties {
    // NOTE: The order of property retrieval should be below where applicable:
    // Frontmatter -> Markdown Plugin Cache -> Renderer Options

    const {
        created_at,
        custom_properties,
        events,
        identifier,
        modified_at,
        properties: documentation_properties,
        slots,
        title,
    } = properties;

    return {
        created_at: created_at ? Date.parse(created_at) : options.created_at ?? -1,
        custom_properties,
        events,
        identifier: identifier || (options.identifier ?? "n-a/n-a"),
        modified_at: modified_at ? Date.parse(modified_at) : options.modified_at ?? -1,
        properties: documentation_properties,
        sections: cache.sections ?? [],
        slots,
        snippets: cache.snippets ?? [],
        title: title || cache.title,
    };
}

async function _read_documentation(
    file_path: string,
    file_identifier: string = "",
    parent_identifier: string = ""
): Promise<IDocumentationRender> {
    if (!file_identifier) file_identifier = resolve_file_identifier(file_path);
    if (!parent_identifier) parent_identifier = resolve_parent_identifier(file_path);

    const [buffer, timestamps] = await Promise.all([
        readFile(file_path),
        read_timestamps(file_path),
    ]);

    const text = buffer.toString();

    return render_documentation(text, {
        created_at: timestamps.birthtime,
        identifier: `${parent_identifier}/${file_identifier}`,
        modified_at: timestamps.mtime,
    });
}

export const read_documentation =
    process.env.NODE_ENV === "production" ? memoize(_read_documentation) : _read_documentation;

export function render_documentation(
    text: string,
    options: IDocumentationRenderOptions = {}
): IDocumentationRender {
    const {content, properties} = extract_documentation_properties(text);
    const cache: IPluginCache = {};

    const md = new MarkdownIt({
        html: true,
        linkify: true,
    });

    md.use(TitlePlugin, {cache} as IPluginOptions)
        .use(LocalLinkPlugin)
        .use(ExternalLinkPlugin)
        .use(BlockquoteLevels)
        .use(SectionsPlugin, {cache} as IPluginOptions)
        .use(SnippetsPlugin, {
            cache,
            identifier: properties.identifier || (options.identifier ?? "n-a/n-a"),
        } as ISnippetsPluginOptions)
        .use(ScrollablesPlugin);

    const render = md.render(content);

    return {
        properties: DocumentationRenderProperties(properties, cache, options),
        render,
    };
}
