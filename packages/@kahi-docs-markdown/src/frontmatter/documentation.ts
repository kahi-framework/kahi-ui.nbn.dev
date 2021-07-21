import type {Schema} from "@cfworker/json-schema";
import {Validator} from "@cfworker/json-schema";

import {render_insert} from "../renderers/insert";

import type {IReference, IReferenceMap} from "../types/reference";
import {REFERENCE_SCHEMA_MAP} from "../types/reference";

import type {IFrontmatterExtracted} from "./extract";
import {extract_frontmatter} from "./extract";
import type {IFrontmatterProperties} from "./types";

export interface IDocumentationProperties extends IFrontmatterProperties {
    created_at: string;

    events: IReferenceMap;

    identifier: string;

    modified_at: string;

    properties: IReferenceMap;

    title: string;
}

const DOCUMENTATION_SCHEMA: Schema = {
    type: "object",

    properties: {
        created_at: {
            type: "string",
            format: "date-time",
        },

        events: REFERENCE_SCHEMA_MAP,

        identifier: {
            type: "string",
            format: "uri-reference",
        },

        modified_at: {
            type: "string",
            format: "date-time",
        },

        properties: REFERENCE_SCHEMA_MAP,

        title: {
            type: "string",
            minLength: 1,
        },
    },
};

const DOCUMENTATION_VALIDATOR = new Validator(DOCUMENTATION_SCHEMA, "7", false);

function render_references(map: IReferenceMap): IReferenceMap {
    const entries = Object.entries(map).map((entry) => {
        const [key, references] = entry;

        return [
            key,
            references.map((reference) => {
                const {description} = reference;

                return {
                    ...reference,
                    description: render_insert(description).render,
                } as IReference;
            }),
        ];
    });

    return Object.fromEntries(entries);
}

function DocumentationProperties(value: unknown): IDocumentationProperties {
    const result = DOCUMENTATION_VALIDATOR.validate(value);
    if (!result.valid) {
        const errors = result.errors
            .map((error) => `${error.keywordLocation}: ${error.error}`)
            .join("\n");

        throw new TypeError(
            `bad dispatch to 'DocumentationProperties' (failed to validate value)\n${errors}`
        );
    }

    const {
        created_at = "",
        events = {},
        identifier,
        modified_at = "",
        properties = {},
        title = "",
    } = value as IDocumentationProperties;

    return {
        created_at,
        events: render_references(events),
        identifier,
        modified_at,
        properties: render_references(properties),
        title,
    };
}

export function extract_documentation_properties(
    text: string
): IFrontmatterExtracted<IDocumentationProperties> {
    const {content, properties} = extract_frontmatter<IDocumentationProperties>(text);

    return {
        content,
        properties: DocumentationProperties(properties),
    };
}
