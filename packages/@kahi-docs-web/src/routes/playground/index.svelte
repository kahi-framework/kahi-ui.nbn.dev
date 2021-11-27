<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import {decompress_safe} from "@kahi-docs/shared";

    import type {IRouteError, ISnippetGet} from "../../lib/shared/api";

    export const load: Load = async ({fetch, page}) => {
        const {script = "", snippet = ""} = Object.fromEntries(page.query.entries());

        if (snippet) {
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
        } else if (script) {
            return {
                props: {
                    script: decompress_safe(script),
                },
            };
        }

        return {};
    };
</script>

<script lang="ts">
    import {browser} from "$app/env";

    import type {ISnippet} from "@kahi-docs/markdown";

    import {session} from "@kahi-docs/shared";

    import HeroJavascriptEnabled from "../../lib/components/HeroJavascriptEnabled.svelte";

    export let script: string | undefined;
    export let snippet: ISnippet | undefined;

    let value: string = snippet?.script ?? script ?? $session;

    $: if (browser) $session = value;
</script>

{#if browser}
    hello world!
{:else}
    <HeroJavascriptEnabled />
{/if}
