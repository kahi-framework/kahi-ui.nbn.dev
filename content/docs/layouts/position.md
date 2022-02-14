+++
[[properties.Position]]
name="variation"
description="Sets how the `Position` lays its self out."
types=["action", "container", "indicator", "raised", "viewport"]

[[properties.Position]]
name="placement"
description="Sets the placement of `variation=\"raised\"` property."
types=["bottom", "left", "right", "top"]

[[properties.Position]]
name="alignment_x"
description="Sets the x-axis alignment of the `variation=\"action\"` / `variation=\"indicator\"` properties."
types=["left", "right"]

[[properties.Position]]
name="alignment_y"
description="Sets the y-axis alignment of the `variation=\"action\"` / `variation=\"indicator\"` properties."
types=["top", "bottom"]

[[properties.Position]]
name="spacing"
description="Adjusts how far off the corner the `Position` sets its self for the `variation=\"action\"` property."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties.Position]]
name="spacing_x"
description="Adjusts how far off the corner the `Position` sets its self horizontally for the `variation=\"action\"` property."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties.Position]]
name="spacing_y"
description="Adjusts how far off the corner the `Position` sets its self vertically for the `variation=\"action\"` property."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[slots.Position]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Position

> **NOTE**: New since `v0.4.2`.

> **WARNING**: Received a breaking refactoring in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Position` is a layout primitive that can float itself and child content in specific regions of the containing Components.

```svelte {title="Position Preview" mode="repl"}
<script>
    import {
        Badge,
        Button,
        Position,
    } from "@kahi-ui/framework";
</script>

<Button palette="accent">
    Open Inbox
    <Position
        variation="indicator"
        placement="top"
        alignment_x="right"
    >
        <Badge
            animation="pulse"
            palette="negative"
            shape="pill"
        >
            +99
        </Badge>
    </Position>
</Button>
```

## Imports

```svelte {title="Position Imports"}
<script>
    import {Position} from "@kahi-ui/framework";
</script>
```

## Action

> **NOTE**: New since `v0.5.0`.

Typically used for FABs (Floating Action Buttons), you can set the `Position` to float its self (and its children) into a corner relative to the viewport via the `variation` property.

```svelte {title="Position Action" mode="repl"}
<script>
    import {
        Button,
        Position,
    } from "@kahi-ui/framework";
</script>

<Position
    variation="action"
    alignment_x="left"
    alignment_y="top"
>
    <Button palette="accent">Action TOPxLEFT</Button>
</Position>

<Position variation="action" alignment_y="top">
    <Button palette="accent">Action TOPxRIGHT</Button>
</Position>

<Position variation="action" alignment_x="left">
    <Button palette="accent">
        Action BOTTOMxLEFT
    </Button>
</Position>

<Position variation="action">
    <Button palette="accent">
        Action BOTTOMxRIGHT DEFAULT
    </Button>
</Position>
```

You can also adjust how far the `Position` sits away from the corner via the `spacing`, `spacing_x`, `spacing_y` properties respectively.

```svelte {title="Position Action Spacing" mode="repl"}
<script>
    import {
        Button,
        Position,
    } from "@kahi-ui/framework";
</script>

<Position variation="action" spacing="huge">
    <Button palette="accent">
        Action HUGE Spacing
    </Button>
</Position>
```

You can also adjust the `Position` to sit relative to the parent container instead of viewport via the `variation` property.

```svelte {title="Position Action Container" mode="repl"}
<script>
    import {
        Box,
        Button,
        Position,
    } from "@kahi-ui/framework";
</script>

<Box padding="medium">
    Hello there!
    <Position
        variation={["container", "action"]}
        alignment_y="top"
    >
        <Button palette="accent">
            Action CONTAINER RELATIVE
        </Button>
    </Position>
</Box>
```

## Indicator

> **WARNING**: `<Position variation="floated">` was deprecated and renamed to `<Position variation="indicator">` in `v0.5.0`.

> **IMPORTANT**: `<Position variation="indicator" placement="top/bottom">` was removed and renamed to `<Position variation="indicator" alignment_y="top/bottom">` in `v0.5.0`.

Typically used for unread indicators, you can set the `Position` to float its self (and its children) onto a corner relative to its parent container via the `variation` property.

```svelte {title="Position Indicator" mode="repl"}
<script>
    import {
        Badge,
        Button,
        Position,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Button palette="accent">
    Indicator TOPxLEFT
    <Position variation="indicator" alignment_x="left">
        <Badge
            animation="pulse"
            palette="negative"
            shape="pill"
        >
            +99
        </Badge>
    </Position>
</Button>

<Button palette="accent">
    Indicator TOPxRIGHT DEFAULT
    <Position variation="indicator">
        <Badge
            animation="pulse"
            palette="negative"
            shape="pill"
        >
            +99
        </Badge>
    </Position>
</Button>

<Spacer spacing="small" />

<Button palette="accent">
    Indicator BOTTOMxLEFT
    <Position
        variation="indicator"
        alignment_x="left"
        alignment_y="bottom"
    >
        <Badge
            animation="pulse"
            palette="negative"
            shape="pill"
        >
            +99
        </Badge>
    </Position>
</Button>

<Button palette="accent">
    Indicator BOTTOMxRIGHT
    <Position
        variation="indicator"
        alignment_y="bottom"
    >
        <Badge
            animation="pulse"
            palette="negative"
            shape="pill"
        >
            +99
        </Badge>
    </Position>
</Button>
```

## Raised

You can set the `Position` to raise its self (and its children) in-place via the `variation` property.

```svelte {title="Position Raised" mode="repl"}
<script>
    import {
        Badge,
        Position,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Text is="span">
    <Position variation="raised" placement="top">
        <Badge palette="accent">+99</Badge>
    </Position>
    TOP
</Text>

<Text is="span">
    BOTTOM
    <Position variation="raised" placement="bottom">
        <Badge palette="accent">+99</Badge>
    </Position>
</Text>

<Spacer spacing="medium" />

<Text is="span">
    <Position variation="raised" placement="left">
        <Badge palette="accent">+99</Badge>
    </Position>
    LEFT
</Text>

<Text is="span">
    RIGHT
    <Position variation="raised" placement="right">
        <Badge palette="accent">+99</Badge>
    </Position>
</Text>
```
