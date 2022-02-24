<script lang="ts">
    import {page} from "$app/stores";
</script>

<!--
    NOTE: The below links are typically for runtime only payloads that
    require a user to use a Javascript-enabled Browser. So we need to mark
    them here so SvelteKit knows to prerender them
-->

<a href="/api/v4/search.json" hidden />

{#if $page.stuff.prerender}
    {#each $page.stuff.prerender as href (href)}
        <a {href} hidden />
    {/each}
{/if}
