<script lang="ts">
    import {browser} from "$app/env";
    import {htmlpalette} from "@kahi-ui/framework";

    import {preferencetheme} from "@kahi-docs/shared";

    import REPLUnsupportedHero from "../../components/repl/REPLUnsupportedHero.svelte";

    const _htmlpalette = htmlpalette();

    $: if (browser) $_htmlpalette = $preferencetheme;
</script>

{#if browser}
    <slot />
{:else}
    <REPLUnsupportedHero />
{/if}
