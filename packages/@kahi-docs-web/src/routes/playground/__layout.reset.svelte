<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    export const load: Load = async () => {
        return {
            stuff: {
                metadata: {
                    description: "Playground",
                },
            },
        };
    };
</script>

<script lang="ts">
    import {browser} from "$app/env";

    import HeroJavascriptEnabled from "../../lib/components/HeroJavascriptEnabled.svelte";
    import PageMetadata from "../../lib/components/PageMetadata.svelte";
    import PagePrerender from "../../lib/components/PagePrerender.svelte";
    import StaticLayout from "../../lib/components/StaticLayout.svelte";
</script>

<PageMetadata />
<PagePrerender />

{#if browser}
    <StaticLayout>
        <slot />
    </StaticLayout>
{:else}
    <HeroJavascriptEnabled />
{/if}
