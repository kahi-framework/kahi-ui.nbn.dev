<script context="module" lang="ts">
    const TEMPLATE_EDIT_URL = ({identifier}: {identifier: string}) =>
        `https://github.com/kahi-framework/kahi-ui.nbn.dev/tree/main/content/docs/${identifier}.md`;
</script>

<script lang="ts">
    import {browser} from "$app/env";
    import {Divider, Figure, Heading, Spacer, Stack, Text} from "@kahi-ui/framework";
    import {Clock} from "svelte-feather/components/Clock";
    import {ExternalLink} from "svelte-feather/components/ExternalLink";

    import {docsrender} from "@kahi-docs/shared";

    import AppAnchor from "./AppAnchor.svelte";

    $: _edit_url = TEMPLATE_EDIT_URL({identifier: $docsrender.properties.identifier});
    $: _timestamp = new Date($docsrender.properties.modified_at).toLocaleString(
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
