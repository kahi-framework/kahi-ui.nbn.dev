<article
    class="container article content-article"
    data-max-width="desktop"
    data-width="100"
    data-padding-y="large"
>
    <slot />
</article>

<style>
    :global(.content-article) > :global(.tab) :global(h3),
    :global(.content-article) > :global(.tab) :global(h4) {
        margin-top: var(--spacing-local-medium);
        margin-bottom: 0.25em;
    }

    :global(.content-article) > :global(pre[class*="language-"]) {
        margin: 0;
    }

    :global(.content-article) > :global(pre[class*="language-"]:not(:last-child)),
    :global(.content-article) > :global(.repl-snippet:not(:last-child)) {
        margin-bottom: calc(var(--code-article-margin-y) * 1rem);
    }

    :global(.content-article) > :global(.scrollable),
    :global(.content-article) > :global(.tab) {
        margin-top: var(--spacing-root-medium);
    }
</style>
