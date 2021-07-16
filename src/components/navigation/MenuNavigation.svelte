<script lang="ts">
    import {page} from "$app/stores";
    import type {
        DESIGN_HIDDEN_ARGUMENT,
        DESIGN_ORIENTATION_VERTICAL_ARGUMENT,
    } from "@kahi-ui/framework";
    import {Badge, Menu, Spacer} from "@kahi-ui/framework";
    import type {Page} from "@sveltejs/kit";

    import type {INavigationAnchor, INavigationMenu} from "@kahi-docs/config";
    import {normalize_pathname, noop, is_internal_url} from "@kahi-docs/shared";

    export let items: INavigationMenu[] = [];
    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;
    export let orientation: DESIGN_ORIENTATION_VERTICAL_ARGUMENT | undefined = undefined;

    function is_current(page: Page, anchor: INavigationAnchor): boolean {
        if (is_internal_url(anchor.href)) {
            return normalize_pathname(page.path) === normalize_pathname(anchor.href);
        }

        return false;
    }
</script>

<Menu.Container {hidden} {orientation}>
    {#each items as item, index (index)}
        {#if "separator" in item}
            {#if item.separator}
                <!--
                    HACK: Svelte compiler complains when the `<svelte:fragment>` is not a direct
                    decendent of a Component
                -->

                {#if "items" in item && item.items}
                    <Menu.Divider>
                        {item.separator}

                        <svelte:fragment slot="sub-menu">
                            <Menu.SubMenu>
                                <!--
                                    TODO: This could be a different recursive Component for
                                    de-duplication, but being a bit lazy at the moment
                                -->

                                {#each item.items as sub_item, index (index)}
                                    {#if "href" in sub_item}
                                        <Menu.Item>
                                            <a
                                                aria-current={is_current($page, sub_item)
                                                    ? "page"
                                                    : undefined}
                                                href={sub_item.href}
                                                target={sub_item.is_external ? "_blank" : undefined}
                                                rel={sub_item.is_external
                                                    ? "noopener noreferrer"
                                                    : undefined}
                                                sveltekit:noscroll={sub_item.no_scroll}
                                                sveltekit:prefetch={sub_item.prefetch}
                                                on:click={sub_item.on_click || noop}
                                            >
                                                {#if sub_item.icon}
                                                    <svelte:component this={sub_item.icon} />
                                                {/if}

                                                {sub_item.text}

                                                {#if sub_item.badge}
                                                    <Spacer variation="inline" />

                                                    <Badge palette="accent">
                                                        {sub_item.badge}
                                                    </Badge>
                                                {/if}
                                            </a>
                                        </Menu.Item>
                                    {:else}
                                        <Menu.Button on:click={sub_item.on_click || noop}>
                                            {#if sub_item.icon}
                                                <svelte:component this={sub_item.icon} />
                                            {/if}

                                            {sub_item.text}

                                            {#if sub_item.badge}
                                                <Spacer variation="inline" />

                                                <Badge palette="accent">
                                                    {sub_item.badge}
                                                </Badge>
                                            {/if}
                                        </Menu.Button>
                                    {/if}
                                {/each}
                            </Menu.SubMenu>
                        </svelte:fragment>
                    </Menu.Divider>
                {:else}
                    <Menu.Divider>
                        {item.separator}
                    </Menu.Divider>
                {/if}
            {:else}
                <Menu.Divider />
            {/if}
        {:else if "href" in item}
            <Menu.Item>
                <a
                    current={is_current($page, item) ? "page" : undefined}
                    href={item.href}
                    target={item.is_external ? "_blank" : undefined}
                    rel={item.is_external ? "noopener noreferrer" : undefined}
                    sveltekit:noscroll={item.no_scroll}
                    sveltekit:prefetch={item.prefetch}
                    on:click={item.on_click || noop}
                >
                    {#if item.icon}
                        <svelte:component this={item.icon} />
                    {/if}

                    {item.text}
                </a>
            </Menu.Item>
        {:else}
            <Menu.Button on:click={item.on_click || noop}>
                {#if item.icon}
                    <svelte:component this={item.icon} />
                {/if}

                {item.text}
            </Menu.Button>
        {/if}
    {/each}
</Menu.Container>
