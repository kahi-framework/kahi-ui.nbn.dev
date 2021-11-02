<script lang="ts">
    import {Heading, Tab} from "@kahi-ui/framework";

    import type {IDocumentationRender, IReferenceMap} from "@kahi-docs/markdown";
    import {content} from "@kahi-docs/shared";

    import APIReference from "./APIReference.svelte";

    function has_references(references: IReferenceMap): boolean {
        return Object.keys(references).length > 0;
    }

    function get_initial_tab(render: IDocumentationRender): string | null {
        if (has_references(render.properties.properties)) return "content-api-properties";
        else if (has_references(render.properties.events)) return "content-api-events";
        else if (has_references(render.properties.slots)) return "content-api-slots";
        else if (has_references(render.properties.custom_properties))
            return "content-api-custom-properties";

        return null;
    }

    let state = get_initial_tab($content);
</script>

{#if state}
    <Heading is="h2" id="api-reference">API Reference</Heading>

    <Tab.Container class="content-api" logic_name="content-api" logic_state={state}>
        {#if has_references($content.properties.properties)}
            <Tab.Group logic_id="content-api-properties">
                <Tab.Label palette="accent">Properties</Tab.Label>

                <Tab.Section>
                    <APIReference references={$content.properties.properties} id="properties" />
                </Tab.Section>
            </Tab.Group>
        {/if}

        {#if has_references($content.properties.events)}
            <Tab.Group logic_id="content-api-events">
                <Tab.Label palette="accent">Events</Tab.Label>

                <Tab.Section>
                    <APIReference references={$content.properties.events} id="events" />
                </Tab.Section>
            </Tab.Group>
        {/if}

        {#if has_references($content.properties.slots)}
            <Tab.Group logic_id="content-api-slots">
                <Tab.Label palette="accent">Slots</Tab.Label>

                <Tab.Section>
                    <APIReference references={$content.properties.slots} id="slots" />
                </Tab.Section>
            </Tab.Group>
        {/if}

        {#if has_references($content.properties.custom_properties)}
            <Tab.Group logic_id="content-api-custom-properties">
                <Tab.Label palette="accent">Custom Properties</Tab.Label>

                <Tab.Section>
                    <APIReference
                        references={$content.properties.custom_properties}
                        id="custom-properties"
                    />
                </Tab.Section>
            </Tab.Group>
        {/if}
    </Tab.Container>
{/if}
