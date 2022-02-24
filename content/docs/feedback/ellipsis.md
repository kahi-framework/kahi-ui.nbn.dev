+++
[[properties.Ellipsis]]
name="animation"
description="Alters the animation played infinitely."
default="pulse"
types=["bounce", "ping", "pulse"]

[[properties.Ellipsis]]
name="iterations"
description="Alters how many times the `default` slot is repeated."
default="3"
types=["3", "number"]

[[slots.Ellipsis]]
name="default"
description="Alters the rendered animated character."
types=["{}"]

[[custom_properties.Ellipsis]]
name="--ellipsis-content-first-animation-delay"
description="Controls how long of a delay until the first `Ellipsis` character is faded out in sequence."
types=["<time>"]

[[custom_properties.Ellipsis]]
name="--ellipsis-content-second-animation-delay"
description="Controls how long of a delay until the second `Ellipsis` character is faded out in sequence."
types=["<time>"]

[[custom_properties.Ellipsis]]
name="--ellipsis-pulse-end-opacity"
description="Controls how invisible a `Ellipsis` character should turn at the end of the \"pulse\" animation."
types=["<alpha-value>"]

[[custom_properties.Ellipsis]]
name="--ellipsis-pulse-start-opacity"
description="Controls how visible a `Ellipsis` character should turn at the start of the \"pulse\" animation."
types=["<alpha-value>"]
+++

# Ellipsis

> **NOTE**: Introduced feature in `v0.2.5`.

`Ellipsis` is an indicator used to tell the user that something is loading in the background.

```svelte {title="Ellipsis Preview" mode="repl"}
<script>
    import {
        Button,
        Ellipsis,
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container alignment_x="left" spacing="medium">
    <Button disabled>
        <!--
            NOTE: Wrapping text and Component together to
            prevent `Ellipsis` from getting icon spacing
        -->
        <Text is="span">
            Submit<Ellipsis />
        </Text>
    </Button>

    <Heading>
        Loading<Ellipsis />
    </Heading>
</Stack.Container>
```

## Imports

```svelte {title="Ellipsis Imports"}
<script>
    import {Ellipsis} from "@kahi-ui/framework";
</script>
```

## Slot

You can customize the content used for the animation via the by passing into the `default` slot.

```svelte {title="Ellipsis Slot" mode="repl"}
<script>
    import {
        Ellipsis,
        Heading,
    } from "@kahi-ui/framework";
</script>

<Heading>
    Loading<Ellipsis>/</Ellipsis>
</Heading>
```

## Animations

> **NOTE**: Introduced feature in `v0.6.0`.

You can customize which animation is played via the `animation` property.

```svelte {title="Ellipsis Animations" mode="repl"}
<script>
    import {
        Dot,
        Ellipsis,
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
        <br />
        <Ellipsis>
            <Dot palette="accent" />
        </Ellipsis>
    </div>

    <div>
        <Text is="strong">BOUNCE</Text>
        <br />
        <Ellipsis animation="bounce">
            <Dot palette="accent" />
        </Ellipsis>
    </div>

    <div>
        <Text is="strong">PING</Text>
        <br />
        <Ellipsis animation="ping">
            <Dot palette="accent" />
        </Ellipsis>
    </div>

    <div>
        <Text is="strong">PULSE</Text>
        <br />
        <Ellipsis animation="pulse">
            <Dot palette="accent" />
        </Ellipsis>
    </div>
</Stack.Container>
```

## Iterations

> **NOTE**: Introduced feature in `v0.6.0`.

You can customize how many times the content is repeated via the `iterations` property.

```svelte {title="Ellipsis Iterations" mode="repl"}
<script>
    import {
        Dot,
        Ellipsis,
        NumberInput,
    } from "@kahi-ui/framework";

    let iterations = 5;
</script>

<NumberInput bind:value={iterations} />

<!--
    NOTE: The animation can desync if `iterations` is changed during
    runtime. So for the demo, a `#key` block is used to recreate the
    Component every time `iterations` is updated
-->

{#key iterations}
    <Ellipsis animation="bounce" {iterations}>
        <Dot palette="accent" />
    </Ellipsis>
{/key}
```
