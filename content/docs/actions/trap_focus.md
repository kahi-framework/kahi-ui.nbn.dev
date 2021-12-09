# trap_focus

> **NOTE**: New since `v0.4.13`.

`trap_focus` is a [Svelte Action](https://svelte.dev/docs#use_action), which when `ITrapFocusOptions.enabled: boolean` is `true`, traps focus movement (`TAB` / `SHIFT+TAB`) to within the attached element's first and last found focusable elements.

```svelte {title="trap_focus Preview" mode="repl"}

```

## Imports

```javascript {title="trap_focus Imports"}
import {trap_focus} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on Javascript-enabled Browser. So should not be used for critical end-user functionality, only progressive enhancement.

## First + Last

You can customize the first / last focusable elements with references or CSS Selectors via the `ITrapFocusOptions.first: HTMLElement | string` / `ITrapFocusOptions.last: HTMLElement | string` options.

```svelte {title="trap_focus First + Last" mode="repl"}

```
