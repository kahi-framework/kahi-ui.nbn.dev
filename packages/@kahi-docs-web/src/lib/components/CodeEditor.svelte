<script context="module" lang="ts">
    import {highlight as docs_highlight} from "@kahi-docs/highlight";

    const highlight = (text: string) => docs_highlight(text, "svelte");
</script>

<script lang="ts">
    import {CodeJar} from "@novacbn/svelte-codejar";

    export let value: string;
</script>

<CodeJar class="code-editor" syntax="svelte" {highlight} bind:value />

<style>
    :global(.code-editor) {
        margin: 0 !important;

        height: 100%;

        white-space: pre !important;
    }
</style>
