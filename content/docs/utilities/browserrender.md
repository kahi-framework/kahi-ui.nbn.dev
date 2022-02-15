+++
[[slots.BrowserRender]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# BrowserRender

> **NOTE**: Introduced feature in `v0.4.1`.

> **NOTE**: This Component is renderless, it does not render its own DOM nodes.

`BrowserRender` disables rendering of child content that either doesn't work in a SSR environment or doesn't make sense there. e.g. `<canvas>` rendering

> **USAGE**: REPL renders in your Browser, so this feature will always render the content.

```svelte {title="BrowserRender Preview" mode="repl"}
<script>
    import {BrowserRender} from "@kahi-ui/framework";
</script>

<BrowserRender>
    This will only render on the Browser.
</BrowserRender>
```

## Imports

```svelte {title="BrowserRender Imports"}
<script>
    import {BrowserRender} from "@kahi-ui/framework";
</script>
```
