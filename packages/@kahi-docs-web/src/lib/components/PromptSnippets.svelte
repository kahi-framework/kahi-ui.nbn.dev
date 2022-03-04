<script context="module" lang="ts">
    import {dev} from "$app/env";

    import {memoize} from "@kahi-docs/shared";

    import type {ISnippetIndex, ISnippetsGet} from "../../routes/api/v4/snippets/index.json";

    async function _fetch_snippet_index(): Promise<ISnippetIndex> {
        const response = await fetch("/api/v4/snippets.json");
        const {data} = (await response.json()) as ISnippetsGet;

        return data.map((record) => {
            return {
                title: record.title,
                snippets: record.snippets.sort((snippet_a, snippet_b) => {
                    if (snippet_a.title.toLowerCase().includes("preview")) return -1;
                    else if (snippet_b.title.toLowerCase().includes("preview")) return 1;
                    return 0;
                }),
            };
        });
    }

    export const fetch_snippet_index = dev
        ? _fetch_snippet_index
        : memoize(_fetch_snippet_index)[0];
</script>

<script lang="ts">
    import {
        Button,
        Card,
        Center,
        Ellipsis,
        Mosaic,
        Overlay,
        Scrollable,
        Stack,
        Text,
        TextInput,
    } from "@kahi-ui/framework";
    import {createEventDispatcher} from "svelte";

    import type {ISnippetRecord} from "../../routes/api/v4/snippets/[identifier].json";
    import {snippets} from "../client/snippets";

    type $$Events = {
        snippet: CustomEvent<{snippet: ISnippetRecord}>;
    };

    const dispatch = createEventDispatcher();

    export let logic_state: boolean = false;

    let input_element: HTMLInputElement | undefined;

    let value: string = "";

    function has_snippets(snippets: ISnippetRecord[], filter: string): boolean {
        // HACK: We would just inline this as `{@const}` but the compiler kept freaking
        // out about the anonymous function
        return !!snippets.find((snippet) => snippet.title.toLowerCase().includes(filter));
    }

    function on_snippet_click(event: MouseEvent, snippet: ISnippetRecord): void {
        dispatch("snippet", {snippet});

        logic_state = false;
    }

    $: if (logic_state && input_element) input_element.focus();
</script>

<Overlay.Container class="snippet-prompt" logic_id="snippet-prompt" dismissible bind:logic_state>
    <Overlay.Backdrop />

    <Overlay.Section>
        <Card.Container width="prose" max_width="viewport-75">
            {#if logic_state}
                {#await fetch_snippet_index()}
                    <Card.Header>
                        <Center width="100">
                            <Text is="span">
                                Loading snippet index<Ellipsis />
                            </Text>
                        </Center>
                    </Card.Header>
                {:then index}
                    <Card.Header>Snippets</Card.Header>

                    <Card.Section>
                        <TextInput
                            bind:element={input_element}
                            placeholder="Search snippets..."
                            variation="block"
                            bind:value
                        />
                    </Card.Section>

                    <Card.Section>
                        <Scrollable max_height="viewport-50">
                            <Stack.Container spacing="small">
                                <!--
                                    NOTE: Since multiple pages might have the same title, we can't
                                    use them as keys for the `{#each}` block 
                                -->

                                {#each index as record}
                                    <!--
                                        NOTE: Doing filter via template since it's faster to hide so many elements
                                        via CSS rather than recreating them all the time via JS-based filtering
                                    -->

                                    {@const includes_title = value
                                        ? record.title.toLowerCase().includes(value)
                                        : true}
                                    {@const includes_snippet = value
                                        ? has_snippets(record.snippets, value)
                                        : true}
                                    {@const is_hidden = !includes_title && !includes_snippet}

                                    <Text is="strong" hidden={is_hidden}>{record.title}</Text>

                                    <Mosaic.Container
                                        sizing="small"
                                        spacing="medium"
                                        hidden={is_hidden}
                                    >
                                        {#each record.snippets as snippet (snippet.identifier)}
                                            <Card.Container
                                                sizing="nano"
                                                hidden={!includes_title && value
                                                    ? !snippet.title.toLowerCase().includes(value)
                                                    : false}
                                            >
                                                <Card.Header>{snippet.title}</Card.Header>

                                                <Card.Footer alignment_x="stretch">
                                                    <Button
                                                        palette="affirmative"
                                                        sizing="nano"
                                                        on:click={(event) =>
                                                            on_snippet_click(event, snippet)}
                                                    >
                                                        Use Snippet
                                                    </Button>
                                                </Card.Footer>
                                            </Card.Container>
                                        {/each}
                                    </Mosaic.Container>
                                {/each}
                            </Stack.Container>
                        </Scrollable>
                    </Card.Section>
                {/await}
            {/if}
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
