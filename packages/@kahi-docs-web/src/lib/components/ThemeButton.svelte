<script lang="ts">
    import {htmlmode, prefersdark} from "@kahi-ui/framework";
    import {Moon, Sun} from "lucide-svelte";

    import type {IPreferenceThemeValues} from "@kahi-docs/shared";
    import {preferencetheme} from "@kahi-docs/shared";

    let _class: string = "";
    export {_class as class};

    export let has_text: boolean = false;

    const _htmlmode = htmlmode();
    const _prefersdark = prefersdark();

    function on_palette_click(event: MouseEvent): void {
        $preferencetheme = _next_palette as IPreferenceThemeValues;
    }

    $: _next_palette = (!$_htmlmode && $_prefersdark) || $_htmlmode === "dark" ? "light" : "dark";
    $: _icon = _next_palette === "light" ? Sun : Moon;
    $: _text = _next_palette[0].toUpperCase() + _next_palette.slice(1);
</script>

<button class={_class || undefined} on:click={on_palette_click}>
    <svelte:component this={_icon} size="1em" />

    {#if has_text}
        {_text}
    {/if}
</button>
