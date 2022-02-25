<script lang="ts">
    import {browser} from "$app/env";
    import {htmlmode} from "@kahi-ui/framework";

    import {preferencetheme} from "@kahi-docs/shared";

    import PageMetadata from "./PageMetadata.svelte";
    import PagePrerender from "./PagePrerender.svelte";

    const _htmlmode = htmlmode();
    $: if (browser) $_htmlmode = $preferencetheme ?? "";
</script>

<PageMetadata />
<PagePrerender />
