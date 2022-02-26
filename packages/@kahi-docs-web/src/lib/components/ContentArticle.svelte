<script lang="ts">
    import {page} from "$app/stores";
    import {Article, Text} from "@kahi-ui/framework";

    import {snippets} from "../client/snippets";
</script>

<Article class="content-article" actions={[[snippets, $page.stuff.content]]}>
    {#if $page.stuff.content}
        {@html $page.stuff.content.render}
    {:else}
        <Text is="strong" palette="negative">Error</Text>: failed to load content render
    {/if}
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
