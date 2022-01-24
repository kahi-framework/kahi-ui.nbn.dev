+++
[[properties.Heading]]
name="is"
description="Changes the HTML tag used for rendering the text, and the text size."
default="h1"
types=["h1", "h2", "h3", "h4", "h5", "h6"]

[[properties.Heading]]
name="alignment_x"
description="Changes how the text is aligned within the containing box."
types=["center", "justify", "left", "right"]

[[properties.Heading]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Heading]]
name="transform"
description="Alters how the text casing is rendered."
types=["capitalize", "lowercase", "uppercase"]

[[properties.Heading]]
name="variation"
description="`truncate` Removes parent container overflow from the render, clipping text with an ellipsis."
types=["headline", "truncate"]

[[slots.Heading]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Heading]]
name="--heading-font-weight"
description="Controls the `font-weight` used."
types=["<normal>", "<bold>", "<bolder>", "<lighter>", "<number>"]

[[custom_properties.Heading]]
name="--heading-h1-font-size"
description="Controls the `font-size` used for `h1` elements."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h1-line-height"
description="Controls the `line-height` used for `h1` elements."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h1-headline-font-size"
description="Controls the `font-size` used for `h1` elements w/ `headline` variation."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h1-headline-line-height"
description="Controls the `line-height` used for `h1` elements w/ `headline` variation."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h2-font-size"
description="Controls the `font-size` used for `h2` elements."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h2-line-height"
description="Controls the `line-height` used for `h2` elements."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h2-headline-font-size"
description="Controls the `font-size` used for `h2` elements w/ `headline` variation."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h2-headline-line-height"
description="Controls the `line-height` used for `h2` elements w/ `headline` variation."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h3-font-size"
description="Controls the `font-size` used for `h3` elements."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h3-line-height"
description="Controls the `line-height` used for `h3` elements."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h3-headline-font-size"
description="Controls the `font-size` used for `h3` elements w/ `headline` variation."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h3-headline-line-height"
description="Controls the `line-height` used for `h3` elements w/ `headline` variation."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h4-font-size"
description="Controls the `font-size` used for `h4` elements."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h4-line-height"
description="Controls the `line-height` used for `h4` elements."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h4-headline-font-size"
description="Controls the `font-size` used for `h4` elements w/ `headline` variation."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h4-headline-line-height"
description="Controls the `line-height` used for `h4` elements w/ `headline` variation."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h5-font-size"
description="Controls the `font-size` used for `h5` elements."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h5-line-height"
description="Controls the `line-height` used for `h5` elements."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h5-headline-font-size"
description="Controls the `font-size` used for `h5` elements w/ `headline` variation."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h5-headline-line-height"
description="Controls the `line-height` used for `h5` elements w/ `headline` variation."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h6-font-size"
description="Controls the `font-size` used for `h6` elements."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h6-line-height"
description="Controls the `line-height` used for `h6` elements."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h6-headline-font-size"
description="Controls the `font-size` used for `h6` elements w/ `headline` variation."
types=["<length>", "<percentage>"]

[[custom_properties.Heading]]
name="--heading-h6-headline-line-height"
description="Controls the `line-height` used for `h6` elements w/ `headline` variation."
types=["<normal>", "<number>", "<length>", "<percentage>"]
+++

# Heading

> **NOTE**: New since `v0.2.0`.

`Heading` is typically used for delineating sections of content within your Web Application.

```svelte {title="Heading Preview" mode="repl"}
<script>
    import {Heading} from "@kahi-ui/framework";
</script>

<Heading>
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit.
</Heading>
```

## Imports

```svelte {title="Heading Imports"}
<script>
    import {Heading} from "@kahi-ui/framework";
</script>
```

## Sizing

You can adjust the size of `Heading` by passing the `is` property.

```svelte {title="Heading Sizing" mode="repl"}
<script>
    import {
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="heading-sizing"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">H1</Text>
        <Heading is="h1">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">H2</Text>
        <Heading is="h2">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">H3</Text>
        <Heading is="h3">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">H4</Text>
        <Heading is="h4">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">H5</Text>
        <Heading is="h5">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">H6</Text>
        <Heading is="h6">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>
</Stack>

<style>
    :global(.heading-sizing > div) {
        max-width: 25ch;
    }
</style>
```

## Palette

> **NOTE**: New since `v0.2.16`.

You can change the color palette of `Heading` via the `palette` property.

```svelte {title="Heading Palette" mode="repl"}
<script>
    import {
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="heading-palette"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Heading>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Heading palette="accent">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Heading palette="dark">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Heading palette="light">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Heading palette="alert">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Heading palette="affirmative">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Heading palette="negative">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>
</Stack>

<style>
    :global(.heading-palette > div) {
        max-width: 25ch;
    }
</style>
```

## Alignment

> **DEPRECATED**: This property will be renamed `align` -> `alignment_x` in `v0.6.0`.

You can adjust the text alignment of the `Heading` via the `alignment_x` property.

```svelte {title="Heading Alignment" mode="repl"}
<script>
    import {
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Heading>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">CENTER</Text>
        <Heading alignment_x="center">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">JUSTIFY</Text>
        <Heading alignment_x="justify">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">LEFT</Text>
        <Heading alignment_x="left">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">RIGHT</Text>
        <Heading alignment_x="right">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>
</Stack>
```

## Transform

You can alter the rendered text capitalization via the `transform` property.

```svelte {title="Heading Transform" mode="repl"}
<script>
    import {
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="heading-transform"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Heading>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </Heading>
    </div>

    <div>
        <Text is="strong">CAPITALIZE</Text>
        <Heading transform="capitalize">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </Heading>
    </div>

    <div>
        <Text is="strong">LOWERCASE</Text>
        <Heading transform="lowercase">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </Heading>
    </div>

    <div>
        <Text is="strong">UPPERCASE</Text>
        <Heading transform="uppercase">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </Heading>
    </div>
</Stack>

<style>
    :global(.heading-transform > div) {
        max-width: 25ch;
    }
</style>
```

## Variation

You can apply variations to the rendered text, like truncating, via the `variation` property.

```svelte {title="Heading Variation" mode="repl"}
<script>
    import {
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack class="heading-variation" spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Heading>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>

    <div>
        <Text is="strong">TRUNCATE</Text>
        <Heading variation="truncate">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Heading>
    </div>
</Stack>

<style>
    :global(.heading-variation > div) {
        max-width: 50ch;
    }
</style>
```
