# click_outside

`click_outside` is a [Svelte Action](https://svelte.dev/docs#use_action), which runs a `on_click_outside(event: MouseEvent): void` callback whenever your assigned element is clicked outside of.

```svelte repl click_outside Preview
<script>
    import {click_outside} from "@kahi-ui/framework";

    let clicked = false;
</script>

<div
    class="box"
    data-palette={clicked ? "affirmative" : "negative"}
    data-padding="small"
    use:click_outside={{
        on_click_outside: () => (clicked = false),
    }}
    on:click={() => (clicked = true)}
>
    {clicked
        ? "I was clicked inside!"
        : "I am currently not clicked..."}
</div>
```

## Compatibility

Svelte Actions are always ran on the Browser only with Javascript is enabled. So should not be used for critical end-user functionality, only progressive enhancement.
