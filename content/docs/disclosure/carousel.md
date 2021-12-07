+++
[[properties."Carousel.Container"]]
name="orientation"
description="Renders the `Carousel` vertically."
default="horizontal"
types=["horizontal", "vertical"]

[[properties."Carousel.Container"]]
name="spacing"
description="Adjusts the visual spacing between child items in the `Carousel`."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties."Carousel.Container"]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between child items in the `Carousel`."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties."Carousel.Container"]]
name="spacing_y"
description="Adjusts the vertical visual spacing between child items in the `Carousel`."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[slots."Carousel.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Carousel.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Carousel

> **NOTE**: New since `v0.4.6`.

`Carousel` allows the user to scroll through "slides" of content without having to extend the page dimensions.

```svelte {title="Carousel Preview" mode="repl"}
<script>
    import {
        Box,
        Carousel,
        Center,
    } from "@kahi-ui/framework";
</script>

<Carousel.Container class="carousel-preview">
    <Carousel.Section>
        <Box palette="negative">
            <Center height="100">300 x 200</Center>
        </Box>
    </Carousel.Section>

    <Carousel.Section>
        <Box palette="affirmative">
            <Center height="100">300 x 200</Center>
        </Box>
    </Carousel.Section>

    <Carousel.Section>
        <Box palette="alert">
            <Center height="100">300 x 200</Center>
        </Box>
    </Carousel.Section>
</Carousel.Container>

<style>
    :global(.carousel-preview) {
        width: 300px;
        height: 200px;
    }
</style>
```

## Imports

```svelte {title="Carousel Imports"}
<script>
    import {Carousel} from "@kahi-ui/framework";

    const {Container, Section} = Carousel;
</script>
```

## Orientation

You can set the `Carousel` to render vertically via the `orientation` property.

```svelte {title="Carousel Orientation" mode="repl"}
<script>
    import {
        Box,
        Carousel,
        Center,
    } from "@kahi-ui/framework";
</script>

<Carousel.Container
    class="carousel-orientation"
    orientation="vertical"
>
    <Carousel.Section>
        <Box palette="negative">
            <Center height="100">300 x 200</Center>
        </Box>
    </Carousel.Section>

    <Carousel.Section>
        <Box palette="affirmative">
            <Center height="100">300 x 200</Center>
        </Box>
    </Carousel.Section>

    <Carousel.Section>
        <Box palette="alert">
            <Center height="100">300 x 200</Center>
        </Box>
    </Carousel.Section>
</Carousel.Container>

<style>
    :global(.carousel-orientation) {
        width: 300px;
        height: 200px;
    }
</style>
```

## Spacing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `spacing={["medium", "tablet:small", "mobile:tiny"]}`

You can adjust the spacing between items via the `spacing`, `spacing_x`, and `spacing_y` properties.

```svelte {title="Carousel Spacing" mode="repl"}
<script>
    import {
        Box,
        Carousel,
        Center,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="carousel-spacing"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <Carousel.Container>
            <Carousel.Section>
                <Box palette="negative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="affirmative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="alert">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>
        </Carousel.Container>
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <Carousel.Container spacing="tiny">
            <Carousel.Section>
                <Box palette="negative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="affirmative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="alert">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>
        </Carousel.Container>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Carousel.Container spacing="small">
            <Carousel.Section>
                <Box palette="negative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="affirmative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="alert">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>
        </Carousel.Container>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Carousel.Container spacing="medium">
            <Carousel.Section>
                <Box palette="negative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="affirmative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="alert">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>
        </Carousel.Container>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Carousel.Container spacing="large">
            <Carousel.Section>
                <Box palette="negative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="affirmative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="alert">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>
        </Carousel.Container>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Carousel.Container spacing="huge">
            <Carousel.Section>
                <Box palette="negative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="affirmative">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>

            <Carousel.Section>
                <Box palette="alert">
                    <Center height="100">
                        300 x 200
                    </Center>
                </Box>
            </Carousel.Section>
        </Carousel.Container>
    </div>
</Stack>

<style>
    :global(.carousel-spacing) :global(.carousel) {
        width: 300px;
        height: 200px;
    }
</style>
```
