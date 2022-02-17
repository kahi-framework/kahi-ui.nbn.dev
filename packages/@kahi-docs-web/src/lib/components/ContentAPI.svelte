<script lang="ts">
    import {Heading, Tab} from "@kahi-ui/framework";

    import type {IPageRender, IReferenceMap} from "@kahi-docs/markdown";
    import {content} from "@kahi-docs/shared";

    import APIReference from "./APIReference.svelte";

    function has_references(references: IReferenceMap): boolean {
        return Object.keys(references).length > 0;
    }

    function get_initial_tab(render: IPageRender): string | null {
        if (has_references(render.references.properties)) return "content-api-properties";
        else if (has_references(render.references.events)) return "content-api-events";
        else if (has_references(render.references.slots)) return "content-api-slots";
        else if (has_references(render.references.custom_properties))
            return "content-api-custom-properties";

        return null;
    }

    let state = get_initial_tab($content);
</script>

{#if state}
    <Heading is="h2" id="api-reference">API Reference</Heading>

    <Tab.Container class="content-api" logic_name="content-api" logic_state={state}>
        {#if has_references($content.references.properties)}
            <Tab.Group logic_id="content-api-properties">
                <Tab.Label palette="accent">Properties</Tab.Label>

                <Tab.Section>
                    <APIReference references={$content.references.properties} id="properties" />
                </Tab.Section>
            </Tab.Group>
        {/if}

        {#if has_references($content.references.events)}
            <Tab.Group logic_id="content-api-events">
                <Tab.Label palette="accent">Events</Tab.Label>

                <Tab.Section>
                    <APIReference references={$content.references.events} id="events" />
                </Tab.Section>
            </Tab.Group>
        {/if}

        {#if has_references($content.references.slots)}
            <Tab.Group logic_id="content-api-slots">
                <Tab.Label palette="accent">Slots</Tab.Label>

                <Tab.Section>
                    <APIReference references={$content.references.slots} id="slots" />
                </Tab.Section>
            </Tab.Group>
        {/if}

        <!--
            TODO: All the CSS Custom Properties need to completely reevaluated
            post `0.6.0` release. Since on release they will be out-of-date
        -->

        <!--
        {#if has_references($content.references.custom_properties)}
            <Tab.Group logic_id="content-api-custom-properties">
                <Tab.Label palette="accent">Custom Properties</Tab.Label>

                <Tab.Section>
                    <APIReference
                        references={$content.references.custom_properties}
                        id="custom-properties"
                    />
                </Tab.Section>
            </Tab.Group>
        {/if}
        -->
    </Tab.Container>
{/if}
