import type {Schema} from "@cfworker/json-schema";

import type {IFrontmatterProperties} from "../frontmatter/types";

export type IReferenceMap = Record<string, IReference[]>;

export interface IReference extends IFrontmatterProperties {
    default: string;

    description: string;

    name: string;

    types: string[];
}

export const REFERENCE_SCHEMA: Schema = {
    type: "object",
    required: ["description", "name", "types"],

    properties: {
        default: {
            type: "string",
        },

        description: {
            type: "string",
        },

        name: {
            type: "string",
        },

        types: {
            type: "array",
            minItems: 1,

            items: {
                type: "string",
            },
        },
    },
};

export const REFERENCE_SCHEMA_MAP: Schema = {
    type: "object",

    additionalProperties: {
        type: "array",
        items: REFERENCE_SCHEMA,
    },
};
