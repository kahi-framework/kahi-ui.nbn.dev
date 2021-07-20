<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IRouteError, ISnippetGet} from "../../shared/api";

    export const load: Load = async ({fetch, page}) => {
        const {identifier = ""} = page.params;

        const response = await fetch(`/api/v2/content/snippets/${identifier}.json`);
        if (!response.ok) {
            const data = (await response.json()) as IRouteError;

            return {
                status: response.status,
                error: data.code,
            };
        }

        const data = (await response.json()) as ISnippetGet;
        if (data.data.syntax !== "svelte") {
            return {
                status: 400,
                error: "UnsupportedSyntax",
            };
        }

        return {
            props: {
                snippet: data.data,
            },
        };
    };
</script>

<script lang="ts">
    import type {SvelteComponent} from "svelte";
    import {onMount} from "svelte";

    import type {ISnippet} from "@kahi-docs/markdown";
    import {set_snippet} from "@kahi-docs/shared";

    import REPLLoadingHero from "../../components/repl/REPLLoadingHero.svelte";

    export let snippet: ISnippet;

    set_snippet(snippet);

    let Component: typeof SvelteComponent;
    onMount(async () => {
        Component = (await import("../../components/repl/REPLEditor.svelte")).default;
    });
</script>

{#if Component}
    <svelte:component this={Component} />
{:else}
    <REPLLoadingHero />
{/if}
