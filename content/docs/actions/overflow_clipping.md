# overflow_clipping

> **NOTE**: New since `v0.4.13`.

> **IMPORTANT**: `overflow_clipping` only detects if the attached element has is clipping on a given axis, not if the scrollbar is visible.

> **WARNING**: This feature can cause layout thrashing.

`overflow_clipping` is a [Svelte Action](https://svelte.dev/docs#use_action), which when `IOverflowClippingOptions.enabled: boolean` is `true`, runs the `on_clip(entry: {horizontal: boolean, vertical: boolean}): void` callback. Whenever content is clipping the bounding box of the attached element.

```svelte {title="overflow_clipping Preview" mode="repl"}

```

## Imports

```javascript {title="overflow_clipping Imports"}
import {overflow_clipping} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on Javascript-enabled Browser. So should not be used for critical end-user functionality, only progressive enhancement.
