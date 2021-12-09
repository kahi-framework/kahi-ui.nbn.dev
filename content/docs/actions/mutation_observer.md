# mutation_observer

> **NOTE**: New since `v0.4.1`.

`mutation_observer` is a [Svelte Action](https://svelte.dev/docs#use_action), which runs a `on_mutate(mutations: MutationRecord[]): void` callback whenever the targetted element intersects the root viewport.

```svelte {title="mutation_observer Preview" mode="repl"}
<script>
    import {
        Button,
        mutation_observer,
    } from "@kahi-ui/framework";

    let palette = "affirmative";
</script>

<Button
    on:click={(event) =>
        (palette =
            palette === "affirmative"
                ? "negative"
                : "affirmative")}
>
    Toggle Palette
</Button>

<div
    class="box"
    data-palette={palette}
    use:mutation_observer={{
        attributes: true,
        on_mutate: (mutations) =>
            console.log("on_mutate", {mutations}),
    }}
>
    click the above button and watch console for
    logging
</div>
```

## Imports

```javascript {title="mutation_observer Imports"}
import {mutation_observer} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on Javascript-enabled Browser. So should not be used for critical end-user functionality, only progressive enhancement. The Action is dependent on [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
