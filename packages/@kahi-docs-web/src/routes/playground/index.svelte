<script context="module" lang="ts">
    import {browser} from "$app/env";
    import type {Load} from "@sveltejs/kit";

    import {decompress_safe} from "@kahi-docs/shared";

    import type {IRouteError} from "../../lib/shared/api";

    import type {ISnippetGet} from "../api/v4/snippets/[identifier].json";

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
                },
            };
        } else if (script) {
            return {
                props: {
                    script: decompress_safe(script),
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
        };
    };
</script>

<script lang="ts">
    import {Box, Menu, Stack, Text, viewports} from "@kahi-ui/framework";
    import {Copy, Code, Image, RotateCw, Search, Share2, Sidebar} from "lucide-svelte";
    import {onMount} from "svelte";

    import {session} from "@kahi-docs/shared";

    import type {ISnippetRecord} from "../api/v4/snippets/[identifier].json";

    import PromptShare from "../../lib/components/PromptShare.svelte";
    import PromptSnippets from "../../lib/components/PromptSnippets.svelte";
    import {SPLIT_MODE, SPLIT_ORIENTATION} from "../../lib/components/Split.svelte";

    import REPLSplit from "../../lib/components/repl/REPLSplit.svelte";

    export let fallback: ISnippetRecord | undefined;
    export let script: string | undefined;
    export let snippet: ISnippetRecord | undefined;

    const vertical_viewports = viewports({
        mobile: true,
        tablet: true,
    });

    let mode: keyof typeof SPLIT_MODE = SPLIT_MODE.split;
    let orientation: keyof typeof SPLIT_ORIENTATION = $vertical_viewports
        ? SPLIT_ORIENTATION.vertical
        : SPLIT_ORIENTATION.horizontal;
    let value: string = (snippet?.script ?? script ?? $session) || (fallback?.script ?? "");

    function on_copy_click(event: MouseEvent): void {
        navigator.clipboard.writeText(value);
    }

    function on_snippet(event: CustomEvent<{snippet: ISnippetRecord}>): void {
        snippet = event.detail.snippet;
        value = snippet.script;
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
            <Menu.Label for="snippet-prompt" palette="accent">
                <Search size="1em" />
                Snippets
            </Menu.Label>

            <Menu.Label for="share-prompt" palette="accent">
                <Share2 size="1em" />
                Share
            </Menu.Label>

            <Menu.Button palette="affirmative" on:click={on_copy_click}>
                <Copy size="1em" />
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
                <RotateCw size="1em" />
                <Text is="span" hidden={["mobile", "tablet"]}>Rotate</Text>
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.split}
                palette="inverse"
                on:click={() => (mode = SPLIT_MODE.split)}
            >
                <Sidebar size="1em" />
                <Text is="span" hidden={["mobile", "tablet"]}>Split</Text>
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.first}
                palette="inverse"
                on:click={() => (mode = SPLIT_MODE.first)}
            >
                <Code size="1em" />
                <Text is="span" hidden={["mobile", "tablet"]}>Editor</Text>
            </Menu.Button>

            <Menu.Button
                active={mode === SPLIT_MODE.last}
                palette="inverse"
                on:click={() => (mode = SPLIT_MODE.last)}
            >
                <Image size="1em" />
                <Text is="span" hidden={["mobile", "tablet"]}>Render</Text>
            </Menu.Button>
        </Menu.Container>
    </Stack.Container>
</Box>

<REPLSplit {mode} {orientation} bind:value />

<PromptSnippets on:snippet={on_snippet} />
<PromptShare snippet={snippet ?? fallback} {value} />
