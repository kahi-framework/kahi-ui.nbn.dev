<script lang="ts">
    import {browser} from "$app/env";

    import HeroJavascriptEnabled from "../../lib/components/HeroJavascriptEnabled.svelte";
</script>

{#if browser}
    <slot />
{:else}
    <HeroJavascriptEnabled />
{/if}
