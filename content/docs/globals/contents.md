+++
[[properties."*"]]
name="contents"
description="Alters the Component to removes bounding box / stylings from the Component, acting as a blank container for child content."
types=["boolean", "{VIEWPORT}"]
+++

# Contents

> **NOTE**: Introduced feature in `v0.5.0`.

All Components have access to the `data-contents` global HTML attribute via the `contents` property which [removes the Component's bounding box / stylings](https://developer.mozilla.org/en-US/docs/Web/CSS/display#box) from the DOM tree.

> **USAGE**: REPL does not support viewport values, resize your Browser to observe this feature.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `contents={["mobile", "tablet"]}`

```svelte {title="Contents Preview" mode="repl"}
<script>
    import {Box} from "@kahi-ui/framework";
</script>

<Box palette="accent" contents={["mobile", "tablet"]}>
    I have no styling on Mobile / Tablet Viewports.
</Box>

<Box
    palette="affirmative"
    contents={["desktop", "widescreen"]}
>
    I have no styling on Desktop / Widescreen
    Viewports.
</Box>
```
