<script lang="ts">
    import {page} from "$app/stores";
    import type {PROPERTY_PALETTE} from "@kahi-ui/framework";

    import {is_current_page, is_external_url} from "@kahi-docs/shared";

    export let href: string;

    export let no_scroll: boolean = false;
    export let prefetch: boolean = false;

    export let palette: PROPERTY_PALETTE | undefined = undefined;

    $: _is_external = is_external_url(href);
</script>

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
