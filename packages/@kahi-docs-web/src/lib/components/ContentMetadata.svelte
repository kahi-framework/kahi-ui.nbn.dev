<script context="module" lang="ts">
    const TEMPLATE_EDIT_URL = ({identifier}: {identifier: string}) =>
        `https://github.com/kahi-framework/kahi-ui.nbn.dev/tree/main/content${identifier}.md`;
</script>

<script lang="ts">
    import {browser} from "$app/env";
    import {page} from "$app/stores";
    import {Divider, Figure, Heading, Spacer, Stack, Text} from "@kahi-ui/framework";

    import Clock from "./icons/Clock.svelte";
    import ExternalLink from "./icons/ExternalLink.svelte";

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
    <Divider margin_y="large" />

    <Stack.Container
        class="content-metadata"
        orientation={["widescreen:horizontal", "desktop:horizontal", "tablet:horizontal"]}
        alignment="center"
        spacing="medium"
        width="100"
    >
        <Figure size="icon-small">
            <Clock size="100%" />
        </Figure>

        <div>
            <Heading
                is="h5"
                alignment_x="center"
                max_width={["widescreen:content-max", "desktop:content-max", "tablet:content-max"]}
            >
                Last Modified
            </Heading>

            <Text is="small">{_timestamp}</Text>
        </div>

        <Spacer hidden="mobile" />

        <div>
            <AppAnchor
                is="button"
                href={_edit_url}
                palette="accent"
                sizing="small"
                variation="clear"
            >
                View page in repository
                <ExternalLink />
            </AppAnchor>
        </div>
    </Stack.Container>
{:else}
    <Text is="strong" palette="negative">Error</Text>: failed to load content metadata
{/if}
