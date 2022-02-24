<script context="module" lang="ts">
    function import_modules() {
        return Promise.all([
            import("../../../../../../.kahi-docs/repl.config"),
            import("@novacbn/svelte-pipeline"),
            import("@novacbn/svelte-pipeline/components"),
        ]);
    }
</script>

<script lang="ts">
    import {Dot, Ellipsis} from "@kahi-ui/framework";
    import type {IPipelineSvelteStore} from "@novacbn/svelte-pipeline";
    import type {SvelteComponent} from "svelte";
    import {createEventDispatcher, onMount} from "svelte";

    import REPLOverlay from "./REPLOverlay.svelte";

    type $$Events = {
        destroy: CustomEvent<{component: SvelteComponent}>;

        error: CustomEvent<{error: Error}>;

        mount: CustomEvent<{component: SvelteComponent}>;

        ready: CustomEvent<void>;
    };

    const dispatch = createEventDispatcher();

    let PipelineRenderComponent:
        | typeof import("@novacbn/svelte-pipeline/components").PipelineRenderComponent
        | undefined;
    let store: IPipelineSvelteStore | undefined;

    let is_mounted: boolean = false;

    let _class: string = "";
    export let style: string | undefined = undefined;
    export {_class as class};

    export let value: string;

    onMount(async () => {
        const [config, module, components] = await import_modules();

        ({PipelineRenderComponent} = components);

        store = module.pipeline_svelte({
            context: config.default.context,
            imports: config.default.imports,

            compiler: {
                dev: true,
                generate: "dom",
                name: "App",
                filename: "App.svelte",
            },
        });

        dispatch("ready");
    });

    $: if (store) $store = value;
</script>

{#if PipelineRenderComponent && store}
    <PipelineRenderComponent
        class="repl-render {_class}"
        pipeline={store}
        style={is_mounted ? style : "display:none;"}
        on:destroy={() => (is_mounted = false)}
        on:error={() => (is_mounted = false)}
        on:mount={() => (is_mounted = true)}
        on:destroy
        on:error
        on:mount
    />
{/if}

{#if !is_mounted}
    <REPLOverlay {style}>
        <Ellipsis animation="bounce" iterations="5">
            <Dot palette="inverse" />
        </Ellipsis>
    </REPLOverlay>
{/if}

<style>
    :global(.repl-render) {
        height: 100%;

        padding: calc(var(--spacings-block-small) * 1rem) calc(var(--spacings-block-medium) * 1rem);
    }
</style>
