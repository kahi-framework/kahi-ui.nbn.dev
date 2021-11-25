<script lang="ts">
    import {Wave, viewports} from "@kahi-ui/framework";

    import Split, {SPLIT_MODE} from "../Split.svelte";

    import REPLEditor from "./REPLEditor.svelte";
    import REPLOverlay from "./REPLOverlay.svelte";
    import REPLRender from "./REPLRender.svelte";

    let initial_mount = false;
    let initial_ready = false;

    export let mode: keyof typeof SPLIT_MODE = SPLIT_MODE.split;
    export let value: string;

    const vertical_viewports = viewports({
        mobile: true,
        tablet: true,
    });

    $: _initial_load = initial_mount && initial_ready;
</script>

<Split class="repl-split" orientation={$vertical_viewports ? "vertical" : "horizontal"} {mode}>
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
