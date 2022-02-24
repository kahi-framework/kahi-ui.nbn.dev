<script context="module" lang="ts">
    import {browser} from "$app/env";
    import type {Load} from "@sveltejs/kit";

    import {decompress_safe} from "@kahi-docs/shared";

    import type {IRouteError, ISnippetGet} from "../../lib/shared/api";

    export const load: Load = async ({fetch}) => {
        // HACK: SvelteKit errors out when accessing query params during build,
        // so we need to special case SSR to just skip the backend functionality
        if (!browser) return {};

        const query = new URLSearchParams(location.search);
        const {script = "", snippet = ""} = Object.fromEntries(query.entries());

        if (snippet) {
            const response = await fetch(`/api/v4/snippets/${snippet}.json`);
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
                    stuff: {
                        metadata: {
                            description: "Playground",
                        },
                    },
                },
            };
        } else if (script) {
            return {
                props: {
                    script: decompress_safe(script),
                    stuff: {
                        metadata: {
                            description: "Playground",
                        },
                    },
                },
            };
        }

        const response = await fetch(`/api/v4/snippets/getting-started-usage.json`);
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
                fallback: data.data,
            },
            stuff: {
                metadata: {
                    description: "Playground",
                },
            },
        };
    };
</script>

<script lang="ts">
    import {Box, Menu, Stack, Text, viewports} from "@kahi-ui/framework";
    import {onMount} from "svelte";

    import type {ISnippet} from "@kahi-docs/markdown";
    import {session} from "@kahi-docs/shared";

    import PromptShare from "../../lib/components/PromptShare.svelte";
    import {SPLIT_MODE, SPLIT_ORIENTATION} from "../../lib/components/Split.svelte";

    import Copy from "../../lib/components/icons/Copy.svelte";
    import Code from "../../lib/components/icons/Code.svelte";
    import Image from "../../lib/components/icons/Image.svelte";
    import RotateCW from "../../lib/components/icons/RotateCW.svelte";
    import Share2 from "../../lib/components/icons/Share2.svelte";
    import Sidebar from "../../lib/components/icons/Sidebar.svelte";

    import REPLSplit from "../../lib/components/repl/REPLSplit.svelte";

    export let fallback: ISnippet | undefined;
    export let script: string | undefined;
    export let snippet: ISnippet | undefined;

    const vertical_viewports = viewports({
        mobile: true,
        tablet: true,
    });

    let mode: keyof typeof SPLIT_MODE = SPLIT_MODE.split;
    let orientation: keyof typeof SPLIT_ORIENTATION = $vertical_viewports
        ? SPLIT_ORIENTATION.vertical
        : SPLIT_ORIENTATION.horizontal;
    let logic_state: boolean = false;
    let value: string = (snippet?.script ?? script ?? $session) || (fallback?.script ?? "");

    function on_copy_click(event: MouseEvent): void {
        navigator.clipboard.writeText(value);
    }

    onMount(() => {
        // NOTE: Better UX (User Experience) to clear any previously selected snippets / shared playgrounds
        history.replaceState(null, "", `${location.origin}${location.pathname}`);
    });

    $: $session = value;
</script>

<Box padding="small">
    <Stack.Container
        alignment_x={["center", "desktop:right", "widescreen:right"]}
        orientation="horizontal"
    >
        <Menu.Container orientation="horizontal" sizing="tiny">
            <Menu.Button palette="accent" on:click={() => (logic_state = true)}>
                <Share2 />
                Share
            </Menu.Button>

            <Menu.Button palette="affirmative" on:click={on_copy_click}>
                <Copy />
                Copy
            </Menu.Button>

            <Menu.Button
                palette="inverse"
                on:click={() =>
                    (orientation =
                        orientation === SPLIT_ORIENTATION.horizontal
                            ? SPLIT_ORIENTATION.vertical
                            : SPLIT_ORIENTATION.horizontal)}
            >
                <RotateCW />
                <Text is="span" hidden={["mobile", "tablet"]}>Rotate</Text>
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.split}
                palette="inverse"
                on:click={() => (mode = SPLIT_MODE.split)}
            >
                <Sidebar />
                <Text is="span" hidden={["mobile", "tablet"]}>Split</Text>
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.first}
                palette="inverse"
                on:click={() => (mode = SPLIT_MODE.first)}
            >
                <Code />
                <Text is="span" hidden={["mobile", "tablet"]}>Editor</Text>
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.last}
                palette="inverse"
                on:click={() => (mode = SPLIT_MODE.last)}
            >
                <Image />
                <Text is="span" hidden={["mobile", "tablet"]}>Render</Text>
            </Menu.Button>
        </Menu.Container>
    </Stack.Container>
</Box>

<REPLSplit {mode} {orientation} bind:value />

<PromptShare {value} bind:logic_state />
