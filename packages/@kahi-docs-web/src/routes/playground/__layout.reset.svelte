<script lang="ts">
    import {browser} from "$app/env";

    import HeroJavascriptEnabled from "../../lib/components/HeroJavascriptEnabled.svelte";
    import StaticLayout from "../../lib/components/StaticLayout.svelte";
</script>

{#if browser}
    <StaticLayout>
        <slot />
    </StaticLayout>
{:else}
    <HeroJavascriptEnabled />
{/if}
