+++
[[properties.Divider]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "off", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.Divider]]
name="orientation"
description="Renders the `Divider` vertically."
types=["vertical", "{VIEWPORT}:vertical"]

[[slots.Divider]]
name="default"
description="Default unnamed slot. Renders the `Divider` as a text divider when provided."
types=["{}"]

[[custom_properties.Divider]]
name="--divider-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties.Divider]]
name="--divider-margin"
description="Controls the margin spacing (depending on border orientation) used."
types=["<length>"]

[[custom_properties.Divider]]
name="--divider-opacity"
description="Controls the `opacity` used."
types=["<alpha-value>"]

[[custom_properties.Divider]]
name="--divider-width"
description="Controls the width of the `Divider` border."
types=["<length>"]

[[custom_properties.Divider]]
name="--divider-text-font-size"
description="Controls the default font size used."
types=["<length>", "<percentage>"]

[[custom_properties.Divider]]
name="--divider-text-font-weight"
description="Controls the font weight of the text."
types=["<normal>", "<bold>", "<bolder>", "<lighter>", "<number>"]

[[custom_properties.Divider]]
name="--divider-text-gap"
description="Controls the spacing gap between child elements, e.g. icons."
types=["<length>"]

[[custom_properties.Divider]]
name="--divider-text-letter-spacing"
description="Controls the `letter-spacing` used."
types=["<length>"]
+++

# Divider

> **NOTE**: Introduced feature in `v0.2.0`.

`Divider` is typically used to visually separate content for easier reading comprehension.

```svelte {title="Divider Preview" mode="repl"}
<script>
    import {Divider} from "@kahi-ui/framework";
</script>

<Divider />
```

## Imports

```svelte {title="Divider Imports"}
<script>
    import {Divider} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Divider` via the `palette` property.

```svelte {title="Divider Palette" mode="repl"}
<script>
    import {
        Divider,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Divider />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Divider palette="accent" />
    </div>

    <div>
        <Text is="strong">NEUTRAL</Text>
        <Divider palette="neutral" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Divider palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Divider palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Divider palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Divider palette="affirmative" />
    </div>

    <div>
        <Text is="strong">INFORMATIVE</Text>
        <Divider palette="informative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Divider palette="negative" />
    </div>
</Mosaic.Container>
```

## Orientation

You can set the `Divider` to render vertically via the `orientation` property.

```svelte {title="Divider Orientation" mode="repl"}
<script>
    import {
        Box,
        Divider,
        Mosaic,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    class="divider-orientation"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Box palette="dark" padding="small">
            <Divider />
        </Box>
    </div>

    <div>
        <Text is="strong">VERTICAL</Text>
        <Box
            palette="dark"
            padding="small"
            width="content-min"
        >
            <Divider orientation="vertical" />
        </Box>
    </div>
</Stack.Container>

<style>
    :global(.divider-orientation
            > div:first-child
            > .box) {
        display: flex;
        align-items: center;
        height: 2rem;
        width: 6rem;
    }

    :global(.divider-orientation
            > div:last-child
            > .box) {
        height: 6rem;
    }
</style>
```

## Text

`Divider` components can also render text within their separators via passing content into the default slot.

```svelte {title="Divider Text" mode="repl"}
<script>
    import {
        Box,
        Divider,
        Mosaic,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    class="divider-text"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Box palette="dark" padding="small">
            <Divider>DEFAULT</Divider>
        </Box>
    </div>

    <div>
        <Box palette="dark" padding="small">
            <Divider orientation="vertical">
                VERTICAL
            </Divider>
        </Box>
    </div>
</Stack.Container>

<style>
    :global(.divider-text > div:first-child > .box) {
        width: 12rem;
    }

    :global(.divider-text > div:last-child > .box) {
        display: flex;
        justify-content: center;

        width: 3rem;
        height: 12rem;
    }
</style>
```
