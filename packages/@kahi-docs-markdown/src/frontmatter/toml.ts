import toml from "@iarna/toml";

import type {IFrontmatterFence, IFrontmatterParser, IFrontmatterProperties} from "./types";

export const FRONTMATTER_FENCE: IFrontmatterFence = ["+++", "+++"];

export const FRONTMATTER_PARSER: IFrontmatterParser = (text: string) =>
    toml.parse(text) as IFrontmatterProperties;

export const FRONTMATTER_SYNTAX = "toml";
