+++
[[properties.Wave]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Wave]]
name="size"
description="Renders the <code>Wave</code> at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]
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
