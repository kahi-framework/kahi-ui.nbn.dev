<script context="module" lang="ts">
    import Prism from "prismjs";

    const highlightElement = (element: HTMLElement, syntax: string): void =>
        Prism.highlightElement(element);
</script>

<script lang="ts">
    import {viewports} from "@kahi-ui/framework";
    import {REPL_ROTATION, REPL_VIEWS, Split} from "@novacbn/svelte-pipeline/repl";

    import {snippet} from "@kahi-docs/shared";

    import REPL_CONFIG from "../../../../../../.kahi-docs/repl.config";

    import REPLLoadingHero from "./REPLLoadingHero.svelte";
    import REPLOverlay from "./REPLOverlay.svelte";

    const params = new URLSearchParams(location.search);

    const _viewports = viewports({
        mobile: true,
        //tablet: true,
    });

    export let value: string = $snippet.script;

    let rotation: "horizontal" | "vertical" = (params.get("rotation") as any) || "vertical";
    let view: "editor" | "render" | "split" = "split";

    let loaded: boolean = false;
    let error: string = "";

    function on_error(event: CustomEvent<{message: string}>) {
        const {message} = event.detail;

        // TODO: Surface error messages
        error = message;
        loaded = true;
    }

    function on_compile(event: any) {
        error = "";
        loaded = true;
    }

    function on_copy_click(event: MouseEvent) {
        navigator.clipboard.writeText(value);
    }

    let repl_rotation: REPL_ROTATION;
    $: {
        // TODO: When `svelte-pipeline` is updated to accept string values, remove the `else` line
        if ($_viewports) repl_rotation = REPL_ROTATION.vertical;
        else
            repl_rotation =
                rotation === "horizontal" ? REPL_ROTATION.horizontal : REPL_ROTATION.vertical;
    }

    let repl_view: REPL_VIEWS;
    $: {
        // TODO: When `svelte-pipeline` is updated to accept string values, remove this block
        switch (view) {
            case "editor":
                repl_view = REPL_VIEWS.editor;
                break;
            case "render":
                repl_view = REPL_VIEWS.render;
                break;
            default:
                repl_view = REPL_VIEWS.split;
                break;
        }
    }
</script>

<Split
    context={REPL_CONFIG.context}
    imports={REPL_CONFIG.imports}
    rotation={repl_rotation}
    split={0.25}
    view={repl_view}
    style={loaded ? "" : "display:none;"}
    {highlightElement}
    dev
    bind:value
    on:evaluationError={on_error}
    on:evaluationCompile={on_compile}
>
    <svelte:fragment slot="editor-loading">
        <REPLLoadingHero />
    </svelte:fragment>

    <svelte:fragment slot="render-loading">
        <REPLLoadingHero />
    </svelte:fragment>
</Split>

{#if loaded}
    <REPLOverlay bind:view on:copy_click={on_copy_click} />
{:else}
    <REPLLoadingHero />
{/if}
