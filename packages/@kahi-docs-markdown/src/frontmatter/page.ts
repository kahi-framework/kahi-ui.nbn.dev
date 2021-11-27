import type {Schema} from "@cfworker/json-schema";

import type {IAuthorMap, IReferenceMap} from "../types/page";

import type {IFrontmatterProperties} from "./extract";

export type IPageFrontmatter = {
    readonly authors?: IAuthorMap;

    readonly created_at?: string;

    readonly custom_properties?: IReferenceMap;

    readonly events?: IReferenceMap;

    readonly identifier?: string;

    readonly modified_at?: string;

    readonly properties?: IReferenceMap;

    readonly slots?: IReferenceMap;

    readonly title?: string;
} & IFrontmatterProperties;

const AUTHOR_SCHEMA: Schema = {
    type: "object",

    properties: {
        href: {
            type: "string",
            format: "uri-reference",
        },
    },
};

const REFERENCE_SCHEMA: Schema = {
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

const AUTHORS_MAP_SCHEMA: Schema = {
    type: "object",

    additionalProperties: {
        type: "object",
        properties: AUTHOR_SCHEMA,
    },
};

const REFERENCE_MAP_SCHEMA: Schema = {
    type: "object",

    additionalProperties: {
        type: "array",
        items: REFERENCE_SCHEMA,
    },
};

export const PAGE_FRONTMATTER_SCHEMA: Schema = {
    type: "object",

    properties: {
        authors: AUTHORS_MAP_SCHEMA,

        created_at: {
            type: "string",
            format: "date-time",
        },

        custom_properties: REFERENCE_MAP_SCHEMA,

        events: REFERENCE_MAP_SCHEMA,

        modified_at: {
            type: "string",
            format: "date-time",
        },

        properties: REFERENCE_MAP_SCHEMA,

        slots: REFERENCE_MAP_SCHEMA,

        title: {
            type: "string",
            minLength: 1,
        },
    },
};
