<script lang="ts">
    import {Card, Code, Form, Overlay, Text} from "@kahi-ui/framework";

    import {compress_safe} from "@kahi-docs/shared";

    export let logic_state: boolean = false;
    export let value: string;

    $: _compressed = compress_safe(value);
    $: _href_playground = `${location.origin}/playground/?script=${_compressed}`;
</script>

<Overlay.Container class="share-prompt" logic_id="share-prompt" dismissible bind:logic_state>
    <Overlay.Backdrop />

    <Overlay.Section>
        <Card.Container width="prose" max_width="viewport-75">
            <Card.Header>Share Playground</Card.Header>

            <Card.Section>
                <Form.Control logic_id="playground-href">
                    <Form.Label>
                        <Text is="strong">Playground</Text>:
                    </Form.Label>

                    <Code>{_href_playground}</Code>
                </Form.Control>
            </Card.Section>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>

<style>
    :global(.share-prompt) :global(code) {
        user-select: all;
    }
</style>
