<script lang="ts">
    import {htmlpalette, prefersdark} from "@kahi-ui/framework";
    import {Moon} from "svelte-feather/components/Moon";
    import {Sun} from "svelte-feather/components/Sun";

    import type {IPreferenceThemeValues} from "@kahi-docs/shared";
    import {preferencetheme} from "@kahi-docs/shared";

    export let has_text: boolean = false;

    const _htmlpalette = htmlpalette();
    const _prefersdark = prefersdark();

    function on_palette_click(event: MouseEvent): void {
        $_htmlpalette = _next_palette;
        $preferencetheme = _next_palette as IPreferenceThemeValues;
    }

    $: _next_palette =
        (!$_htmlpalette && $_prefersdark) || $_htmlpalette === "dark" ? "light" : "dark";
    $: _icon = _next_palette === "light" ? Sun : Moon;
    $: _text = _next_palette[0].toUpperCase() + _next_palette.slice(1);
</script>

<button on:click={on_palette_click}>
    <svelte:component this={_icon} />

    {#if has_text}
        {_text}
    {/if}
</button>
