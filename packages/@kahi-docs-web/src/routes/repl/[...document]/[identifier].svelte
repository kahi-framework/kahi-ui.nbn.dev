<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IContentGet, IRouteError} from "../../../shared/api";

    const SUPPORTED_SYNTAXES = new Set(["html", "svelte"]);

    export const load: Load = async ({fetch, page}) => {
        const {document = "", identifier = ""} = page.params;

        const response = await fetch(`/api/v3/content/${document}.json`);
        if (!response.ok) {
            const data = (await response.json()) as IRouteError;

            return {
                status: response.status,
                error: data.code,
            };
        }

        const data = (await response.json()) as IContentGet;
        const snippet = data.data.properties.snippets.find(
            (snippet) => snippet.identifier === identifier
        );

        if (!snippet) {
            return {
                status: 404,
                error: "InvalidSnippet",
            };
        }

        if (SUPPORTED_SYNTAXES.has(snippet.syntax)) {
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
    import {snippet as snippet_store} from "@kahi-docs/shared";

    import REPLLoadingHero from "../../../components/repl/REPLLoadingHero.svelte";

    export let snippet: ISnippet;

    snippet_store.init(snippet);

    let Component: typeof SvelteComponent;
    onMount(async () => {
        Component = (await import("../../../components/repl/REPLEditor.svelte")).default;
    });
</script>

{#if Component}
    <svelte:component this={Component} />
{:else}
    <REPLLoadingHero />
{/if}
