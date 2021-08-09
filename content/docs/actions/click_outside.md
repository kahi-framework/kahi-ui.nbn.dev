# click_outside

`click_outside` is a [Svelte Action](https://svelte.dev/docs#use_action), which runs an `on_click_outside(event: MouseEvent)` event listener whenever your assigned element is clicked outside of.

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
