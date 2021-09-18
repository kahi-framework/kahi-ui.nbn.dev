# Events

Like [binding normal DOM events](https://svelte.dev/tutorial/dom-events) with Svelte. Various Components in the framework support [forwarding their element's native events](https://kahi-ui.nbn.dev/docs/interactables/check#api-reference), or [supply their own events](https://kahi-ui.nbn.dev/docs/overlays/overlay#api-reference) for their own specific logic.

```svelte repl Events Preview
<script>
    import {Button} from "@kahi-ui/framework";

    function on_click(event) {
        console.log("I was clicked!");
    }
</script>

<Button on:click={on_click}>Click me!</Button>
```
