+++
[[properties.Stack]]
name="orientation"
description="Renders the `Stack` horizontally."
types=["horizontal", "{VIEWPORT}:horizontal"]

[[properties.Stack]]
name="alignment"
description="Adjusts where the child items will be placed within the `Stack` along both axis."
types=["center", "stretch", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Stack]]
name="alignment_x"
description="Adjusts where the child items will be placed within the `Stack` along the horizontal axis."
types=["center", "stretch", "left", "right", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Stack]]
name="alignment_y"
description="Adjusts where the child items will be placed within the `Stack` along the vertical axis."
types=["center", "stretch", "bottom", "top", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Stack]]
name="spacing"
description="Adjusts the visual spacing between child items in the `Stack`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties.Stack]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between child items in the `Stack`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties.Stack]]
name="spacing_y"
description="Adjusts the vertical visual spacing between child items in the `Stack`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[slots.Stack]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Stack

> **NOTE**: Introduced feature in `v0.2.0`.

`Stack` is a layout primitive for setting up a horizontal / vertical stacking of items with even spacing between children.

```svelte {title="Stack Preview" mode="repl"}
<script>
    import {Box, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container>
    <Box palette="alert" size="icon-massive" />
    <Box palette="affirmative" size="icon-massive" />
    <Box palette="negative" size="icon-massive" />
</Stack.Container>
```

## Imports

> **WARNING**: This feature was renamed from `<Stack>` to `<Stack.Container>` in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

```svelte {title="Stack Imports"}
<script>
    import {Stack} from "@kahi-ui/framework";

    const {Container, Item} = Stack;
</script>
```

## Orientation

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `orientation={["desktop:horizontal", "widescreen:horizontal"]}`

You can set the `Stack` to render horizontally via the `orientation` property.

```svelte {title="Stack Orientation" mode="repl"}
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    alignment_y="top"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container>
                <Box
                    palette="alert"
                    size="icon-massive"
                />

                <Box
                    palette="affirmative"
                    size="icon-massive"
                />

                <Box
                    palette="negative"
                    size="icon-massive"
                />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">HORIZONTAL</Text>
        <Box palette="inverse" padding="small">
            <Stack.Container orientation="horizontal">
                <Box
                    palette="alert"
                    size="icon-massive"
                />

                <Box
                    palette="affirmative"
                    size="icon-massive"
                />

                <Box
                    palette="negative"
                    size="icon-massive"
                />
            </Stack.Container>
        </Box>
    </div>
</Stack.Container>
```

## Spacing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `spacing={["medium", "tablet:small", "mobile:tiny"]}`

You can adjust the spacing between items via the `spacing`, `spacing_x`, and `spacing_y` properties.

```svelte {title="Stack Spacing" mode="repl"}
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container>
                <Box
                    palette="alert"
                    size="icon-massive"
                />

                <Box
                    palette="affirmative"
                    size="icon-massive"
                />

                <Box
                    palette="negative"
                    size="icon-massive"
                />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">NANO</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container spacing="nano">
                <Box
                    palette="alert"
                    size="icon-massive"
                />

                <Box
                    palette="affirmative"
                    size="icon-massive"
                />

                <Box
                    palette="negative"
                    size="icon-massive"
                />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container spacing="tiny">
                <Box
                    palette="alert"
                    size="icon-massive"
                />

                <Box
                    palette="affirmative"
                    size="icon-massive"
                />

                <Box
                    palette="negative"
                    size="icon-massive"
                />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container spacing="small">
                <Box
                    palette="alert"
                    size="icon-massive"
                />

                <Box
                    palette="affirmative"
                    size="icon-massive"
                />

                <Box
                    palette="negative"
                    size="icon-massive"
                />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container spacing="medium">
                <Box
                    palette="alert"
                    size="icon-massive"
                />

                <Box
                    palette="affirmative"
                    size="icon-massive"
                />

                <Box
                    palette="negative"
                    size="icon-massive"
                />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container spacing="large">
                <Box
                    palette="alert"
                    size="icon-massive"
                />

                <Box
                    palette="affirmative"
                    size="icon-massive"
                />

                <Box
                    palette="negative"
                    size="icon-massive"
                />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container spacing="huge">
                <Box
                    palette="alert"
                    size="icon-massive"
                />

                <Box
                    palette="affirmative"
                    size="icon-massive"
                />

                <Box
                    palette="negative"
                    size="icon-massive"
                />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container spacing="massive">
                <Box
                    palette="alert"
                    size="icon-massive"
                />

                <Box
                    palette="affirmative"
                    size="icon-massive"
                />

                <Box
                    palette="negative"
                    size="icon-massive"
                />
            </Stack.Container>
        </Box>
    </div>
</Stack.Container>
```

## Alignment

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `alignment_x={["center", "tablet:left", "mobile:right"]}`

You can adjust the spacing between items via the `alignment`, `alignment_x`, and `alignment_y` properties.

```svelte {title="Stack Alignment" mode="repl"}
<script>
    import {
        Box,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    class="stack-alignment"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container>
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">CENTER X/Y</Text>
        <Box palette="inverse" padding="small">
            <Stack.Container alignment="center">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">STRETCH X</Text>
        <Box palette="inverse" padding="small">
            <Stack.Container alignment_x="stretch">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">LEFT X</Text>
        <Box palette="inverse" padding="small">
            <Stack.Container alignment_x="left">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">RIGHT X</Text>
        <Box palette="inverse" padding="small">
            <Stack.Container alignment_x="right">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">TOP Y</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container alignment_y="top">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">BOTTOM Y</Text>
        <Box
            palette="inverse"
            padding="small"
            width="content-min"
        >
            <Stack.Container alignment_y="bottom">
                <Box palette="alert" />
                <Box palette="affirmative" />
                <Box palette="negative" />
            </Stack.Container>
        </Box>
    </div>
</Stack.Container>

<style>
    :global(.stack-alignment .stack .box) {
        min-width: 3rem;
        min-height: 3rem;
    }

    :global(.stack-alignment
            .stack[data-alignment~="center"]) {
        width: 6rem;
        height: 12rem;
    }

    :global(.stack-alignment
            .stack[data-alignment-x~="stretch"]) {
        width: 6rem;
        height: 12rem;
    }

    :global(.stack-alignment
            .stack[data-alignment-x~="left"]),
    :global(.stack-alignment
            .stack[data-alignment-x~="right"]) {
        width: 6rem;
    }

    :global(.stack-alignment
            .stack[data-alignment-y~="top"]),
    :global(.stack-alignment
            .stack[data-alignment-y~="bottom"]) {
        height: 12rem;
    }
</style>
```

## Wrap

You can alter the `Stack` to wraps its children into the next line via the `variation` property.

```svelte {title="Stack Wrap" mode="repl"}
<script>
    import {Box, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="huge"
    variation="wrap"
>
    <Box palette="alert" size="icon-massive" />
    <Box palette="affirmative" size="icon-massive" />
    <Box palette="negative" size="icon-massive" />

    <Box palette="alert" size="icon-massive" />
    <Box palette="affirmative" size="icon-massive" />
    <Box palette="negative" size="icon-massive" />

    <Box palette="alert" size="icon-massive" />
</Stack.Container>
```

## Item Stretch

> **NOTE**: Introduced feature in `v0.6.0`.

You can adjust span of individual items via the `variation="stretch"` property, when wrapping an item in `Stack.Item`.

```svelte {title="Stack Item Stretch" mode="repl"}
<script>
    import {Box, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container orientation="horizontal" width="100">
    <Box
        palette="alert"
        variation="borders"
        size="icon-massive"
    />

    <Stack.Item variation="stretch">
        <Box
            palette="affirmative"
            variation="borders"
            min_width="icon-massive"
            height="icon-massive"
        />
    </Stack.Item>

    <Box
        palette="negative"
        variation="borders"
        size="icon-massive"
    />
</Stack.Container>
```
