+++
[[properties.MediaQueryRender]]
name="fallthrough"
description="When the property is set, `MediaQueryRender` will always render the child content in SSR environments, e.g. SvelteKit"
types=["boolean"]

[[properties.MediaQueryRender]]
name="behavior"
description="Controls the conditional behavior of how `MediaQueryRender` renders the child content."
default="or"
types=["and", "or"]

[[properties.MediaQueryRender]]
name="queries"
description="Controls the [Media Quer(y/eries)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) used to conditionally render child content."
types=["string", "string[]"]

[[slots.MediaQueryRender]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# MediaQueryRender

> **NOTE**: New since `v0.5.1`.

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

`MediaQueryRender` disables rendering of child content while the provided [Media Quer(y/eries)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) are not active.

```svelte {title="MediaQueryRender Preview" mode="repl"}
<script>
    import {
        Box,
        MediaQueryRender,
        Text,
    } from "@kahi-ui/framework";
</script>

<MediaQueryRender
    queries="(min-width: 1280px) and (min-height: 720px)"
>
    <Box palette="affirmative" padding="small">
        This is only rendered when the Viewport is at
        least sHD resolution
    </Box>
</MediaQueryRender>
```

## Imports

```svelte {title="MediaQueryRender Imports"}
<script>
    import {MediaQueryRender} from "@kahi-ui/framework";
</script>
```

## Compatibility

The Component only runs on clientside Browsers with Javascript enabled. So you need to plan a SSR-compatible fallback if using in a SSR scenario.

## Multiple Queries

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

You can specify multiple Media Queries by passing in a string array (`string[]`) via the `queries` property.

```svelte {title="MediaQueryRender Multiple Queries" mode="repl"}
<script>
    import {
        Box,
        MediaQueryRender,
        Text,
    } from "@kahi-ui/framework";
</script>

<MediaQueryRender
    queries={[
        "(min-width: 1280px) and (min-height: 720px)",
        "(aspect-ratio: 16/9)",
    ]}
>
    <Box palette="affirmative" padding="small">
        This is only rendered when the Viewport is at
        least sHD resolution <Text is="strong">
            OR
        </Text> is 16:9.
    </Box>
</MediaQueryRender>
```

## Behavior

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

When working with multiple Media Queries, you can specify that **ALL** Media Queries must be valid in order to render. Via the `behavior` property.

```svelte {title="MediaQueryRender Behavior" mode="repl"}
<script>
    import {
        Box,
        MediaQueryRender,
        Text,
    } from "@kahi-ui/framework";
</script>

<MediaQueryRender
    queries={[
        "(orientation: portrait)",
        "(pointer: coarse)",
    ]}
    behavior="and"
>
    <Box palette="affirmative" padding="small">
        This is only rendered when the Viewport is in a
        portrait orientation <Text is="strong">
            AND
        </Text> the main interaction device is touch.
    </Box>
</MediaQueryRender>

<MediaQueryRender
    queries={[
        "(orientation: landscape)",
        "(pointer: fine)",
    ]}
    behavior="and"
>
    <Box palette="affirmative" padding="small">
        This is only rendered when the Viewport is in a
        landscape orientation <Text is="strong">
            AND
        </Text> the main interaction device is mouse / stylus.
    </Box>
</MediaQueryRender>
```

## Fallthrough

> **NOTE**: The REPL runs on your Browser, so this will always render anyway.

By default, `MediaQueryRender` will never render when running in SSR environments. You can change it to always render in those environments via the `fallthrough` property.

```svelte {title="MediaQueryRender Fallthrough" mode="repl"}
<script>
    import {
        Box,
        MediaQueryRender,
        Text,
    } from "@kahi-ui/framework";
</script>

<MediaQueryRender
    queries="(prefers-color-scheme: dark)"
    fallthrough
>
    <Box palette="light" padding="small">
        This is only rendered when the user's color
        preference is dark.
    </Box>
</MediaQueryRender>

<MediaQueryRender
    queries="(prefers-color-scheme: light)"
    fallthrough
>
    <Box palette="dark" padding="small">
        This is only rendered when the user's color
        preference is light.
    </Box>
</MediaQueryRender>
```
