<script lang="ts">
    import {Card, Code, Overlay} from "@kahi-ui/framework";

    import {compress_safe} from "@kahi-docs/shared";

    import type {ISnippetRecord} from "../../routes/api/v4/snippets/[identifier].json";

    export let logic_state: boolean = false;

    export let snippet: ISnippetRecord | undefined;
    export let value: string;

    $: _playground_href =
        snippet && snippet.script === value
            ? `${location.origin}/playground?snippet=${snippet.identifier}`
            : `${location.origin}/playground?script=${compress_safe(value)}`;
</script>

<Overlay.Container class="share-prompt" logic_id="share-prompt" dismissible bind:logic_state>
    <Overlay.Backdrop />

    <Overlay.Section>
        <Card.Container width="prose" max_width="viewport-75">
            <Card.Header>Share Playground</Card.Header>

            <Card.Section>
                <Code is="pre">{_playground_href}</Code>
            </Card.Section>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>

<style>
    :global(.share-prompt) :global(code) {
        user-select: all;
    }
</style>
