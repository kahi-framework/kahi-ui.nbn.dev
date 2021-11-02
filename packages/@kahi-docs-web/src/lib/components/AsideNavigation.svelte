<script lang="ts">
    /**
     * TODO: Detect page update and scroll menu to new page if applicable
     *
     * TODO: Scroll to current active item when collapsed on Mobile / Tablet
     */

    import {Aside, Badge, ContextButton, Menu, Spacer} from "@kahi-ui/framework";
    import {onMount} from "svelte";

    import {navigation} from "@kahi-docs/shared";

    import MenuIcon from "./icons/Menu.svelte";
    import X from "./icons/X.svelte";

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

                                        {#if anchor.badge}
                                            <Spacer variation="inline" />
                                            <Badge palette="accent" shape="rounded">
                                                {anchor.badge}
                                            </Badge>
                                        {/if}
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
        max-height: 100%;
    }

    :global(.aside-navigation) :global(.badge) {
        font-size: 80%;
    }

    :global(.aside-navigation) :global(span[role="separator"]),
    :global(.aside-navigation) :global(.badge) {
        text-transform: uppercase;
    }

    @media (min-width: 768px) {
        :global(.aside-navigation) {
            padding-top: 4.4rem;
        }
    }

    @media (max-width: 767.9px) {
        :global(label[for="aside-navigation"]),
        :global(.aside-navigation) {
            z-index: 2;
        }
    }
</style>
