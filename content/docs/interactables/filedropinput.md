+++
[[properties.FileDropInput]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "off", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.FileDropInput]]
name="accept"
description="Sets [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept), configuring which file types should be prompted for."
types=["string"]

[[properties.FileDropInput]]
name="multiple"
description="Sets if the `FileDropInput` should accept multiple files as input."
types=["boolean"]

[[properties.FileDropInput]]
name="name"
description="Sets the form name of the `FileDropInput`."
types=["string"]

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

[[custom_properties.FileDropInput]]
name="--filedropinput-palette-background-lightest"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties.FileDropInput]]
name="--filedropinput-palette-background-bold"
description="Controls the default RGB color value used for `border-color`."
types=["<r,g,b>"]

[[custom_properties.FileDropInput]]
name="--filedropinput-background-opacity"
description="Controls the `background` opacity."
types=["<alpha-value>"]

[[custom_properties.FileDropInput]]
name="--filedropinput-border-width"
description="Controls the `border-width` used."
types=["<length>"]

[[custom_properties.FileDropInput]]
name="--filedropinput-padding-x"
description="Controls the X-Axis `padding-left` / `padding-right` used."
types=["<length>"]

[[custom_properties.FileDropInput]]
name="--filedropinput-padding-y"
description="Controls the Y-Axis `padding-bottom` / `padding-top` used."
types=["<length>"]
+++

# FileDropInput

> **NOTE**: Introduced feature in `v0.4.6`.

> **NOTE**: Keep in mind, while the Component _does work_ without Javascript, it cannot display its value like `FileInput` can without.

`FileDropInput` acts as a click-to-prompt and drag'n'drop file input stylized as an alternative to `FileInput`.

```svelte {title="FileDropInput Preview" mode="repl"}
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

<FileDropInput multiple on:change={on_change}>
    <Stack.Container spacing="medium">
        <Text
            is="strong"
            variation="block"
            sizing="large"
        >
            &uparrow;
        </Text>

        <Text>Drag-and-drop files here...</Text>
    </Stack.Container>
</FileDropInput>

{#if files.length > 0}
    <Stack.Container
        spacing="medium"
        margin_y="medium"
    >
        {#each files as file (file.name)}
            <Tile.Container sizing="small">
                <Tile.Section>
                    <Tile.Header>
                        {file.name}
                    </Tile.Header>

                    <Text>{file.type}</Text>
                </Tile.Section>

                <Tile.Footer>
                    <Button
                        variation="clear"
                        sizing="small"
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
    </Stack.Container>

    <Stack.Container alignment_x="right">
        <Button
            variation="clear"
            palette="negative"
            on:click={on_clear_click}
        >
            Clear All
        </Button>
    </Stack.Container>
{/if}
```

## Imports

```svelte {title="FileDropInput Imports"}
<script>
    import {FileDropInput} from "@kahi-ui/framework";
</script>
```

# Palette

You can change the color palette of the `FileDropInput` via the `palette` property.

```svelte {title="FileDropInput Palette" mode="repl"}
<script>
    import {
        FileDropInput,
        Mosaic,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="medium">
    <FileDropInput>
        <Stack.Container spacing="medium">
            <Text
                is="strong"
                variation="block"
                sizing="large"
            >
                &uparrow;
            </Text>

            <Text>DEFAULT</Text>
        </Stack.Container>
    </FileDropInput>

    <FileDropInput palette="accent">
        <Stack.Container spacing="medium">
            <Text
                is="strong"
                variation="block"
                sizing="large"
            >
                &uparrow;
            </Text>

            <Text>ACCENT</Text>
        </Stack.Container>
    </FileDropInput>

    <FileDropInput palette="neutral">
        <Stack.Container spacing="medium">
            <Text
                is="strong"
                variation="block"
                sizing="large"
            >
                &uparrow;
            </Text>

            <Text>NEUTRAL</Text>
        </Stack.Container>
    </FileDropInput>

    <FileDropInput palette="dark">
        <Stack.Container spacing="medium">
            <Text
                is="strong"
                variation="block"
                sizing="large"
            >
                &uparrow;
            </Text>

            <Text>DARK</Text>
        </Stack.Container>
    </FileDropInput>

    <FileDropInput palette="light">
        <Stack.Container spacing="medium">
            <Text
                is="strong"
                variation="block"
                sizing="large"
            >
                &uparrow;
            </Text>

            <Text>LIGHT</Text>
        </Stack.Container>
    </FileDropInput>

    <FileDropInput palette="alert">
        <Stack.Container spacing="medium">
            <Text
                is="strong"
                variation="block"
                sizing="large"
            >
                &uparrow;
            </Text>

            <Text>ALERT</Text>
        </Stack.Container>
    </FileDropInput>

    <FileDropInput palette="affirmative">
        <Stack.Container spacing="medium">
            <Text
                is="strong"
                variation="block"
                sizing="large"
            >
                &uparrow;
            </Text>

            <Text>AFFIRMATIVE</Text>
        </Stack.Container>
    </FileDropInput>

    <FileDropInput palette="informative">
        <Stack.Container spacing="medium">
            <Text
                is="strong"
                variation="block"
                sizing="large"
            >
                &uparrow;
            </Text>

            <Text>INFORMATIVE</Text>
        </Stack.Container>
    </FileDropInput>

    <FileDropInput palette="negative">
        <Stack.Container spacing="medium">
            <Text
                is="strong"
                variation="block"
                sizing="large"
            >
                &uparrow;
            </Text>

            <Text>NEGATIVE</Text>
        </Stack.Container>
    </FileDropInput>
</Mosaic.Container>
```
