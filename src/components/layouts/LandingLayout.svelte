<script lang="ts">
    import AppNavigation from "../navigation/AppNavigation.svelte";
    import SiteFooter from "../site/SiteFooter.svelte";
</script>

<div class="landing-layout">
    <AppNavigation />

    <main class="landing-container">
        <slot />
    </main>

    <SiteFooter />
</div>

<style>
    :global(.landing-layout) {
        display: grid;

        grid-template-areas:
            "header"
            "content"
            "footer";

        grid-template-rows: auto 1fr auto;

        width: 100%;
        min-height: 100%;
    }

    :global(.landing-layout) > :global(.landing-container) {
        grid-area: content;
    }
</style>
