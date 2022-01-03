+++
[[properties.Dot]]
name="animation"
description="Sets an attention grabbing animation."
types=["pulse"]

[[properties.Dot]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[slots.Dot]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Dot]]
name="--dot-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties.Dot]]
name="--dot-font-size"
description="Controls the `font-size` used, which the `Dot` respects for `width` / `height`."
types=["<length>", "<percentage>"]
+++

# Dot

> **NOTE**: New since `v0.2.0`.

> **WARNING**: Received a breaking refactoring in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Dot` is typically used for calling out other UI elements to the end-user, that they need attention.

```svelte {title="Dot Preview" mode="repl"}
<script>
    import {Dot} from "@kahi-ui/framework";
</script>

<Dot />
```

## Imports

```svelte {title="Dot Imports"}
<script>
    import {Dot} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Dot` via the `palette` property.

```svelte {title="Dot Palette" mode="repl"}
<script>
    import {
        Dot,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="dot-palette"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Dot />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Dot palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Dot palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Dot palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Dot palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Dot palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Dot palette="negative" />
    </div>
</Stack>

<style>
    :global(.dot-palette .dot) {
        display: block;
    }
</style>
```

## Animation

You can have the `Dot` perform animations to grab the end-user's attention via the `animation` property.

```svelte {title="Dot Animation" mode="repl"}
<script>
    import {
        Dot,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="dot-animation"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Dot />
    </div>

    <div>
        <Text is="strong">PULSE</Text>
        <Dot animation="pulse" />
    </div>
</Stack>

<style>
    :global(.dot-animation .dot) {
        display: block;
    }
</style>
```
