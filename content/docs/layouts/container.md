+++
[[properties.Container]]
name="viewport"
description="**(DEPRECATED)** Controls the max width of the `Container` in relation to a Viewport preset."
default="prose"
types=["prose", "mobile", "table", "desktop", "widescreen", "{VIEWPORT}:{SIZE}"]

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

> **NOTE**: New since `v0.2.0`.

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

## Viewports

> **DEPRECATED**: This property will be removed in `v0.6.0`, in favor of new `width` / `max_width` values.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `viewport={["mobile", "widescreen:prose"]}`

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

You can customize the `Container` to be constrained to specific Viewport sizes.

```svelte {title="Svelte Viewports" mode="repl"}
<script>
    import {Container, Text} from "@kahi-ui/framework";
</script>

<Container viewport="tablet">
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
