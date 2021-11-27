<script lang="ts">
    import {Wave} from "@kahi-ui/framework";

    import Split, {SPLIT_MODE, SPLIT_ORIENTATION} from "../Split.svelte";

    import REPLEditor from "./REPLEditor.svelte";
    import REPLOverlay from "./REPLOverlay.svelte";
    import REPLRender from "./REPLRender.svelte";

    let initial_mount = false;
    let initial_ready = false;

    export let mode: keyof typeof SPLIT_MODE = SPLIT_MODE.split;
    export let orientation: keyof typeof SPLIT_ORIENTATION = SPLIT_ORIENTATION.horizontal;
    export let value: string;

    $: _initial_load = initial_mount && initial_ready;
</script>

<!-- TODO: surface errors -->

<Split class="repl-split" {orientation} {mode}>
    <svelte:fragment slot="first">
        <REPLEditor bind:value on:ready={() => (initial_ready = true)} />
    </svelte:fragment>

    <svelte:fragment slot="last">
        <REPLRender
            style={_initial_load ? "" : "display:none;"}
            {value}
            on:mount={() => (initial_mount = true)}
        />
    </svelte:fragment>
</Split>

{#if !_initial_load}
    <REPLOverlay>
        <Wave />
    </REPLOverlay>
{/if}
