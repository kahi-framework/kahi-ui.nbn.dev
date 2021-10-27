<script context="module" lang="ts">
    import {viewports} from "@kahi-ui/framework";

    // HACK: Would be nicer to do this via element hiding instead of JS. But since
    // palette toggle is clientside /anyway/, we might as well do this quick and dirty

    const _palette_viewports = viewports({mobile: true, tablet: true, desktop: true});

    // HACK: This is here so when the parent changes
    // (e.g. `LandingLayout` -> `AsideLayout`), the value doesn't get reset

    const _search_viewports = viewports({mobile: true, tablet: true});
</script>

<script lang="ts">
    import {browser} from "$app/env";
    import type {IKeybindEvent} from "@kahi-ui/framework";
    import {
        Anchor,
        Card,
        ContextButton,
        Divider,
        Popover,
        Portal,
        Omni,
        Text,
        TextInput,
        htmlpalette,
        prefersdark,
    } from "@kahi-ui/framework";
    import {Moon} from "svelte-feather/components/Moon";
    import {MoreVertical} from "svelte-feather/components/MoreVertical";
    import {Search} from "svelte-feather/components/Search";
    import {Sun} from "svelte-feather/components/Sun";

    import type {IPreferenceThemeValues} from "@kahi-docs/shared";
    import {
        applicationconfig,
        appnavigation,
        is_external_url,
        preferencetheme,
    } from "@kahi-docs/shared";

    import {search_keybind} from "../../client/keybind";

    import SearchModal from "../search/SearchModal.svelte";

    import MenuNavigation from "./MenuNavigation.svelte";

    const _htmlpalette = htmlpalette();
    const _prefersdark = prefersdark();

    export let state: boolean = false;
    let search_state: boolean = false;

    function on_palette_click(event: MouseEvent): void {
        $_htmlpalette = _next_palette;
        $preferencetheme = _next_palette as IPreferenceThemeValues;
    }

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

    $: _next_palette =
        (!$_htmlpalette && $_prefersdark) || $_htmlpalette === "dark" ? "light" : "dark";
    $: _next_icon = _next_palette === "light" ? Sun : Moon;

    $: if (!$_palette_viewports) state = false;

    $: _items = [
        ...($_search_viewports
            ? [
                  {
                      icon: Search,
                      text: "Search",
                      on_click: on_search_focus,
                  },
              ]
            : []),
        ...$appnavigation,
        ...(browser
            ? [
                  {
                      icon: _next_icon,
                      text: $_palette_viewports
                          ? _next_palette[0].toUpperCase() + _next_palette.slice(1)
                          : "",
                      on_click: on_palette_click,
                  },
              ]
            : []),
    ];
</script>

<svelte:window use:search_keybind={on_search_bind} />

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
        {#if browser && !$_search_viewports}
            <Omni.Section class="app-navigation-search" padding_x="large" max_width="prose">
                <TextInput
                    type="search"
                    placeholder="[CTRL+/] Search"
                    size="small"
                    variation="block"
                    align="center"
                    on:focus={on_search_focus}
                />
            </Omni.Section>
        {/if}

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

                <Card.Container hidden="widescreen">
                    <Card.Section margin="medium">
                        <MenuNavigation items={_items} />
                    </Card.Section>
                </Card.Container>
            </Popover>

            <MenuNavigation
                items={_items}
                orientation="horizontal"
                sizing="small"
                hidden={["mobile", "tablet", "desktop"]}
            />
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

        height: 4.4rem;
    }

    :global(.app-navigation) :global(header) :global(small) {
        font-size: 65%;
    }

    :global(.app-navigation) :global(.app-navigation-search) {
        flex-grow: 1;
    }
</style>
