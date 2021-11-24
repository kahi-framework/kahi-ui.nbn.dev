# Actions

As a limitation of Svelte, you cannot use [Actions](https://svelte.dev/docs#use_action) on Components. So the Framework provides a special syntax to support forwarding actions to a Component's main elements.

<!-- prettier-ignore -->
```svelte {title="Actions Preview" mode="repl"}
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
            {on_click_outside: () => (clicked = false)},
        ],
    ]}
    on:click={() => (clicked = true)}
>
    {clicked
        ? "I was clicked inside!"
        : "I am currently not clicked..."}
</Box>
```
