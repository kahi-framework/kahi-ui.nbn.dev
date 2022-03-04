<script context="module" lang="ts">
    import {memoize} from "@kahi-docs/shared";

    const import_code_render = memoize(() => import("../CodeRender.svelte"))[0];
</script>

<script lang="ts">
    import {Box, Center, Code, Dot, Ellipsis, Text} from "@kahi-ui/framework";
    import {createEventDispatcher, onMount} from "svelte";

    import REPLOverlay from "./REPLOverlay.svelte";

    type $$Events = {
        ready: CustomEvent<void>;
    };

    const dispatch = createEventDispatcher();
    const import_promise = import_code_render();

    let is_mounted: boolean = false;
    let error: string | null = null;

    export let value: string;

    function on_destroy(event: CustomEvent): void {
        is_mounted = false;
    }

    function on_error(event: CustomEvent<{error: Error}>): void {
        error = event.detail.error.message;
    }

    function on_mount(event: CustomEvent): void {
        error = null;
        is_mounted = true;
    }

    onMount(async () => {
        await import_promise;

        dispatch("ready");
    });
</script>

{#await import_promise}
    <REPLOverlay>
        <Ellipsis animation="bounce" iterations="5">
            <Dot palette="inverse" />
        </Ellipsis>
    </REPLOverlay>
{:then CodeRender}
    <CodeRender.default
        on:destroy={on_destroy}
        on:error={on_error}
        on:mount={on_mount}
        bind:value
    />

    {#if !is_mounted}
        <REPLOverlay>
            <Box size="100">
                <Center height="100">
                    <Ellipsis animation="bounce" iterations="5">
                        <Dot palette="inverse" />
                    </Ellipsis>
                </Center>
            </Box>
        </REPLOverlay>
    {:else if error}
        <REPLOverlay alignment_x="stretch" alignment_y="top">
            <Box palette="negative" padding="small">
                <Text is="strong">ERROR</Text>: <Code>{error}</Code>
            </Box>
        </REPLOverlay>
    {/if}
{/await}
