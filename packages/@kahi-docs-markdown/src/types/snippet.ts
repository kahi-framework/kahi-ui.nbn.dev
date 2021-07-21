import type {IFrontmatterProperties} from "../frontmatter/types";

export interface ISnippet extends IFrontmatterProperties {
    identifier: string;

    script: string;

    syntax: string;

    title: string;
}
