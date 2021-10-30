<script lang="ts">
    import {browser} from "$app/env";
    import {htmlpalette} from "@kahi-ui/framework";

    import {preferencetheme} from "@kahi-docs/shared";

    import REPLUnsupportedHero from "../../lib/components/repl/REPLUnsupportedHero.svelte";

    const _htmlpalette = htmlpalette();

    $: if (browser) $_htmlpalette = $preferencetheme;
</script>

{#if browser}
    <slot />
{:else}
    <!-- 
        TODO: Should the fall through should be compiling snippet in SSR mode and
        rendering it here
    -->
    <REPLUnsupportedHero />
{/if}

<style>
    :global(:root) {
        --repl-divider-color: rgba(var(--palette-inverse-lightest), 0.5);
        --repl-stack-height: 100vh;
    }

    :global(.codejar-linenumbers) {
        height: max-content;
        min-height: 100%;
    }

    :global(.repl-editor) {
        border-radius: 0;
    }

    :global(.repl-render) :global(.context-backdrop),
    :global(.repl-render) :global(.overlay) {
        /**
         * HACK: Used to have `ContextBackdrop` / `Overlay`s properly take up REPL viewports
         * since renders aren't rendered in a separate srcdoc iframe yet.
         */

        width: 100% !important;
        height: 100% !important;
    }

    :global(.repl-stack) {
        height: 100vh;
    }
</style>
