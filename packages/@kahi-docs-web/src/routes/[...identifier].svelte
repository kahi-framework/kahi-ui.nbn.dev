<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IContentGet, IRouteError} from "../lib/shared/api";

    export const load: Load = async ({fetch, params}) => {
        const {identifier = ""} = params;

        const response = await fetch(`/api/v4/content/${identifier}.json`);
        if (!response.ok) {
            const data = (await response.json()) as IRouteError;

            return {
                status: response.status,
                error: data.code,
            };
        }

        const data = (await response.json()) as IContentGet;

        const content = data.data;
        const prerender = content.metadata.snippets.map(
            (snippet) => `/api/v4/snippets/${snippet.identifier}.json`
        );

        return {
            stuff: {
                content,
                prerender,
            },
        };
    };
</script>

<script lang="ts">
    import {page} from "$app/stores";
    import {Hero, Text} from "@kahi-ui/framework";

    import ContentArticle from "../lib/components/ContentArticle.svelte";
    import ContentAPI from "../lib/components/ContentAPI.svelte";
    import ContentBody from "../lib/components/ContentBody.svelte";
    import ContentMetadata from "../lib/components/ContentMetadata.svelte";
</script>

{#if $page.stuff.content}
    <ContentArticle>
        <ContentBody />

        {#key $page.stuff.content}
            <ContentAPI />
        {/key}

        <ContentMetadata />
    </ContentArticle>
{:else}
    <Hero.Container palette="negative">
        <Hero.Header>404</Hero.Header>
        <Hero.Section>
            The <Text is="strong">page</Text> you were looking for <Text is="strong">was not</Text> found.
        </Hero.Section>
    </Hero.Container>
{/if}
