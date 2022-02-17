+++
[[properties.Animation]]
name="is"
description="Alters the HTML tag rendered to the DOM."
default="div"
types=["div", "span"]

[[properties.Animation]]
name="animation"
description="Selects the animation to be ran on the containing `Animation` element."
types=["bounce", "ping", "pulse"]

[[properties.Animation]]
name="delay"
description="Sets how long after a `variation` property change in a percentage range (e.g. `0.2`) that the animation should start."
types=["number", "string"]

[[properties.Animation]]
name="duration"
description="Sets a percentage range (e.g. `0.2`, `2.5`) multiplier on the current theme's duration on how long should the animation play."
types=["number", "string"]

[[properties.Animation]]
name="iterations"
description="Sets how many times the animation should be played until it stops."
types=["number", "string"]

[[properties.Animation]]
name="variation"
description="Controls if the selected `animation` is playing or paused."
default="play"
types=["pause", "play"]

[[events.Animation]]
name="animationend"
description="Fires whenever the `Animation` animation ends."
types=["AnimationEvent"]

[[events.Animation]]
name="animationstart"
description="Fires whenever the `Animation` animation starts."
types=["AnimationEvent"]

[[slots.Animation]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Animation

> **NOTE**: Introduced feature in `v0.6.0`.

`Animation` is used to apply infinitely repeating animations on a containing element that will also include its children. Typically used for situations like alerting users to new E-Mail in their inbox, etc...

```svelte {title="Animation Preview" mode="repl"}
<script>
    import {
        Animation,
        Button,
        Dot,
        Position,
    } from "@kahi-ui/framework";
</script>

<Button palette="accent">
    Inbox
    <Position variation="indicator">
        <Animation animation="ping">
            <Dot palette="negative" />
        </Animation>
    </Position>
</Button>
```

## Imports

```svelte {title="Animation Imports" mode="repl"}
<script>
    import {Animation} from "@kahi-ui/framework";
</script>
```

## Delay

Based on the animaton duration properties in the currently loaded theme. You can use a multiplier percentage decimal to delay it via the `delay` property.

```svelte {title="Animation Delay" mode="repl"}
<script>
    import {Animation, Dot} from "@kahi-ui/framework";
</script>

<Animation animation="bounce">
    <Dot palette="accent" />
</Animation>

<Animation animation="bounce" delay={-0.75}>
    <Dot palette="accent" />
</Animation>

<Animation animation="bounce" delay={-0.5}>
    <Dot palette="accent" />
</Animation>

<Animation animation="bounce" delay={-0.25}>
    <Dot palette="accent" />
</Animation>
```

## Duration

Based on the animaton duration properties in the currently loaded theme. You can use a multiplier percentage decimal to increase / shorten the animation duration via the `duration` property.

```svelte {title="Animation Duration" mode="repl"}
<script>
    import {Animation, Dot} from "@kahi-ui/framework";
</script>

<Animation animation="bounce" duration={0.25}>
    <Dot palette="accent" />
</Animation>

<Animation animation="bounce">
    <Dot palette="accent" />
</Animation>

<Animation animation="bounce" duration={1.75}>
    <Dot palette="accent" />
</Animation>

<Animation animation="bounce" duration={2.5}>
    <Dot palette="accent" />
</Animation>
```

## Iterations

You can control how many times the animation repeats before stopping via the `iterations` property.

```svelte {title="Animation Iterations" mode="repl"}
<script>
    import {
        Animation,
        Dot,
        NumberInput,
    } from "@kahi-ui/framework";
</script>

<NumberInput bind:value={iterations} />

<!--
    NOTE: CSS keeps the current iteration count if you only change
    the `animation-iteration-count` property. So we're using `{#key}`
    here to reset the internal counter
-->

{#key iterations}
    <Animation animation="bounce" {iterations}>
        <Dot palette="accent" />
    </Animation>
{/key}
```

## Variation

You can control whether the animation is playing or paused via the `variation` property.

```svelte {title="Animation Variation" mode="repl"}
<script>
    import {Animation, Dot} from "@kahi-ui/framework";

    let variation = undefined;
</script>

<Button
    on:click={() =>
        (variation =
            variation === "pause" ? "play" : "pause")}
>
    Toggle Variation
</Button>

<Animation animation="bounce" {variation}>
    <Dot palette="accent" />
</Animation>
```

## Elements

You can change the HTML tag rendered to DOM via the `is` property.

```svelte {title="Animation Elements" mode="repl"}
<script>
    import {
        Animation,
        Box,
        Button,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    spacing="medium"
    orientation="horizontal"
    variation="wrap"
>
    <div>
        <Text is="strong">DIV / BLOCK</Text>

        <Animation is="div" animation="bounce">
            <Box palette="inverse" padding="medium">
                I booouunce, I bounce so far
                awaaaaaay~!
            </Box>
        </Animation>
    </div>

    <div>
        <Text is="strong">SPAN / INLINE</Text>

        <Animation is="span" animation="bounce">
            <Box palette="inverse" padding="medium">
                I booouunce, I bounce so far
                awaaaaaay~!
            </Box>
        </Animation>
    </div>
</Stack.Container>
```

## Bounce

You can have content "bounce" up and down via the `animation` property.

```svelte {title="Animation Bounce" mode="repl"}
<script>
    import {Animation, Dot} from "@kahi-ui/framework";
</script>

<Animation animation="bounce">
    <Dot palette="accent" />
</Animation>
```

## Ping

You can have content "explode" outwards, fading as the animation is playing via the `animation` property.

```svelte {title="Animation Ping" mode="repl"}
<script>
    import {Animation, Dot} from "@kahi-ui/framework";
</script>

<Animation animation="ping">
    <Dot palette="accent" />
</Animation>
```

## Pulse

You can have content "glow" bright and dim via the `animation` property.

```svelte {title="Animation Pulse" mode="repl"}
<script>
    import {Animation, Dot} from "@kahi-ui/framework";
</script>

<Animation animation="pulse">
    <Dot palette="accent" />
</Animation>
```
