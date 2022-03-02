<script context="module" lang="ts">
    const TEMPLATE_EDIT_URL = ({identifier}: {identifier: string}) =>
        `https://github.com/kahi-framework/kahi-ui.nbn.dev/tree/main/content${identifier}.md`;
</script>

<script lang="ts">
    import {page} from "$app/stores";
    import {DateTimeStamp, Heading, Spacer, Stack, Text} from "@kahi-ui/framework";
    import {Clock, Pencil} from "lucide-svelte";

    import AppAnchor from "./AppAnchor.svelte";

    $: _edit_url = $page.stuff.content
        ? TEMPLATE_EDIT_URL({identifier: $page.stuff.content.metadata.identifier})
        : "";
</script>

{#if $page.stuff.content}
    <Heading margin_bottom="small">{$page.stuff.content.metadata.title}</Heading>

    <Stack.Container
        orientation="horizontal"
        alignment_y="center"
        spacing="small"
        margin_bottom="medium"
    >
        {#if $page.stuff.content.metadata.authors}
            <div>
                <Stack.Container orientation="horizontal" alignment_y="center" spacing="small">
                    {#each Object.entries($page.stuff.content.metadata.authors) as [name, data], index (name)}
                        {#if index > 0}
                            &bullet;
                        {/if}

                        <Text is="small">
                            {#if data?.href}
                                <AppAnchor class="anchor" href={data.href} palette="informative">
                                    {name}
                                </AppAnchor>
                            {:else}
                                {name}
                            {/if}
                        </Text>
                    {/each}
                </Stack.Container>

                <Text class="content-metadata--timestamps" is="small">
                    <Clock size="1em" />
                    <DateTimeStamp
                        timestamp={$page.stuff.content.metadata.created_at}
                        day="2-digit"
                        month="2-digit"
                        year="2-digit"
                        margin_left="tiny"
                        margin_right="small"
                    />

                    <Pencil size="1em" />
                    <DateTimeStamp
                        timestamp={$page.stuff.content.metadata.modified_at}
                        day="2-digit"
                        month="2-digit"
                        year="2-digit"
                        margin_left="tiny"
                    />
                </Text>
            </div>
        {:else}
            <Text class="content-metadata--timestamps" is="small">
                <Clock size="1em" />
                <DateTimeStamp
                    timestamp={$page.stuff.content.metadata.created_at}
                    day="2-digit"
                    month="2-digit"
                    year="2-digit"
                    margin_left="tiny"
                    margin_right="small"
                />

                <Pencil size="1em" />
                <DateTimeStamp
                    timestamp={$page.stuff.content.metadata.modified_at}
                    day="2-digit"
                    month="2-digit"
                    year="2-digit"
                    margin_left="tiny"
                />
            </Text>
        {/if}

        <Spacer />

        <Text is="small">
            <AppAnchor class="anchor" href={_edit_url} palette="informative">View Source</AppAnchor>
        </Text>
    </Stack.Container>
{:else}
    <Text is="strong" palette="negative">Error</Text>: failed to load content metadata
{/if}

<style>
    :global(.content-metadata--timestamps) {
        display: flex;
        align-items: center;
    }
</style>
