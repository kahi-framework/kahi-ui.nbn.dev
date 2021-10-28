export type INavigationConfig = Record<string, INavigationMenu[] | undefined>;

/**
 * Represents a link supplied via configuration
 */
export interface INavigationAnchor {
    /**
     * Represents badge text associated with the link, e.g. "NEW" or "UPDATED"
     */
    readonly badge?: string;

    /**
     * Represents the URL being linked to
     */
    readonly href: string;

    /**
     * Represents display text associated with the link
     *
     * **NOTE**: Generally when linking to content files, they'll pull this value from the Markdown title if left blank
     */
    readonly text?: string;
}

export interface INavigationMenu {
    /**
     * Represents a collection of links belonging to the navigation menu
     */
    readonly items: INavigationAnchor[];

    /**
     * Represents the display text associated with the navigation menu
     */
    readonly text: string;
}

export function define_navigation(config: INavigationConfig = {}): INavigationConfig {
    return config;
}
