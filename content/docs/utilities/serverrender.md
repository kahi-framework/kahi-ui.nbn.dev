+++
[[slots.ServerRender]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# ServerRender

> **NOTE**: This Component is renderless, it does not render its own DOM nodes.

`ServerRender` disables rendering of child content that doesn't work on the Browser, or doesn't make sense there. e.g. reading a file from local disk

> **NOTE**: The REPL runs on your Browser, so this will always be blank.

```svelte {title="ServerRender Preview" mode="repl"}
<script>
    import {ServerRender} from "@kahi-ui/framework";
</script>

<ServerRender>
    This only renders in a SSR environment, e.g.
    SvelteKit
</ServerRender>
```

## Imports

```svelte {title="ServerRender Imports"}
<script>
    import {ServerRender} from "@kahi-ui/framework";
</script>
```
