<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IDocumentationGet, IRouteError} from "../../shared/api";

    export const load: Load = async ({fetch, page}) => {
        const {document = ""} = page.params;

        const response = await fetch(`/api/v2/content/docs/${document}.json`);
        if (!response.ok) {
            const data = (await response.json()) as IRouteError;

            return {
                status: response.status,
                error: data.code,
            };
        }

        const data = (await response.json()) as IDocumentationGet;

        return {
            props: {
                documentation: data.data,
            },
        };
    };
</script>

<script lang="ts">
    import {Heading, Tab} from "@kahi-ui/framework";
    import type {IDocumentationRender, IReferenceMap} from "@kahi-docs/markdown";
    import {set_docs_render} from "@kahi-docs/shared";

    import ContentMetadata from "../../components/ContentMetadata.svelte";
    import DocumentationReferences from "../../components/documentation/DocumentationReferences.svelte";

    export let documentation: IDocumentationRender;

    function has_references(references: IReferenceMap): boolean {
        return Object.keys(references).length > 0;
    }

    function get_initial_tab(render: IDocumentationRender): string {
        if (has_references(render.properties.properties)) return "tab-api-reference-properties";
        else if (has_references(render.properties.events)) return "tab-api-reference-events";
        else if (has_references(render.properties.slots)) return "tab-api-reference-slots";
        else if (has_references(render.properties.custom_properties))
            return "tab-api-reference-custom-properties";

        return "";
    }

    function reset_initial_tab(render: IDocumentationRender): void {
        tab_state = get_initial_tab(render);
    }

    let tab_state: string = get_initial_tab(documentation);

    $: set_docs_render(documentation);
    $: reset_initial_tab(documentation);
</script>

<svelte:head>
    <title>{documentation.properties.title} — Kahi UI</title>
</svelte:head>

{@html documentation.render}

{#if tab_state}
    <Heading is="h2" id="api-reference">API Reference</Heading>

    <Tab.Container logic_name="tab-api-reference" bind:logic_state={tab_state}>
        {#if has_references(documentation.properties.properties)}
            <Tab.Group logic_id="tab-api-reference-properties">
                <Tab.Label palette="accent">Properties</Tab.Label>

                <Tab.Section>
                    <DocumentationReferences
                        references={documentation.properties.properties}
                        id="properties"
                    />
                </Tab.Section>
            </Tab.Group>
        {/if}

        {#if has_references(documentation.properties.events)}
            <Tab.Group logic_id="tab-api-reference-events">
                <Tab.Label palette="accent">Events</Tab.Label>

                <Tab.Section>
                    <DocumentationReferences
                        references={documentation.properties.events}
                        id="events"
                    />
                </Tab.Section>
            </Tab.Group>
        {/if}

        {#if has_references(documentation.properties.slots)}
            <Tab.Group logic_id="tab-api-reference-slots">
                <Tab.Label palette="accent">Slots</Tab.Label>

                <Tab.Section>
                    <DocumentationReferences
                        references={documentation.properties.slots}
                        id="slots"
                    />
                </Tab.Section>
            </Tab.Group>
        {/if}

        {#if has_references(documentation.properties.custom_properties)}
            <Tab.Group logic_id="tab-api-reference-custom-properties">
                <Tab.Label palette="accent">Custom Properties</Tab.Label>

                <Tab.Section>
                    <DocumentationReferences
                        references={documentation.properties.custom_properties}
                        id="custom-properties"
                    />
                </Tab.Section>
            </Tab.Group>
        {/if}
    </Tab.Container>
{/if}

<ContentMetadata />
