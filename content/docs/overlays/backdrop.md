+++
[[properties.Backdrop]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "off", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[custom_properties.Backdrop]]
name="--backdrop-background-color"
description="Controls the default `background` color."
types=["<r,g,b>"]

[[custom_properties.Backdrop]]
name="--backdrop-background-opacity"
description="Controls the `background` opacity."
types=["<alpha-value>"]
+++

# Backdrop

`Backdrop` stretches across its parent element, providing a dimmed background that sits under sibling content. Useful for things like prompts.

```svelte {title="Backdrop Preview" mode="repl"}
<script>
    import {Backdrop} from "@kahi-ui/framework";
</script>

Hello World!

<Backdrop />
```

## Imports

```svelte {title="Backdrop Imports"}
<script>
    import {Backdrop} from "@kahi-ui/framework";
</script>
```

## Palette

> **NOTE**: Introduced feature in `v0.6.0`.

You can change the color palette of the `Backdrop` via the `palette` property.

```svelte {title="Backdrop Palette" mode="repl"}
<script>
    import {
        Backdrop,
        Button,
        Position,
        Stack,
    } from "@kahi-ui/framework";

    let palette = undefined;
</script>

Hello World!

<Backdrop {palette} />

<Position variation="action" alignment_x="left">
    <Stack.Container
        orientation="horizontal"
        alignment_x="left"
        spacing="small"
        variation="wrap"
        max_width="prose"
        margin_left="auto"
    >
        <Button
            palette="inverse"
            on:click={() => (palette = undefined)}
        >
            RESET
        </Button>

        <Button
            palette="accent"
            on:click={() => (palette = "accent")}
        >
            ACCENT
        </Button>

        <Button
            palette="neutral"
            on:click={() => (palette = "neutral")}
        >
            NEUTRAL
        </Button>

        <Button
            palette="dark"
            on:click={() => (palette = "dark")}
        >
            DARK
        </Button>

        <Button
            palette="light"
            on:click={() => (palette = "light")}
        >
            LIGHT
        </Button>

        <Button
            palette="affirmative"
            on:click={() => (palette = "affirmative")}
        >
            AFFIRMATIVE
        </Button>

        <Button
            palette="informative"
            on:click={() => (palette = "informative")}
        >
            INFORMATIVE
        </Button>

        <Button
            palette="negative"
            on:click={() => (palette = "negative")}
        >
            NEGATIVE
        </Button>
    </Stack.Container>
</Position>
```
