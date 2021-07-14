import matter from "gray-matter";

import * as toml from "./toml";
import type {IFrontmatterFence, IFrontmatterProperties} from "./types";

export interface IFrontmatterExtracted<T extends IFrontmatterProperties> {
    content: string;

    properties: T;
}

export interface IFrontmatterOptions {
    syntax: typeof toml.FRONTMATTER_SYNTAX;
}

const FRONTMATTER_FENCES: Record<string, IFrontmatterFence | undefined> = {
    [toml.FRONTMATTER_SYNTAX]: toml.FRONTMATTER_FENCE,
};

const GRAYMATTER_OPTIONS = {
    engines: {
        [toml.FRONTMATTER_SYNTAX]: toml.FRONTMATTER_PARSER,
    },
};

function FrontmatterOptions(options: Partial<IFrontmatterOptions> = {}): IFrontmatterOptions {
    const {syntax = "toml"} = options;

    return {syntax};
}

export function extract_frontmatter<T extends IFrontmatterProperties>(
    text: string,
    options: Partial<IFrontmatterOptions> = {}
): IFrontmatterExtracted<T> {
    const {syntax} = FrontmatterOptions(options);
    const fences = FRONTMATTER_FENCES[syntax];

    if (!fences) {
        throw new ReferenceError(
            `bad option 'IFrontmatterOptions.syntax' (invalid syntax '${syntax}'`
        );
    }

    const graymatter_options = {
        ...GRAYMATTER_OPTIONS,
        delims: fences,
        language: syntax,
    };

    const {content, data} = matter(text, graymatter_options);
    return {
        content,
        properties: data as T,
    };
}
