# intersection_observer

> **NOTE**: New since `v0.4.1`.

`intersection_observer` is a [Svelte Action](https://svelte.dev/docs#use_action), which runs a `on_intersect(intersections: IntersectionObserverEntry[]): void` callback whenever the targetted element intersects the root viewport.

> **NOTE**: The below REPL basically reimplements [IntersectionRender](../utilities/intersectionrender.md).

```svelte {title="intersection_observer Preview" mode="repl"}
<script>
    import {
        Box,
        Code,
        Spacer,
        Transition,
        intersection_observer,
    } from "@kahi-ui/framework";

    let is_intersecting = false;
</script>

<Spacer spacing="huge" />
<Spacer spacing="huge" />

<Spacer spacing="huge" />
<Spacer spacing="huge" />

<Box
    palette={is_intersecting
        ? "affirmative"
        : "negative"}
    padding="small"
>
    Scroll down to watch this <Code>Box</Code> change when
    the <Code>Box</Code> comes into view.
</Box>

<Spacer spacing="huge" />
<Spacer spacing="huge" />

<Spacer spacing="huge" />
<Spacer spacing="huge" />

<Spacer spacing="huge" />
<Spacer spacing="huge" />

<div
    class="intersection-observer-preview"
    use:intersection_observer={{
        threshold: 0.5,
        on_intersect: (intersections) => {
            console.log("on_intersect", {
                intersections,
            });

            is_intersecting = intersections.some(
                (intersection) =>
                    intersection.isIntersecting
            );
        },
    }}
>
    {#if is_intersecting}
        <Transition
            animation="scale"
            variation="enter"
        >
            <Box
                class="intersection-observer-preview"
                palette="inverse"
                padding="small">I am in view!</Box
            >
        </Transition>
    {/if}
</div>

<Spacer spacing="huge" />
<Spacer spacing="huge" />

<Spacer spacing="huge" />
<Spacer spacing="huge" />

<Spacer spacing="huge" />
<Spacer spacing="huge" />

<Box
    palette={is_intersecting
        ? "affirmative"
        : "negative"}
    padding="small"
>
    Scroll up to watch this <Code>Box</Code> change when
    the <Code>Box</Code> comes into view.
</Box>

<Spacer spacing="huge" />
<Spacer spacing="huge" />

<Spacer spacing="huge" />
<Spacer spacing="huge" />

<style>
    :global(.intersection-observer-preview) {
        height: 40px;
    }
</style>
```

## Imports

```javascript {title="intersection_observer Imports"}
import {intersection_observer} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on Javascript-enabled Browser. So should not be used for critical end-user functionality, only progressive enhancement. The Action is dependent on [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).
