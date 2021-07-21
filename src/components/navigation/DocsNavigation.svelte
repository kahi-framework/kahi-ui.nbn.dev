<script lang="ts">
    import {docsnavigation} from "@kahi-docs/shared";

    import AsideNavigation from "./AsideNavigation.svelte";

    export let state: boolean = false;
</script>

<AsideNavigation items={$docsnavigation} bind:state />
