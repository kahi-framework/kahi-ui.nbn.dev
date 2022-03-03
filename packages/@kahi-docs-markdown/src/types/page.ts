/**
 * Represents an author of a given page
 */
export interface IAuthor {
    /**
     * Represents a URL to the author's website, repositories, social media, etc.
     */
    href?: string;
}

/**
 * Represents a group of page authors, associated with their respective metadata
 */
export type IAuthorMap = Record<string, IAuthor | undefined>;

/**
 * Represents a documented API Reference
 */
export interface IReference {
    /**
     * Represents a default value from [[IReference.types]], if applicable
     */
    default?: string;

    /**
     * Represents the description of the API
     */
    description: string;

    /**
     * Represents the name of the API
     */
    name: string;

    /**
     * Represents available types / values of the API
     */
    types: string[];
}

/**
 * Represents a group of API References grouped to a namespace
 */
export type IReferenceMap = Record<string, IReference[] | undefined>;

/**
 * Represents a header section of a page
 */
export interface ISection {
    /**
     * Represents the identifier of the page section, typically a slug of [[ISection.text]]
     */
    identifier: string;

    /**
     * Represents the header level, typically `(highest) 1...6 (lowest)`
     */
    level: number;

    /**
     * Represents the display text of the page section
     */
    text: string;
}

/**
 * Represents an extracted code snippet
 */
export interface ISnippet {
    /**
     * Represents if the snippet is non-public yet and should be hidden from search
     */
    draft: boolean;

    /**
     * Represents the string used to uniquely the snippet, if applicable. Otherwise a slug of [[ISnippet.title]]
     */
    identifier: string;

    /**
     * Represents if the snippet is presented as a REPL to the user
     */
    repl: boolean;

    /**
     * Represents the content of the snippet
     */
    script: string;

    /**
     * Represents the syntax of the snippet
     */
    syntax: string;

    /**
     * Represents the title of the snippet, if applicable. Otherwise a hash of [[ISnippet.script]]
     */
    title: string;
}
