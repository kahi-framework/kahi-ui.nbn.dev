<article class="container article content-article" data-width="100" data-padding-y="large">
    <slot />
</article>

<style>
    :global(.content-article) {
        max-width: calc(var(--sizes-prose) + calc(var(--spacings-block-large) * 1rem));
    }

    :global(.content-article) > :global(pre[class*="language-"]) {
        margin: 0;
    }

    :global(.content-article) > :global(pre[class*="language-"]:not(:last-child)),
    :global(.content-article) > :global(.repl-snippet:not(:last-child)) {
        margin-bottom: calc(var(--code-article-margin-y) * 1rem);
    }

    :global(.content-article) > :global(.scrollable:not(:last-child)) {
        margin-bottom: calc(var(--spacings-block-medium) * 1rem);
    }
</style>
