+++
[[slots.ServerRender]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# ServerRender

> **NOTE**: Introduced feature in `v0.4.1`.

> **NOTE**: This feature is renderless, meaning it does not render anything extra to the DOM.

`ServerRender` disables rendering of child content that doesn't work on the Browser, or doesn't make sense there. e.g. reading a file from local disk

> **USAGE**: REPL renders in your Browser, so this feature will never render the content.

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
