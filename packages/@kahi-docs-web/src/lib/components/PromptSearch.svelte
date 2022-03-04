<script context="module" lang="ts">
    import {dev} from "$app/env";
    import FlexSearch from "flexsearch";
    import {Book, Edit, Megaphone} from "lucide-svelte";
    import type {SvelteComponent} from "svelte";

    import {memoize, normalize_pathname} from "@kahi-docs/shared";

    import type {
        ISearchGet,
        ISearchIndex,
        ISearchRecord,
    } from "../../routes/api/v4/search/index.json";

    enum CONTENT_TYPES {
        blog = "blog",

        docs = "docs",

        playground = "playground",
    }

    const CONTENT_ICONS: Record<string, typeof SvelteComponent | undefined> = {
        [CONTENT_TYPES.blog]: Megaphone,
        [CONTENT_TYPES.docs]: Book,
        [CONTENT_TYPES.playground]: Edit,
    };

    enum SEARCH_WEIGHTS_FIELD {
        text,

        title,

        identifier,
    }

    enum SEARCH_WEIGHTS_SPECIAL {
        preview = 1,
    }

    const SEARCH_WEIGHTS_TYPE = {
        [CONTENT_TYPES.playground]: 0,
        [CONTENT_TYPES.docs]: 1,
        [CONTENT_TYPES.blog]: 2,
    } as const;

    type ISearcher = (query: string) => ISearchResult[];

    interface ISearchResult {
        identifier: string;

        title: string;
    }

    async function fetch_search_index(): Promise<ISearchIndex> {
        const response = await fetch("/api/v4/search.json");
        const data = (await response.json()) as ISearchGet;

        return data.data;
    }

    function get_content_type(identifier: string): CONTENT_TYPES {
        return normalize_pathname(identifier).split("/")[1] as CONTENT_TYPES;
    }

    function get_icon(identifier: string): typeof SvelteComponent | null {
        const type = get_content_type(identifier);

        return CONTENT_ICONS[type] ?? null;
    }

    async function _make_searcher(): Promise<ISearcher> {
        const documents = new FlexSearch.Document<ISearchRecord>({
            tokenize: "full",
            preset: "match",

            document: {
                id: "identifier",
                index: ["identifier", "text", "title"],
            },
        });

        const index = await fetch_search_index();
        const lookup = new Map<string, string>();

        await Promise.all(
            index.map((entry) => {
                const {identifier, text, title} = entry;

                lookup.set(identifier, title);
                return documents.addAsync(entry.identifier, {identifier, text, title});
            })
        );

        return (query) => {
            const rankings = new Map<string, number>();
            const search_results = documents.search(query, 10);

            for (const results of search_results) {
                const field_weight =
                    SEARCH_WEIGHTS_FIELD[results.field as keyof typeof SEARCH_WEIGHTS_FIELD];

                for (const identifier of results.result) {
                    const rank = rankings.get(identifier as string) ?? 0;

                    rankings.set(identifier as string, rank + field_weight);
                }
            }

            for (let [identifier, ranking] of rankings.entries()) {
                const content_type = get_content_type(identifier);

                if (content_type === CONTENT_TYPES.playground && identifier.includes("preview")) {
                    ranking += SEARCH_WEIGHTS_SPECIAL.preview;
                }

                ranking += SEARCH_WEIGHTS_TYPE[content_type];
                rankings.set(identifier, ranking);
            }

            return Array.from(rankings.entries())
                .sort((ranking_a, ranking_b) => ranking_b[1] - ranking_a[1])
                .slice(0, 9)
                .map((ranking) => {
                    const [identifier] = ranking;
                    const title = lookup.get(identifier) as string;

                    return {
                        identifier,
                        title,
                    };
                });
        };
    }

    const make_searcher = dev ? _make_searcher : memoize(_make_searcher)[0];
</script>

<script lang="ts">
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
        navigate_down,
        navigate_up,
    } from "@kahi-ui/framework";
    import {ArrowRight} from "lucide-svelte";
    import {tick} from "svelte";

    import {scroll_into_container} from "../client/element";

    import AppAnchor from "./AppAnchor.svelte";

    export let logic_state: boolean = false;

    let input_element: HTMLInputElement | undefined;
    let scrollable_element: HTMLDivElement | undefined;

    let current: number = -1;
    let value: string = "";

    function get_current(): [HTMLDivElement | null, HTMLAnchorElement | null] {
        if (!scrollable_element) return [null, null];

        const tile_element = scrollable_element.querySelectorAll<HTMLDivElement>(`.tile`)[current];
        if (!tile_element) return [null, null];

        const anchor_element = tile_element.querySelector<HTMLAnchorElement>(".clickable--item");
        return [tile_element, anchor_element];
    }

    async function handle_current(current: number): Promise<void> {
        if (current > -1) {
            await tick();

            const [tile_element, anchor_element] = get_current();
            if (!anchor_element || !tile_element) return;

            anchor_element.focus();
            scroll_into_container(tile_element, "center", "smooth", scrollable_element);
        } else {
            if (input_element) input_element.focus();
            if (scrollable_element) {
                const tile_element = scrollable_element.querySelector<HTMLElement>(".tile");
                if (tile_element)
                    scroll_into_container(tile_element, "center", "smooth", scrollable_element);
            }
        }
    }

    function on_navigation_keybind(
        delta: number,
        results: ISearchResult[] | null,
        event: IKeybindEvent
    ): void {
        event.preventDefault();
        if (!event.detail.active) return;

        const length = results?.length ?? 0;
        current = Math.max(Math.min(current + delta, length - 1), -1);

        handle_current(current);
    }

    async function on_select_enter(index: number, event: PointerEvent): Promise<void> {
        current = index;
        await tick();

        const [_, anchor_element] = get_current();
        if (!anchor_element) return;

        anchor_element.focus();
    }

    function on_textinput_focus(event: FocusEvent): void {
        current = -1;

        handle_current(current);
    }

    $: if (!logic_state) value = "";
    $: if (logic_state && input_element) input_element.focus();

    $: {
        // HACK: Marking `value` here to make this block reactive
        value;

        current = -1;
    }
</script>

<Overlay.Container class="search-prompt" logic_id="search-prompt" dismissible bind:logic_state>
    <Overlay.Backdrop />

    <Overlay.Section animation="slide" direction="top" alignment_y="top">
        {#if logic_state}
            {#await make_searcher()}
                <Card.Container margin_top="huge" width="prose" max_width="viewport-75">
                    <Card.Header>
                        <Center width="100">
                            <Text is="span">
                                Initializing search engine<Ellipsis />
                            </Text>
                        </Center>
                    </Card.Header>
                </Card.Container>
            {:then searcher}
                {@const results = value ? searcher(value) : null}

                <Card.Container
                    margin_top="huge"
                    width="prose"
                    max_width="viewport-75"
                    actions={[
                        [navigate_down, {on_bind: on_navigation_keybind.bind(null, 1, results)}],
                        [navigate_up, {on_bind: on_navigation_keybind.bind(null, -1, results)}],
                    ]}
                >
                    <Card.Section>
                        <TextInput
                            bind:element={input_element}
                            placeholder="Search docs..."
                            variation="block"
                            bind:value
                            on:focusin={on_textinput_focus}
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
                                                elevation="none"
                                                sizing="tiny"
                                                on:pointerenter={on_select_enter.bind(null, index)}
                                            >
                                                <Tile.Figure>
                                                    <svelte:component
                                                        this={get_icon(result.identifier)}
                                                    />
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
                                                    <ArrowRight size="1em" />
                                                </Tile.Footer>
                                            </Tile.Container>
                                        </Clickable.Container>
                                    {/each}
                                </Stack.Container>
                            </Scrollable>
                        </Card.Section>
                    {/if}

                    <Card.Section>
                        <AppAnchor
                            class="anchor"
                            href="https://github.com/nextapps-de/flexsearch"
                            palette="informative"
                        >
                            Powered by FlexSearch
                        </AppAnchor>
                    </Card.Section>
                </Card.Container>
            {/await}
        {/if}
    </Overlay.Section>
</Overlay.Container>
