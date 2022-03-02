<script lang="ts">
    import {Code, Heading, Scrollable, Stack, Table, Text} from "@kahi-ui/framework";

    import type {IReference, IReferenceMap} from "@kahi-docs/markdown";

    export let id: string;
    export let filter: string = "";
    export let references: IReferenceMap;

    $: _filter = filter.toLowerCase();

    // NOTE: Filtering let's them search for reference category,
    // individual components, and individual property names and types
    let _components: [string, IReference[]][];
    $: {
        _components = Object.entries(references)
            .map<[string, IReference[]]>(([component, properties]) => {
                if (
                    id.toLowerCase().startsWith(_filter) ||
                    component.toLowerCase().startsWith(_filter)
                ) {
                    return [component, properties ?? []];
                }

                return [
                    component,
                    properties?.filter((property) => {
                        return (
                            property.name.toLowerCase().includes(_filter) ||
                            property.types.filter((type) => type.toLowerCase().includes(_filter))
                                .length > 0
                        );
                    }) ?? [],
                ];
            })
            .filter(([component, properties]) => {
                return component.toLowerCase().startsWith(_filter) || properties.length > 0;
            });
    }
</script>

{#if _components.length > 0}
    <Heading is="h2" id="api-reference-{id}" margin_y="medium">
        {id}
    </Heading>

    {#each _components as [component, properties]}
        <Heading is="h3" id="api-reference-{id}-{component.toLowerCase()}" margin_y="medium">
            <Code>
                {component}
            </Code>
        </Heading>

        <Scrollable>
            <Table.Container min-width={["mobile:content-max", "tablet:content-max"]}>
                <Table.Header>
                    <Table.Row>
                        <Table.Heading>Name</Table.Heading>
                        <Table.Heading>Description</Table.Heading>
                        <Table.Heading>Types</Table.Heading>
                    </Table.Row>
                </Table.Header>

                <Table.Section>
                    {#each properties as property}
                        <Table.Row>
                            <Table.Column>
                                <Code>{property.name}</Code>
                            </Table.Column>

                            <Table.Column class="article">
                                {@html property.description}
                            </Table.Column>

                            <Table.Column>
                                <Stack.Container
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
                                </Stack.Container>
                            </Table.Column>
                        </Table.Row>
                    {/each}
                </Table.Section>
            </Table.Container>
        </Scrollable>
    {/each}
{/if}
