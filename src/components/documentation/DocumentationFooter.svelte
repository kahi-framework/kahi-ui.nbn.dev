<script lang="ts">
    import {Clock} from "svelte-feather/components/Clock";
    import {Github} from "svelte-feather/components/Github";
    import {Button, Divider, Figure, Heading, Spacer, Stack, Text} from "@kahi-ui/framework";

    import type {IDocumentationRenderProperties} from "@kahi-docs/markdown";
    import {substitute_value} from "@kahi-docs/shared";

    import {
        EDIT_ENABLED,
        EDIT_TEXT,
        EDIT_URL,
        LOCALE_DEFAULT,
        TIMESTAMP_ENABLED,
        TIMESTAMP_TEXT,
    } from "../../shared/environment";

    export let properties: IDocumentationRenderProperties;

    $: _edit_url = substitute_value(EDIT_URL, properties.identifier + ".md");
    $: _timestamp = new Date(properties.modified_at).toLocaleString(LOCALE_DEFAULT);
</script>

<Divider margin_y="large" />

<Stack
    class="documentation-footer"
    orientation={["widescreen:horizontal", "desktop:horizontal", "tablet:horizontal"]}
    alignment="center"
    spacing="medium"
    width="100"
>
    {#if TIMESTAMP_ENABLED}
        <Figure variation="icon" size="medium">
            <Clock />
        </Figure>

        <div>
            <Heading
                is="h5"
                align="center"
                max_width={["widescreen:content-max", "desktop:content-max", "tablet:content-max"]}
            >
                {TIMESTAMP_TEXT}
            </Heading>

            <Text is="small">{_timestamp}</Text>
        </div>
    {/if}

    {#if EDIT_ENABLED}
        <Spacer hidden="mobile" />

        <div>
            <Button
                href={_edit_url}
                rel="noopener noreferrer"
                target="_blank"
                palette="accent"
                size="medium"
                variation="clear"
            >
                {EDIT_TEXT}
                <Github />
            </Button>
        </div>
    {/if}
</Stack>
