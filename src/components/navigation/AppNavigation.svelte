<script lang="ts">
    import {browser} from "$app/env";
    import {Anchor, Divider, Portal, Omni, Text, TextInput} from "@kahi-ui/framework";

    import {applicationconfig, appnavigation, is_external_url} from "@kahi-docs/shared";

    import MenuNavigation from "./MenuNavigation.svelte";
    import SearchModal from "../search/SearchModal.svelte";

    let state: boolean = false;
    let search_state: boolean = false;

    function on_search_focus(event: FocusEvent) {
        const {target} = event;
        if (target instanceof HTMLInputElement) target.blur();
        search_state = true;
    }
</script>

<!--
    TODO: Do Dark Mode toggle
-->

<Omni.Container class="app-navigation" palette="dark" variation="sticky">
    <Omni.Header>
        <Anchor href={$applicationconfig.urls.base}>
            {$applicationconfig.application.title}
        </Anchor>

        {#if $applicationconfig.application.sub_title}
            <Divider orientation="vertical" />

            {#if $applicationconfig.application.sub_href}
                <!-- TODO: Could probably condense this with a property spread -->
                {#if is_external_url($applicationconfig.application.sub_href)}
                    <Anchor
                        href={$applicationconfig.application.sub_href}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Text is="small" palette="light">
                            {$applicationconfig.application.sub_title}
                        </Text>
                    </Anchor>
                {:else}
                    <Anchor href={$applicationconfig.application.sub_href}>
                        <Text is="small" palette="light">
                            {$applicationconfig.application.sub_title}
                        </Text>
                    </Anchor>
                {/if}
            {:else}
                <Text is="small">
                    {$applicationconfig.application.sub_title}
                </Text>
            {/if}
        {/if}
    </Omni.Header>

    <Omni.Footer>
        {#if browser}
            <Omni.Section class="app-navigation-search" padding_x="huge" max_width="prose">
                <TextInput
                    type="search"
                    placeholder="Search"
                    variation="block"
                    align="center"
                    on:focus={on_search_focus}
                />
            </Omni.Section>
        {/if}

        <Omni.Section>
            <MenuNavigation items={$appnavigation} orientation="horizontal" />
        </Omni.Section>
    </Omni.Footer>
</Omni.Container>

{#if browser}
    <Portal>
        <SearchModal bind:state={search_state} />
    </Portal>
{/if}

<style>
    :global(.app-navigation) {
        grid-area: header;

        height: 5.25rem;
    }

    :global(.app-navigation) :global(.app-navigation-search) {
        flex-grow: 1;
    }
</style>
