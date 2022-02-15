+++
[[properties.Badge]]
name="is"
description="Alters the HTML tag rendered to the DOM."
default="span"
types=["a", "button", "span"]

[[properties.Badge]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.Badge]]
name="radius"
description="Changes the border radius of the `Badge`."
default="none"
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{RADIUS}"]

[[properties.Badge]]
name="shape"
description="Changes the shape of the `Badge`."
types=["circle", "pill", "{VIEWPORT}:{SHAPE}"]

[[properties.Badge]]
name="href"
description="Sets the web page being linked to, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) for more information."
types=["string"]

[[properties.Badge]]
name="download"
description="If linking to a downloadable file, this property will be used as the suggested file name."
types=["string"]

[[properties.Badge]]
name="rel"
description="Sets how the Anchor relates to the current page, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) for more information."
types=["string"]

[[properties.Badge]]
name="target"
description="Sets the target of the Anchor being navigated, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) for more information."
types=["string"]

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

> **NOTE**: Introduced feature in `v0.2.0`.

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

<Stack.Container
    spacing="medium"
    orientation="horizontal"
    variation="wrap"
>
    <Badge>This is a DEFAULT Badge</Badge>

    <Badge palette="accent">
        This is a ACCENT Badge
    </Badge>

    <Badge palette="neutral">
        This is a NEUTRAL Badge
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

    <Badge palette="informative">
        This is a INFORMATIVE Badge
    </Badge>

    <Badge palette="negative">
        This is a NEGATIVE Badge
    </Badge>
</Stack.Container>
```

## Radius

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `radius={["tiny", "tablet:medium", "mobile:medium"]}`

You can modify the border radius of the `Badge` via the `radius` property.

```svelte {title="Badge Radius" mode="repl"}
<script>
    import {Badge, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Badge palette="inverse">DEFAULT Badge</Badge>

    <Badge palette="inverse" radius="nano">
        NANO Badge
    </Badge>

    <Badge palette="inverse" radius="tiny">
        TINY Badge
    </Badge>

    <Badge palette="inverse" radius="small">
        SMALL Badge
    </Badge>

    <Badge palette="inverse" radius="medium">
        MEDIUM Badge
    </Badge>

    <Badge palette="inverse" radius="large">
        LARGE Badge
    </Badge>

    <Badge palette="inverse" radius="huge">
        HUGE Badge
    </Badge>

    <Badge palette="inverse" radius="massive">
        MASSIVE Badge
    </Badge>
</Stack.Container>
```

## Shape

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `shape={["circle", "tablet:pill", "mobile:pill"]}`

You can modify the shape of the `Badge` via the `shape` property.

```svelte {title="Badge Shape" mode="repl"}
<script>
    import {Badge, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Badge palette="inverse">DEFAULT Badge</Badge>

    <Badge palette="inverse" shape="circle">
        CIRCLE Badge
    </Badge>

    <Badge palette="inverse" shape="pill">
        PILL Badge
    </Badge>
</Stack.Container>
```
