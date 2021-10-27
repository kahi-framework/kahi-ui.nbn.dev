<script lang="ts">
    import {Anchor, Ellipsis, Hero} from "@kahi-ui/framework";

    import {applicationconfig} from "@kahi-docs/shared";

    $: _href = $applicationconfig.metadata.discord as string;
</script>

<svelte:head>
    <title>
        {$applicationconfig.application.description} :: {$applicationconfig.application.title}
    </title>

    <meta http-equiv="refresh" content="0;{_href}" />
</svelte:head>

<Hero.Container palette="dark" padding_y="huge" height="viewport-100">
    <Hero.Header>Redirecting<Ellipsis /></Hero.Header>
    <Hero.Footer>
        Click to goto the Kahi UI
        <Anchor href={_href} rel="noopener noreferrer" target="_blank">Discord server</Anchor>
        invite.
    </Hero.Footer>
</Hero.Container>
