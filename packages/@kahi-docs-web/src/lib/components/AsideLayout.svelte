<script lang="ts">
    import AppNavigation from "./AppNavigation.svelte";
    import AppFooter from "./AppFooter.svelte";
    import AsideNavigation from "./AsideNavigation.svelte";
</script>

<div class="aside-layout">
    <AsideNavigation />
    <AppNavigation />

    <main class="aside-container">
        <slot />
    </main>

    <AppFooter />
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

    :global(.aside-layout) :global(.aside-container) {
        grid-area: content;

        padding-top: 4.4rem;

        overflow-x: hidden;
    }
</style>
