<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    export const load: Load = async ({fetch}) => {
        return {};
    };
</script>

<script lang="ts">
    import {Container} from "@kahi-ui/framework";

    import AsideLayout from "../../components/layouts/AsideLayout.svelte";
    import DocsNavigation from "../../components/navigation/DocsNavigation.svelte";
</script>

<AsideLayout>
    <svelte:fragment slot="aside">
        <DocsNavigation />
    </svelte:fragment>

    <Container class="docs-container" viewport="desktop" padding_bottom="large">
        <slot />
    </Container>
</AsideLayout>

<style>
    :global(.docs-container) :global(a) {
        color: rgb(var(--palette-accent-boldest));
    }

    :global(.docs-container) > :global(h1),
    :global(.docs-container) > :global(h2),
    :global(.docs-container) > :global(h3),
    :global(.docs-container) > :global(.tab) :global(h3),
    :global(.docs-container) > :global(h4),
    :global(.docs-container) > :global(.tab) :global(h4),
    :global(.docs-container) > :global(h5),
    :global(.docs-container) > :global(h6) {
        margin-top: var(--spacing-local-medium);
        margin-bottom: 0.25em;
    }

    :global(.docs-container) > :global(blockquote),
    :global(.docs-container) > :global(p) {
        margin-top: var(--spacing-local-medium);
    }

    :global(.docs-container) > :global(.scrollable),
    :global(.docs-container) > :global(ul),
    :global(.docs-container) > :global(.tab) {
        margin-top: var(--spacing-root-medium);
    }

    :global(.docs-container) > :global(ul) {
        margin-left: var(--spacing-root-large);
    }

    :global(.docs-container) > :global(.snippet-highlight) {
        max-height: 35ex;
    }

    :global(.docs-container) > :global(.snippet-repl) {
        height: 60ex;
    }

    :global(.docs-container) > :global(.snippet-highlight),
    :global(.docs-container) > :global(.snippet-repl) {
        margin: var(--spacing-root-medium) 0 0 0;
    }
</style>
