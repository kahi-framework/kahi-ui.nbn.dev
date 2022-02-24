<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    const URL_CHAT = "https://discord.com/invite/8skV3G6bEa";

    export const load: Load = async () => {
        return {
            stuff: {
                metadata: {
                    description: "Redirecting to Discord...",
                },
            },
        };
    };
</script>

<script lang="ts">
    import {Ellipsis, Hero} from "@kahi-ui/framework";

    import AppAnchor from "../lib/components/AppAnchor.svelte";
</script>

<svelte:head>
    <meta http-equiv="refresh" content="0;{URL_CHAT}" />
</svelte:head>

<Hero.Container palette="dark" padding_y="huge" height="viewport-100">
    <Hero.Header>Redirecting<Ellipsis /></Hero.Header>
    <Hero.Footer>
        Click to goto the Kahi UI
        <AppAnchor href={URL_CHAT}>Discord</AppAnchor>
        invite.
    </Hero.Footer>
</Hero.Container>
