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
    import {onMount} from "svelte";

    export let element: HTMLElement | undefined = undefined;

    export let items: INavigationMenu[];
    export let state: boolean = false;

    onMount(() => {
        if (!element) return;

        const current_link = element.querySelector("a[aria-current]");
        if (current_link) {
            current_link.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    });
</script>

<Aside.Container
    bind:element
    class="aside-navigation"
    logic_id="aside-navigation"
    bind:state
    captive
    dismissible
>
    <!-- TODO: Margin modifier is temp until Framework update to fix it -->
    <Aside.Section margin_bottom="none" padding_y="large">
        <MenuNavigation sizing="small" {items} />
    </Aside.Section>

    <ContextButton size="huge" hidden={["desktop", "widescreen"]}>
        <Menu />
    </ContextButton>

    <ContextButton size="huge" palette="dark" variation="clear" hidden={["desktop", "widescreen"]}>
        <X />
    </ContextButton>
</Aside.Container>

<style>
    /**
     * NOTE: Need custom styling here to support the layout
     */

    :global(.aside-navigation) {
        position: sticky !important;
        top: 4.4rem;

        grid-area: aside;

        width: 18rem;
        height: calc(100vh - 5rem);
    }

    :global(.aside-navigation) :global(span[role="separator"]),
    :global(.aside-navigation) :global(.badge) {
        text-transform: uppercase;
    }

    @media (max-width: 767.9px) {
        :global(.aside-navigation) {
            height: 100%;
        }
    }
</style>
