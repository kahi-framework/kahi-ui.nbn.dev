<script lang="ts">
    import {page} from "$app/stores";
    import type {
        PROPERTY_PALETTE,
        PROPERTY_SIZING,
        PROPERTY_VARIATION_BUTTON,
    } from "@kahi-ui/framework";

    import {is_current_page, is_external_url} from "@kahi-docs/shared";

    let _class: string = "";
    export {_class as class};

    export let is: "a" | "button" = "a";

    export let href: string;

    export let no_handle: boolean = false;
    export let no_scroll: boolean = false;
    export let prefetch: boolean = false;

    export let palette: PROPERTY_PALETTE | undefined = undefined;
    export let variation: PROPERTY_VARIATION_BUTTON | undefined = undefined;
    export let sizing: PROPERTY_SIZING | undefined = undefined;

    $: _is_current = no_handle ? false : is_current_page($page, href);
    $: _is_external = is_external_url(href);

    $: _no_scroll = _is_external ? undefined : no_scroll || undefined;
    $: _prefetch = _is_external ? undefined : prefetch || undefined;
</script>

{#if is === "button"}
    <a
        class="button {_class}"
        aria-current={_is_current ? "page" : undefined}
        {href}
        target={_is_external ? "_blank" : undefined}
        rel={_is_external ? "noopener noreferrer" : undefined}
        sveltekit:noscroll={_no_scroll}
        sveltekit:prefetch={_prefetch}
        data-palette={palette}
        data-sizing={sizing}
        data-variation={variation}
    >
        <slot />
    </a>
{:else}
    <a
        class={_class || undefined}
        aria-current={_is_current ? "page" : undefined}
        {href}
        target={_is_external ? "_blank" : undefined}
        rel={_is_external ? "noopener noreferrer" : undefined}
        sveltekit:noscroll={_no_scroll}
        sveltekit:prefetch={_prefetch}
        data-palette={palette}
    >
        <slot />
    </a>
{/if}
