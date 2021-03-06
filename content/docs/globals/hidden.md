+++
[[properties."*"]]
name="hidden"
description="Alters the Component to not render anything or take up physical space in a page's layout."
types=["boolean", "{VIEWPORT}"]
+++

# Hidden

> **NOTE**: Introduced feature in `v0.2.2`.

All Components have access to the `data-hidden` global HTML attribute via the `hidden` property. Unlike the standard [`hidden`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) HTML attribute, `data-hidden` supports [Responsitivity](../framework/responsitivity.md).

> **USAGE**: REPL does not support viewport values, resize your Browser to observe this feature.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `hidden={["mobile", "tablet"]}`

```svelte {title="Hidden Preview" mode="repl"}
<script>
    import {Box} from "@kahi-ui/framework";
</script>

<Box palette="accent" hidden={["mobile", "tablet"]}>
    I am visible on Desktop / Widescreen Viewports.
</Box>

<Box
    palette="affirmative"
    hidden={["desktop", "widescreen"]}
>
    I am visible on Mobile / Tablet Viewports.
</Box>
```
