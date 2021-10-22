# Carousel

`Carousel` allows the user to scroll through "slides" of content without having to extend the page dimensions.

```svelte repl Carousel Preview
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

```svelte default Carousel Imports
<script>
    import {Carousel} from "@kahi-ui/framework";

    import {Container, Section} = Carousel;
</script>
```

## Orientation

You can set the `Carousel` to render vertically via the `orientation` property.

```svelte repl Carousel Orientation
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

```svelte repl Stack Spacing
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
