import type {IFrontmatterProperties} from "../frontmatter/types";

export interface IRender<T extends IFrontmatterProperties> {
    properties: T;

    render: string;
}
