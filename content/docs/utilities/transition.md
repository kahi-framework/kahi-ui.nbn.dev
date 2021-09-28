+++
[[properties.Transition]]
name="animation"
description="Selects the animation to be ran on the containing `Transition` element."
types=["clip", "fade", "scale", "slide"]

[[properties.Transition]]
name="delay"
description="Sets how long after a `variation` property change in a percentage range (e.g. `0.2`) that the animation should start."
types=["number", "string"]

[[properties.Transition]]
name="direction"
description="Sets the direction in which the selected animation will move to, if applicable."
default="bottom"
types=["bottom", "left", "right", "top"]

[[properties.Transition]]
name="variation"
description="Controls the variation of the selected animation, if applicable."
default="undefined"
types=["undefined", "enter", "exit"]

[[events.Transition]]
name="animationend"
description="Fires whenever the `Transition` animation ends."
types=["AnimationEvent"]

[[events.Transition]]
name="animationstart"
description="Fires whenever the `Transition` animation starts."
types=["AnimationEvent"]

[[slots.Transition]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Transition]]
name="--transition-clip-bottom-end-clip-path"
description="Controls the `clip-path: inset` used for end of a enter `clip` animation. (reverse in exit variation)"
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-clip-bottom-start-clip-path"
description="Controls the `clip-path: inset` used for start of a enter `clip` animation. (reverse in exit variation)"
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-clip-left-end-clip-path"
description="Controls the `clip-path: inset` used for end of a enter `clip` animation. (reverse in exit variation)"
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-clip-left-start-clip-path"
description="Controls the `clip-path: inset` used for start of a enter `clip` animation. (reverse in exit variation)"
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-clip-right-end-clip-path"
description="Controls the `clip-path: inset` used for end of a enter `clip` animation. (reverse in exit variation)"
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-clip-right-start-clip-path"
description="Controls the `clip-path: inset` used for start of a enter `clip` animation. (reverse in exit variation)"
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-clip-top-end-clip-path"
description="Controls the `clip-path: inset` used for end of a enter `clip` animation. (reverse in exit variation)"
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-clip-top-start-clip-path"
description="Controls the `clip-path: inset` used for start of a enter `clip` animation. (reverse in exit variation)"
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-scale-end-scale"
description="Controls the `transform: scale` used for end of a enter `scale` animation. (reverse in exit variation)"
types=["<number>"]

[[custom_properties.Transition]]
name="--transition-scale-start-scale"
description="Controls the `transform: scale` used for start of a enter `scale` animation. (reverse in exit variation)"
types=["<number>"]

[[custom_properties.Transition]]
name="--transition-slide-bottom-end-translate"
description="Controls the `transform: translate` used for end of a enter `slide` animation. (reverse in exit variation)"
types=["<length-percentage>, <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-slide-bottom-start-translate"
description="Controls the `transform: translate` used for start of a enter `slide` animation. (reverse in exit variation)"
types=["<length-percentage>, <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-slide-left-end-translate"
description="Controls the `transform: translate` used for end of a enter `slide` animation. (reverse in exit variation)"
types=["<length-percentage>, <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-slide-left-start-translate"
description="Controls the `transform: translate` used for start of a enter `slide` animation. (reverse in exit variation)"
types=["<length-percentage>, <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-slide-right-end-translate"
description="Controls the `transform: translate` used for end of a enter `slide` animation. (reverse in exit variation)"
types=["<length-percentage>, <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-slide-right-start-translate"
description="Controls the `transform: translate` used for start of a enter `slide` animation. (reverse in exit variation)"
types=["<length-percentage>, <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-slide-top-end-translate"
description="Controls the `transform: translate` used for end of a enter `slide` animation. (reverse in exit variation)"
types=["<length-percentage>, <length-percentage>"]

[[custom_properties.Transition]]
name="--transition-slide-top-start-translate"
description="Controls the `transform: translate` used for start of a enter `slide` animation. (reverse in exit variation)"
types=["<length-percentage>, <length-percentage>"]
+++

# Transition

`Transition` is used to apply transitional animations on a containing element that will also include its children. Typically used for situations like changing between pages.

```svelte repl Transition Preview
<script>
    import {
        Box,
        Button,
        Transition,
    } from "@kahi-ui/framework";

    let variation = undefined;
</script>

<Button
    on:click={() =>
        (variation =
            variation === "exit" ? "enter" : "exit")}
>
    Toggle Variation
</Button>

<Transition animation="clip" {variation}>
    <Box palette="inverse" padding="huge">
        hello world!
    </Box>
</Transition>
```

## Imports

```svelte default Transition Imports
<script>
    import {Transition} from "@kahi-ui/framework";
</script>
```

## Delay

Based on the animaton duration properties in the currently loaded theme. You can use an additive percentage to delay it via the `delay` property.

```svelte repl Transition Delay
<script>
    import {
        Box,
        Button,
        Transition,
    } from "@kahi-ui/framework";

    let variation = undefined;
</script>

<Button
    on:click={() =>
        (variation =
            variation === "exit" ? "enter" : "exit")}
>
    Toggle Variation
</Button>

<Transition animation="clip" delay={0.75} {variation}>
    <Box palette="inverse" padding="huge">
        hello world!
    </Box>
</Transition>
```

## Direction

You can control which direction the `Transition` animation will "expand", "move", or whatever your selected animations performs. Via the `direction` property.

```svelte repl Transition Direction
<script>
    import {
        Box,
        Button,
        Transition,
    } from "@kahi-ui/framework";

    let variation = undefined;
</script>

<Button
    on:click={() =>
        (variation =
            variation === "exit" ? "enter" : "exit")}
>
    Toggle Variation
</Button>

<Transition
    animation="clip"
    direction="right"
    {variation}
>
    <Box palette="inverse" padding="huge">
        hello world!
    </Box>
</Transition>
```

## Fade

The simplest of all the animations, you can fade content in and out via the `animation` property.

```svelte repl Transition Fade
<script>
    import {
        Box,
        Button,
        Transition,
    } from "@kahi-ui/framework";

    let variation = undefined;
</script>

<Button
    on:click={() =>
        (variation =
            variation === "exit" ? "enter" : "exit")}
>
    Toggle Variation
</Button>

<Transition animation="fade" {variation}>
    <Box palette="inverse" padding="huge">Fade</Box>
</Transition>
```

By supplying a variation off the bat, you can also have the animation played as soon as the DOM is loaded.

```svelte repl Transition Fade DOM
<script>
    import {
        Box,
        Button,
        Grid,
        Transition,
    } from "@kahi-ui/framework";

    let dom = false;
</script>

<Button on:click={() => (dom = !dom)}>
    Toggle DOM
</Button>

<Grid.Container points="2" spacing="medium">
    {#if dom}
        <Transition animation="fade" variation="enter">
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition animation="fade" variation="enter">
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={0.5}
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={0.5}
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={1.0}
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={1.0}
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={1.5}
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={1.5}
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>
    {/if}
</Grid.Container>
```

## Clip

You can have content "clip" in and out via the `animation` property.

```svelte repl Transition Clip
<script>
    import {
        Box,
        Button,
        Grid,
        Transition,
    } from "@kahi-ui/framework";

    let variation = undefined;
</script>

<Button
    on:click={() =>
        (variation =
            variation === "exit" ? "enter" : "exit")}
>
    Toggle Variation
</Button>

<Grid.Container
    points={["2", "mobile:1"]}
    spacing="medium"
>
    <Transition
        animation="clip"
        direction="bottom"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Clip BOTTOM / DEFAULT
        </Box>
    </Transition>

    <Transition
        animation="clip"
        direction="left"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Clip LEFT
        </Box>
    </Transition>

    <Transition
        animation="clip"
        direction="right"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Clip RIGHT
        </Box>
    </Transition>

    <Transition
        animation="clip"
        direction="top"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Clip TOP
        </Box>
    </Transition>
</Grid.Container>
```

By supplying a variation off the bat, you can also have the animation played as soon as the DOM is loaded.

```svelte repl Transition Clip DOM
<script>
    import {
        Box,
        Button,
        Grid,
        Transition,
    } from "@kahi-ui/framework";

    let dom = false;
</script>

<Button on:click={() => (dom = !dom)}>
    Toggle DOM
</Button>

<Grid.Container points="2" spacing="medium">
    {#if dom}
        <Transition
            animation="clip"
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={0.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={0.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={1.0}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={1.0}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={1.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={1.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>
    {/if}
</Grid.Container>
```

## Scale

You can have content "scale" in and out via the `animation` property.

```svelte repl Transition Scale
<script>
    import {
        Box,
        Button,
        Grid,
        Transition,
    } from "@kahi-ui/framework";

    let variation = undefined;
</script>

<Button
    on:click={() =>
        (variation =
            variation === "exit" ? "enter" : "exit")}
>
    Toggle Variation
</Button>

<Grid.Container
    points={["2", "mobile:1"]}
    spacing="medium"
>
    <Transition
        animation="scale"
        direction="bottom"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Scale BOTTOM / DEFAULT
        </Box>
    </Transition>

    <Transition
        animation="scale"
        direction="left"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Scale LEFT
        </Box>
    </Transition>

    <Transition
        animation="scale"
        direction="right"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Scale RIGHT
        </Box>
    </Transition>

    <Transition
        animation="scale"
        direction="top"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Scale TOP
        </Box>
    </Transition>
</Grid.Container>
```

By supplying a variation off the bat, you can also have the animation played as soon as the DOM is loaded.

```svelte repl Transition Scale DOM
<script>
    import {
        Box,
        Button,
        Grid,
        Transition,
    } from "@kahi-ui/framework";

    let dom = false;
</script>

<Button on:click={() => (dom = !dom)}>
    Toggle DOM
</Button>

<Grid.Container points="2" spacing="medium">
    {#if dom}
        <Transition
            animation="scale"
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={0.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={0.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={1.0}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={1.0}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={1.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={1.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>
    {/if}
</Grid.Container>
```

## Slide

You can have content "slide" in and out via the `animation` property.

```svelte repl Transition Slide
<script>
    import {
        Box,
        Button,
        Grid,
        Transition,
    } from "@kahi-ui/framework";

    let variation = undefined;
</script>

<Button
    on:click={() =>
        (variation =
            variation === "exit" ? "enter" : "exit")}
>
    Toggle Variation
</Button>

<Grid.Container
    points={["2", "mobile:1"]}
    spacing="medium"
>
    <Transition
        animation="slide"
        direction="bottom"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Slide BOTTOM / DEFAULT
        </Box>
    </Transition>

    <Transition
        animation="slide"
        direction="left"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Slide LEFT
        </Box>
    </Transition>

    <Transition
        animation="slide"
        direction="right"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Slide RIGHT
        </Box>
    </Transition>

    <Transition
        animation="slide"
        direction="top"
        {variation}
    >
        <Box palette="inverse" padding="huge">
            Slide TOP
        </Box>
    </Transition>
</Grid.Container>
```

By supplying a variation off the bat, you can also have the animation played as soon as the DOM is loaded.

```svelte repl Transition Slide DOM
<script>
    import {
        Box,
        Button,
        Grid,
        Transition,
    } from "@kahi-ui/framework";

    let dom = false;
</script>

<Button on:click={() => (dom = !dom)}>
    Toggle DOM
</Button>

<Grid.Container points="2" spacing="medium">
    {#if dom}
        <Transition
            animation="slide"
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={0.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={0.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={1.0}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={1.0}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={1.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={1.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="huge">
                hello world!
            </Box>
        </Transition>
    {/if}
</Grid.Container>
```
