+++
[[properties.ViewportRender]]
name="fallthrough"
description="When the property is set, `ViewportRender` will always render the child content in SSR environments, e.g. SvelteKit"
types=["boolean"]

[[properties.ViewportRender]]
name="mobile"
description="When the property is set, `ViewportRender` will only render child content in [Mobile](../framework/responsitivity.md) breakpoints."
types=["boolean"]

[[properties.ViewportRender]]
name="tablet"
description="When the property is set, `ViewportRender` will only render child content in [Tablet](../framework/responsitivity.md) breakpoints."
types=["boolean"]

[[properties.ViewportRender]]
name="desktop"
description="When the property is set, `ViewportRender` will only render child content in [Desktop](../framework/responsitivity.md) breakpoints."
types=["boolean"]

[[properties.ViewportRender]]
name="widescreen"
description="When the property is set, `ViewportRender` will only render child content in [Widescreen](../framework/responsitivity.md) breakpoints."
types=["boolean"]

[[slots.ViewportRender]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# ViewportRender

> **NOTE**: Introduced feature in `v0.5.1`.

> **USAGE**: REPL does not viewport modifiers, resize your Browser to observe this feature.

`ViewportRender` disables rendering of child content while the provided [Viewport(s)](../framework/responsitivity.md) are not active.

```svelte {title="ViewportRender Preview" mode="repl"}
<script>
    import {
        Box,
        ViewportRender,
    } from "@kahi-ui/framework";
</script>

<ViewportRender mobile tablet>
    <Box palette="affirmative" padding="small">
        I am only visible on MOBILE+TABLET Viewports!
    </Box>
</ViewportRender>

<ViewportRender desktop widescreen>
    <Box palette="negative" padding="small">
        I am only visible on DESKTOP+WIDESCREEN
        Viewports!
    </Box>
</ViewportRender>
```

## Imports

```svelte {title="ViewportRender Imports"}
<script>
    import {ViewportRender} from "@kahi-ui/framework";
</script>
```

## Compatibility

The Component only runs on clientside Browsers with Javascript enabled. So you need to plan a SSR-compatible fallback if using in a SSR scenario. If the child content getting mounted is not of concern, then it's recommended to use SSR-compatible [`hidden`](../globals/hidden.md) global property.

## Fallthrough

> **NOTE**: The REPL runs on your Browser, so this will always render anyway.

> **USAGE**: REPL does not viewport modifiers, resize your Browser to observe this feature.

By default, `ViewportRender` will never render when running in SSR environments. You can change it to always render in those environments via the `fallthrough` property.

```svelte {title="ViewportRender Fallthrough" mode="repl"}
<script>
    import {
        Box,
        ViewportRender,
    } from "@kahi-ui/framework";
</script>

<ViewportRender mobile fallthrough>
    <Box palette="affirmative" padding="small">
        I am only visible on MOBILE Viewports!
    </Box>
</ViewportRender>
```
