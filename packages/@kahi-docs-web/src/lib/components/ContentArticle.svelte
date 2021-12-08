<article class="container content-article" data-viewport="desktop" data-padding-bottom="large">
    <slot />
</article>

<style>
    :global(.content-article) :global(a:not([data-palette])) {
        color: rgb(var(--palette-accent-boldest));
    }

    :global(.content-article) :global(.repl-render) :global(a:not([data-palette])) {
        color: inherit;
    }

    :global(.content-article) > :global(h1),
    :global(.content-article) > :global(h2),
    :global(.content-article) > :global(h3),
    :global(.content-article) > :global(.tab) :global(h3),
    :global(.content-article) > :global(h4),
    :global(.content-article) > :global(.tab) :global(h4),
    :global(.content-article) > :global(h5),
    :global(.content-article) > :global(h6) {
        margin-top: var(--spacing-local-medium);
        margin-bottom: 0.25em;
    }

    :global(.content-article) > :global(blockquote),
    :global(.content-article) > :global(p) {
        margin-top: var(--spacing-local-medium);
    }

    :global(.content-article) > :global(.scrollable),
    :global(.content-article) > :global(ul),
    :global(.content-article) > :global(.tab) {
        margin-top: var(--spacing-root-medium);
    }

    :global(.content-article) > :global(ul) {
        margin-left: var(--spacing-root-large);
    }

    :global(.content-article) > :global(.highlight),
    :global(.content-article) > :global(.repl-snippet) {
        margin: var(--spacing-root-medium) 0 0 0;
    }
</style>
