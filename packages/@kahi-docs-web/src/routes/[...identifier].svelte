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
    import {afterNavigate} from "$app/navigation";
    import {page} from "$app/stores";
    import {Hero, Tab, Text} from "@kahi-ui/framework";

    import type {IReferenceMap} from "@kahi-docs/markdown";

    import ContentArticle from "../lib/components/ContentArticle.svelte";
    import ContentAPI from "../lib/components/ContentAPI.svelte";
    import ContentBody from "../lib/components/ContentBody.svelte";
    import ContentMetadata from "../lib/components/ContentMetadata.svelte";

    let logic_state = "content-switcher-guide";

    function has_references(references?: IReferenceMap): boolean {
        return references ? Object.keys(references).length > 0 : false;
    }

    afterNavigate(() => {
        logic_state = "content-switcher-guide";
    });

    $: _has_references =
        has_references($page.stuff.content?.references.events) ||
        has_references($page.stuff.content?.references.properties) ||
        has_references($page.stuff.content?.references.slots);
</script>

{#if $page.stuff.content}
    <ContentArticle>
        <ContentMetadata />

        {#if _has_references}
            <Tab.Container logic_name="content-switcher" alignment_x="stretch" {logic_state}>
                <Tab.Group logic_id="content-switcher-guide">
                    <Tab.Label palette="accent">Guide</Tab.Label>

                    <Tab.Section padding_top="medium">
                        <ContentBody />
                    </Tab.Section>
                </Tab.Group>

                <Tab.Group logic_id="content-switcher-api-reference">
                    <Tab.Label palette="accent">API Reference</Tab.Label>

                    <Tab.Section padding_top="medium">
                        <ContentAPI />
                    </Tab.Section>
                </Tab.Group>
            </Tab.Container>
        {:else}
            <ContentBody />
        {/if}
    </ContentArticle>
{:else}
    <Hero.Container palette="negative">
        <Hero.Header>404</Hero.Header>
        <Hero.Section>
            The <Text is="strong">page</Text> you were looking for <Text is="strong">was not</Text> found.
        </Hero.Section>
    </Hero.Container>
{/if}
