<script context="module" lang="ts">
    const TEMPLATE_EDIT_URL = ({identifier}: {identifier: string}) =>
        `https://github.com/kahi-framework/kahi-ui.nbn.dev/tree/main/content${identifier}.md`;
</script>

<script lang="ts">
    import {browser} from "$app/env";
    import {page} from "$app/stores";
    import {Heading, Spacer, Stack, Text} from "@kahi-ui/framework";

    import AppAnchor from "./AppAnchor.svelte";

    $: _edit_url = $page.stuff.content
        ? TEMPLATE_EDIT_URL({identifier: $page.stuff.content.metadata.identifier})
        : "";
    $: _timestamp = $page.stuff.content
        ? new Date($page.stuff.content.metadata.modified_at).toLocaleString(
              browser ? navigator.language : "en-US"
          )
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

                <Text is="small">
                    {_timestamp}
                </Text>
            </div>
        {:else}
            <Text is="small">
                {_timestamp}
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
