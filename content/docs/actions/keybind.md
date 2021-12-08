# keybind

> **NOTE**: New since `v0.3.1`.

`keybind` is a [Svelte Action](https://svelte.dev/docs#use_action), which runs a `on_bind(event: IKeybindEvent): void` callback whenever your assigned element has focus.

```svelte {title="keybind Preview" mode="repl"}
<script>
    import {keybind} from "@kahi-ui/framework";

    let is_input_active = false;
    let is_window_active = false;
</script>

<svelte:window
    use:keybind={{
        binds: "control+/",
        on_bind: (event) =>
            (is_window_active = event.detail.active),
    }}
/>

<div
    class="box"
    data-palette={is_window_active
        ? "affirmative"
        : "negative"}
    data-padding="small"
>
    Click inside the REPL, and press CTRL+/ to activate
    bind.
</div>

<br />

<input
    type="text"
    placeholder="Click inside of me for focus, and press CTRL+ENTER to activate bind."
    data-palette={is_input_active
        ? "affirmative"
        : "negative"}
    use:keybind={{
        binds: "control+enter",
        on_bind: (event) =>
            (is_input_active = event.detail.active),
    }}
/>
```

## Imports

```javascript {title="keybind Imports"}
import {keybind} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on the Browser only with Javascript is enabled. So should not be used for critical end-user functionality, only progressive enhancement.
