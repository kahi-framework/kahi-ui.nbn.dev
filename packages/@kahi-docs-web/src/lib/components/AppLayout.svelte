<script lang="ts">
    import AppNavigation from "./AppNavigation.svelte";
    import AppFooter from "./AppFooter.svelte";
</script>

<div class="app-layout">
    <main class="app-container">
        <slot />
    </main>

    <AppNavigation />
    <AppFooter />
</div>

<style>
    :global(.app-layout) {
        display: grid;

        grid-template-areas:
            "header"
            "content"
            "footer";

        grid-template-rows: auto 1fr auto;

        width: 100%;
        min-height: 100%;
    }

    :global(.app-layout) > :global(.app-container) {
        grid-area: content;

        padding-top: 80px;

        overflow-x: hidden;
    }
</style>
