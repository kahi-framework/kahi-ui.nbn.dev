<script lang="ts">
    import {Box, Center, Dot, Ellipsis} from "@kahi-ui/framework";

    import Split, {SPLIT_MODE, SPLIT_ORIENTATION} from "../Split.svelte";

    import REPLEditor from "./REPLEditor.svelte";
    import REPLOverlay from "./REPLOverlay.svelte";
    import REPLRender from "./REPLRender.svelte";

    let initial_mount = false;
    let initial_ready = false;

    export let mode: keyof typeof SPLIT_MODE = SPLIT_MODE.split;
    export let orientation: keyof typeof SPLIT_ORIENTATION = SPLIT_ORIENTATION.horizontal;
    export let split: number = 0.5;
    export let value: string;

    $: _initial_load = initial_mount && initial_ready;
</script>

<!-- TODO: surface errors -->

<Split class="repl-split" {orientation} {mode} bind:split>
    <svelte:fragment slot="first">
        <REPLEditor bind:value on:ready={() => (initial_ready = true)} />
    </svelte:fragment>

    <svelte:fragment slot="last">
        <REPLRender {value} on:mount={() => (initial_mount = true)} />
    </svelte:fragment>

    {#if !_initial_load}
        <REPLOverlay>
            <Box palette="auto" width="100" height="100">
                <Center height="100">
                    <Ellipsis animation="bounce" iterations="5">
                        <Dot palette="inverse" />
                    </Ellipsis>
                </Center>
            </Box>
        </REPLOverlay>
    {/if}
</Split>
