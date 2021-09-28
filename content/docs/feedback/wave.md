+++
[[properties.Wave]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Wave]]
name="size"
description="Renders the <code>Wave</code> at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

[[slots.Wave]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Wave]]
name="--wave-border-radius"
description="Controls the `border-radius` used for `Wave` dots."
types=["<length/percentage>"]

[[custom_properties.Wave]]
name="--wave-font-size"
description="Controls the `font-size` used, which the `Wave` dots respect for `width` / `height`."
types=["<length/percentage>"]

[[custom_properties.Wave]]
name="--wave-content-second-animation-delay"
description="Controls how long of a delay until the second `Wave` dot is bounced in sequence."
types=["<time>"]

[[custom_properties.Wave]]
name="--wave-content-third-animation-delay"
description="Controls how long of a delay until the third `Wave` dot is bounced in sequence."
types=["<time>"]

[[custom_properties.Wave]]
name="--wave-content-fourth-animation-delay"
description="Controls how long of a delay until the fourth `Wave` dot is bounced in sequence."
types=["<time>"]

[[custom_properties.Wave]]
name="--wave-content-fifth-animation-delay"
description="Controls how long of a delay until the fifth `Wave` dot is bounced in sequence."
types=["<time>"]

[[custom_properties.Wave]]
name="--wave-bounce-top-animation-function"
description="Controls the animation timing function switched to when a `Wave` dot reaches the peak of the bounce."
types=["<easing-function>"]

[[custom_properties.Wave]]
name="--wave-bounce-bottom-animation-function"
description="Controls the animation timing function switched to when a `Wave` dot reaches the base of the bounce."
types=["<easing-function>"]
+++

# Wave

`Wave` is an indicator used to tell the end-user that the Web Application is loading something in the background.

```svelte repl Wave Preview
<script>
    import {Hero, Wave} from "@kahi-ui/framework";
</script>

<Hero.Container margin_top="medium">
    <Hero.Header>Loading</Hero.Header>
    <Hero.Footer>
        <Wave />
    </Hero.Footer>
</Hero.Container>
```

## Imports

```html default Wave Imports
<script>
    import {Wave} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Wave` via the `palette` property.

```svelte repl Wave Palette
<script>
    import {
        Stack,
        Text,
        Wave,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="wave-palette"
    spacing="medium"
    orientation="horizontal"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Wave />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Wave palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Wave palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Wave palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Wave palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Wave palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Wave palette="negative" />
    </div>
</Stack>

<style>
    :global(.wave-palette .wave) {
        display: block;
    }
</style>
```
