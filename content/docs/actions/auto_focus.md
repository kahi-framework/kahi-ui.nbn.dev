# auto_focus

> **NOTE**: New since `v0.4.13`.

`auto_focus` is a [Svelte Action](https://svelte.dev/docs#use_action), which when `IAutoFocusOptions.enabled: boolean` is `true`, focuses the first focusable element found within the attached element. When `false`, restores focus to the previously focused element.

```svelte {title="auto_focus Preview" mode="repl"}

```

## Imports

```javascript {title="auto_focus Imports"}
import {auto_focus} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on Javascript-enabled Browser. So should not be used for critical end-user functionality, only progressive enhancement.

## Target

You can set the element that is focused with a reference or CSS Selector when enabled via `IAutoFocusOptions.target: HTMLElement | string` option.

```svelte {title="auto_focus Target" mode="repl"}

```
