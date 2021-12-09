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

## Binding

You can configure which set of keys you want to activate the binding by listing the [Key Values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) in a `key1+key2+keyN` format via the `IKeybindOptions.binds: string | string[]` option. You can (_theoretically_) listen to as many keys as you want.

```svelte {title="keybind Binding" mode="repl"}

```

You can also have a single binding listen to multiple sets of keys by passing in an array.

```svelte {title="keybind Multiple Bindings" mode="repl"}

```

## Active Binding

You can detect if the keybind is currently being pressed via the `IKeybindEvent.detail.active` member.

```svelte {title="keybind Active Binding" mode="repl"}

```

## Event Management

Just like with regular events, you can use `IKeybindEvent.preventDefault: () => void` / `IKeybindEvent.stopPropagation: () => void` functions to cancel propagation / the Browser registering the key press.

```svelte {title="keybind Event Management" mode="repl"}

```

## Repeat

You can enable listening to repeat binding activations (e.g. binding being held down) via the `IKeybindOptions.repeat: boolean` option.

```svelte {title="keybind Repeat" mode="repl"}

```

## Throttling

When listening to repeat binding activations, you can throttle activation callbacks for every N amount of milliseconds via the `IKeybindOptions.repeat_throttle: number` option.

```svelte {title="keybind Throttling" mode="repl"}

```

> **NOTE**: New since `v0.4.13`.

You can also enable the `keybind` Action to automatically call `preventDefault` / `stopPropagation` on all throttled `keydown` / `keyup` events via the `throttle_cancel` option.

```svelte {title="keybind Throttle Cancel" mode="repl"}

```
