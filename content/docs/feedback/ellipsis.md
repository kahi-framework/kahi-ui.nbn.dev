+++
[[properties.Ellipsis]]
name="character"
description="Changes the character being rendered for the animation."
types=["string"]

[[slots.Ellipsis]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Ellipsis]]
name="--ellipsis-character"
description="Controls the default character used, when no developer-supplied character is present."
types=["<string>"]

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

`Ellipsis` is a text-based indicator used to tell the end-user that the Web Application is loading something in the background.

```svelte repl Ellipsis Preview
<script>
    import {
        Button,
        Ellipsis,
        Heading,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack alignment_x="left" spacing="medium">
    <Button disabled>
        <!--
            NOTE: Wrapping text and Component together to
            prevent `Ellipsis` from getting icon spacing
        -->
        <Text is="span">
            Submit
            <Ellipsis />
        </Text>
    </Button>

    <Heading>
        Loading
        <Ellipsis />
    </Heading>
</Stack>
```

## Imports

```html default Ellipsis Imports
<script>
    import {Ellipsis} from "@kahi-ui/framework";
</script>
```

## Character

You can customize the text character used for the animation via the `character` property.

```svelte repl Ellipsis Character
<script>
    import {
        Ellipsis,
        Heading,
    } from "@kahi-ui/framework";
</script>

<Heading>
    Loading
    <Ellipsis character="?" />
</Heading>
```
