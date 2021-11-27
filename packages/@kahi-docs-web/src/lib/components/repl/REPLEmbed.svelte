<script lang="ts">
    import {Box, Menu} from "@kahi-ui/framework";

    import {compress_safe} from "@kahi-docs/shared";

    import {SPLIT_MODE} from "../Split.svelte";

    import Code from "../icons/Code.svelte";
    import Copy from "../icons/Copy.svelte";
    import ExternalLink from "../icons/ExternalLink.svelte";
    import Image from "../icons/Image.svelte";
    import Sidebar from "../icons/Sidebar.svelte";

    import REPLSplit from "./REPLSplit.svelte";
    import REPLOverlay from "./REPLOverlay.svelte";

    let mode: keyof typeof SPLIT_MODE = SPLIT_MODE.split;

    export let identifier: string | undefined;
    export let value: string;

    const initial_value = value;

    function on_copy_click(event: MouseEvent) {
        navigator.clipboard.writeText(value);
    }

    $: _href =
        identifier && initial_value === value
            ? `/playground/?snippet=${identifier}`
            : `/playground/?script=${compress_safe(value)}`;
</script>

<REPLSplit {mode} bind:value />

<REPLOverlay alignment_x={["left", "desktop:right", "widescreen:right"]} alignment_y="bottom">
    <Box palette="dark" shape="rounded" margin="medium" padding="small">
        <Menu.Container orientation={["desktop:horizontal", "widescreen:horizontal"]} sizing="tiny">
            <Menu.Anchor href={_href} target="_blank" palette="accent" variation="clear">
                <ExternalLink />
                Link
            </Menu.Anchor>

            <Menu.Button palette="affirmative" variation="clear" on:click={on_copy_click}>
                <Copy />
                Copy
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.split}
                palette="light"
                variation="clear"
                on:click={() => (mode = SPLIT_MODE.split)}
            >
                <Sidebar />
                Split
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.first}
                palette="light"
                variation="clear"
                on:click={() => (mode = SPLIT_MODE.first)}
            >
                <Code />
                Editor
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.last}
                palette="light"
                variation="clear"
                on:click={() => (mode = SPLIT_MODE.last)}
            >
                <Image />
                Render
            </Menu.Button>
        </Menu.Container>
    </Box>
</REPLOverlay>

<style>
    :global(.repl-overlay) :global(.card:hover) {
        transition: opacity var(--animation-visual-duration) var(--animation-visual-function);
    }

    :global(.repl-overlay) :global(.card:not(:hover)) {
        opacity: 0.2;
    }
</style>
