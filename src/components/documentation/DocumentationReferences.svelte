<script lang="ts">
    import {Code, Divider, Heading, Spacer, Stack, Text} from "@kahi-ui/framework";

    import type {IReferenceMap} from "@kahi-docs/markdown";

    export let id: string;
    export let references: IReferenceMap;
    export let title: string;

    $: _components = Object.entries(references);
</script>

<Heading is="h2" {id}>{title}</Heading>

{#each _components as [component, properties] (component)}
    <Heading is="h3" id="{id}-{component.toLowerCase()}">{component}</Heading>

    <Stack spacing="medium">
        {#each properties as property (property.name)}
            <div>
                <Heading is="h4" id="{id}-{component.toLowerCase()}-{property.name.toLowerCase()}">
                    <Code>{property.name}</Code>
                </Heading>

                <Divider />
                <Stack spacing="medium">
                    <Stack orientation="horizontal">
                        <Text is="strong">Description</Text>

                        <Spacer orientation="horizontal" spacing="huge" />
                        <Text is="span" align="right" max_width="prose">
                            {@html property.description}
                        </Text>
                    </Stack>

                    <Stack orientation="horizontal">
                        <Text is="strong">Types</Text>

                        <Spacer orientation="horizontal" spacing="huge" />
                        <Stack
                            orientation="horizontal"
                            alignment_x="right"
                            spacing="small"
                            variation="wrap"
                            max_width="prose"
                        >
                            {#each property.types as type (type)}
                                <Code>
                                    {type}
                                    {#if type === property.default}
                                        <Text is="strong">(DEFAULT)</Text>
                                    {/if}
                                </Code>
                            {/each}
                        </Stack>
                    </Stack>
                </Stack>
            </div>
        {/each}
    </Stack>
{/each}

<style>
    :global(h2#properties ~ .stack h4) {
        margin-top: 1em;
        margin-bottom: 0.25em;
    }
</style>
