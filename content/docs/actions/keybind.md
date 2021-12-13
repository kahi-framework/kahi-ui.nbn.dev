# keybind

> **NOTE**: New since `v0.3.1`.

`keybind` is a [Svelte Action](https://svelte.dev/docs#use_action), which runs a `on_bind(event: IKeybindEvent): void` callback whenever your assigned element has focus.

```svelte {title="keybind Preview" mode="repl"}
<script>
    import {
        Box,
        TextInput,
        keybind,
    } from "@kahi-ui/framework";

    let input_active = false;
    let window_active = false;
</script>

<svelte:window
    use:keybind={{
        binds: "shift+m",
        on_bind: (event) =>
            (window_active = event.detail.active),
    }}
/>

<Box
    palette={window_active
        ? "affirmative"
        : "negative"}
    padding="small"
>
    Press SHIFT+M to activate bind.
</Box>

<br />

<TextInput
    placeholder="Click inside of me for focus, and press CTRL+ENTER to activate bind."
    palette={input_active ? "affirmative" : "negative"}
    actions={[
        [
            keybind,
            {
                binds: "control+enter",
                on_bind: (event) =>
                    (input_active =
                        event.detail.active),
            },
        ],
    ]}
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
<script>
    import {
        Box,
        TextInput,
        keybind,
    } from "@kahi-ui/framework";

    let active = false;
</script>

<svelte:window
    use:keybind={{
        binds: "shift+m",
        on_bind: (event) =>
            (active = event.detail.active),
    }}
/>

<Box
    palette={active ? "affirmative" : "negative"}
    padding="small"
>
    Press SHIFT+M to activate bind.
</Box>
```

You can also have a single binding listen to multiple sets of keys by passing in an array.

```svelte {title="keybind Multiple Bindings" mode="repl"}
<script>
    import {
        Box,
        Text,
        keybind,
    } from "@kahi-ui/framework";

    let active = false;
</script>

<svelte:window
    use:keybind={{
        binds: ["control+enter", "shift+m"],
        on_bind: (event) =>
            (active = event.detail.active),
    }}
/>

<Box
    palette={active ? "affirmative" : "negative"}
    padding="small"
>
    Press CTRL+ENTER <Text is="strong">OR</Text> SHIFT+M
    to activate bind.
</Box>
```

## Active Binding

You can detect if the keybind is currently being pressed via the `IKeybindEvent.detail.active` member.

## Event Management

Just like with regular events, you can use `IKeybindEvent.preventDefault: () => void` / `IKeybindEvent.stopPropagation: () => void` functions to cancel propagation / the Browser using default behavior.

```svelte {title="keybind Event Management" mode="repl"}
<script>
    import {
        Box,
        Code,
        keybind,
    } from "@kahi-ui/framework";

    let active = false;
</script>

<svelte:window
    use:keybind={{
        binds: "f5",
        on_bind: (event) => {
            event.preventDefault();
            active = event.detail.active;
        },
    }}
/>

<Box
    palette={active ? "affirmative" : "negative"}
    padding="small"
>
    Press F5 to activate bind.
</Box>
```

## Repeat

You can enable listening to repeat binding activations (e.g. binding being held down) via the `IKeybindOptions.repeat: boolean` option. And then detect if the current callback is a repeat via the `IKeybindEvent.detail.repeat` member.

```svelte {title="keybind Repeat" mode="repl"}
<script>
    import {
        Box,
        Code,
        keybind,
    } from "@kahi-ui/framework";

    let active = false;
    let value = "";
</script>

<svelte:window
    use:keybind={{
        binds: "shift+m",
        repeat: true,
        on_bind: (event) => {
            active = event.detail.active;
            if (event.detail.repeat) {
                value += "I am on repeat!\n";
            }
        },
    }}
/>

<Box
    palette={active ? "affirmative" : "negative"}
    padding="small"
>
    Press and hold SHIFT+M to activate bind.
</Box>

<Code is="pre">
    {value}
</Code>
```

## Throttling

When listening to repeat binding activations, you can throttle activation callbacks for every N amount of milliseconds via the `IKeybindOptions.repeat_throttle: number` option.

```svelte {title="keybind Throttling" mode="repl"}
<script>
    import {
        Box,
        Code,
        keybind,
    } from "@kahi-ui/framework";

    let active = false;
    let value = "";
</script>

<svelte:window
    use:keybind={{
        binds: "shift+m",
        repeat: true,
        repeat_throttle: 100,
        on_bind: (event) => {
            active = event.detail.active;
            if (event.detail.repeat) {
                value += "I am on repeat!\n";
            }
        },
    }}
/>

<Box
    palette={active ? "affirmative" : "negative"}
    padding="small"
>
    Press and hold SHIFT+M to activate bind.
</Box>

<Code is="pre">
    {value}
</Code>
```

> **NOTE**: New since `v0.4.13`.

> **NOTE**: By using `throttle_cancel` in this pseudo search UI, the Browser scrolling via arrow keys is disabled.

You can also enable the `keybind` Action to automatically call `preventDefault` / `stopPropagation` on all throttled `keydown` / `keyup` events via the `IKeybindOptions.throttle_cancel: boolean` option.

```svelte {title="keybind Throttle Cancel" mode="repl"}
<script>
    import {
        Box,
        Code,
        TextInput,
        Scrollable,
        Stack,
        keybind,
    } from "@kahi-ui/framework";
    import {tick} from "svelte";

    let scrollable_element;

    let active = false;
    let current = 0;

    async function update_scrollable() {
        // NOTE: Have to wait for the DOM to update after our render runs again
        await tick();

        const current_element =
            scrollable_element.querySelector(
                `[data-palette="accent"]`
            );

        if (current_element) {
            current_element.scrollIntoView({
                block: "nearest",
                behavior: "smooth",
            });
        }
    }
</script>

<TextInput
    palette={active ? "affirmative" : "negative"}
    placeholder="Focus me and press and hold ARROWDOWN / ARROWUP"
    actions={[
        [
            keybind,
            {
                binds: "arrowdown",
                repeat: true,
                repeat_throttle: 100,
                throttle_cancel: true,
                on_bind: (event) => {
                    if (!event.detail.active) return;
                    event.preventDefault();

                    current = Math.min(current + 1, 9);
                    update_scrollable();
                },
            },
        ],
        [
            keybind,
            {
                binds: "arrowup",
                repeat: true,
                repeat_throttle: 100,
                throttle_cancel: true,
                on_bind: (event) => {
                    if (!event.detail.active) return;
                    event.preventDefault();

                    current = Math.max(current - 1, 0);
                    update_scrollable();
                },
            },
        ],
    ]}
    on:focusin={() => (active = true)}
    on:focusout={() => (active = false)}
/>

<Box>
    <Scrollable
        bind:element={scrollable_element}
        style="height:5rem;"
    >
        {#each new Array(10).fill(null) as _, index}
            <Box
                palette={current === index
                    ? "accent"
                    : "auto"}
            >
                Search Result #{index + 1}
            </Box>
        {/each}
    </Scrollable>
</Box>
```
