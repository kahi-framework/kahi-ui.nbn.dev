+++
[[properties.Box]]
name="elevation"
description="Alters how \"high\" the `Box` appears to be off the page."
default="none"
types=["none", "lowest", "lower", "low", "medium", "high", "higher", "highest", "{VIEWPORT}:{ELEVATION}"]

[[properties.Box]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "off", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.Box]]
name="radius"
description="Changes the border radius of the `Box`."
default="none"
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{RADIUS}"]

[[properties.Box]]
name="shape"
description="Changes the shape of the `Box`."
types=["none", "circle", "pill", "{VIEWPORT}:{SHAPE}"]

[[properties.Box]]
name="variation"
description="Alters the appearance of the `Box`."
types=["borders"]

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

> **NOTE**: Introduced feature in `v0.2.0`.

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

<Mosaic.Container sizing="medium" spacing="large">
    <Box>
        <Text is="strong">DEFAULT</Text>

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

    <Box palette="neutral">
        <Text is="strong">NEUTRAL</Text>

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

    <Box palette="informative">
        <Text is="strong">INFORMATIVE</Text>

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
</Mosaic.Container>
```

## Borders

> **NOTE**: Introduced feature in `v0.6.0`.

You can change the appearance of `Box` to show borders via the `variation` property.

```svelte {title="Box Borders" mode="repl"}
<script>
    import {
        Box,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="large">
    <Box variation="borders">
        <Text is="strong">DEFAULT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box variation="borders" palette="accent">
        <Text is="strong">ACCENT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box variation="borders" palette="neutral">
        <Text is="strong">NEUTRAL</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box variation="borders" palette="dark">
        <Text is="strong">DARK</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box variation="borders" palette="light">
        <Text is="strong">LIGHT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box variation="borders" palette="alert">
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

    <Box variation="borders" palette="informative">
        <Text is="strong">INFORMATIVE</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box variation="borders" palette="negative">
        <Text is="strong">NEGATIVE</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>
</Mosaic.Container>
```

## Elevation

> **NOTE**: Introduced feature in `v0.3.5`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `elevation={["low", "tablet:lowest", "mobile:lowest"]}`

You can set how "high" your `Box` will appear to be over top the page via the `elevation` property.

```svelte {title="Box Elevation" mode="repl"}
<script>
    import {
        Box,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="large">
    <Box>
        <Text is="strong">DEFAULT</Text>

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

    <Box elevation="lower">
        <Text is="strong">LOWER</Text>

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

    <Box elevation="higher">
        <Text is="strong">HIGHER</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box palette="inverse" elevation="highest">
        <Text is="strong">HIGHEST</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>
</Mosaic.Container>
```

## Radius

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `radius={["tiny", "tablet:medium", "mobile:medium"]}`

You can modify the border radius of the `Box` via the `radius` property.

```svelte {title="Box Radius" mode="repl"}
<script>
    import {
        Box,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="large">
    <Box palette="inverse" padding="huge">
        <Text is="strong">DEFAULT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box
        palette="inverse"
        radius="nano"
        padding="huge"
    >
        <Text is="strong">NANO</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box
        palette="inverse"
        radius="tiny"
        padding="huge"
    >
        <Text is="strong">TINY</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box
        palette="inverse"
        radius="small"
        padding="huge"
    >
        <Text is="strong">SMALL</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box
        palette="inverse"
        radius="medium"
        padding="huge"
    >
        <Text is="strong">MEDIUM</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box
        palette="inverse"
        radius="large"
        padding="huge"
    >
        <Text is="strong">LARGE</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box
        palette="inverse"
        radius="huge"
        padding="huge"
    >
        <Text is="strong">HUGE</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box
        palette="inverse"
        radius="massive"
        padding="huge"
    >
        <Text is="strong">MASSIVE</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>
</Mosaic.Container>
```

## Shape

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `shape={["circle", "tablet:pill", "mobile:pill"]}`

You can modify the shape of the `Box` via the `shape` property.

```svelte {title="Box Shape" mode="repl"}
<script>
    import {
        Box,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="large">
    <Box palette="inverse" padding="huge">
        <Text is="strong">DEFAULT</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box
        palette="inverse"
        shape="circle"
        padding="huge"
    >
        <Text is="strong">CIRCLE</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>

    <Box palette="inverse" shape="pill" padding="huge">
        <Text is="strong">PILL</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non.
        </Text>
    </Box>
</Mosaic.Container>
```
