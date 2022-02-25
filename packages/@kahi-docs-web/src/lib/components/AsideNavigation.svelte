<script context="module" lang="ts">
    import type {PROPERTY_PALETTE} from "@kahi-ui/framework";

    const BADGE_PALETTES: Record<string, PROPERTY_PALETTE | undefined> = {
        deprecated: "negative",

        new: "affirmative",

        updated: "accent",
    };

    function get_palette(text: string): PROPERTY_PALETTE {
        text = text.toLowerCase();

        return BADGE_PALETTES[text] ?? "neutral";
    }
</script>

<script lang="ts">
    /**
     * TODO: Detect page update and scroll menu to new page if applicable
     *
     * TODO: Scroll to current active item when collapsed on Mobile / Tablet
     */

    import {page} from "$app/stores";
    import {Aside, Badge, Button, Menu, Overlay, Position, Spacer, Text} from "@kahi-ui/framework";
    import {Menu as MenuIcon, X} from "lucide-svelte";
    import {onMount, tick} from "svelte";

    import {scroll_into_container} from "../client/element";

    import AppAnchor from "./AppAnchor.svelte";

    let section_element: HTMLElement | undefined = undefined;

    function on_active(event: CustomEvent<void>): void {
        handle_current();
    }

    function handle_current() {
        if (!section_element) return;

        const link_element = section_element.querySelector<HTMLElement>("a[aria-current]");
        if (link_element) scroll_into_container(link_element, "center", "smooth", section_element);
    }

    onMount(async () => {
        await tick();

        handle_current();
    });
</script>

{#if $page.stuff.navigation}
    <Position variation="action" alignment_x="left" hidden={["desktop", "widescreen"]}>
        <Button is="label" for="aside-navigation">
            <MenuIcon size="1em" />
        </Button>
    </Position>

    <Overlay.Container
        class="aside-navigation"
        logic_id="aside-navigation"
        contents={["desktop", "widescreen"]}
        dismissible
        on:active={on_active}
    >
        <Overlay.Backdrop hidden={["desktop", "widescreen"]} />

        <Overlay.Section
            animation="slide"
            direction="left"
            alignment_x="left"
            contents={["desktop", "widescreen"]}
        >
            <Aside.Container palette="off" variation="sticky">
                <!-- TODO: Margin modifier is temp until Framework update to fix it -->
                <Aside.Section bind:element={section_element} margin_bottom="none">
                    <Menu.Container>
                        {#each $page.stuff.navigation as menu (menu.text)}
                            <Menu.Heading variation="divider">
                                {menu.text}
                            </Menu.Heading>

                            <Menu.Section>
                                {#each menu.items as anchor (anchor.href)}
                                    <AppAnchor class="menu--item" href={anchor.href} prefetch>
                                        {anchor.text}

                                        {#if anchor.badge}
                                            <Spacer is="span" />
                                            <Badge
                                                palette={get_palette(anchor.badge)}
                                                radius="nano"
                                            >
                                                {anchor.badge}
                                            </Badge>
                                        {/if}
                                    </AppAnchor>
                                {/each}
                            </Menu.Section>
                        {/each}
                    </Menu.Container>
                </Aside.Section>

                <Position variation={["container", "action"]} hidden={["desktop", "widescreen"]}>
                    <Overlay.Button palette="inverse" variation="clear">
                        <X size="1em" />
                    </Overlay.Button>
                </Position>
            </Aside.Container>
        </Overlay.Section>
    </Overlay.Container>
{:else}
    <Text is="strong" palette="negative">Error</Text>: failed to load page navigation
{/if}

<style>
    /**
     * NOTE: Need custom styling here to support the layout
     */

    :global(.aside-navigation .aside) {
        grid-area: aside;

        width: 19rem;
        height: 100vh;
        max-height: 100%;
    }

    :global(.aside-navigation) :global(span[role="separator"]),
    :global(.aside-navigation) :global(.badge) {
        text-transform: uppercase;
    }

    @media (min-width: 768px) {
        :global(.aside-navigation .aside) {
            padding-top: 80px;
            z-index: 0 !important;
        }
    }
</style>
