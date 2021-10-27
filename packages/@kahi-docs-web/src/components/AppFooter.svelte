<script lang="ts">
    import {Divider, Heading, Stack, Text} from "@kahi-ui/framework";

    import {applicationconfig} from "@kahi-docs/shared";

    import AppAnchor from "./AppAnchor.svelte";

    $: _version = $applicationconfig.metadata.version;
</script>

<footer class="box app-footer" data-padding-y="huge">
    <Stack alignment_x="center">
        <AppAnchor href="https://github.com/novacbn/kahi-ui">
            <Heading is="h2">Kahi UI</Heading>
        </AppAnchor>

        <Text align="center">
            <AppAnchor href="https://github.com/novacbn/kahi-ui/releases/v{_version}">
                <Divider margin_y="tiny" palette="accent">
                    v{_version}
                </Divider>
            </AppAnchor>

            Made and developed by
            <br />
            <AppAnchor href="https://github.com/novacbn" palette="accent">NovacBN</AppAnchor>
        </Text>
    </Stack>
</footer>

<style>
    :global(.app-footer) {
        grid-area: footer;
    }

    :global(.app-footer) :global(h2) {
        letter-spacing: 0.1em;
    }

    :global(.app-footer) :global(svg) {
        display: inline;
        margin-left: 0.1em;
    }
</style>
