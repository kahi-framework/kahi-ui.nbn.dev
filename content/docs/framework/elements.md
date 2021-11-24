# Elements

Like [binding DOM nodes](https://svelte.dev/docs#bind_element), most Components support binding their top-level layout `HTMLElement` via the `element` property instead of `this`.

```svelte {title="Elements Preview" mode="repl"}
<script>
    import {Button} from "@kahi-ui/framework";

    let element = null;

    $: console.log({element});
</script>

<Button bind:element>I reference a button!</Button>
```
