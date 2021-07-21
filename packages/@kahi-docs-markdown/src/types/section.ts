import type {IFrontmatterProperties} from "../frontmatter/types";

export interface ISection extends IFrontmatterProperties {
    identifier: string;

    level: number;

    text: string;
}
