+++
[[slots.BrowserRender]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# BrowserRender

`BrowserRender` disables rendering of child content that either doesn't work in a SSR environment or doesn't make sense there. e.g. `<canvas>` rendering

> **IMPORTANT**: The REPL runs on your Browser, so this will always show the content.

```svelte repl BrowserRender Preview
<script>
    import {BrowserRender} from "@kahi-ui/framework";
</script>

<BrowserRender>
    This will only render on the Browser.
</BrowserRender>
```

## Imports

```svelte default BrowserRender Imports
<script>
    import {BrowserRender} from "@kahi-ui/framework";
</script>
```
