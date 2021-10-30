<script context="module" lang="ts">
    const URL_CHAT = "https://discord.com/invite/JvUbmJvUBG";
</script>

<script lang="ts">
    import {Ellipsis, Hero} from "@kahi-ui/framework";

    import AppAnchor from "../lib/components/AppAnchor.svelte";
    import PageMetadata from "../lib/components/PageMetadata.svelte";
</script>

<svelte:head>
    <meta http-equiv="refresh" content="0;{URL_CHAT}" />

    <PageMetadata title="Redirecting to Discord..." />
</svelte:head>

<Hero.Container palette="dark" padding_y="huge" height="viewport-100">
    <Hero.Header>Redirecting<Ellipsis /></Hero.Header>
    <Hero.Footer>
        Click to goto the Kahi UI
        <AppAnchor href={URL_CHAT}>Discord</AppAnchor>
        invite.
    </Hero.Footer>
</Hero.Container>
