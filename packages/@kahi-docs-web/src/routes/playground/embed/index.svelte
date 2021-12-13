<script context="module" lang="ts">
    import {browser} from "$app/env";
    import type {Load} from "@sveltejs/kit";

    import {decompress_safe} from "@kahi-docs/shared";

    import type {IRouteError, ISnippetGet} from "../../../lib/shared/api";

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

        return {
            status: 404,
            error: "MissingScript",
        };
    };
</script>

<script lang="ts">
    import type {ISnippet} from "@kahi-docs/markdown";

    import REPLEmbed from "../../../lib/components/repl/REPLEmbed.svelte";

    export let script: string | undefined;
    export let snippet: ISnippet | undefined;

    const identifier: string | undefined = snippet?.identifier;
    let value: string = snippet?.script ?? script ?? "";
</script>

<REPLEmbed {identifier} {value} />
