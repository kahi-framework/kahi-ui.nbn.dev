<script lang="ts">
    import {
        Card,
        Clickable,
        Ellipsis,
        Overlay,
        Scrollable,
        Stack,
        Text,
        TextInput,
        Tile,
    } from "@kahi-ui/framework";

    import type {ISearcher, ISearchResult} from "../../lib/client/search";
    import {make_searcher} from "../../lib/client/search";

    import AppAnchor from "./AppAnchor.svelte";
    import ArrowRight from "./icons/ArrowRight.svelte";
    import File from "./icons/File.svelte";

    export let state: boolean = false;

    let results: ISearchResult[] | null = null;
    let value: string = "";
    let searcher: ISearcher | null = null;
    let promise: Promise<any> | null = null;

    $: if (!state) value = "";
    $: if (state && !promise) promise = make_searcher().then((_searcher) => (searcher = _searcher));
    $: if (searcher) results = value ? searcher(value) : null;
</script>

<Overlay
    class="search-prompt"
    logic_id="search-prompt"
    alignment_y="top"
    spacing="medium"
    bind:state
    captive
    dismissible
>
    {#if searcher}
        <Card.Container palette="auto" margin_top="huge" width="prose" max_width="viewport-75">
            <Card.Section>
                <TextInput placeholder="Search docs..." variation="block" bind:value />
            </Card.Section>

            {#if results}
                <Card.Section>
                    <Scrollable max_height="viewport-50">
                        <Stack spacing="small">
                            {#each results as result (result.identifier)}
                                <Clickable.Container>
                                    <Tile.Container sizing="small">
                                        <Tile.Figure style="font-size:24px;">
                                            <File />
                                        </Tile.Figure>

                                        <Tile.Section>
                                            <Tile.Header>
                                                <Clickable.Anchor
                                                    href="/{result.identifier}"
                                                    target="_blank"
                                                >
                                                    {result.title}
                                                </Clickable.Anchor>
                                            </Tile.Header>
                                        </Tile.Section>

                                        <Tile.Footer>
                                            <ArrowRight />
                                        </Tile.Footer>
                                    </Tile.Container>
                                </Clickable.Container>
                            {/each}
                        </Stack>
                    </Scrollable>
                </Card.Section>
            {/if}

            <Card.Section>
                <AppAnchor href="https://github.com/nextapps-de/flexsearch" palette="accent">
                    Powered by FlexSearch
                </AppAnchor>
            </Card.Section>
        </Card.Container>
    {:else}
        <Card.Container palette="auto" margin_top="huge" width="prose" max_width="viewport-75">
            <Card.Header>
                <Text is="span" align="center" width="100">
                    Initializing search engine<Ellipsis />
                </Text>
            </Card.Header>
        </Card.Container>
    {/if}
</Overlay>
