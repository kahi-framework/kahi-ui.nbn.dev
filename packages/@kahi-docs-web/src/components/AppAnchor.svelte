<script lang="ts">
    import {page} from "$app/stores";
    import type {
        PROPERTY_PALETTE,
        PROPERTY_SIZING,
        PROPERTY_VARIATION_BUTTON,
    } from "@kahi-ui/framework";

    import {is_current_page, is_external_url} from "@kahi-docs/shared";

    export let is: "a" | "button" = "a";

    export let href: string;

    export let no_handle: boolean = false;
    export let no_scroll: boolean = false;
    export let prefetch: boolean = false;

    export let palette: PROPERTY_PALETTE | undefined = undefined;
    export let variation: PROPERTY_VARIATION_BUTTON | undefined = undefined;
    export let size: PROPERTY_SIZING | undefined = undefined;

    $: _is_current = no_handle ? false : is_current_page($page, href);
    $: _is_external = is_external_url(href);
</script>

{#if is === "button"}
    <a
        class="button"
        aria-current={_is_current ? "page" : undefined}
        {href}
        target={_is_external ? "_blank" : undefined}
        rel={_is_external ? "noopener noreferrer" : undefined}
        sveltekit:noscroll={no_scroll ? true : undefined}
        sveltekit:prefetch={prefetch ? true : undefined}
        data-palette={palette}
        data-size={size}
        data-variation={variation}
    >
        <slot />
    </a>
{:else}
    <a
        aria-current={is_current_page($page, href) ? "page" : undefined}
        {href}
        target={_is_external ? "_blank" : undefined}
        rel={_is_external ? "noopener noreferrer" : undefined}
        sveltekit:noscroll={no_scroll ? true : undefined}
        sveltekit:prefetch={prefetch ? true : undefined}
        data-palette={palette}
    >
        <slot />
    </a>
{/if}
