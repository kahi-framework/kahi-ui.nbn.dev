<script context="module" lang="ts">
    import {viewports} from "@kahi-ui/framework";
    import {Book} from "svelte-feather/components/Book";
    import {Code} from "svelte-feather/components/Code";
    import {MessageCircle} from "svelte-feather/components/MessageCircle";
    import {Package} from "svelte-feather/components/Package";

    const LINKS_APPLICATION = [
        {href: "/docs/framework/getting-started", text: "Documentation", icon: Book},
        {href: "https://github.com/novacbn/kahi-ui", text: "Source", icon: Code},
        {href: "https://github.com/novacbn/kahi-ui/releases", text: "Releases", icon: Package},
        {href: "/chat", text: "Chat", icon: MessageCircle},
    ];

    // HACK: This is here so when the parent changes
    // (e.g. `LandingLayout` -> `AsideLayout`), the value doesn't get reset

    const _collapse_viewports = viewports({mobile: true, tablet: true, desktop: true});
    const _search_viewports = viewports({mobile: true, tablet: true});
</script>

<script lang="ts">
    import {browser} from "$app/env";
    import {base} from "$app/paths";
    import type {IKeybindEvent} from "@kahi-ui/framework";
    import {
        Box,
        ContextButton,
        Divider,
        Menu,
        Popover,
        Portal,
        Omni,
        Text,
        TextInput,
    } from "@kahi-ui/framework";
    import {MoreVertical} from "svelte-feather/components/MoreVertical";
    import {Search} from "svelte-feather/components/Search";

    import {search_keybind} from "../client/keybind";
    import {PACKAGE_VERSION} from "../shared/constants";

    import AppAnchor from "./AppAnchor.svelte";
    import SearchPrompt from "./SearchPrompt.svelte";
    import ThemeButton from "./ThemeButton.svelte";

    export let state: boolean = false;
    let search_state: boolean = false;

    function on_search_bind(event: IKeybindEvent): void {
        event.preventDefault();

        state = false;
        search_state = true;
    }

    function on_search_focus(event: FocusEvent | MouseEvent): void {
        const {target} = event;
        if (target instanceof HTMLInputElement) target.blur();

        state = false;
        search_state = true;
    }

    $: if (!$_collapse_viewports) state = false;
</script>

<svelte:window use:search_keybind={on_search_bind} />

<Omni.Container class="app-navigation" palette="dark">
    <Omni.Header>
        <AppAnchor href={base || "/"} no_handle prefetch>Kahi UI</AppAnchor>
        <Divider orientation="vertical" />

        <AppAnchor href="https://github.com/novacbn/kahi-ui/releases/v{PACKAGE_VERSION}">
            <Text is="small">
                v{PACKAGE_VERSION}
            </Text>
        </AppAnchor>
    </Omni.Header>

    <Omni.Footer>
        <Omni.Section
            class="app-navigation-search"
            hidden={!browser || $_search_viewports}
            padding_x="large"
            max_width="prose"
        >
            <TextInput
                type="search"
                placeholder="[CTRL+/] Search"
                size="small"
                variation="block"
                align="center"
                on:focus={on_search_focus}
            />
        </Omni.Section>

        <Omni.Section>
            <Popover
                logic_id="app-navigation"
                alignment_x="left"
                spacing="small"
                hidden={["mobile", "tablet", "desktop"]}
                dismissible
                bind:state
            >
                <ContextButton palette="light" variation="clear" size="huge" hidden="widescreen">
                    <MoreVertical />
                </ContextButton>

                <Box hidden="widescreen" padding="medium" shape="rounded">
                    <Menu.Container hidden="widescreen">
                        {#each LINKS_APPLICATION as item (item.href)}
                            <Menu.Item>
                                <AppAnchor href={item.href} no_handle prefetch>
                                    <svelte:component this={item.icon} />
                                    {item.text}
                                </AppAnchor>
                            </Menu.Item>
                        {/each}

                        {#if browser}
                            <Menu.Item>
                                <ThemeButton has_text />
                            </Menu.Item>

                            <Menu.Button hidden={!$_search_viewports} on:click={on_search_focus}>
                                <Search />
                                Search
                            </Menu.Button>
                        {/if}
                    </Menu.Container>
                </Box>
            </Popover>

            <Menu.Container
                hidden={["mobile", "tablet", "desktop"]}
                orientation="horizontal"
                sizing="small"
            >
                {#each LINKS_APPLICATION as item (item.href)}
                    <Menu.Item>
                        <AppAnchor href={item.href} no_handle prefetch>
                            <svelte:component this={item.icon} />
                            {item.text}
                        </AppAnchor>
                    </Menu.Item>
                {/each}

                {#if browser}
                    <Menu.Item>
                        <ThemeButton />
                    </Menu.Item>
                {/if}
            </Menu.Container>
        </Omni.Section>
    </Omni.Footer>
</Omni.Container>

{#if browser}
    <Portal>
        <SearchPrompt bind:state={search_state} />
    </Portal>
{/if}

<style>
    :global(.app-navigation) {
        grid-area: header;

        position: fixed;
        top: 0;

        width: 100%;
        height: 4.4rem;
    }

    :global(.app-navigation) :global(header) :global(small) {
        font-size: 65%;
    }

    :global(.app-navigation) :global(.app-navigation-search) {
        flex-grow: 1;
    }
</style>
