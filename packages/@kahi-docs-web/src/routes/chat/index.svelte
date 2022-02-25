<script context="module" lang="ts">
    const URL_CHAT = "https://discord.com/invite/8skV3G6bEa";
</script>

<script lang="ts">
    import {Ellipsis, Hero} from "@kahi-ui/framework";

    import AppAnchor from "../../lib/components/AppAnchor.svelte";
</script>

<svelte:head>
    <meta http-equiv="refresh" content="0;{URL_CHAT}" />
</svelte:head>

<Hero.Container padding_y="huge" height="viewport-100">
    <Hero.Header>Redirecting<Ellipsis /></Hero.Header>
    <Hero.Footer>
        Click to goto the Kahi UI
        <AppAnchor class="anchor" href={URL_CHAT}>Discord</AppAnchor>
        invite.
    </Hero.Footer>
</Hero.Container>
