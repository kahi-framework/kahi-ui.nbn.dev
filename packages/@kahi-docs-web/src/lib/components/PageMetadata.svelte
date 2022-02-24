<script context="module" lang="ts">
    const DESCRIPTION = "Straight-forward Svelte UI for the Web";

    const IMAGE = "https://kahi-ui.nbn.dev/assets/images/logo-social.png";

    const SITE_NAME = "Kahi UI";
</script>

<script lang="ts">
    import {page} from "$app/stores";

    $: _description =
        $page.stuff.metadata?.description ?? $page.stuff.content?.metadata.title ?? DESCRIPTION;
    $: _separator = $page.stuff.content || $page.stuff.metadata?.description ? "—" : "::";
    $: _title = `${_description} ${_separator} ${SITE_NAME}`;
</script>

<svelte:head>
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:image" content={IMAGE} />
    <meta property="og:site_name" content={SITE_NAME} />
    <meta property="og:title" content={_title} />

    <meta name="twitter:card" content="summary_large_image" />

    <title>{_title}</title>
</svelte:head>
