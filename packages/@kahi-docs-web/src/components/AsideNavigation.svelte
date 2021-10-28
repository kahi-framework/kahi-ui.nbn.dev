<script lang="ts">
    /**
     * TODO: Detect page update and scroll menu to new page if applicable
     *
     * TODO: Scroll to current active item when collapsed on Mobile / Tablet
     */

    import {Aside, ContextButton, Menu} from "@kahi-ui/framework";
    import {onMount} from "svelte";
    import {Menu as MenuIcon} from "svelte-feather/components/Menu";
    import {X} from "svelte-feather/components/X";

    import {navigation} from "@kahi-docs/shared";

    import AppAnchor from "./AppAnchor.svelte";

    export let element: HTMLElement | undefined = undefined;

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
    variation="sticky"
    bind:state
    captive
    dismissible
>
    <!-- TODO: Margin modifier is temp until Framework update to fix it -->
    <Aside.Section margin_bottom="none">
        <Menu.Container sizing="small">
            {#each $navigation as menu (menu.text)}
                <Menu.Divider>
                    {menu.text}

                    <svelte:fragment slot="sub-menu">
                        <Menu.SubMenu>
                            {#each menu.items as anchor (anchor.href)}
                                <Menu.Item>
                                    <AppAnchor href={anchor.href}>
                                        {anchor.text}
                                    </AppAnchor>
                                </Menu.Item>
                            {/each}
                        </Menu.SubMenu>
                    </svelte:fragment>
                </Menu.Divider>
            {/each}
        </Menu.Container>
    </Aside.Section>

    <svelte:fragment slot="close">
        <ContextButton
            size="huge"
            palette="dark"
            variation="clear"
            hidden={["desktop", "widescreen"]}
        >
            <X />
        </ContextButton>
    </svelte:fragment>

    <svelte:fragment slot="open">
        <ContextButton size="huge" hidden={["desktop", "widescreen"]}>
            <MenuIcon />
        </ContextButton>
    </svelte:fragment>
</Aside.Container>

<style>
    /**
     * NOTE: Need custom styling here to support the layout
     */

    :global(.aside-navigation) {
        grid-area: aside;

        width: 18rem;
        height: 100vh;

        padding-top: 4.4rem;
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
