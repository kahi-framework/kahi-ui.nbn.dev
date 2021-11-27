<script lang="ts">
    import AppNavigation from "./AppNavigation.svelte";
</script>

<div class="static-layout">
    <AppNavigation />

    <main class="static-container">
        <slot />
    </main>
</div>

<style>
    :global(.static-layout) {
        display: grid;

        grid-template-areas:
            "header"
            "content";

        grid-template-rows: auto 1fr;

        width: 100vw;
        height: 100vh;

        overflow: hidden;
    }

    :global(.static-layout) > :global(.static-container) {
        grid-area: content;

        padding-top: 4.4rem;

        overflow: hidden;
    }
</style>
