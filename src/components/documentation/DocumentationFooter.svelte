<script lang="ts">
    import {Button, Divider, Figure, Heading, Spacer, Stack, Text} from "@kahi-ui/framework";
    import {Clock} from "svelte-feather/components/Clock";
    import {Code} from "svelte-feather/components/Code";

    import {applicationconfig, docsrender, substitute_value} from "@kahi-docs/shared";

    $: _edit_url = substitute_value(
        $applicationconfig.edit.url,
        $docsrender.properties.identifier + ".md"
    );

    $: _timestamp = new Date($docsrender.properties.modified_at).toLocaleString(
        $applicationconfig.locale.language
    );
</script>

<Divider margin_y="large" />

<Stack
    class="documentation-footer"
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

    {#if $applicationconfig.edit.enabled}
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
                View page in repository
                <Code />
            </Button>
        </div>
    {/if}
</Stack>
