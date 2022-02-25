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
    import {Box, Code, Dot, Ellipsis, Text} from "@kahi-ui/framework";
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

    let PIPELINE_RESULT_TYPES:
        | typeof import("@novacbn/svelte-pipeline").PIPELINE_RESULT_TYPES
        | undefined;
    let PipelineRenderComponent:
        | typeof import("@novacbn/svelte-pipeline/components").PipelineRenderComponent
        | undefined;
    let store: IPipelineSvelteStore | undefined;

    let is_mounted: boolean = false;
    let error: string | null = null;

    let _class: string = "";
    export let style: string | undefined = undefined;
    export {_class as class};

    export let value: string;

    function on_error(event: CustomEvent<{error: Error}>): void {
        error = event.detail.error.message;
    }

    function on_mount(event: CustomEvent): void {
        error = null;
        is_mounted = true;
    }

    onMount(async () => {
        const [config, module, components] = await import_modules();

        ({PIPELINE_RESULT_TYPES} = module);
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

    $: {
        if (
            store &&
            PIPELINE_RESULT_TYPES &&
            $store &&
            $store.type === PIPELINE_RESULT_TYPES.error
        ) {
            error = $store.message;
        }
    }
</script>

{#if PipelineRenderComponent && store}
    <PipelineRenderComponent
        class="repl-render {_class}"
        pipeline={store}
        style={is_mounted ? style : "display:none;"}
        on:destroy={() => (is_mounted = false)}
        on:error={on_error}
        on:mount={on_mount}
        on:destroy
        on:error
        on:mount
    />
{/if}

{#if !is_mounted}
    <REPLOverlay>
        <Ellipsis animation="bounce" iterations="5">
            <Dot palette="inverse" />
        </Ellipsis>
    </REPLOverlay>
{/if}

{#if error}
    <REPLOverlay alignment_x="stretch" alignment_y="top">
        <Box palette="negative" padding="small">
            <Text is="strong">ERROR</Text>: <Code>{error}</Code>
        </Box>
    </REPLOverlay>
{/if}

<style>
    :global(.repl-render) {
        height: 100%;

        padding: calc(var(--spacings-block-small) * 1rem) calc(var(--spacings-block-medium) * 1rem);
    }
</style>
