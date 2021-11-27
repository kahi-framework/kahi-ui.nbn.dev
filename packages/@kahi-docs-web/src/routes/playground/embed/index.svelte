<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import {decompress_safe} from "@kahi-docs/shared";

    import type {IRouteError, ISnippetGet} from "../../../lib/shared/api";

    export const ssr = false;

    export const load: Load = async ({fetch, page}) => {
        const {script = "", snippet = ""} = Object.fromEntries(page.query.entries());

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

        return {
            status: 404,
            error: "MissingScript",
        };
    };
</script>

<script lang="ts">
    import {browser} from "$app/env";

    import type {ISnippet} from "@kahi-docs/markdown";

    import HeroJavascriptEnabled from "../../../lib/components/HeroJavascriptEnabled.svelte";

    import REPLEmbed from "../../../lib/components/repl/REPLEmbed.svelte";

    export let script: string | undefined;
    export let snippet: ISnippet | undefined;

    const identifier: string | undefined = snippet?.identifier;
    let value: string = snippet?.script ?? script ?? "";
</script>

{#if browser}
    <REPLEmbed {identifier} {value} />
{:else}
    <HeroJavascriptEnabled />
{/if}
