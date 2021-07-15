import {is_external_url, is_internal_url, normalize_pathname} from "@kahi-docs/shared";

import type {IMetadataProperties} from "../types/metadata";

export type IEditPartial = {enabled: false; url: undefined} | {enabled: true; url: string};

export interface IApplicationConfig {
    application: {
        description: string;

        href: string;

        sub_href: string;

        sub_title: string;

        title: string;
    };

    edit: {
        enabled: boolean;

        url: string;
    };

    locale: {
        language: string;
    };

    metadata: IMetadataProperties;

    paths: {
        blog: string;

        changelog: string;

        content: string;

        documentation: string;
    };

    search: {
        enabled: boolean;
    };

    timestamp: {
        enabled: boolean;
    };

    urls: {
        base: string;
    };
}

export interface IApplicationPartialConfig {
    application?: Partial<IApplicationConfig["application"]>;

    edit?: IEditPartial;

    locale?: Partial<IApplicationConfig["locale"]>;

    metadata?: IApplicationConfig["metadata"];

    paths?: Partial<IApplicationConfig["paths"]>;

    search?: Partial<IApplicationConfig["search"]>;

    timestamp?: Partial<IApplicationConfig["timestamp"]>;

    urls?: Partial<IApplicationConfig["urls"]>;
}

export function define_application(config: IApplicationPartialConfig = {}): IApplicationConfig {
    const {
        application = {},
        edit = {},
        locale = {},
        metadata = {},
        paths = {},
        search = {},
        timestamp = {},
        urls = {},
    } = config;

    const {base = "/"} = urls;

    // HACK: These defaults are for whenever "Kahi Docs" moves to be a CLI
    // documentation platform built against a stable SvelteKit
    const {
        description = "A Kahi Docs Site",
        href = base,
        sub_href = "",
        sub_title = "",
        title = "Kahi Docs",
    } = application;

    const {enabled: edit_enabled = false, url: edit_url} = edit as IEditPartial;

    // TODO: validate language code?
    const {language = "en-US"} = locale;

    // TODO: path validation
    const {
        blog = "blog",
        changelog = "./CHANGELOG.md",
        content = "./content",
        documentation = "docs",
    } = paths;

    // TODO: what search options should be presented?
    const {enabled: search_enabled = true} = search;

    // TODO: what timestamp options should be presented?
    const {enabled: timestamp_enabled = true} = timestamp;

    if (edit_enabled) {
        if (!edit_url) {
            throw new TypeError(
                "bad option 'edit.url' to 'define_application' (must provide non-empty url)"
            );
        }

        if (!is_external_url(edit_url)) {
            throw new TypeError(
                "bad option 'edit.url' to 'define_application' (must provide valid url)"
            );
        }
    }

    if (!is_internal_url(base)) {
        throw new TypeError(
            "bad option 'urls.base' to 'define_application' (must provide valid url)"
        );
    }

    return {
        application: {
            description,
            href,
            sub_href,
            sub_title,
            title,
        },

        edit: {
            enabled: edit_enabled,
            url: edit_url as string,
        },

        locale: {
            language,
        },

        metadata,

        paths: {
            blog,
            changelog,
            content,
            documentation,
        },

        search: {
            enabled: search_enabled,
        },

        timestamp: {
            enabled: timestamp_enabled,
        },

        urls: {
            base: normalize_pathname(base) || "/",
        },
    };
}
