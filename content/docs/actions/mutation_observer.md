# mutation_observer

`mutation_observer` is a [Svelte Action](https://svelte.dev/docs#use_action), which runs a `on_mutate(mutations: MutationRecord[]): void` callback whenever the targetted element intersects the root viewport.

```svelte repl mutation_observer Preview
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

```javascript mutation_observer Imports
import {mutation_observer} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on the Browser only with Javascript is enabled. So should not be used for critical end-user functionality, only progressive enhancement. The Action is dependent on [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
