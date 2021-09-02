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
    import type {IDocumentationRender} from "@kahi-docs/markdown";
    import {applicationconfig, set_docs_render} from "@kahi-docs/shared";

    import DocumentationFooter from "../../components/documentation/DocumentationFooter.svelte";
    import DocumentationReferences from "../../components/documentation/DocumentationReferences.svelte";

    export let documentation: IDocumentationRender;

    $: set_docs_render(documentation);

    $: _has_events = Object.keys(documentation.properties.events).length > 0;
    $: _has_properties = Object.keys(documentation.properties.properties).length > 0;

    let _initial_tab: string;
    $: {
        if (_has_properties) _initial_tab = "tab-api-reference-properties";
        else if (_has_events) _initial_tab = "tab-api-reference-events";
        else _initial_tab = "tab-api-reference-slots";
    }
</script>

<svelte:head>
    <title>{documentation.properties.title} — {$applicationconfig.application.title}</title>
</svelte:head>

{@html documentation.render}

{#if _has_events || _has_properties}
    <Heading is="h2" id="api-reference">API Reference</Heading>

    <Tab.Container logic_name="tab-api-reference" logic_state={_initial_tab}>
        {#if _has_properties}
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

        {#if _has_events}
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
    </Tab.Container>
{/if}

<DocumentationFooter />
