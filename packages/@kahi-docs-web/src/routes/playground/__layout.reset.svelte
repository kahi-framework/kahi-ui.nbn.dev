<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    export const load: Load = () => {
        return {
            stuff: {
                metadata: {
                    description: "Playground",
                },
                prerender: [`/api/v4/snippets.json`, `/api/v4/snippets/getting-started-usage.json`],
            },
        };
    };
</script>

<script lang="ts">
    import "@kahi-ui/framework/dist/kahi-ui.framework.css";
    import "@kahi-ui/framework/dist/kahi-ui.theme.default.css";

    import "prismjs/themes/prism-tomorrow.css";

    import {browser} from "$app/env";

    import HeroJavascriptEnabled from "../../lib/components/HeroJavascriptEnabled.svelte";
    import PageHeader from "../../lib/components/PageHeader.svelte";
    import StaticLayout from "../../lib/components/StaticLayout.svelte";
</script>

<PageHeader />

{#if browser}
    <StaticLayout>
        <slot />
    </StaticLayout>
{:else}
    <HeroJavascriptEnabled />
{/if}
