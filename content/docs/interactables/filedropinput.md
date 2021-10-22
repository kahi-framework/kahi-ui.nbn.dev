+++
[[properties.FileDropInput]]
name="accept"
description="Sets [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept), configuring which file types should be prompted for."
types=["string"]

[[properties.FileDropInput]]
name="multiple"
description="Sets if the `FileDropInput` should accept multiple files as input."
types=["boolean"]

[[properties.FileDropInput]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[events.FileDropInput]]
name="click"
description="Fires whenever the `FileDropInput` is clicked."
types=["MouseEvent"]

[[events.FileDropInput]]
name="change"
description="Fires whenever the `FileDropInput` value has changed."
types=["MouseEvent"]

[[events.FileDropInput]]
name="input"
description="Fires whenever the `FileDropInput` value has changed."
types=["MouseEvent"]

[[slots.FileDropInput]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# FileDropInput

> **NOTE**: Keep in mind, while the Component _does work_ without Javascript, it cannot display its value like `FileInput` can without.

`FileDropInput` acts as a click-to-prompt and drag'n'drop file input stylized as an alternative to `FileInput`.

```svelte repl FileDropInput Preview
<script>
    import {
        Button,
        FileDropInput,
        Stack,
        Text,
        Tile,
    } from "@kahi-ui/framework";

    function on_change(event) {
        if (!event.isTrusted) return;

        const {target} = event;

        files = [
            ...files,
            ...Array.from(target.files),
        ];

        target.value = "";
    }

    function on_clear_click(event) {
        files = [];
    }

    function on_remove_click(event, file) {
        files = files.filter(
            (_file) => file !== _file
        );
    }

    let files = [];
</script>

<FileDropInput
    class="filedropinput-preview"
    multiple
    on:change={on_change}
>
    <Stack spacing="medium">
        <Text is="strong">&uparrow;</Text>

        <Text>Drag-and-drop files here...</Text>
    </Stack>
</FileDropInput>

{#if files.length > 0}
    <Stack spacing="medium" margin_y="medium">
        {#each files as file (file.name)}
            <Tile.Container
                sizing="small"
                palette="auto"
            >
                <Tile.Section>
                    <Tile.Header>
                        {file.name}
                    </Tile.Header>

                    <Text>{file.type}</Text>
                </Tile.Section>

                <Tile.Footer>
                    <Button
                        size="small"
                        palette="negative"
                        on:click={(event) =>
                            on_remove_click(
                                event,
                                file
                            )}
                    >
                        x
                    </Button>
                </Tile.Footer>
            </Tile.Container>
        {/each}
    </Stack>

    <Stack alignment_x="right">
        <Button
            variation="clear"
            palette="negative"
            on:click={on_clear_click}
        >
            Clear All
        </Button>
    </Stack>
{/if}

<style>
    :global(.filedropinput-preview) :global(strong) {
        font-size: 3em;
    }
</style>
```

## Imports

```svelte default FileDropInput Imports
<script>
    import {FileDropInput} from "@kahi-ui/framework";
</script>
```

# Palette

You can change the color palette of the `FileDropInput` via the `palette` property.

```svelte repl FileDropInput Palette
<script>
    import {
        FileDropInput,
        Mosaic,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic
    class="filedropinput-palette"
    sizing="medium"
    spacing="medium"
>
    <FileDropInput>
        <Stack spacing="medium">
            <Text is="strong">&uparrow;</Text>
            <Text>NEUTRAL</Text>
        </Stack>
    </FileDropInput>

    <FileDropInput palette="accent">
        <Stack spacing="medium">
            <Text is="strong">&uparrow;</Text>
            <Text>ACCENT</Text>
        </Stack>
    </FileDropInput>

    <FileDropInput palette="dark">
        <Stack spacing="medium">
            <Text is="strong">&uparrow;</Text>
            <Text>DARK</Text>
        </Stack>
    </FileDropInput>

    <FileDropInput palette="light">
        <Stack spacing="medium">
            <Text is="strong">&uparrow;</Text>
            <Text>LIGHT</Text>
        </Stack>
    </FileDropInput>

    <FileDropInput palette="alert">
        <Stack spacing="medium">
            <Text is="strong">&uparrow;</Text>
            <Text>ALERT</Text>
        </Stack>
    </FileDropInput>

    <FileDropInput palette="affirmative">
        <Stack spacing="medium">
            <Text is="strong">&uparrow;</Text>
            <Text>AFFIRMATIVE</Text>
        </Stack>
    </FileDropInput>

    <FileDropInput palette="negative">
        <Stack spacing="medium">
            <Text is="strong">&uparrow;</Text>
            <Text>NEGATIVE</Text>
        </Stack>
    </FileDropInput>
</Mosaic>

<style>
    :global(.filedropinput-palette) :global(strong) {
        font-size: 3em;
    }
</style>
```
