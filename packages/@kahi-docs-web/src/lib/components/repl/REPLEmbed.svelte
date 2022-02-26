<script lang="ts">
    import {Box, Menu, Position, viewports} from "@kahi-ui/framework";
    import {Code, Copy, ExternalLink, Image, Sidebar} from "lucide-svelte";

    import {compress_safe} from "@kahi-docs/shared";

    import {SPLIT_MODE, SPLIT_ORIENTATION} from "../Split.svelte";

    import REPLSplit from "./REPLSplit.svelte";

    let mode: keyof typeof SPLIT_MODE = SPLIT_MODE.split;

    export let identifier: string | undefined;
    export let value: string;

    const initial_value = value;

    const vertical_viewports = viewports({
        mobile: true,
        tablet: true,
    });

    function on_copy_click(event: MouseEvent): void {
        navigator.clipboard.writeText(value);
    }

    $: _href =
        identifier && initial_value === value
            ? `/playground/?snippet=${identifier}`
            : `/playground/?script=${compress_safe(value)}`;
</script>

<REPLSplit
    orientation={$vertical_viewports ? SPLIT_ORIENTATION.vertical : SPLIT_ORIENTATION.horizontal}
    split={0.15}
    {mode}
    bind:value
/>

<Position
    class="repl-embed-overlay"
    variation={["container", "action"]}
    spacing_x="medium"
    spacing_y="small"
>
    <Box palette="dark" variation="borders" radius="tiny" padding="tiny">
        <Menu.Container orientation={["desktop:horizontal", "widescreen:horizontal"]} sizing="nano">
            <Menu.Anchor href={_href} target="_blank" palette="accent">
                <ExternalLink size="1em" />
                Link
            </Menu.Anchor>

            <Menu.Button palette="affirmative" on:click={on_copy_click}>
                <Copy size="1em" />
                Copy
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.split}
                palette="light"
                on:click={() => (mode = SPLIT_MODE.split)}
            >
                <Sidebar size="1em" />
                Split
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.first}
                palette="light"
                on:click={() => (mode = SPLIT_MODE.first)}
            >
                <Code size="1em" />
                Editor
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.last}
                palette="light"
                on:click={() => (mode = SPLIT_MODE.last)}
            >
                <Image size="1em" />
                Render
            </Menu.Button>
        </Menu.Container>
    </Box>
</Position>

<style>
    :global(.repl-embed-overlay) :global(.box:hover) {
        transition: opacity var(--animations-visual-duration) var(--animations-visual-function);
    }

    :global(.repl-embed-overlay) :global(.box:not(:hover)) {
        opacity: 0.2;
    }
</style>
