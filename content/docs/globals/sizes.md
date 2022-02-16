+++
[[properties."*"]]
name="width"
description="Sets the intrinsic width of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "mobile", "tablet", "desktop", "widescreen", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "nano", "tiny", "small", "medium", "large", "huge", "massive", "icon-nano", "icon-tiny", "icon-small", "icon-medium", "icon-large", "icon-huge", "icon-massive", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="max_width"
description="Sets the maximum intrinsic width of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "mobile", "tablet", "desktop", "widescreen", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "nano", "tiny", "small", "medium", "large", "huge", "massive", "icon-nano", "icon-tiny", "icon-small", "icon-medium", "icon-large", "icon-huge", "icon-massive", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="min_width"
description="Sets the minimum intrinsic width of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "mobile", "tablet", "desktop", "widescreen", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "nano", "tiny", "small", "medium", "large", "huge", "massive", "icon-nano", "icon-tiny", "icon-small", "icon-medium", "icon-large", "icon-huge", "icon-massive", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="height"
description="Sets the intrinsic height of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "mobile", "tablet", "desktop", "widescreen", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "nano", "tiny", "small", "medium", "large", "huge", "massive", "icon-nano", "icon-tiny", "icon-small", "icon-medium", "icon-large", "icon-huge", "icon-massive", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="max_height"
description="Sets the maximum intrinsic height of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "mobile", "tablet", "desktop", "widescreen", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "nano", "tiny", "small", "medium", "large", "huge", "massive", "icon-nano", "icon-tiny", "icon-small", "icon-medium", "icon-large", "icon-huge", "icon-massive", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="min_height"
description="Sets the minimum intrinsic height of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "mobile", "tablet", "desktop", "widescreen", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "nano", "tiny", "small", "medium", "large", "huge", "massive", "icon-nano", "icon-tiny", "icon-small", "icon-medium", "icon-large", "icon-huge", "icon-massive", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="size"
description="Sets the intrinsic width + height of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "mobile", "tablet", "desktop", "widescreen", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "nano", "tiny", "small", "medium", "large", "huge", "massive", "icon-nano", "icon-tiny", "icon-small", "icon-medium", "icon-large", "icon-huge", "icon-massive", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="max_size"
description="Sets the maximum intrinsic width + height of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "mobile", "tablet", "desktop", "widescreen", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "nano", "tiny", "small", "medium", "large", "huge", "massive", "icon-nano", "icon-tiny", "icon-small", "icon-medium", "icon-large", "icon-huge", "icon-massive", "{VIEWPORT}:{SIZING}"]

[[properties."*"]]
name="min_size"
description="Sets the minimum intrinsic width + height of the Component."
types=["auto", "content-fit", "content-max", "content-min", "prose", "stretch", "mobile", "tablet", "desktop", "widescreen", "0", "25", "33", "50", "66", "75", "100", "viewport-0", "viewport-25", "viewport-33", "viewport-50", "viewport-66", "viewport-75", "viewport-100", "nano", "tiny", "small", "medium", "large", "huge", "massive", "icon-nano", "icon-tiny", "icon-small", "icon-medium", "icon-large", "icon-huge", "icon-massive", "{VIEWPORT}:{SIZING}"]
+++

# Sizes

All Components have access to the global `height`, `width`, and `size` HTML data attributes. All of which, supports [Responsitivity](../framework/responsitivity.md).

## Width

> **NOTE**: Introduced feature in `v0.2.0`.

> **NOTE**: Introduced block sizing feature in `v0.6.0`.

> **NOTE**: Introduced icon sizing feature in `v0.6.0`.

> **NOTE**: Introduced Viewport breakpoint sizing feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `width={["25", "tablet:viewport-50"]}`

You can set a defined width for your Components via the `width` property.

```svelte {title="Sizes Width" mode="repl"}
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium">
    <div>
        <Text is="strong">auto</Text>
        <Box palette="affirmative" width="auto">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">content-fit</Text>
        <Box palette="negative" width="content-fit">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">content-max</Text>
        <Box palette="alert" width="content-max">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">content-min</Text>
        <Box palette="affirmative" width="content-min">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">prose</Text>
        <Box palette="negative" width="prose">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">mobile</Text>
        <Box palette="alert" width="mobile">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">tablet</Text>
        <Box palette="affirmative" width="tablet">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">desktop</Text>
        <Box palette="negative" width="desktop">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">widescreen</Text>
        <Box palette="alert" width="widescreen">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">0</Text>
        <Box palette="affirmative" width="0">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">25</Text>
        <Box palette="negative" width="25">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">33</Text>
        <Box palette="alert" width="33">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">50</Text>
        <Box palette="affirmative" width="50">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">66</Text>
        <Box palette="negative" width="66">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">75</Text>
        <Box palette="alert" width="75">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">100</Text>
        <Box palette="affirmative" width="100">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-0</Text>
        <Box palette="affirmative" width="viewport-0">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-25</Text>
        <Box palette="negative" width="viewport-25">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-33</Text>
        <Box palette="alert" width="viewport-33">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-50</Text>
        <Box palette="affirmative" width="viewport-50">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-66</Text>
        <Box palette="negative" width="viewport-66">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-75</Text>
        <Box palette="alert" width="viewport-75">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-100</Text>
        <Box
            palette="affirmative"
            width="viewport-100"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-nano</Text>
        <Box
            palette="negative"
            width="icon-nano"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-tiny</Text>
        <Box
            palette="alert"
            width="icon-tiny"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-small</Text>
        <Box
            palette="affirmative"
            width="icon-small"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-medium</Text>
        <Box
            palette="negative"
            width="icon-medium"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-large</Text>
        <Box
            palette="alert"
            width="icon-large"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-huge</Text>
        <Box
            palette="affirmative"
            width="icon-huge"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-massive</Text>
        <Box
            palette="negative"
            width="icon-massive"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">nano</Text>
        <Box
            palette="alert"
            width="nano"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">tiny</Text>
        <Box
            palette="affirmative"
            width="tiny"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">small</Text>
        <Box
            palette="negative"
            width="small"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">medium</Text>
        <Box
            palette="alert"
            width="medium"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">large</Text>
        <Box
            palette="affirmative"
            width="large"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">huge</Text>
        <Box
            palette="negative"
            width="huge"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">massive</Text>
        <Box
            palette="alert"
            width="massive"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>
</Stack.Container>
```

## Height

> **NOTE**: Introduced feature in `v0.2.0`.

> **NOTE**: Introduced block sizing feature in `v0.6.0`.

> **NOTE**: Introduced icon sizing feature in `v0.6.0`.

> **NOTE**: Introduced Viewport breakpoint sizing feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `height={["25", "tablet:viewport-50"]}`

You can set a defined height for your Components via the `height` property.

```svelte {title="Sizes Height" mode="repl"}
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container orientation="horizontal" spacing="medium">
    <div>
        <Text is="strong">auto</Text>
        <Box palette="affirmative" height="auto">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">content-fit</Text>
        <Box palette="negative" height="content-fit">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">content-max</Text>
        <Box palette="alert" height="content-max">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">content-min</Text>
        <Box
            palette="affirmative"
            height="content-min"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">prose</Text>
        <Box palette="negative" height="prose">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">mobile</Text>
        <Box palette="alert" width="mobile">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">tablet</Text>
        <Box palette="affirmative" width="tablet">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">desktop</Text>
        <Box palette="negative" width="desktop">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">widescreen</Text>
        <Box palette="alert" width="widescreen">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">stretch</Text>
        <Box palette="alert" height="stretch">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">0</Text>
        <Box palette="affirmative" height="0">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">25</Text>
        <Box palette="negative" height="25">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">33</Text>
        <Box palette="alert" height="33">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">50</Text>
        <Box palette="affirmative" height="50">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">66</Text>
        <Box palette="negative" height="66">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">75</Text>
        <Box palette="alert" height="75">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">100</Text>
        <Box palette="affirmative" height="100">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-0</Text>
        <Box palette="affirmative" height="viewport-0">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-25</Text>
        <Box palette="negative" height="viewport-25">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-33</Text>
        <Box palette="alert" height="viewport-33">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-50</Text>
        <Box
            palette="affirmative"
            height="viewport-50"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-66</Text>
        <Box palette="negative" height="viewport-66">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-75</Text>
        <Box palette="alert" height="viewport-75">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-100</Text>
        <Box
            palette="affirmative"
            height="viewport-100"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-nano</Text>
        <Box
            palette="negative"
            width="icon-nano"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-tiny</Text>
        <Box
            palette="alert"
            width="icon-tiny"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-small</Text>
        <Box
            palette="affirmative"
            width="icon-small"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-medium</Text>
        <Box
            palette="negative"
            width="icon-medium"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-large</Text>
        <Box
            palette="alert"
            width="icon-large"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-huge</Text>
        <Box
            palette="affirmative"
            width="icon-huge"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-massive</Text>
        <Box
            palette="negative"
            width="icon-massive"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">nano</Text>
        <Box
            palette="alert"
            width="nano"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">tiny</Text>
        <Box
            palette="affirmative"
            width="tiny"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">small</Text>
        <Box
            palette="negative"
            width="small"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">medium</Text>
        <Box
            palette="alert"
            width="medium"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">large</Text>
        <Box
            palette="affirmative"
            width="large"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">huge</Text>
        <Box
            palette="negative"
            width="huge"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">massive</Text>
        <Box
            palette="alert"
            width="massive"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>
</Stack.Container>
```

## Size

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `size={["25", "tablet:viewport-50"]}`

You can set a defined width + height for your Components via the `size` property.

```svelte {title="Sizes Size" mode="repl"}
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium">
    <div>
        <Text is="strong">auto</Text>
        <Box palette="affirmative" size="auto">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">content-fit</Text>
        <Box palette="negative" size="content-fit">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">content-max</Text>
        <Box palette="alert" size="content-max">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">content-min</Text>
        <Box palette="affirmative" size="content-min">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">prose</Text>
        <Box palette="negative" size="prose">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">mobile</Text>
        <Box palette="alert" size="mobile">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">tablet</Text>
        <Box palette="affirmative" size="tablet">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">desktop</Text>
        <Box palette="negative" size="desktop">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">widescreen</Text>
        <Box palette="alert" size="widescreen">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">0</Text>
        <Box palette="affirmative" size="0">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">25</Text>
        <Box palette="negative" size="25">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">33</Text>
        <Box palette="alert" size="33">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">50</Text>
        <Box palette="affirmative" size="50">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">66</Text>
        <Box palette="negative" size="66">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">75</Text>
        <Box palette="alert" size="75">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">100</Text>
        <Box palette="affirmative" size="100">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-0</Text>
        <Box palette="affirmative" size="viewport-0">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-25</Text>
        <Box palette="negative" size="viewport-25">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-33</Text>
        <Box palette="alert" size="viewport-33">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-50</Text>
        <Box palette="affirmative" size="viewport-50">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-66</Text>
        <Box palette="negative" size="viewport-66">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-75</Text>
        <Box palette="alert" size="viewport-75">
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">viewport-100</Text>
        <Box
            palette="affirmative"
            size="viewport-100"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-nano</Text>
        <Box
            palette="negative"
            size="icon-nano"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-tiny</Text>
        <Box
            palette="alert"
            size="icon-tiny"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-small</Text>
        <Box
            palette="affirmative"
            size="icon-small"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-medium</Text>
        <Box
            palette="negative"
            size="icon-medium"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-large</Text>
        <Box
            palette="alert"
            size="icon-large"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-huge</Text>
        <Box
            palette="affirmative"
            size="icon-huge"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">icon-massive</Text>
        <Box
            palette="negative"
            size="icon-massive"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">nano</Text>
        <Box
            palette="alert"
            size="nano"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">tiny</Text>
        <Box
            palette="affirmative"
            size="tiny"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">small</Text>
        <Box
            palette="negative"
            size="small"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">medium</Text>
        <Box
            palette="alert"
            size="medium"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">large</Text>
        <Box
            palette="affirmative"
            size="large"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">huge</Text>
        <Box
            palette="negative"
            size="huge"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>

    <div>
        <Text is="strong">massive</Text>
        <Box
            palette="alert"
            size="massive"
        >
            <Text variation="truncate">
                Lorem ipsum dolor
            </Text>
        </Box>
    </div>
</Stack.Container>
```

## Minimums + Maximums

> **NOTE**: Introduced feature in `v0.2.0`.

You can also set minimums or maximum sizes via prefixing your properties with `max_` or `min_`.

```svelte {title="Sizes Maximum + Minimums" mode="repl"}
<script>
    import {Box, Text} from "@kahi-ui/framework";
</script>

<Box
    palette="affirmative"
    padding="small"
    style="width:15rem;"
>
    <Box palette="negative" max_width="25">
        <Text variation="truncate">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </Text>
    </Box>
</Box>
```
