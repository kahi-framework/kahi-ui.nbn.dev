+++
[[properties."Mosaic.Container"]]
name="sizing"
description="Sets the minimum width each child item divided up into, out of the space available."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties."Mosaic.Container"]]
name="alignment"
description="Adjusts where the child items will be placed within the `Mosaic.Container` along both axis."
types=["center", "stretch", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Mosaic.Container"]]
name="alignment_x"
description="Adjusts where the child items will be placed within the `Mosaic.Container` along the horizontal axis."
types=["center", "stretch", "left", "right", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Mosaic.Container"]]
name="alignment_y"
description="Adjusts where the child items will be placed within the `Mosaic.Container` along the vertical axis."
types=["center", "stretch", "bottom", "top", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Mosaic.Container"]]
name="spacing"
description="Adjusts the visual spacing between child items in the `Mosaic.Container`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."Mosaic.Container"]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between child items in the `Mosaic.Container`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."Mosaic.Container"]]
name="spacing_y"
description="Adjusts the vertical visual spacing between child items in the `Mosaic.Container`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."Mosaic.Item"]]
name="span"
description="In a point scale of 1...12, sets how many columns and rows the `Mosaic.Item` will span."
types=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "{VIEWPORT}:{POINTS}"]

[[properties."Mosaic.Item"]]
name="span_x"
description="In a point scale of 1...12, sets how many columns the `Mosaic.Item` will span."
types=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "{VIEWPORT}:{POINTS}"]

[[properties."Mosaic.Item"]]
name="span_y"
description="In a point scale of 1...12, sets how many rows the `Mosaic.Item` will span."
types=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "{VIEWPORT}:{POINTS}"]

[[slots."Mosaic.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Mosaic.Item"]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Mosaic

> **NOTE**: Introduced feature in `v0.2.0`.

`Mosaic` is a layout primitive for setting up a mosaic of items organized to displaying as many child items at a certain size as possible.

```svelte {title="Mosaic Preview" mode="repl"}
<script>
    import {Box, Mosaic} from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="tiny" spacing="medium">
    <Box palette="alert" height="icon-massive" />
    <Box palette="affirmative" height="icon-massive" />
    <Box palette="negative" height="icon-massive" />

    <Box palette="affirmative" height="icon-massive" />
    <Box palette="negative" height="icon-massive" />
    <Box palette="alert" height="icon-massive" />

    <Box palette="alert" height="icon-massive" />
    <Box palette="affirmative" height="icon-massive" />
    <Box palette="negative" height="icon-massive" />

    <Box palette="negative" height="icon-massive" />
    <Box palette="alert" height="icon-massive" />
    <Box palette="affirmative" height="icon-massive" />

    <Box palette="affirmative" height="icon-massive" />
    <Box palette="negative" height="icon-massive" />
    <Box palette="alert" height="icon-massive" />
</Mosaic.Container>
```

## Imports

```svelte {title="Mosaic Imports"}
<script>
    import {Mosaic} from "@kahi-ui/framework";

    const {Container, Item} = Mosaic;
</script>
```

## Sizing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `sizing={["tiny", "tablet:medium", "mobile:medium"]}`

You can alter how large each `Mosaic` item should be via the `sizing` property.

```svelte {title="Mosaic Sizing" mode="repl"}
<script>
    import {
        Box,
        Mosaic,
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
        <Text is="strong">NANO</Text>
        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="nano"
                spacing="medium"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="tiny"
                spacing="medium"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="small"
                spacing="medium"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="medium"
                spacing="medium"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="large"
                spacing="medium"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="huge"
                spacing="medium"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>

        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="huge"
                spacing="medium"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>
</Stack.Container>
```

## Spacing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `spacing={["medium", "tablet:small", "mobile:tiny"]}`

You can adjust the spacing between items via the `spacing`, `spacing_x`, and `spacing_y` properties.

```svelte {title="Mosaic Spacing" mode="repl"}
<script>
    import {
        Box,
        Mosaic,
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
        <Box palette="inverse" padding="small">
            <Mosaic.Container sizing="tiny">
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">NANO</Text>
        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="tiny"
                spacing="nano"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="tiny"
                spacing="tiny"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="tiny"
                spacing="small"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="tiny"
                spacing="medium"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="tiny"
                spacing="large"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="tiny"
                spacing="huge"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>
        <Box palette="inverse" padding="small">
            <Mosaic.Container
                sizing="tiny"
                spacing="massive"
            >
                <Box
                    palette="alert"
                    height="icon-massive"
                />

                <Box
                    palette="affirmative"
                    height="icon-massive"
                />

                <Box
                    palette="negative"
                    height="icon-massive"
                />
            </Mosaic.Container>
        </Box>
    </div>
</Stack.Container>
```

## Item Span

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `span={["3", "tablet:2", "mobile:1"]}`

You can adjust span of individual items via the `span`, `span_x`, `span_y` properties, by wrapping the items in `Mosaic.Item`.

```svelte {title="Mosaic Item Span" mode="repl"}
<script>
    import {Box, Mosaic} from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="tiny" spacing="medium">
    <Box palette="alert" height="icon-massive" />
    <Mosaic.Item
        span_x={["3", "mobile:1", "tablet:2"]}
    >
        <Box
            palette="affirmative"
            height="icon-massive"
        />
    </Mosaic.Item>
    <Box palette="negative" height="icon-massive" />

    <Box palette="affirmative" height="icon-massive" />
    <Box palette="negative" height="icon-massive" />
    <Box palette="alert" height="icon-massive" />

    <Box palette="alert" height="icon-massive" />
    <Box palette="affirmative" height="icon-massive" />
    <Box palette="negative" height="icon-massive" />

    <Mosaic.Item span_x="2">
        <Box
            palette="negative"
            height="icon-massive"
        />
    </Mosaic.Item>
    <Box palette="alert" height="icon-massive" />
    <Box palette="affirmative" height="icon-massive" />

    <Box palette="affirmative" height="icon-massive" />
    <Box palette="negative" height="icon-massive" />
    <Box palette="alert" height="icon-massive" />
</Mosaic.Container>
```
