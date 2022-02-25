<script lang="ts">
    import {Article} from "@kahi-ui/framework";
</script>

<Article class="content-article">
    <slot />
</Article>

<style>
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
