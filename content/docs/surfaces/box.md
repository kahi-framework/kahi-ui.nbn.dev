+++
[[properties.Box]]
name="elevation"
description="Alters how \"high\" the `Box` appears to be off the page."
default="none"
types=["none", "lowest", "low", "medium", "high", "highest"]

[[properties.Box]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Box]]
name="shape"
description="Changes the shape of the `Box`."
default="none"
types=["none", "pill", "rounded"]

[[slots.Box]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Box]]
name="--box-elevation"
description="Controls the default `box-shadow` used."
types=["<offset-x> <offset-y> <blur-radius> <spread-radius> <color>"]

[[custom_properties.Box]]
name="--box-palette-background-normal"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties.Box]]
name="--box-palette-foreground-normal"
description="Controls the default RGB color value used for `color`."
types=["<r,g,b>"]

[[custom_properties.Box]]
name="--box-shape-radius"
description="Controls the default `border-radius` used."
types=["<length>", "<percentage>"]
+++

# Box

> **NOTE**: New since `v0.2.0`.

`Box` is a surface primitive for encapsulating section content in a block of color.

```svelte {title="Box Preview" mode="repl"}
<script>
    import {Box} from "@kahi-ui/framework";
</script>

<Box>This is a Box!</Box>
```

## Imports

```svelte {title="Box Imports"}
<script>
    import {Box} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Box` via the `palette` property.

```svelte {title="Box Palette" mode="repl"}
<script>
    import {
        Box,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic sizing="medium" spacing="large">
    <Box>
        <Text is="strong">NEUTRAL / DEFAULT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box palette="accent">
        <Text is="strong">ACCENT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box palette="dark">
        <Text is="strong">DARK</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box palette="light">
        <Text is="strong">LIGHT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box palette="alert">
        <Text is="strong">ALERT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box palette="affirmative">
        <Text is="strong">AFFIRMATIVE</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box palette="negative">
        <Text is="strong">NEGATIVE</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>
</Mosaic>
```

## Elevation

> **NOTE**: New since `v0.3.5`.

You can set how "high" your `Box` will appear to be over top the page via the `elevation` property.

```svelte {title="Box Elevation" mode="repl"}
<script>
    import {
        Box,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic sizing="medium" spacing="large">
    <Box>
        <Text is="strong">NONE / DEFAULT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box elevation="lowest">
        <Text is="strong">LOWEST</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box elevation="low">
        <Text is="strong">LOW</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box elevation="medium">
        <Text is="strong">MEDIUM</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box elevation="high">
        <Text is="strong">HIGH</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box elevation="highest">
        <Text is="strong">HIGHEST</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>
</Mosaic>
```

## Shape

You can modify the shape of the `Box` via the `shape` property.

```svelte {title="Box Shape" mode="repl"}
<script>
    import {
        Box,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic sizing="medium" spacing="large">
    <Box padding="huge">
        <Text is="strong">NONE / DEFAULT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box shape="pill" padding="huge">
        <Text is="strong">PILL</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box shape="rounded" padding="huge">
        <Text is="strong">ROUNDED</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>
</Mosaic>
```
