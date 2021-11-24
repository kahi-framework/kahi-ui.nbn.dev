<script context="module" lang="ts">
    const TEMPLATE_EDIT_URL = ({identifier}: {identifier: string}) =>
        `https://github.com/kahi-framework/kahi-ui.nbn.dev/tree/main/content${identifier}.md`;
</script>

<script lang="ts">
    import {browser} from "$app/env";
    import {Divider, Figure, Heading, Spacer, Stack, Text} from "@kahi-ui/framework";

    import {content} from "@kahi-docs/shared";

    import Clock from "./icons/Clock.svelte";
    import ExternalLink from "./icons/ExternalLink.svelte";

    import AppAnchor from "./AppAnchor.svelte";

    $: _edit_url = TEMPLATE_EDIT_URL({identifier: $content.metadata.identifier});
    $: _timestamp = new Date($content.metadata.modified_at).toLocaleString(
        browser ? navigator.language : "en-US"
    );
</script>

<Divider margin_y="large" />

<Stack
    class="content-metadata"
    orientation={["widescreen:horizontal", "desktop:horizontal", "tablet:horizontal"]}
    alignment="center"
    spacing="medium"
    width="100"
>
    <Figure variation="icon" size="medium">
        <Clock />
    </Figure>

    <div>
        <Heading
            is="h5"
            align="center"
            max_width={["widescreen:content-max", "desktop:content-max", "tablet:content-max"]}
        >
            Last Modified
        </Heading>

        <Text is="small">{_timestamp}</Text>
    </div>

    <Spacer hidden="mobile" />

    <div>
        <AppAnchor is="button" href={_edit_url} palette="accent" size="medium" variation="clear">
            View page in repository
            <ExternalLink />
        </AppAnchor>
    </div>
</Stack>
