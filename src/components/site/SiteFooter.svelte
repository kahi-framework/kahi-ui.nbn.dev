<script lang="ts">
    import {partialsconfig} from "@kahi-docs/shared";
</script>

<footer class="site-footer">
    {#if $partialsconfig.Footer}
        <svelte:component this={$partialsconfig.Footer} />
    {/if}
</footer>

<style>
    :global(.site-footer) {
        grid-area: footer;
    }
</style>
