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
    import type {ISnippet} from "@kahi-docs/markdown";

    import REPLOverlay from "../../components/repl/REPLOverlay.svelte";

    export let snippet: ISnippet;

    let view: "code" | "render" | "split" = "split";

    function on_copy_click(event: MouseEvent) {}
</script>

hello world?

<REPLOverlay bind:view on:copy_click={on_copy_click} />
