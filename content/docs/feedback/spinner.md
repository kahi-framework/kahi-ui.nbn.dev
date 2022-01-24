+++
[[properties.Spinner]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Spinner]]
name="sizing"
description="Renders the `Spinner` at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

[[slots.Spinner]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Spinner]]
name="--spinner-animation-duration"
description="Controls the duration used for the \"rotate\" animation."
types=["<time>"]

[[custom_properties.Spinner]]
name="--spinner-animation-function"
description="Controls the timing function used for the \"rotate\" animation."
types=["<easing-function>"]

[[custom_properties.Spinner]]
name="--spinner-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties.Spinner]]
name="--spinner-border-width"
description="Controls the `border-width` used."
types=["<length>"]
+++

# Spinner

> **NOTE**: New since `v0.2.0`.

`Spinner` is an indicator used to tell the end-user that the Web Application is loading something in the background.

```svelte {title="Spinner Preview" mode="repl"}
<script>
    import {
        Button,
        Hero,
        Spinner,
    } from "@kahi-ui/framework";
</script>

<Button palette="affirmative" disabled>
    <Spinner />
    Submit Ticket
</Button>

<Hero.Container margin_top="medium">
    <Hero.Header>Loading</Hero.Header>
    <Hero.Footer>
        <Spinner sizing="medium" />
    </Hero.Footer>
</Hero.Container>
```

## Imports

```svelte {title="Spinner Imports"}
<script>
    import {Spinner} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Spinner` via the `palette` property.

```svelte {title="Spinner Palette" mode="repl"}
<script>
    import {
        Spinner,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="spinner-palette"
    spacing="medium"
    orientation="horizontal"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Spinner />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <Spinner palette="accent" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <Spinner palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <Spinner palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <Spinner palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <Spinner palette="affirmative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <Spinner palette="negative" />
    </div>
</Stack>

<style>
    :global(.spinner-palette .spinner) {
        display: block;
    }
</style>
```

## Sizing

> **DEPRECATED**: This property will be renamed `size` -> `sizing` in `v0.6.0`.

You can change the size of the `Spinner` via the `sizing` property.

```svelte {title="Spinner Sizing" mode="repl"}
<script>
    import {
        Spinner,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="spinner-sizing"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Spinner />
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Spinner sizing="tiny" />
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Spinner sizing="small" />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Spinner sizing="medium" />
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Spinner sizing="large" />
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Spinner sizing="huge" />
    </div>
</Stack>

<style>
    :global(.spinner-sizing .spinner) {
        display: block;
    }
</style>
```
