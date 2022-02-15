# click_inside

> **NOTE**: Introduced feature in `v0.4.13`.

`click_inside` is a [Svelte Action](https://svelte.dev/docs#use_action), which runs a `on_click_inside(event: MouseEvent): void` callback whenever your attached element is clicked inside of.

```svelte {title="click_inside Preview" mode="repl"}
<script>
    import {
        Box,
        click_inside,
    } from "@kahi-ui/framework";

    let clicked = false;
</script>

<Box
    palette={clicked ? "affirmative" : "negative"}
    padding="small"
    actions={[
        [
            click_inside,
            {
                on_click_inside: () =>
                    (clicked = true),
            },
        ],
    ]}
>
    {clicked
        ? "I was clicked inside!"
        : "I am currently not clicked..."}
</Box>
```

## Imports

```javascript {title="click_inside Imports"}
import {click_inside} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on Javascript-enabled Browser. So should not be used for critical end-user functionality, only progressive enhancement.

## Ignore

You can ignore elements that matches a given CSS Selector via the `IClickInsideOptions.ignore: string` option.

```svelte {title="click_inside Ignore" mode="repl"}
<script>
    import {
        Box,
        Button,
        click_inside,
    } from "@kahi-ui/framework";

    let clicked = false;
</script>

<Box
    palette={clicked ? "affirmative" : "negative"}
    padding="small"
    actions={[
        [
            click_inside,
            {
                ignore: "button",
                on_click_inside: () =>
                    (clicked = true),
            },
        ],
    ]}
>
    {clicked
        ? "I was clicked inside!"
        : "I am currently not clicked..."}
    <Button>This will not trigger the action!</Button>
</Box>
```
