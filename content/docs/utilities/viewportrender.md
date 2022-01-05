+++
[[slots.ViewportRender]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# ViewportRender

> **NOTE**: New since `v0.5.1`.

`ViewportRender` disables rendering of child content while the provided [Viewport(s)](../framework/responsitivity.md) are not active.

```svelte {title="ViewportRender Preview" mode="repl"}

```

## Imports

```svelte {title="ViewportRender Imports"}
<script>
    import {ViewportRender} from "@kahi-ui/framework";
</script>
```

## Compatibility

The Component only runs on clientside Browsers with Javascript enabled. So you need to plan a SSR-compatible fallback if using in a SSR scenario.

## Fallthrough

> **NOTE**: The REPL runs on your Browser, so this will always render anyway.

By default, `ViewportRender` will never render when running in SSR environments. You can change it to always render in those environments via the `fallthrough` property.

```svelte {title="ViewportRender Fallthrough" mode="repl"}

```
