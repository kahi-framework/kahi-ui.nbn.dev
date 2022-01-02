<script lang="ts">
    /**
     * TODO: Detect page update and scroll menu to new page if applicable
     *
     * TODO: Scroll to current active item when collapsed on Mobile / Tablet
     */

    import {Aside, Badge, Button, Menu, Overlay, Position, Spacer} from "@kahi-ui/framework";
    import {onMount} from "svelte";

    import {navigation} from "@kahi-docs/shared";

    import {scroll_into_container} from "../client/element";

    import MenuIcon from "./icons/Menu.svelte";
    import X from "./icons/X.svelte";

    import AppAnchor from "./AppAnchor.svelte";

    let section_element: HTMLElement | undefined = undefined;

    onMount(() => {
        if (!section_element) return;

        const link_element = section_element.querySelector<HTMLElement>("a[aria-current]");
        if (link_element) scroll_into_container(link_element, section_element, "center", "smooth");
    });
</script>

<Position variation="action" alignment_x="left" hidden={["desktop", "widescreen"]}>
    <Button for="aside-navigation">
        <MenuIcon />
    </Button>
</Position>

<Overlay.Container
    class="aside-navigation"
    logic_id="aside-navigation"
    contents={["desktop", "widescreen"]}
    dismissible
>
    <Overlay.Backdrop hidden={["desktop", "widescreen"]} />

    <Overlay.Section
        animation="slide"
        direction="left"
        alignment_x="left"
        contents={["desktop", "widescreen"]}
    >
        <Aside.Container variation="sticky">
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
                                                    <Spacer is="span" />
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

            <Position variation={["container", "action"]} hidden={["desktop", "widescreen"]}>
                <Overlay.Button variation="clear">
                    <X />
                </Overlay.Button>
            </Position>
        </Aside.Container>
    </Overlay.Section>
</Overlay.Container>

<style>
    /**
     * NOTE: Need custom styling here to support the layout
     */

    :global(.aside-navigation .aside) {
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
        :global(.aside-navigation .aside) {
            padding-top: 4.4rem;
        }
    }
</style>
