+++
[[properties.Spinner]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Spinner]]
name="size"
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

`Spinner` is an indicator used to tell the end-user that the Web Application is loading something in the background.

```svelte repl Spinner Preview
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
        <Spinner size="medium" />
    </Hero.Footer>
</Hero.Container>
```

## Imports

```html default Spinner Imports
<script>
    import {Spinner} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Spinner` via the `palette` property.

```svelte repl Spinner Palette
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

## Size

You can change the size of the `Spinner` via the `size` property.

```svelte repl Spinner Size
<script>
    import {
        Spinner,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="spinner-size"
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
        <Spinner size="tiny" />
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Spinner size="small" />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Spinner size="medium" />
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Spinner size="large" />
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Spinner size="huge" />
    </div>
</Stack>

<style>
    :global(.spinner-size .spinner) {
        display: block;
    }
</style>
```
