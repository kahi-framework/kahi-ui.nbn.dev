<script lang="ts">
    import {browser} from "$app/env";
    import {afterNavigate} from "$app/navigation";
    import {page} from "$app/stores";
    import {Text, TextInput} from "@kahi-ui/framework";

    import APIReference from "./APIReference.svelte";

    let filter: string = "";

    afterNavigate(() => {
        filter = "";
    });
</script>

{#if $page.stuff.content}
    {#if browser}
        <TextInput placeholder="Filter API..." bind:value={filter} />
    {/if}

    <APIReference id="Properties" references={$page.stuff.content.references.properties} {filter} />
    <APIReference id="Events" references={$page.stuff.content.references.events} {filter} />
    <APIReference id="Slots" references={$page.stuff.content.references.slots} {filter} />

    <!--
        TODO: Custom Properties need to be touched up across the board before re-enabling 
        <APIReference id="Custom Properties" references={$page.stuff.content.references.custom_properties} {filter} />
    -->
{:else}
    <Text is="strong" palette="negative">Error</Text>: failed to load content api reference
{/if}
