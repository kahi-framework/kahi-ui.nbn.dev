+++
[[properties.Badge]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Badge]]
name="shape"
description="Changes the shape of the `Badge`."
default="none"
types=["none", "pill", "rounded"]

[[slots.Badge]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Badge]]
name="--badge-palette-background-normal"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties.Badge]]
name="--badge-palette-foreground-normal"
description="Controls the default RGB color value used for `color`."
types=["<r,g,b>"]

[[custom_properties.Badge]]
name="--badge-font-size"
description="Controls the default font size used."
types=["<length>", "<percentage>"]

[[custom_properties.Badge]]
name="--badge-font-weight"
description="Controls the font weight of the text."
types=["<normal>", "<bold>", "<bolder>", "<lighter>", "<number>"]

[[custom_properties.Badge]]
name="--badge-gap"
description="Controls the spacing gap between child elements, e.g. icons."
types=["<length>"]

[[custom_properties.Badge]]
name="--badge-line-height"
description="Controls the default line height used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Badge]]
name="--badge-padding-x"
description="Controls the X-Axis padding."
types=["<length>"]

[[custom_properties.Badge]]
name="--badge-padding-y"
description="Controls the Y-Axis padding."
types=["<length>"]

[[custom_properties.Badge]]
name="--badge-text-shadow"
description="Controls the shadowing on the text. Typically used for increasing legibility."
types=["<offset-x> <offset-y> <blur-radius>"]
+++

# Badge

> **NOTE**: New since `v0.2.0`.

> **WARNING**: Received a breaking refactoring in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Badge` is typically used to subtlely display to the user some type of ancillary information, relating to its siblings / parent UI elements.

```svelte {title="Badge Preview" mode="repl"}
<script>
    import {Badge} from "@kahi-ui/framework";
</script>

<Badge>This is a Badge!</Badge>
```

## Imports

```svelte {title="Badge Imports"}
<script>
    import {Badge} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Badge` via the `palette` property.

```svelte {title="Badge Palette" mode="repl"}
<script>
    import {Badge, Stack} from "@kahi-ui/framework";
</script>

<Stack
    spacing="medium"
    orientation="horizontal"
    variation="wrap"
>
    <Badge>This is a DEFAULT Badge</Badge>

    <Badge palette="accent">
        This is a ACCENT Badge
    </Badge>

    <Badge palette="dark">This is a DARK Badge</Badge>

    <Badge palette="light">
        This is a LIGHT Badge
    </Badge>

    <Badge palette="alert">
        This is a ALERT Badge
    </Badge>

    <Badge palette="affirmative">
        This is a AFFIRMATIVE Badge
    </Badge>

    <Badge palette="negative">
        This is a NEGATIVE Badge
    </Badge>
</Stack>
```

## Shape

You can modify the shape of the `Shape` via the `shape` property.

```svelte {title="Badge Shape" mode="repl"}
<script>
    import {Badge, Stack} from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Badge palette="inverse">
        NONE / DEFAULT Badge
    </Badge>

    <Badge palette="inverse" shape="pill">
        NONE / DEFAULT Badge
    </Badge>

    <Badge palette="inverse" shape="rounded">
        NONE / DEFAULT Badge
    </Badge>
</Stack>
```
