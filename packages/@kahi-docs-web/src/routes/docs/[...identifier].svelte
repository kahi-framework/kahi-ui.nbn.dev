<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IContentGet, IRouteError} from "../../lib/shared/api";

    export const load: Load = async ({fetch, page}) => {
        const {identifier = ""} = page.params;

        const response = await fetch(`/api/v3/content/docs/${identifier}.json`);
        if (!response.ok) {
            const data = (await response.json()) as IRouteError;

            return {
                status: response.status,
                error: data.code,
            };
        }

        const data = (await response.json()) as IContentGet;

        return {
            props: {
                content: data.data,
            },
        };
    };
</script>

<script lang="ts">
    import type {IDocumentationRender} from "@kahi-docs/markdown";
    import {content as content_store} from "@kahi-docs/shared";

    import Content from "../../lib/components/Content.svelte";
    import ContentAPI from "../../lib/components/ContentAPI.svelte";
    import ContentMetadata from "../../lib/components/ContentMetadata.svelte";

    export let content: IDocumentationRender;

    content_store.init(content);
</script>

<svelte:head>
    <title>{content.properties.title} — Kahi UI</title>
</svelte:head>

<Content />

{#key content}
    <ContentAPI />
{/key}

<ContentMetadata />
