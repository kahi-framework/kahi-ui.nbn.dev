<script context="module" lang="ts">
    import {browser} from "$app/env";
    import {htmlpalette} from "@kahi-ui/framework";
    import {get} from "svelte/store";

    import {preferencetheme} from "@kahi-docs/shared";

    const _htmlpalette = htmlpalette();
    const _preferencetheme = preferencetheme();

    if (browser) {
        const theme = get(_preferencetheme);
        if (theme) document.documentElement.setAttribute("data-palette", theme);

        _htmlpalette.subscribe((value) => {
            _preferencetheme.set(value as any);
        });
    }
</script>
