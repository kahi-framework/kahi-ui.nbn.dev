<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import {decompress_safe} from "@kahi-docs/shared";

    import type {IRouteError, ISnippetGet} from "../../lib/shared/api";

    export const ssr = false;

    export const load: Load = async ({fetch, page}) => {
        const {script = "", snippet = "getting-started-usage"} = Object.fromEntries(
            page.query.entries()
        );

        if (script) {
            return {
                props: {
                    script: decompress_safe(script),
                },
            };
        }

        const response = await fetch(`/api/v3/snippets/${snippet}.json`);
        if (!response.ok) {
            const data = (await response.json()) as IRouteError;

            return {
                status: response.status,
                error: data.code,
            };
        }

        const data = (await response.json()) as ISnippetGet;

        return {
            props: {
                snippet: data.data,
            },
        };
    };
</script>

<script lang="ts">
    import {browser} from "$app/env";
    import {Box, Menu, Spacer, Stack, Text} from "@kahi-ui/framework";
    import {onMount} from "svelte";

    import type {ISnippet} from "@kahi-docs/markdown";
    import {session} from "@kahi-docs/shared";

    import HeroJavascriptEnabled from "../../lib/components/HeroJavascriptEnabled.svelte";
    import {SPLIT_MODE, SPLIT_ORIENTATION} from "../../lib/components/Split.svelte";
    import StaticLayout from "../../lib/components/StaticLayout.svelte";
    import PromptShare from "../../lib/components/PromptShare.svelte";

    import Copy from "../../lib/components/icons/Copy.svelte";
    import Code from "../../lib/components/icons/Code.svelte";
    import Image from "../../lib/components/icons/Image.svelte";
    import RotateCW from "../../lib/components/icons/RotateCW.svelte";
    import Share2 from "../../lib/components/icons/Share2.svelte";
    import Sidebar from "../../lib/components/icons/Sidebar.svelte";

    import REPLSplit from "../../lib/components/repl/REPLSplit.svelte";

    export let script: string | undefined;
    export let snippet: ISnippet | undefined;

    let mode: keyof typeof SPLIT_MODE = SPLIT_MODE.split;
    let orientation: keyof typeof SPLIT_ORIENTATION = SPLIT_ORIENTATION.horizontal;
    let state: boolean = false;
    let value: string = script ?? ($session || snippet?.script) ?? "";

    function on_copy_click(event: MouseEvent): void {
        navigator.clipboard.writeText(value);
    }

    onMount(() => {
        // NOTE: Better UX (User Experience) to clear any previously selected snippets / shared playgrounds
        history.replaceState(null, "", `${location.origin}${location.pathname}`);
    });

    $: if (browser) $session = value;
</script>

{#if browser}
    <StaticLayout>
        <Box padding="small">
            <Stack orientation="horizontal">
                <Spacer />
                <Menu.Container orientation="horizontal" sizing="small">
                    <Menu.Button palette="accent" variation="clear" on:click={() => (state = true)}>
                        <Share2 />
                        Share
                    </Menu.Button>

                    <Menu.Button palette="affirmative" variation="clear" on:click={on_copy_click}>
                        <Copy />
                        Copy
                    </Menu.Button>

                    <Menu.Button
                        palette="inverse"
                        variation="clear"
                        on:click={() =>
                            (orientation =
                                orientation === SPLIT_ORIENTATION.horizontal
                                    ? SPLIT_ORIENTATION.vertical
                                    : SPLIT_ORIENTATION.horizontal)}
                    >
                        <RotateCW />
                        <Text is="span" hidden="mobile">Rotate</Text>
                    </Menu.Button>

                    <Menu.Button
                        active={mode === SPLIT_MODE.split}
                        palette="inverse"
                        variation="clear"
                        on:click={() => (mode = SPLIT_MODE.split)}
                    >
                        <Sidebar />
                        <Text is="span" hidden="mobile">Split</Text>
                    </Menu.Button>

                    <Menu.Button
                        active={mode === SPLIT_MODE.first}
                        palette="inverse"
                        variation="clear"
                        on:click={() => (mode = SPLIT_MODE.first)}
                    >
                        <Code />
                        <Text is="span" hidden="mobile">Editor</Text>
                    </Menu.Button>

                    <Menu.Button
                        active={mode === SPLIT_MODE.last}
                        palette="inverse"
                        variation="clear"
                        on:click={() => (mode = SPLIT_MODE.last)}
                    >
                        <Image />
                        <Text is="span" hidden="mobile">Render</Text>
                    </Menu.Button>
                </Menu.Container>
            </Stack>
        </Box>

        <REPLSplit {mode} {orientation} bind:value />
    </StaticLayout>
{:else}
    <HeroJavascriptEnabled />
{/if}

<PromptShare bind:state {value} />
