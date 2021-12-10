<script lang="ts">
    import {tick} from "svelte";

    import type {IKeybindEvent} from "@kahi-ui/framework";
    import {
        Card,
        Center,
        Clickable,
        Ellipsis,
        Overlay,
        Scrollable,
        Stack,
        Text,
        TextInput,
        Tile,
    } from "@kahi-ui/framework";

    import {next_keybind, previous_keybind} from "../client/keybind";
    import type {ISearcher, ISearchResult} from "../../lib/client/search";
    import {make_searcher} from "../../lib/client/search";

    import AppAnchor from "./AppAnchor.svelte";
    import ArrowRight from "./icons/ArrowRight.svelte";
    import File from "./icons/File.svelte";

    export let state: boolean = false;

    let container_element: HTMLDivElement;
    let input_element: HTMLInputElement;

    let current: number = -1;
    let results: ISearchResult[] | null = null;
    let value: string = "";
    let searcher: ISearcher | null = null;
    let promise: Promise<any> | null = null;

    function get_current(): [HTMLDivElement | null, HTMLAnchorElement | null] {
        const tile_element = container_element.querySelector<HTMLDivElement>(
            `.tile[data-palette="accent"]`
        );
        if (!tile_element) return [null, null];

        const anchor_element = tile_element.querySelector<HTMLAnchorElement>(".clickable-item");
        return [tile_element, anchor_element];
    }

    function on_next_keybind(event: IKeybindEvent): void {
        event.preventDefault();

        if (!event.detail.active) return;

        current = results ? Math.min(current + 1, results.length - 1) : 0;
        handle_current();
    }

    function on_previous_keybind(event: IKeybindEvent): void {
        event.preventDefault();

        if (!event.detail.active) return;

        current = Math.max(current - 1, -1);
        handle_current();
    }

    async function on_select_enter(index: number, event: PointerEvent): Promise<void> {
        current = index;
        await tick();

        const [_, anchor_element] = get_current();
        if (!anchor_element) return;

        anchor_element.focus();
    }

    async function handle_current(): Promise<void> {
        if (current > -1) {
            await tick();

            const [tile_element, anchor_element] = get_current();
            if (!anchor_element || !tile_element) return;

            anchor_element.focus();
            tile_element.scrollIntoView({behavior: "smooth", block: "nearest"});

            return;
        }

        input_element.focus();
    }

    $: if (!state) value = "";
    $: if (state && !promise) promise = make_searcher().then((_searcher) => (searcher = _searcher));
    $: if (searcher) results = value ? searcher(value) : null;

    $: {
        // HACK: Marking `value` here to make this block reactive
        value;

        current = -1;
    }
</script>

<Overlay
    class="search-prompt"
    logic_id="search-prompt"
    alignment_y="top"
    bind:state
    captive
    dismissible
>
    {#if searcher}
        <Card.Container
            bind:element={container_element}
            palette="auto"
            margin_top="huge"
            width="prose"
            max_width="viewport-75"
            actions={[
                [next_keybind, on_next_keybind],
                [previous_keybind, on_previous_keybind],
            ]}
        >
            <Card.Section>
                <TextInput
                    bind:element={input_element}
                    placeholder="Search docs..."
                    variation="block"
                    bind:value
                />
            </Card.Section>

            {#if results}
                <Card.Section>
                    <Scrollable max_height="viewport-50">
                        <Stack spacing="small">
                            {#each results as result, index (result.identifier)}
                                <Clickable.Container>
                                    <Tile.Container
                                        palette={index === current ? "accent" : undefined}
                                        sizing="small"
                                        on:pointerenter={on_select_enter.bind(null, index)}
                                    >
                                        <Tile.Figure style="font-size:24px;">
                                            <File />
                                        </Tile.Figure>

                                        <Tile.Section>
                                            <Tile.Header>
                                                <Clickable.Anchor
                                                    href={result.identifier}
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
                <Center width="100">
                    <Text is="span">
                        Initializing search engine<Ellipsis />
                    </Text>
                </Center>
            </Card.Header>
        </Card.Container>
    {/if}
</Overlay>
