<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IApplicationConfig, INavigationMenu} from "@kahi-docs/config";
    import {map_navigation_items} from "@kahi-docs/config";

    // TODO: / NOTE: I would really like to have this live in an API
    // route, however icons as SvelteComponents can't exist then
    import NAVIGATION_CONFIG from "../../../.kahi-docs/navigation.config";

    import type {INavigationTitlesGet} from "../../shared/api";

    export const load: Load = async ({context, fetch}) => {
        const response = await fetch("/api/v2/configuration/navigation/documentation.json");
        const data = (await response.json()) as INavigationTitlesGet;

        const items = map_navigation_items<INavigationMenu>(NAVIGATION_CONFIG.documentation, {
            base: (context.application_config as IApplicationConfig).urls.base,
            default_prefetch: true,
            default_title: "N/A",
            title_map: data.data,
        });

        return {
            props: {
                items,
            },
        };
    };
</script>

<script lang="ts">
    import {Container} from "@kahi-ui/framework";

    import {set_docs_navigation} from "@kahi-docs/shared";

    import AsideLayout from "../../components/layouts/AsideLayout.svelte";
    import DocsNavigation from "../../components/navigation/DocsNavigation.svelte";

    export let items: INavigationMenu[];

    set_docs_navigation(items);
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
    :global(.docs-container) > :global(h1),
    :global(.docs-container) > :global(h2),
    :global(.docs-container) > :global(h3),
    :global(.docs-container) > :global(h4),
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
    :global(.docs-container) > :global(ul) {
        margin-top: var(--spacing-root-medium);
    }

    :global(.docs-container) > :global(ul) {
        margin-left: var(--spacing-root-large);
    }

    :global(.docs-container) > :global(.snippet-highlight) {
        max-height: 35ex;
    }

    :global(.docs-container) > :global(.snippet-repl) {
        height: min(60ex, 65vh);
    }

    :global(.docs-container) > :global(.snippet-highlight),
    :global(.docs-container) > :global(.snippet-repl) {
        margin: var(--spacing-root-medium) 0 0 0;
    }
</style>
