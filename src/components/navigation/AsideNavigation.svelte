<script lang="ts">
    /**
     * TODO: Detect page update and scroll menu to new page if applicable
     *
     * TODO: Scroll to current active item when collapsed on Mobile / Tablet
     */

    import {Aside, ContextButton} from "@kahi-ui/framework";
    import {Menu} from "svelte-feather/components/Menu";
    import {X} from "svelte-feather/components/X";

    import type {INavigationMenu} from "@kahi-docs/config";

    import MenuNavigation from "./MenuNavigation.svelte";

    export let items: INavigationMenu[];
    export let state: boolean = false;
</script>

<Aside.Container
    class="aside-navigation"
    logic_id="aside-navigation"
    palette="dark"
    bind:state
    captive
    dismissible
>
    <!-- TODO: Margin modifier is temp until Framework update to fix it -->
    <Aside.Section margin_bottom="none" padding_y="medium">
        <MenuNavigation {items} />
    </Aside.Section>

    <ContextButton hidden={["desktop", "widescreen"]} size="large">
        <Menu />
    </ContextButton>

    <ContextButton palette="dark" variation="clear" size="large" hidden={["desktop", "widescreen"]}>
        <X />
    </ContextButton>
</Aside.Container>

<style>
    /**
     * NOTE: Need custom styling here to support the layout
     */

    :global(.aside-navigation) {
        position: sticky !important;
        top: 5.25rem;

        grid-area: aside;

        width: 15rem;
        height: calc(100vh - 5.25rem);
    }

    :global(.aside-navigation) :global(span[role="separator"]) {
        text-transform: uppercase;
    }

    @media (max-width: 767.9px) {
        :global(.aside-navigation) {
            height: 100%;
        }
    }
</style>
