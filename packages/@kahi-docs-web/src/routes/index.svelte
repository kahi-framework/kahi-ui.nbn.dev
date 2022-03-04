<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {IRouteError} from "../lib/shared/api";

    import type {ISnippetGet} from "./api/v4/snippets/[identifier].json";

    const SNIPPET_IDENTIFIER = "getting-started-patterns";

    export const load: Load = async ({fetch}) => {
        const response = await fetch(`/api/v4/snippets/${SNIPPET_IDENTIFIER}.json`);
        if (!response.ok) {
            const data = (await response.json()) as IRouteError;

            return {
                status: response.status,
                error: data.code,
            };
        }

        const data = (await response.json()) as ISnippetGet;

        return {
            props: {
                snippet: data.data,
            },
            stuff: {
                prerender: [`/api/v4/snippets/${SNIPPET_IDENTIFIER}.json`],
            },
        };
    };
</script>

<script lang="ts">
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
    import {ArrowRight, Code, LayoutTemplate, Moon, Zap} from "lucide-svelte";

    import type {ISnippetRecord} from "./api/v4/snippets/[identifier].json";

    import AppAnchor from "../lib/components/AppAnchor.svelte";
    import REPLEmbed from "../lib/components/repl/REPLEmbed.svelte";

    export let snippet: ISnippetRecord;
</script>

<Hero.Container padding_y="huge">
    <Hero.Header>
        Easy to use Svelte UI for
        <Box palette="accent">rapid prototyping</Box>
        <!--
                TODO: Typing animation for couple different phrases
            -->
    </Hero.Header>

    <Hero.Section>
        Kahi UI is a composable and flexible design library for Svelte that allows you to go from <Text
            is="strong">0</Text
        >
        to <Text is="strong">60</Text> in no time.
    </Hero.Section>

    <Hero.Footer>
        <AppAnchor
            is="button"
            href="https://github.com/novacbn/kahi-ui"
            palette="inverse"
            sizing="large"
            variation="clear"
        >
            <Code size="1em" />
            Source
        </AppAnchor>

        <AppAnchor
            is="button"
            href="/docs/guides/getting-started"
            palette="accent"
            sizing="large"
            no_handle
            prefetch
        >
            Getting Started
            <ArrowRight size="1em" />
        </AppAnchor>
    </Hero.Footer>
</Hero.Container>

<Container width="100" max_width="widescreen" padding_y="huge">
    <Heading is="h3" alignment_x="center" variation="block" padding_x="mobile:tiny">
        Straight-forward. Minimal Markup.
    </Heading>

    <Text
        alignment_x="center"
        sizing="nano"
        variation="block"
        margin_top="small"
        margin_bottom="large"
    >
        <Text is="small">Develop more UI without writing essays worth of markup.</Text>
    </Text>

    <div class="repl-snippet">
        <REPLEmbed identifier={snippet.identifier} value={snippet.script} />
    </div>

    <Divider palette="accent" margin_y="huge" />

    <Heading is="h3" alignment_x="center" variation="block" padding_x="mobile:tiny">
        Features expected of a modern UI.
    </Heading>

    <Text
        alignment_x="center"
        sizing="nano"
        variation="block"
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
                    <LayoutTemplate size="1em" />
                </Box>
            </Card.Header>

            <Card.Section padding_bottom="medium">
                <Text sizing="medium">
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
                    <Code size="1em" />
                </Box>
            </Card.Header>

            <Card.Section padding_bottom="medium">
                <Text sizing="medium">
                    Created using <Text is="strong">Typescript</Text>, so a pleasent IDE experience
                    <Text is="strong">comes out-of-box</Text>.
                </Text>
            </Card.Section>
        </Card.Container>

        <Card.Container>
            <Card.Header>
                Dark Mode
                <Spacer />

                <Box palette="accent" shape="pill" padding="small" width="content-max">
                    <Moon size="1em" />
                </Box>
            </Card.Header>

            <Card.Section padding_bottom="medium">
                <Text sizing="medium">
                    Supports automatic <Text is="strong">Dark Mode</Text>, or your choice from the
                    <Text is="strong">built-in palette</Text>.
                </Text>
            </Card.Section>
        </Card.Container>

        <Card.Container>
            <Card.Header>
                Progressively Enhanced
                <Spacer />

                <Box palette="accent" shape="pill" padding="small" width="content-max">
                    <Zap size="1em" />
                </Box>
            </Card.Header>

            <Card.Section padding_bottom="medium">
                <Text sizing="medium">
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
