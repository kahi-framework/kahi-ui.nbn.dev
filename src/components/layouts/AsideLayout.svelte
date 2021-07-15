<script lang="ts">
    import AppNavigation from "../navigation/AppNavigation.svelte";
    import SiteFooter from "../site/SiteFooter.svelte";
</script>

<div class="aside-layout">
    <AppNavigation />

    <slot name="aside" />

    <main class="aside-container">
        <slot />
    </main>

    <SiteFooter />
</div>

<style>
    :global(.aside-layout) {
        display: grid;

        grid-template-areas:
            "header header"
            "aside content"
            "aside footer";

        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr auto;

        width: 100%;
        min-height: 100%;
    }

    :global(.aside-layout) > :global(.aside-container) {
        grid-area: content;
    }
</style>
