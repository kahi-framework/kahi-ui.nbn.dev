+++
[[properties."*"]]
name="margin"
description="Alters the visual spacing around the Component."
types=["auto", "none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="margin_x"
description="Alters the visual spacing around the horizontal axis of the Component."
types=["auto", "none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="margin_y"
description="Alters the visual spacing around the vertical axis of the Component."
types=["auto", "none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="margin_left"
description="Alters the visual spacing to the left of the Component."
types=["auto", "none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="margin_top"
description="Alters the visual spacing to the top of the Component."
types=["auto", "none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="margin_right"
description="Alters the visual spacing to the right of the Component."
types=["auto", "none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="margin_bottom"
description="Alters the visual spacing to the bottom of the Component."
types=["auto", "none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="padding"
description="Alters the inner visual spacing of the Component."
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="padding_x"
description="Alters the inner visual spacing along the horizontal axis of the Component."
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="padding_y"
description="Alters the inner visual spacing along the vertical axis of the Component."
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="padding_left"
description="Alters the inner visual spacing on the left side of the Component."
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="padding_top"
description="Alters the inner visual spacing on the top side of the Component."
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="padding_right"
description="Alters the inner visual spacing on the right side of the Component."
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."*"]]
name="padding_bottom"
description="Alters the inner visual spacing on the bottom side of the Component."
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]
+++

# Spacings

All Components have access to the global margin and padding HTML data attributes. All of which, supports [Responsitivity](../framework/responsitivity.md).

## Margin

> **NOTE**: Introduced feature in `v0.2.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `margin={["small", "tablet:large"]}`

You can set margins for your Components via the `margin` property.

```svelte {title="Spacings Margin" mode="repl"}
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <Box palette="negative">
        <Box palette="alert" margin="none">NONE</Box>
    </Box>

    <Box palette="negative">
        <Box palette="alert" margin="nano">NANO</Box>
    </Box>

    <Box palette="negative">
        <Box palette="alert" margin="tiny">TINY</Box>
    </Box>

    <Box palette="negative">
        <Box palette="alert" margin="small">SMALL</Box>
    </Box>

    <Box palette="negative">
        <Box palette="alert" margin="medium">
            MEDIUM
        </Box>
    </Box>

    <Box palette="negative">
        <Box palette="alert" margin="large">LARGE</Box>
    </Box>

    <Box palette="negative">
        <Box palette="alert" margin="huge">HUGE</Box>
    </Box>

    <Box palette="negative">
        <Box palette="alert" margin="massive">
            MASSIVE
        </Box>
    </Box>
</Stack>
```

## Padding

> **NOTE**: Introduced feature in `v0.2.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `padding={["small", "tablet:large"]}`

You can set paddings for your Components via the `padding` property.

```svelte {title="Spacings Padding" mode="repl"}
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <Box palette="alert" padding="none">
        <Box palette="negative">NONE</Box>
    </Box>

    <Box palette="alert" padding="nano">
        <Box palette="negative">NANO</Box>
    </Box>

    <Box palette="alert" padding="tiny">
        <Box palette="negative">TINY</Box>
    </Box>

    <Box palette="alert" padding="small">
        <Box palette="negative">SMALL</Box>
    </Box>

    <Box palette="alert" padding="medium">
        <Box palette="negative">MEDIUM</Box>
    </Box>

    <Box palette="alert" padding="large">
        <Box palette="negative">LARGE</Box>
    </Box>

    <Box palette="alert" padding="huge">
        <Box palette="negative">HUGE</Box>
    </Box>

    <Box palette="alert" padding="massive">
        <Box palette="negative">MASSIVE</Box>
    </Box>
</Stack>
```

## Directional

All `Spacings` properties have directional support via the `*_x`, `*_y`, `*_left`, `*_top`, `*_right`, and `*_bottom` suffixes.

```svelte {title="Spacings Direction" mode="repl"}
<script>
    import {Box, Code} from "@kahi-ui/framework";
</script>

<Box palette="affirmative" padding_y="small">
    <Code>padding_y="small"</Code>
</Box>

<Box palette="negative" margin_top="large">
    <Code>margin_top="large"</Code>
</Box>
```
