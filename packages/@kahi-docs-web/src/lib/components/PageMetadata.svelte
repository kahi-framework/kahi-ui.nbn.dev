<script context="module" lang="ts">
    const DESCRIPTION = "Straight-forward Svelte UI for the Web";

    const IMAGE = "https://kahi-ui.nbn.dev/assets/images/logo-social.png";

    const SITE_NAME = "Kahi UI";
</script>

<script lang="ts">
    export let separator: string = "";
    export let title: string = DESCRIPTION;
</script>

<svelte:head>
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:image" content={IMAGE} />
    <meta property="og:site_name" content={SITE_NAME} />
    <meta property="og:title" content={separator ? `${title} ${separator} ${SITE_NAME}` : title} />

    <meta name="twitter:card" content="summary_large_image" />

    <title>{separator ? `${title} ${separator} ${SITE_NAME}` : title}</title>
</svelte:head>
