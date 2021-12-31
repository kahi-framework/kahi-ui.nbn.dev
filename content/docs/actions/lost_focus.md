# lost_focus

> **NOTE**: New since `v0.5.0`.

`lost_focus` is a [Svelte Action](https://svelte.dev/docs#use_action), which runs a `on_lost_focus(): void` callback whenever another element is focused which is not a child of the attached element, OR, the Browser window / tab is no longer actively focused.

```svelte {title="lost_focus Preview" mode="repl"}
<script>
    import {
        Box,
        Button,
        TextInput,
    } from "@kahi-ui/framework";

    let captured_focus = false;
</script>

<TextInput
    palette={captured ? "affirmative" : "negative"}
    actions={[
        [
            lost_focus,
            {
                enabled: captured_focus,
                on_lost_focus: () =>
                    (captured_focus = false),
            },
        ],
    ]}
    on:focusin={() => (captured_focus = true)}
/>

<Button>Focus me!</Button>
```

## Imports

```javascript {title="lost_focus Imports"}
import {lost_focus} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on Javascript-enabled Browser. So should not be used for critical end-user functionality, only progressive enhancement.

## Ignore

You can ignore elements that matches a given CSS Selector via the `IClickInsideOptions.ignore: string` option.

> **TODO**: snippet
