<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IDocumentationGet, IRouteError} from "../../shared/api";

    export const load: Load = async ({fetch, page}) => {
        const {path = ""} = page.params;

        const response = await fetch(`/api/v1/content/documentation/${path}.json`);
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

    import {EDIT_ENABLED, META_TITLE, TIMESTAMP_ENABLED} from "../../shared/environment";

    import DocumentationFooter from "../../components/documentation/DocumentationFooter.svelte";
    import DocumentationReferences from "../../components/documentation/DocumentationReferences.svelte";

    export let documentation: IDocumentationRender;
</script>

<svelte:head>
    <title>{documentation.properties.title} — {META_TITLE}</title>
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

{#if EDIT_ENABLED || TIMESTAMP_ENABLED}
    <DocumentationFooter properties={documentation.properties} />
{/if}
