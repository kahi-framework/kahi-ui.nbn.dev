import matter from "gray-matter";
import toml from "@iarna/toml";

export type IFrontmatterFence = [string, string];

export type IFrontmatterPrimitives = boolean | null | number | string;

export interface IFrontmatterProperties {
    [key: string]:
        | IFrontmatterPrimitives
        | IFrontmatterPrimitives[]
        | IFrontmatterProperties
        | IFrontmatterProperties[];
}

const GRAYMATTER_OPTIONS: Parameters<typeof matter>[1] = {
    delimiters: "+++",
    language: "toml",

    engines: {
        toml: (text: string) => toml.parse(text),
    },
};

export function extract_frontmatter<T>(text: string): [T, string] {
    const {content, data} = matter(text, GRAYMATTER_OPTIONS);

    return [data as T, content];
}
