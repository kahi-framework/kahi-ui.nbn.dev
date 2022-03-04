<script lang="ts">
    import REPL_CONFIG from "../../../../../.kahi-docs/repl.config";

    import {pipeline_svelte} from "@novacbn/svelte-pipeline";
    import {PipelineRenderComponent} from "@novacbn/svelte-pipeline/components";
    import type {SvelteComponent} from "svelte";

    import {debounce} from "../client/functional";

    type $$Events = {
        destroy: CustomEvent<{component: SvelteComponent}>;

        error: CustomEvent<{error: Error}>;

        mount: CustomEvent<{component: SvelteComponent}>;
    };

    const pipeline_store = pipeline_svelte({
        context: REPL_CONFIG.context,
        imports: REPL_CONFIG.imports,

        compiler: {
            dev: true,
            generate: "dom",
            name: "App",
            filename: "App.svelte",
        },
    });

    const update_store = debounce((code: string) => ($pipeline_store = code), 100);

    export let value: string;

    $: update_store(value);
</script>

<PipelineRenderComponent
    class="code-render"
    pipeline={pipeline_store}
    on:destroy
    on:error
    on:mount
/>

<style>
    :global(.code-render) {
        height: 100%;

        padding: calc(var(--spacings-block-small) * 1rem) calc(var(--spacings-block-medium) * 1rem);
    }
</style>
