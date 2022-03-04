<script context="module" lang="ts">
    import {memoize} from "@kahi-docs/shared";

    const import_code_editor = memoize(() => import("../CodeEditor.svelte"))[0];
</script>

<script lang="ts">
    import {Box, Center, Dot, Ellipsis} from "@kahi-ui/framework";
    import {createEventDispatcher, onMount} from "svelte";

    import REPLOverlay from "./REPLOverlay.svelte";

    type $$Events = {
        ready: CustomEvent<void>;
    };

    const dispatch = createEventDispatcher();
    const import_promise = import_code_editor();

    export let value: string;

    onMount(async () => {
        await import_promise;

        dispatch("ready");
    });
</script>

{#await import_promise}
    <REPLOverlay>
        <Box size="100">
            <Center height="100">
                <Ellipsis animation="bounce" iterations="5">
                    <Dot palette="inverse" />
                </Ellipsis>
            </Center>
        </Box>
    </REPLOverlay>
{:then CodeEditor}
    <CodeEditor.default bind:value />
{/await}
