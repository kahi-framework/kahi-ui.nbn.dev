<script context="module" lang="ts">
    function import_modules() {
        return Promise.all([import("@kahi-docs/highlight"), import("@novacbn/svelte-codejar")]);
    }
</script>

<script lang="ts">
    import {Wave} from "@kahi-ui/framework";
    import {createEventDispatcher, onMount} from "svelte";

    import REPLOverlay from "./REPLOverlay.svelte";

    type $$Events = {
        ready: CustomEvent<void>;
    };

    const dispatch = createEventDispatcher();

    let CodeJar: typeof import("@novacbn/svelte-codejar").CodeJar | undefined;
    let highlight: ((text: string, syntax?: string) => string) | undefined;

    let _class: string = "";
    export let style: string | undefined = undefined;
    export {_class as class};

    export let value: string;

    onMount(async () => {
        const [highlight_module, codejar_module] = await import_modules();

        CodeJar = codejar_module.CodeJar;
        highlight = (text) => highlight_module.highlight(text, "svelte");

        dispatch("ready");
    });
</script>

{#if CodeJar && highlight}
    <CodeJar class="repl-editor {_class}" syntax="svelte" {highlight} {style} bind:value />
{:else}
    <REPLOverlay {style}>
        <Wave />
    </REPLOverlay>
{/if}

<style>
    :global(.repl-editor) {
        margin: 0 !important;

        height: 100%;

        border-radius: 0;

        white-space: pre !important;
    }
</style>
