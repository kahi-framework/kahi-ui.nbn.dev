import {promises} from "fs";
const {readFile} = promises;

// @ts-expect-error - HACK: no types
import attrs from "markdown-it-attrs";
import emoji from "markdown-it-emoji";
// @ts-expect-error - HACK: no types
import {html5Media} from "markdown-it-html5-media";

import {read_timestamps} from "@kahi-docs/node";

import type {IAuthorMap, IReference, IReferenceMap, ISection, ISnippet} from "../types/page";

import type {IPageFrontmatter} from "../frontmatter/page";
import {PAGE_FRONTMATTER_SCHEMA} from "../frontmatter/page";

import {BlockquotePlugin} from "../plugins/blockquote";
import {ExternalLinkPlugin} from "../plugins/external_link";
import {LocalLinkPlugin} from "../plugins/local_link";
import {HighlightPlugin} from "../plugins/highlight";
import {ScrollablesPlugin} from "../plugins/scrollables";
import type {ISectionsPluginEnvironment} from "../plugins/sections";
import {SectionsPlugin} from "../plugins/sections";
import type {ISnippetsPluginEnvironment} from "../plugins/snippets";
import {SnippetsPlugin} from "../plugins/snippets";
import type {ITitlePluginEnvironment} from "../plugins/title";
import {TitlePlugin} from "../plugins/title";

import {render_insert} from "./insert";
import type {IMarkdownPlugin} from "./render";
import {render_markdown} from "./render";

type IPageResults = ISectionsPluginEnvironment &
    ISnippetsPluginEnvironment &
    ITitlePluginEnvironment;

export interface IPageOptions {
    base: string;

    identifier: string;

    plugins: IMarkdownPlugin[];
}

/**
 * Represents a Markdown page that was rendered
 */
export interface IPageRender {
    /**
     * Represents generic metadata that is automatically generated via extraction or provided by the end-user
     */
    readonly metadata: {
        /**
         * Represents the authors of the page
         */
        readonly authors: IAuthorMap;

        /**
         * Represents a UNIX timestamp for creation read from git, fs, or parsed from frontmatter
         */
        readonly created_at: number;

        /**
         * Represents the identifier used to reference the page
         */
        readonly identifier: string;

        /**
         * Represents a UNIX timestamp for last modification read from git, fs, or parsed from frontmatter
         */
        readonly modified_at: number;

        /**
         * Represents all the sections of the page
         */
        readonly sections: ISection[];

        /**
         * Represents code snippets extracted from page text
         */
        readonly snippets: ISnippet[];

        /**
         * Represents the title extracted from largest-first-heading or parsed from frontmatter
         */
        readonly title: string;
    };

    /**
     * Represents API Reference documentation that was supplied in frontmatter
     */
    readonly references: {
        /**
         * Represents documented CSS Custom Properties parsed from frontmatter
         */
        readonly custom_properties: IReferenceMap;

        /**
         * Represents documented DOM events parsed from frontmatter
         */
        readonly events: IReferenceMap;

        /**
         * Represents documented Svelte Component properties parsed from frontmatter
         */
        readonly properties: IReferenceMap;

        /**
         * Represents documented Svelte slots parsed from frontmatter
         */
        readonly slots: IReferenceMap;
    };

    /**
     * Represents the rendered HTML of the page
     */
    readonly render: string;
}

export function render_references(map: IReferenceMap, options: IPageOptions): IReferenceMap {
    const entries = Object.entries(map).map((entry) => {
        const [key, references] = entry;

        return [
            key,
            references!.map((reference: IReference) => {
                const {description} = reference;

                return {
                    ...reference,
                    description: render_insert(description, {base: options.base}),
                } as IReference;
            }),
        ];
    });

    return Object.fromEntries(entries);
}

function PageOptions(options: Partial<IPageOptions> = {}): IPageOptions {
    const {base = "/", identifier = "na-na", plugins = []} = options;

    return {
        base,
        identifier,
        plugins,
    };
}

export function render_page(text: string, options: Partial<IPageOptions> = {}): IPageRender {
    const normalized_options = PageOptions(options);

    const [frontmatter, results, render] = render_markdown<IPageFrontmatter, IPageResults>(
        text,
        PAGE_FRONTMATTER_SCHEMA,
        [
            [
                attrs,
                {
                    leftDelimiter: "{",
                    rightDelimiter: "}",
                    allowedAttributes: [],
                },
            ],
            TitlePlugin,
            LocalLinkPlugin,
            ExternalLinkPlugin,
            BlockquotePlugin,
            ScrollablesPlugin,
            SectionsPlugin,
            HighlightPlugin,
            SnippetsPlugin,
            emoji,
            html5Media,
            ...normalized_options.plugins,
        ]
    );

    const authors = frontmatter.authors ?? {};
    const created_at = frontmatter.created_at ? Date.parse(frontmatter.created_at) : -1;
    const identifier = frontmatter.identifier ?? normalized_options.identifier;
    const modified_at = frontmatter.modified_at ? Date.parse(frontmatter.modified_at) : -1;
    const sections = results.sections ?? [];
    const snippets = results.snippets ?? [];
    const title = frontmatter.title ?? results.title ?? "N/A";

    const custom_properties = frontmatter.custom_properties
        ? render_references(frontmatter.custom_properties, normalized_options)
        : {};
    const events = frontmatter.events
        ? render_references(frontmatter.events, normalized_options)
        : {};
    const properties = frontmatter.properties
        ? render_references(frontmatter.properties, normalized_options)
        : {};
    const slots = frontmatter.slots ? render_references(frontmatter.slots, normalized_options) : {};

    return {
        metadata: {
            authors,
            created_at,
            identifier,
            modified_at,
            sections,
            snippets,
            title,
        },

        render,

        references: {
            custom_properties,
            events,
            properties,
            slots,
        },
    };
}

export async function read_page(
    file_path: string,
    options: Partial<IPageOptions> = {}
): Promise<IPageRender> {
    const [buffer, {birthtime, mtime}] = await Promise.all([
        readFile(file_path),
        read_timestamps(file_path),
    ]);

    const text = buffer.toString();
    const {metadata, references, render} = render_page(text, options);
    const {authors, created_at, modified_at, identifier, sections, snippets, title} = metadata;

    return {
        metadata: {
            authors,
            created_at: created_at < 0 ? birthtime : created_at,
            identifier,
            modified_at: modified_at < 0 ? mtime : modified_at,
            sections,
            snippets,
            title,
        },

        references,
        render,
    };
}
