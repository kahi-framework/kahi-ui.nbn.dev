# click_outside

> **NOTE**: Introduced feature in `v0.2.11`.

`click_outside` is a [Svelte Action](https://svelte.dev/docs#use_action), which runs a `on_click_outside(event: MouseEvent): void` callback whenever your attached element is clicked outside of.

```svelte {title="click_outside Preview" mode="repl"}
<script>
    import {
        Box,
        click_outside,
    } from "@kahi-ui/framework";

    let clicked = false;
</script>

<Box
    palette={clicked ? "affirmative" : "negative"}
    padding="small"
    actions={[
        [
            click_outside,
            {
                on_click_outside: () =>
                    (clicked = false),
            },
        ],
    ]}
    on:click={() => (clicked = true)}
>
    {clicked
        ? "I was clicked inside!"
        : "I am currently not clicked..."}
</Box>
```

## Imports

```javascript {title="click_outside Imports"}
import {click_outside} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on Javascript-enabled Browser. So should not be used for critical end-user functionality, only progressive enhancement.

## Ignore

> **NOTE**: Introduced feature in `v0.4.13`.

You can ignore elements that matches a given CSS Selector via the `IClickOutsideOptions.ignore: string` option.

```svelte {title="click_outside Ignore" mode="repl"}
<script>
    import {
        Box,
        Button,
        click_outside,
    } from "@kahi-ui/framework";

    let clicked = false;
</script>

<Button>This will not trigger the action!</Button>

<Box
    palette={clicked ? "affirmative" : "negative"}
    padding="small"
    actions={[
        [
            click_outside,
            {
                ignore: "button",
                on_click_outside: () =>
                    (clicked = false),
            },
        ],
    ]}
    on:click={() => (clicked = true)}
>
    {clicked
        ? "I was clicked inside!"
        : "I am currently not clicked..."}
</Box>
```
