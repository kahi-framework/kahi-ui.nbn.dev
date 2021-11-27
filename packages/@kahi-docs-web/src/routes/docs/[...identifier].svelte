<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IContentGet, IRouteError} from "../../lib/shared/api";

    export const load: Load = async ({fetch, page}) => {
        const {identifier = ""} = page.params;

        const response = await fetch(`/api/v4/content/docs/${identifier}.json`);
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
    import type {IPageRender} from "@kahi-docs/markdown";
    import {content as content_store} from "@kahi-docs/shared";

    import Content from "../../lib/components/Content.svelte";
    import ContentAPI from "../../lib/components/ContentAPI.svelte";
    import ContentMetadata from "../../lib/components/ContentMetadata.svelte";
    import PageMetadata from "../../lib/components/PageMetadata.svelte";

    export let content: IPageRender;

    const store = content_store.init(content);
    $: $store = content;
</script>

<PageMetadata title={content.metadata.title} separator="—" />

<Content />

{#key content}
    <ContentAPI />
{/key}

<ContentMetadata />
