<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IDocumentationGet, IRouteError} from "../../shared/api";

    export const load: Load = async ({fetch, page}) => {
        const {document = ""} = page.params;

        const response = await fetch(`/api/v2/content/documentation/${document}.json`);
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
    import type {IDocumentationRender} from "@kahi-docs/markdown";
    import {applicationconfig, set_docs_render} from "@kahi-docs/shared";

    import DocumentationFooter from "../../components/documentation/DocumentationFooter.svelte";
    import DocumentationReferences from "../../components/documentation/DocumentationReferences.svelte";

    export let documentation: IDocumentationRender;

    set_docs_render(documentation);
</script>

<svelte:head>
    <title>{documentation.properties.title} — {$applicationconfig.application.title}</title>
</svelte:head>

{@html documentation.render}

{#if Object.keys(documentation.properties.properties).length > 0}
    <DocumentationReferences
        references={documentation.properties.properties}
        id="properties"
        title="Properties"
    />
{/if}

{#if Object.keys(documentation.properties.events).length > 0}
    <DocumentationReferences
        references={documentation.properties.events}
        id="events"
        title="Events"
    />
{/if}

<DocumentationFooter />
