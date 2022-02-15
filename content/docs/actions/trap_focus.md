# trap_focus

> **NOTE**: Introduced feature in `v0.4.13`.

> **USAGE**: This feature can not be demonstrated in the REPL, click the **Link** button to open in Playground.

`trap_focus` is a [Svelte Action](https://svelte.dev/docs#use_action), which when `ITrapFocusOptions.enabled: boolean` is `true`, traps focus movement (`TAB` / `SHIFT+TAB`) to within the attached element's first and last found focusable elements.

```svelte {title="trap_focus Preview" mode="repl"}
<script>
    import {
        Box,
        Button,
        Check,
        trap_focus,
    } from "@kahi-ui/framework";

    let enabled = false;
</script>

<Box
    palette={enabled ? "affirmative" : "negative"}
    padding="small"
>
    {enabled
        ? "unselect the checkbox to disabled focus trapping"
        : "select the checkbox to enable focus trapping"}
</Box>

<Check bind:state={enabled} />

<div use:trap_focus={{enabled}}>
    <Button tabindex="3">Index #3</Button>
    <Button tabindex="1">Index #1</Button>
    <Button tabindex="5">Index #5</Button>
    <Button tabindex="4">Index #4</Button>
    <Button tabindex="2">Index #2</Button>
</div>
```

## Imports

```javascript {title="trap_focus Imports"}
import {trap_focus} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on Javascript-enabled Browser. So should not be used for critical end-user functionality, only progressive enhancement.

## First + Last

> **USAGE**: This feature can not be demonstrated in the REPL, click the **Link** button to open in Playground.

You can customize the first / last focusable elements with references or CSS Selectors via the `ITrapFocusOptions.first: HTMLElement | string` / `ITrapFocusOptions.last: HTMLElement | string` options.

```svelte {title="trap_focus First + Last" mode="repl"}
<script>
    import {
        Box,
        Button,
        Check,
        trap_focus,
    } from "@kahi-ui/framework";

    let first_element;
    let last_element;

    let enabled = false;
</script>

<Box
    palette={enabled ? "affirmative" : "negative"}
    padding="small"
>
    {enabled
        ? "unselect the checkbox to disabled focus trapping"
        : "select the checkbox to enable focus trapping"}
</Box>

<Check bind:state={enabled} />

<div
    use:trap_focus={{
        first: first_element,
        enabled,
        last: last_element,
    }}
>
    <Button tabindex="3">Index #3</Button>

    <Button bind:element={first_element} tabindex="1">
        Index #1
    </Button>

    <Button tabindex="5" bind:element={last_element}
        >Index #5</Button
    >

    <Button tabindex="4">Index #4</Button>

    <Button tabindex="2">Index #2</Button>
</div>
```
