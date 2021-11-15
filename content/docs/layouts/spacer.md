+++
[[properties.Spacer]]
name="is"
description="Renders the `Spacer` as a block (`div`) or inline (`span`)."
default="div"
types=["div", "span"]

[[properties.Spacer]]
name="spacing"
description="Adjusts the visual spacing between the two immediate siblings of the `Spacer`."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Spacer]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between the two immediate siblings of the `Spacer`."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Spacer]]
name="spacing_y"
description="Adjusts the vertical visual spacing between the two immediate siblings of the `Spacer`."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]
+++

# Spacer

`Spacer` is a layout primitive that takes up all available vertical space between its two immediate siblings.

```svelte repl Spacer Preview
<script>
    import {
        Box,
        Spacer,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Box
    palette="inverse"
    padding_x="small"
    padding_y="tiny"
>
    <Stack orientation="horizontal">
        LEFT
        <Spacer />
        RIGHT
    </Stack>
</Box>
```

## Imports

```html default Spacer Imports
<script>
    import {Spacer} from "@kahi-ui/framework";
</script>
```

## Spacing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `spacing={["medium", "tablet:small", "mobile:tiny"]}`

You can adjust the spacing between the immediate siblings via the `spacing`, `spacing_x`, and `spacing_y` properties.

```svelte repl Spacer Spacing
<script>
    import {
        Box,
        Spacer,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">TINY</Text>
        <Box
            palette="inverse"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="tiny" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Box
            palette="inverse"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="small" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Box
            palette="inverse"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="medium" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Box
            palette="inverse"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="large" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Box
            palette="inverse"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="huge" />
            BOTTOM
        </Box>
    </div>
</Stack>
```

## Inline

You can have the `Spacer` rendering as an inline `<span>` via the `is` property.

```svelte repl Spacer Inline
<script>
    import {
        Box,
        Spacer,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">BLOCK / DIV / DEFAULT</Text>
        <Box
            palette="inverse"
            margin_top="small"
            padding_x="small"
            padding_y="tiny"
        >
            TOP
            <Spacer spacing="huge" />
            BOTTOM
        </Box>
    </div>

    <div>
        <Text is="strong">INLINE / SPAN</Text>
        <Box
            palette="inverse"
            margin_top="small"
            padding_x="small"
            padding_y="tiny"
        >
            LEFT
            <Spacer
                is="span"
                orientation="horizontal"
                spacing="huge"
            />
            RIGHT
        </Box>
    </div>
</Stack>
```
