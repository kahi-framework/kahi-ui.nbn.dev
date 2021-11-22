# Events

Like [binding normal DOM events](https://svelte.dev/tutorial/dom-events) with Svelte. Various Components in the Framework support [forwarding their element's native events](../interactables/check#api-reference), or [supply their own events](../overlays/overlay#api-reference) for their own specific logic.

```svelte repl Events Preview
<script>
    import {Check} from "@kahi-ui/framework";

    function on_change(event) {
        console.log("I was changed to:", state);
    }

    let state = false;
</script>

<Check bind:state on:change={on_change} />
```
