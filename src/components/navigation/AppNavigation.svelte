<script lang="ts">
    import {browser} from "$app/env";
    import {Anchor, Portal, Omni, TextInput} from "@kahi-ui/framework";

    import {applicationconfig, appnavigation} from "@kahi-docs/shared";

    import MenuNavigation from "./MenuNavigation.svelte";
    import SearchModal from "../search/SearchModal.svelte";

    let omni_state: boolean = false;
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

<Omni.Container
    class="app-navigation"
    palette="dark"
    variation="sticky"
    width="100"
    captive
    dismissible
>
    <Omni.Header>
        <Anchor href={$applicationconfig.urls.base || "/"}>
            {$applicationconfig.application.title}
        </Anchor>
    </Omni.Header>

    <Omni.Footer>
        {#if browser}
            <Omni.Section class="app-navigation-search" padding_x="medium" max_width="prose">
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
    }

    :global(.app-navigation) :global(.app-navigation-search) {
        flex-grow: 1;
    }
</style>
