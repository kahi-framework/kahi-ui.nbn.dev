+++
[[properties.Position]]
name="variation"
description="Sets the `Position` to float on top of the containing layout, thus taking no physical space. Or raise it while taking space."
types=["floated", "raised"]

[[properties.Position]]
name="placement"
description="Sets the placement to top or bottom for `variation=\"floated\", and `left` or `right` for `variation=\"raised\" properties."
types=["bottom", "left", "right", "top"]

[[properties.Position]]
name="alignment_x"
description="Sets the x-axis alignment of the `variation=\"floated\"` property."
types=["left", "right"]

[[slots.Position]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Position

`Position` is a layout primitive that can float itself and child content in specific regions of the containing Components.

```svelte repl Position Preview
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
        variation="floated"
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

```svelte default Position Imports
<script>
    import {Position} from "@kahi-ui/framework";
</script>
```

## Floated

You can set the `Position` to float its self (and its children) into a corner relative to its containing layout via the `variation` property.

```svelte repl Position Floated
<script>
    import {
        Badge,
        Button,
        Position,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Button palette="accent">
    Floated TOPxLEFT
    <Position
        variation="floated"
        placement="top"
        alignment_x="left"
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
    Floated TOPxRIGHT
    <Position
        variation="floated"
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

<Spacer spacing="small" />

<Button palette="accent">
    Floated BOTTOMxLEFT
    <Position
        variation="floated"
        placement="bottom"
        alignment_x="left"
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
    Floated BOTTOMxRIGHT
    <Position
        variation="floated"
        placement="bottom"
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

## Raised

You can set the `Position` to raise its self (and its children) in-place via the `variation` property.

```svelte repl Position Raised
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
