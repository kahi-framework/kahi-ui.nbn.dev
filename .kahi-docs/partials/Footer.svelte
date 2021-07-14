<script lang="ts">
    import {Anchor, Box, Divider, Heading, Stack, Text} from "@kahi-ui/framework";
    import {Github} from "svelte-feather/components/Github";

    import {applicationconfig} from "@kahi-docs/shared";

    $: ({version} = $applicationconfig.metadata);
</script>

<Box padding_y="huge">
    <Stack alignment_x="center">
        <Anchor href="https://github.com/novacbn/kahi-ui" rel="noopener noreferrer" target="_blank">
            <Heading is="h2">Kahi UI</Heading>
        </Anchor>

        <Text align="center">
            <Anchor
                href="https://github.com/novacbn/kahi-ui/releases/{version}"
                rel="noopener noreferrer"
                target="_blank"
            >
                <Divider margin_y="tiny">
                    v{version}
                </Divider>
            </Anchor>

            Made and developed by
            <br />

            <Anchor href="https://github.com/novacbn" rel="noopener noreferrer" target="_blank">
                NovacBN
                <Github size="0.9em" />
            </Anchor>
        </Text>
    </Stack>
</Box>

<style>
    :global(.site-footer) :global(.stack) > :global(a) {
        color: inherit !important;
    }

    :global(.site-footer) :global(h2) {
        letter-spacing: 0.1em;
    }

    :global(.site-footer) :global(svg) {
        display: inline;
        margin-left: 0.1em;
    }
</style>
