+++
[[properties.Text]]
name="is"
description="Changes the HTML tag used for rendering the text, altering its appearance."
default="p"
types=["abbr", "b", "del", "em", "i", "ins", "kbd", "mark", "p", "pre", "s", "samp", "small", "span", "strong", "sub", "sup", "u"]

[[properties.Text]]
name="alignment_x"
description="Changes how the text is aligned within the containing box."
types=["center", "justify", "left", "right"]

[[properties.Text]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Text]]
name="sizing"
description="Changes how big the text will be rendered."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.Text]]
name="transform"
description="Alters how the text casing is rendered."
types=["capitalize", "lowercase", "uppercase"]

[[properties.Text]]
name="variation"
description="`truncate` removes parent container overflow from the render, clipping text with an ellipsis."
types=["headline", "truncate"]

[[slots.Text]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Text]]
name="--text-kbd-background-color"
description="Controls the default `background` color."
types=["<r,g,b>"]

[[custom_properties.Text]]
name="--text-kbd-background-opacity"
description="Controls the `background` opacity."
types=["<alpha-value>"]

[[custom_properties.Text]]
name="--text-kbd-border-color"
description="Controls the `border-color` used."
types=["<r,g,b>"]

[[custom_properties.Text]]
name="--text-kbd-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties.Text]]
name="--text-kbd-border-style"
description="Controls the `border-style` used."
types=["<line-style>"]

[[custom_properties.Text]]
name="--text-kbd-border-width"
description="Controls the `border-width` used."
types=["<length>"]

[[custom_properties.Text]]
name="--text-kbd-font-family"
description="Controls the `font-family` used."
types=["<font-family>", "<generic-name>"]

[[custom_properties.Text]]
name="--text-kbd-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties.Text]]
name="--text-kbd-font-weight"
description="Controls the `font-weight` used."
types=["<normal>", "<bold>", "<bolder>", "<lighter>", "<number>"]

[[custom_properties.Text]]
name="--text-kbd-padding-x"
description="Controls the X-Axis `padding-left` / `padding-right` used."
types=["<length>"]

[[custom_properties.Text]]
name="--text-kbd-padding-y"
description="Controls the Y-Axis `padding-bottom` / `padding-top` used."
types=["<length>"]

[[custom_properties.Text]]
name="--text-small-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties.Text]]
name="--text-small-opacity"
description="Controls the `opacity` used."
types=["<alpha-value>"]
+++

# Text

> **NOTE**: New since `v0.2.0`.

`Text` is used to render paragraphs of text in your interface, among other types of text.

```svelte {title="Text Preview" mode="repl"}
<script>
    import {Text} from "@kahi-ui/framework";
</script>

<Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Proin et consectetur orci. Curabitur a
    egestas turpis, vitae convallis sapien. Sed
    pellentesque rutrum tellus, in iaculis dolor
    tincidunt non. Orci varius natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus
    mus.
</Text>
```

## Imports

```svelte {title="Text Imports"}
<script>
    import {Text} from "@kahi-ui/framework";
</script>
```

## Sizing

> **DEPRECATED**: This property will be renamed `size` -> `sizing` in `v0.6.0`.

You can adjust the size of `Text` by passing the `sizing` property.

```svelte {title="Text Sizing" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack
    class="text-sizing"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Text sizing="tiny">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Text sizing="small">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Text sizing="medium">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Text sizing="large">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Text sizing="huge">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>
</Stack>

<style>
    :global(.text-sizing > div) {
        max-width: 25ch;
    }
</style>
```

## Palette

You can change the color palette of `Text` via the `palette` property.

```svelte {title="Text Palette" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack
    class="text-palette"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Text palette="accent">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Text palette="dark">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Text palette="light">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Text palette="alert">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Text palette="affirmative">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Text palette="negative">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>
</Stack>

<style>
    :global(.text-palette > div) {
        max-width: 25ch;
    }
</style>
```

## Alignment

> **DEPRECATED**: This property will be renamed `align` -> `alignment_x` in `v0.6.0`.

You can adjust the text alignment of the `Text` via the `alignment_x` property.

```svelte {title="Text Alignment" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">CENTER</Text>
        <Text alignment_x="center">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">JUSTIFY</Text>
        <Text alignment_x="justify">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">LEFT</Text>
        <Text alignment_x="left">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">RIGHT</Text>
        <Text alignment_x="right">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>
</Stack>
```

## Transform

You can alter the rendered text capitalization via the `transform` property.

```svelte {title="Text Transform" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack
    class="text-transform"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">CAPITALIZE</Text>
        <Text transform="capitalize">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">LOWERCASE</Text>
        <Text transform="lowercase">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">UPPERCASE</Text>
        <Text transform="uppercase">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>
</Stack>

<style>
    :global(.text-transform > div) {
        max-width: 25ch;
    }
</style>
```

## Variation

You can apply variations to the rendered text, like truncating, via the `variation` property.

```svelte {title="Text Variation" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack class="text-variation" spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>

    <div>
        <Text is="strong">TRUNCATE</Text>
        <Text variation="truncate">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </div>
</Stack>

<style>
    :global(.text-variation > div) {
        max-width: 50ch;
    }
</style>
```

## Pre Formatted

You can render text with whitespace and linebreaks preserved via the `is` property.

<!-- prettier-ignore -->
```svelte {title="Text Pre Formatted" mode="repl"}
<script>
    import {Text} from "@kahi-ui/framework";
</script>

<Text is="pre">
P R E F O R M A T T E D T E X T
! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9
</Text>
```

## Other Tags

You can also access most of the other HTML text tags via the `is` property.

```svelte {title="Text Other Tags" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack alignment_x="left" spacing="medium">
    <Text is="abbr">Abbreviation</Text>

    <Text is="b">Bold</Text>
    <Text is="strong">Strong</Text>

    <Text is="del">Deleted</Text>
    <Text is="s">Strikethrough</Text>

    <Text is="em">Emphasis</Text>
    <Text is="i">Italic</Text>

    <Text is="ins">Inserted</Text>
    <Text is="u">Underline</Text>

    <Text is="kbd">CTRL + C</Text>
    <Text is="mark">Highlighted</Text>
    <Text is="samp">Sample</Text>

    <Text is="sub">sub</Text>
    <Text is="sup">sup</Text>
</Stack>
```
