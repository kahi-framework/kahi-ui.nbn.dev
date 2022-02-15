+++
[[properties.Dot]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

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

> **NOTE**: Introduced feature in `v0.2.0`.

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

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <br />
        <Dot />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <br />
        <Dot palette="accent" />
    </div>

    <div>
        <Text is="strong">NEUTRAL</Text>
        <br />
        <Dot palette="neutral" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <br />
        <Dot palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <br />
        <Dot palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <br />
        <Dot palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <br />
        <Dot palette="affirmative" />
    </div>

    <div>
        <Text is="strong">INFORMATIVE</Text>
        <br />
        <Dot palette="informative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <br />
        <Dot palette="negative" />
    </div>
</Stack.Container>
```
