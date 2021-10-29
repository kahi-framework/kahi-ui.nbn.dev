<script>
    import {
        Box,
        Card,
        Container,
        Divider,
        Grid,
        Heading,
        Hero,
        Spacer,
        Text,
    } from "@kahi-ui/framework";

    import ArrowRight from "../components/icons/ArrowRight.svelte";
    import Code from "../components/icons/Code.svelte";
    import {Grid as GridIcon} from "svelte-feather/components/Grid";
    import Moon from "../components/icons/Moon.svelte";
    import Zap from "../components/icons/Zap.svelte";

    import AppAnchor from "../components/AppAnchor.svelte";
    import AppLayout from "../components/AppLayout.svelte";
</script>

<svelte:head>
    <title>Straight-forward Svelte UI for the Web :: Kahi UI</title>
</svelte:head>

<!--
    NOTE: Layout stuff is here in index so nested Application
    routes don't inherit it automatically.
-->

<AppLayout>
    <Hero.Container palette="dark" padding_y="huge">
        <Hero.Header>
            Easy to use Svelte UI for
            <Box palette="accent">rapid prototyping</Box>
            <!--
                TODO: Typing animation for couple different phrases
            -->
        </Hero.Header>

        <Hero.Section>
            Kahi UI is a composable and flexible design library for Svelte that allows you to go
            from <Text is="strong">0</Text>
            to <Text is="strong">60</Text> in no time.
        </Hero.Section>

        <Hero.Footer>
            <AppAnchor
                is="button"
                href="https://github.com/novacbn/kahi-ui"
                palette="light"
                size="large"
                variation="clear"
            >
                <Code />
                Source
            </AppAnchor>

            <AppAnchor
                is="button"
                href="/docs/framework/getting-started"
                palette="accent"
                size="large"
                no_handle
                prefetch
            >
                Getting Started
                <ArrowRight />
            </AppAnchor>
        </Hero.Footer>
    </Hero.Container>

    <Container viewport="widescreen" padding_y="huge">
        <Heading is="h2" align="center" variation="headline" padding_x="mobile:tiny">
            Straight-forward. Minimal Markup.
        </Heading>

        <Text
            align="center"
            size="tiny"
            variation="headline"
            margin_top="small"
            margin_bottom="large"
        >
            <Text is="small">Develop more UI without writing essays worth of markup.</Text>
        </Text>

        <iframe
            class="snippet-repl"
            src="/repl/docs/samples/landing-page/landing-preview?rotation=horizontal"
            sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
            loading="lazy"
        />

        <a
            href="/repl/docs/samples/landing-page/landing-preview?rotation=horizontal"
            hidden
            sveltekit:prefetch
        />

        <Divider palette="accent" margin_y="huge" />

        <Heading is="h2" align="center" variation="headline" padding_x="mobile:tiny">
            Features expected of a modern UI.
        </Heading>

        <Text
            align="center"
            size="tiny"
            variation="headline"
            margin_top="small"
            margin_bottom="large"
        >
            <Text is="small">Opinonated when needed. Flexible when wanted.</Text>
        </Text>

        <Grid.Container
            points={["2", "mobile:1"]}
            spacing={["large", "tablet:medium", "mobile:medium"]}
        >
            <Card.Container>
                <Card.Header>
                    Composable
                    <Spacer />

                    <Box palette="accent" shape="pill" padding="small" width="content-max">
                        <GridIcon size="1.25rem" />
                    </Box>
                </Card.Header>

                <Card.Section padding_bottom="medium">
                    <Text size="medium">
                        Designed with <Text is="strong">Composability</Text> in mind, author new Components
                        <Text is="strong">easily</Text>.
                    </Text>
                </Card.Section>
            </Card.Container>

            <Card.Container>
                <Card.Header>
                    Staticly Typed
                    <Spacer />

                    <Box palette="accent" shape="pill" padding="small" width="content-max">
                        <Code size="1.25rem" />
                    </Box>
                </Card.Header>

                <Card.Section padding_bottom="medium">
                    <Text size="medium">
                        Created using <Text is="strong">Typescript</Text>, so a pleasent IDE
                        experience
                        <Text is="strong">comes out-of-box</Text>.
                    </Text>
                </Card.Section>
            </Card.Container>

            <Card.Container>
                <Card.Header>
                    Dark Mode
                    <Spacer />

                    <Box palette="accent" shape="pill" padding="small" width="content-max">
                        <Moon size="1.25rem" />
                    </Box>
                </Card.Header>

                <Card.Section padding_bottom="medium">
                    <Text size="medium">
                        Supports automatic <Text is="strong">Dark Mode</Text>, or your choice from
                        the
                        <Text is="strong">built-in palette</Text>.
                    </Text>
                </Card.Section>
            </Card.Container>

            <Card.Container>
                <Card.Header>
                    Progressively Enhanced
                    <Spacer />

                    <Box palette="accent" shape="pill" padding="small" width="content-max">
                        <Zap size="1.25rem" />
                    </Box>
                </Card.Header>

                <Card.Section padding_bottom="medium">
                    <Text size="medium">
                        Most logic is embedded within <Text is="strong">HTML / CSS</Text>, with <Text
                            is="strong"
                        >
                            Javascript
                        </Text>
                        enhancing the <Text is="strong">UX</Text>.
                    </Text>
                </Card.Section>
            </Card.Container>
        </Grid.Container>
    </Container>
</AppLayout>

<style>
    :global(.app-container) :global(.hero) > :global(header),
    :global(.app-container) :global(.hero) > :global(section) {
        max-width: 50ch !important;
    }

    :global(.app-container) :global(.snippet-repl) {
        height: 80ex;
    }

    :global(.app-container) :global(.card) :global(figure) > :global(.box) {
        display: flex;

        align-items: center;
        justify-content: center;
    }
</style>
