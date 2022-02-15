+++
[[properties.Transition]]
name="is"
description="Alters the HTML tag rendered to the DOM."
default="div"
types=["div", "span"]

[[properties.Transition]]
name="animation"
description="Selects the animation to be ran on the containing `Transition` element."
types=["clip", "fade", "scale", "slide"]

[[properties.Transition]]
name="behavior"
description="Alters to use the [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) implementation instead of the [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) implementation for animations."
types=["explicit"]

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
name="duration"
description="Sets a percentage range (e.g. `0.2`, `2.5`) multiplier on the current theme's duration on how long should the animation play."
types=["number", "string"]

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

[[events.Transition]]
name="transitionend"
description="Fires whenever the `Transition` `behavior=\"explicit\"` animation ends."
types=["TransitionEvent"]

[[events.Transition]]
name="transitionstart"
description="Fires whenever the `Transition` `behavior=\"explicit\"` animation starts."
types=["TransitionEvent"]

[[slots.Transition]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Transition

> **NOTE**: Introduced feature in `v0.4.0`.

`Transition` is used to apply transitional animations on a containing element that will also include its children. Typically used for situations like changing between pages.

```svelte {title="Transition Preview" mode="repl"}
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
    <Box palette="inverse" padding="medium">
        hello world!
    </Box>
</Transition>
```

## Imports

```svelte {title="Transition Imports" mode="repl"}
<script>
    import {Transition} from "@kahi-ui/framework";
</script>
```

## Explicit

> **NOTE**: Introduced feature in `v0.5.0`.

> **WARNING**: This feature is only available in Javascript-enabled clients.

You can alter `Transition` to use its [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) implementation instead of the [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) implementation for animations. Which skips the first-paint iteration of the animation via the `behavior` property.

```svelte {title="Transition Explicit" mode="repl"}
<script>
    import {
        Box,
        Button,
        Transition,
    } from "@kahi-ui/framework";

    let variation = "exit";
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
    behavior="explicit"
    {variation}
>
    <Box palette="inverse" padding="medium">
        hello world!
    </Box>
</Transition>
```

## Delay

Based on the animaton duration properties in the currently loaded theme. You can use a multiplier percentage decimal to delay it via the `delay` property.

```svelte {title="Transition Delay" mode="repl"}
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

<Transition animation="clip" delay={1.25} {variation}>
    <Box palette="inverse" padding="medium">
        hello world!
    </Box>
</Transition>
```

## Duration

> **NOTE**: Introduced feature in `v0.4.2`.

Based on the animaton duration properties in the currently loaded theme. You can use a multiplier percentage decimal to increase / shorten the animation duration via the `duration` property.

```svelte {title="Transition Duration" mode="repl"}
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
    duration={0.25}
    {variation}
>
    <Box palette="inverse" padding="medium">
        hello world! (x0.25)
    </Box>
</Transition>

<Transition animation="clip" {variation}>
    <Box palette="inverse" padding="medium">
        hello world! (x1)
    </Box>
</Transition>

<Transition
    animation="clip"
    duration={1.75}
    {variation}
>
    <Box palette="inverse" padding="medium">
        hello world! (x1.75)
    </Box>
</Transition>

<Transition
    animation="clip"
    duration={2.5}
    {variation}
>
    <Box palette="inverse" padding="medium">
        hello world! (x2.5)
    </Box>
</Transition>

<Transition
    animation="clip"
    duration={3.25}
    {variation}
>
    <Box palette="inverse" padding="medium">
        hello world! (x3.25)
    </Box>
</Transition>
```

## Direction

You can control which direction the `Transition` animation will "expand", "move", or whatever your selected animations performs. Via the `direction` property.

```svelte {title="Transition Direction" mode="repl"}
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
    <Box palette="inverse" padding="medium">
        hello world!
    </Box>
</Transition>
```

## Elements

> **NOTE**: Introduced feature in `v0.6.0`.

You can change the HTML tag rendered to DOM via the `is` property.

```svelte {title="Transition Elements" mode="repl"}
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

<Stack.Container
    spacing="medium"
    orientation="horizontal"
    variation="wrap"
>
    <div>
        <Text is="strong">DIV / BLOCK</Text>

        <Transition
            is="div"
            animation="clip"
            {variation}
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>
    </div>

    <div>
        <Text is="strong">SPAN / INLINE</Text>

        <Transition
            is="span"
            animation="clip"
            {variation}
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>
    </div>
</Stack.Container>
```

## Fade

The simplest of all the animations, you can fade content in and out via the `animation` property.

```svelte {title="Transition Fade" mode="repl"}
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
    <Box palette="inverse" padding="medium">Fade</Box>
</Transition>
```

By supplying a variation off the bat, you can also have the animation played as soon as the DOM is loaded.

```svelte {title="Transition Fade DOM" mode="repl"}
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
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition animation="fade" variation="enter">
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={0.5}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={0.5}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={1.0}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={1.0}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={1.5}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="fade"
            delay={1.5}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>
    {/if}
</Grid.Container>
```

## Clip

You can have content "clip" in and out via the `animation` property.

```svelte {title="Transition Clip" mode="repl"}
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
        <Box palette="inverse" padding="medium">
            Clip BOTTOM / DEFAULT
        </Box>
    </Transition>

    <Transition
        animation="clip"
        direction="left"
        {variation}
    >
        <Box palette="inverse" padding="medium">
            Clip LEFT
        </Box>
    </Transition>

    <Transition
        animation="clip"
        direction="right"
        {variation}
    >
        <Box palette="inverse" padding="medium">
            Clip RIGHT
        </Box>
    </Transition>

    <Transition
        animation="clip"
        direction="top"
        {variation}
    >
        <Box palette="inverse" padding="medium">
            Clip TOP
        </Box>
    </Transition>
</Grid.Container>
```

By supplying a variation off the bat, you can also have the animation played as soon as the DOM is loaded.

```svelte {title="Transition Clip DOM" mode="repl"}
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
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={0.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={0.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={1.0}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={1.0}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={1.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="clip"
            delay={1.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>
    {/if}
</Grid.Container>
```

## Scale

You can have content "scale" in and out via the `animation` property.

```svelte {title="Transition Scale" mode="repl"}
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
    <Transition animation="scale" {variation}>
        <Box palette="inverse" padding="medium">
            Scale
        </Box>
    </Transition>
</Grid.Container>
```

By supplying a variation off the bat, you can also have the animation played as soon as the DOM is loaded.

```svelte {title="Transition Scale DOM" mode="repl"}
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
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={0.5}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={0.5}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={1.0}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={1.0}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={1.5}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="scale"
            delay={1.5}
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>
    {/if}
</Grid.Container>
```

## Slide

You can have content "slide" in and out via the `animation` property.

```svelte {title="Transition Slide" mode="repl"}
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
        <Box palette="inverse" padding="medium">
            Slide BOTTOM / DEFAULT
        </Box>
    </Transition>

    <Transition
        animation="slide"
        direction="left"
        {variation}
    >
        <Box palette="inverse" padding="medium">
            Slide LEFT
        </Box>
    </Transition>

    <Transition
        animation="slide"
        direction="right"
        {variation}
    >
        <Box palette="inverse" padding="medium">
            Slide RIGHT
        </Box>
    </Transition>

    <Transition
        animation="slide"
        direction="top"
        {variation}
    >
        <Box palette="inverse" padding="medium">
            Slide TOP
        </Box>
    </Transition>
</Grid.Container>
```

By supplying a variation off the bat, you can also have the animation played as soon as the DOM is loaded.

```svelte {title="Transition Slide DOM" mode="repl"}
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
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={0.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={0.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={1.0}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={1.0}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={1.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>

        <Transition
            animation="slide"
            delay={1.5}
            direction="bottom"
            variation="enter"
        >
            <Box palette="inverse" padding="medium">
                hello world!
            </Box>
        </Transition>
    {/if}
</Grid.Container>
```
