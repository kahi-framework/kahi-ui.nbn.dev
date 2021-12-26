+++
[[custom_properties.Backdrop]]
name="--backdrop-background-color"
description="Controls the default `background` color."
types=["<r,g,b>"]

[[custom_properties.Backdrop]]
name="--backdrop-background-opacity"
description="Controls the `background` opacity."
types=["<alpha-value>"]
+++

# Backdrop

> **WARNING**: Received a breaking refactoring in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Backdrop` stretches across its parent element, providing a dimmed background that sits under sibling content. Useful for things like prompts.

```svelte {title="Backdrop Preview"}
<script>
    import {Backdrop} from "@kahi-ui/framework";
</script>

<Backdrop />
```
