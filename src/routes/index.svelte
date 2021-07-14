<script lang="ts">
    import {applicationconfig, partialsconfig} from "@kahi-docs/shared";

    import LandingLayout from "../components/layouts/LandingLayout.svelte";
</script>

<svelte:head>
    <title>
        {$applicationconfig.application.description} :: {$applicationconfig.application.title}
    </title>
</svelte:head>

<!--
    NOTE: Layout stuff is here in index so nested Application
    routes don't inherit it automatically.
-->

<LandingLayout>
    {#if $partialsconfig.Landing}
        <svelte:component this={$partialsconfig.Landing} />
    {/if}

    <svelte:fragment slot="footer" />
</LandingLayout>
