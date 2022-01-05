+++
[[slots.MediaQueryRender]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# MediaQueryRender

> **NOTE**: New since `v0.5.1`.

`MediaQueryRender` disables rendering of child content while the provided [Media Quer(y/eries)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) are not active.

```svelte {title="MediaQueryRender Preview" mode="repl"}

```

## Imports

```svelte {title="MediaQueryRender Imports"}
<script>
    import {MediaQueryRender} from "@kahi-ui/framework";
</script>
```

## Compatibility

The Component only runs on clientside Browsers with Javascript enabled. So you need to plan a SSR-compatible fallback if using in a SSR scenario.

## Behavior

...

## Fallthrough

> **NOTE**: The REPL runs on your Browser, so this will always render anyway.

By default, `MediaQueryRender` will never render when running in SSR environments. You can change it to always render in those environments via the `fallthrough` property.

```svelte {title="MediaQueryRender Fallthrough" mode="repl"}

```
