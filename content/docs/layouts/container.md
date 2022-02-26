+++
[[properties.Container]]
name="is"
description="Alters the HTML tag rendered to the DOM."
default="div"
types=["article", "div", "main"]

[[slots.Container]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Container]]
name="--container-viewport"
description="Controls the default viewport max size."
types=["<length>"]

[[custom_properties.Container]]
name="--container-padding-x"
description="Controls the X-Axis padding."
types=["<length>"]
+++

# Container

> **NOTE**: Introduced feature in `v0.2.0`.

> **WARNING**: This feature received a breaking change in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

`Container` is a layout primitive used to typically constrain chunks of content to a max width or parent width, and centered horizontally with padding. By default it sets the max width to 65 characters.

```svelte {title="Container Preview" mode="repl"}
<script>
    import {Container, Text} from "@kahi-ui/framework";
</script>

<Container>
    <Text>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin et consectetur orci.
        Curabitur a egestas turpis, vitae convallis
        sapien. Sed pellentesque rutrum tellus, in
        iaculis dolor tincidunt non. Orci varius
        natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
    </Text>
</Container>
```

## Imports

```svelte {title="Container Imports"}
<script>
    import {Container} from "@kahi-ui/framework";
</script>
```

## Elements

> **NOTE**: Introduced feature `<Container is="article">` in `v0.6.0`.

You can change the HTML tag rendered to DOM via the `is` property.

```svelte {title="Container Elements" mode="repl"}
<script>
    import {
        Container,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium">
    <Container is="article">
        <Text is="strong">ARTICLE</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Container>

    <Container is="div">
        <Text is="strong">DIV</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Container>

    <Container is="main">
        <Text is="strong">MAIN</Text>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Container>
</Stack.Container>
```
