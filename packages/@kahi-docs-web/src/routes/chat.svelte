<script context="module" lang="ts">
    const URL_CHAT = "https://discord.com/invite/JvUbmJvUBG";
</script>

<script lang="ts">
    import {Ellipsis, Hero} from "@kahi-ui/framework";

    import AppAnchor from "../components/AppAnchor.svelte";
</script>

<svelte:head>
    <title>Straight-forward Svelte UI for the Web :: Kahi UI</title>

    <meta http-equiv="refresh" content="0;{URL_CHAT}" />
</svelte:head>

<Hero.Container palette="dark" padding_y="huge" height="viewport-100">
    <Hero.Header>Redirecting<Ellipsis /></Hero.Header>
    <Hero.Footer>
        Click to goto the Kahi UI
        <AppAnchor href={URL_CHAT}>Discord server</AppAnchor>
        invite.
    </Hero.Footer>
</Hero.Container>
