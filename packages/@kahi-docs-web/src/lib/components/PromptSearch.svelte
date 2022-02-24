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

    import {scroll_into_container} from "../client/element";
    import {next_keybind, previous_keybind} from "../client/keybind";
    import type {ISearcher, ISearchResult} from "../../lib/client/search";
    import {make_searcher} from "../../lib/client/search";

    import AppAnchor from "./AppAnchor.svelte";
    import ArrowRight from "./icons/ArrowRight.svelte";
    import File from "./icons/File.svelte";

    export let logic_state: boolean = false;

    let container_element: HTMLDivElement;
    let input_element: HTMLInputElement;
    let scrollable_element: HTMLDivElement;

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
            scroll_into_container(tile_element, scrollable_element, "center", "smooth");
        } else input_element.focus();
    }

    $: if (!logic_state) value = "";
    $: if (logic_state && !promise)
        promise = make_searcher().then((_searcher) => (searcher = _searcher));
    $: if (searcher) results = value ? searcher(value) : null;
    $: if (logic_state && searcher && input_element) input_element.focus();

    $: {
        // HACK: Marking `value` here to make this block reactive
        value;

        current = -1;
    }
</script>

<Overlay.Container class="search-prompt" logic_id="search-prompt" dismissible bind:logic_state>
    <Overlay.Backdrop />

    <Overlay.Section animation="slide" direction="top" alignment_y="top">
        {#if searcher}
            <Card.Container
                bind:element={container_element}
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
                        <Scrollable bind:element={scrollable_element} max_height="viewport-50">
                            <Stack.Container spacing="small">
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
                            </Stack.Container>
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
            <Card.Container margin_top="huge" width="prose" max_width="viewport-75">
                <Card.Header>
                    <Center width="100">
                        <Text is="span">
                            Initializing search engine<Ellipsis />
                        </Text>
                    </Center>
                </Card.Header>
            </Card.Container>
        {/if}
    </Overlay.Section>
</Overlay.Container>
