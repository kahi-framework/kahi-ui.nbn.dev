<script context="module" lang="ts">
    const TEMPLATE_IFRAME = ({
        href_embed,
        href_playground,
    }: {
        href_embed: string;
        href_playground: string;
    }) => `<iframe
    src="${href_embed}"
    loading="lazy"
>
    See this code running at the
    <a
        href="${href_playground}"
        target="_blank"
    >Kahi UI Playground</a>.
</iframe>`;
</script>

<script lang="ts">
    import {Card, Form, Overlay, Spacer, Text, TextInput} from "@kahi-ui/framework";

    import {compress_safe} from "@kahi-docs/shared";

    export let state: boolean = false;
    export let value: string;

    $: _compressed = compress_safe(value);
    $: _href_playground = `${location.origin}/playground/?script=${_compressed}`;
    $: _href_embed = `${location.origin}/playground/embed/?script=${_compressed}`;
</script>

<Overlay class="share-prompt" logic_id="share-prompt" bind:state captive dismissible>
    <Card.Container palette="auto" width="prose" max_width="viewport-75">
        <Card.Header>Share Playground</Card.Header>

        <Card.Section>
            <Form.Control logic_id="playground-href">
                <Form.Label>
                    <Text is="strong">Playground</Text>:
                </Form.Label>

                <TextInput value={_href_playground} readonly />
            </Form.Control>

            <Spacer spacing_y="small" />

            <Form.Control logic_id="embed-iframe">
                <Form.Label>
                    <Text is="strong">iframe</Text>:
                </Form.Label>

                <TextInput
                    is="textarea"
                    lines={10}
                    value={TEMPLATE_IFRAME({
                        href_embed: _href_embed,
                        href_playground: _href_playground,
                    })}
                    readonly
                />
            </Form.Control>
        </Card.Section>
    </Card.Container>
</Overlay>

<style>
    :global(.share-prompt) :global(input) {
        user-select: all;
    }

    :global(.share-prompt) :global(textarea) {
        white-space: pre;
    }
</style>
