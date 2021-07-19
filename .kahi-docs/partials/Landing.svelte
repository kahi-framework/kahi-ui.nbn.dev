<script>
    import {
        Box,
        Button,
        Card,
        Container,
        Divider,
        Figure,
        Grid,
        Heading,
        Hero,
        Spacer,
        Text,
    } from "@kahi-ui/framework";

    // TODO: Update `svelte-feather` with typings
    import {ArrowRight} from "svelte-feather/components/ArrowRight";
    import {Code} from "svelte-feather/components/Code";
    import {Grid as GridIcon} from "svelte-feather/components/Grid";
    import {Moon} from "svelte-feather/components/Moon";
    import {Zap} from "svelte-feather/components/Zap";
</script>

<Hero.Container palette="dark" padding_y="huge">
    <Hero.Header>
        Easy to use Svelte UI for
        <Box palette="accent">rapid prototyping</Box>
        <!--
            TODO: Typing animation for couple different phrases
        -->
    </Hero.Header>

    <Hero.Section>
        Kahi UI is a composable and flexible design library for Svelte that allows you to go from <Text
            is="strong"
        >
            0
        </Text>
        to <Text is="strong">60</Text> in no time.
    </Hero.Section>

    <Hero.Footer>
        <Button
            href="https://github.com/novacbn/kahi-ui"
            rel="noopener noreferrer"
            target="_blank"
            palette="light"
            size="large"
            variation="clear"
        >
            <Code />
            Source
        </Button>

        <Button href="/docs/framework/getting-started" palette="accent" size="large">
            Getting Started
            <ArrowRight />
        </Button>
    </Hero.Footer>
</Hero.Container>

<Container viewport="widescreen" padding_y="huge">
    <Heading is="h3" align="center" variation="headline" padding_x="mobile:tiny">
        Straight-forward. Minimal Markup.
    </Heading>

    <Text align="center" size="huge" margin_top="small" margin_bottom="large">
        <Text is="small">Develop more UI without writing essays worth of markup.</Text>
    </Text>

    <iframe
        class="snippet-repl"
        src="/repl/docs/samples/landing-page/landing-preview?rotation=horizontal"
        loading="lazy"
    />

    <a
        href="/repl/docs/samples/landing-page/landing-preview?rotation=horizontal"
        hidden
        sveltekit:prefetch
    />

    <Divider palette="accent" margin_y="huge" />

    <Heading is="h3" align="center" variation="headline" padding_x="mobile:tiny">
        Features expected of a modern UI.
    </Heading>

    <Text align="center" size="huge" margin_top="small" margin_bottom="large">
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

                <Figure variation="icon" shape="pill">
                    <Box palette="accent" padding="medium" width="content-max">
                        <GridIcon size="1.25rem" />
                    </Box>
                </Figure>
            </Card.Header>

            <Card.Section padding_bottom="medium">
                <Text size="medium">
                    Designed with <Text is="strong">Composability</Text> in mind, author new Components
                    easily.
                </Text>
            </Card.Section>
        </Card.Container>

        <Card.Container>
            <Card.Header>
                Staticly Typed
                <Spacer />

                <Figure variation="icon" shape="pill">
                    <Box palette="accent" padding="medium" width="content-max">
                        <Code size="1.25rem" />
                    </Box>
                </Figure>
            </Card.Header>

            <Card.Section padding_bottom="medium">
                <Text size="medium">
                    Created using <Text is="strong">Typescript</Text>, so a pleasent IDE experience
                    comes out-of-box.
                </Text>
            </Card.Section>
        </Card.Container>

        <Card.Container>
            <Card.Header>
                Dark Mode
                <Spacer />

                <Figure variation="icon" shape="pill">
                    <Box palette="accent" padding="medium" width="content-max">
                        <Moon size="1.25rem" />
                    </Box>
                </Figure>
            </Card.Header>

            <Card.Section padding_bottom="medium">
                <Text size="medium">
                    Supports automatic <Text is="strong">Dark Mode</Text>, or your choice from the
                    built-in palette.
                </Text>
            </Card.Section>
        </Card.Container>

        <Card.Container>
            <Card.Header>
                Progressively Enhanced
                <Spacer />

                <Figure variation="icon" shape="pill">
                    <Box palette="accent" padding="medium" width="content-max">
                        <Zap size="1.25rem" />
                    </Box>
                </Figure>
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

<style>
    :global(.landing-container) :global(.hero) > :global(header),
    :global(.landing-container) :global(.hero) > :global(section) {
        max-width: 50ch !important;
    }

    :global(.landing-container) :global(.snippet-repl) {
        height: min(80ex, 75vh);
    }

    :global(.landing-container) :global(.card) :global(figure) > :global(.box) {
        display: flex;

        align-items: center;
        justify-content: center;
    }
</style>
