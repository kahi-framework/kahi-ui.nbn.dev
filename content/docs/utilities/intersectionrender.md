+++
[[properties.IntersectionRender]]
name="fallthrough"
description="When the property is set, `IntersectionRender` will always render the child content in SSR environments, e.g. SvelteKit"
types=["boolean"]

[[properties.IntersectionRender]]
name="loading"
description="When the property is set, `IntersectionRender` will always disable rendering of child content when not intersecting the root viewport."
types=["eager"]

[[properties.IntersectionRender]]
name="root"
description="Sets an Element which is an ancestor of the intended target, whose bounding rectangle will be considered the viewport. Any part of the target not visible in the visible area of the root is not considered visible."
default="document.body"
types=["document.body", "Document", "Element"]

[[properties.IntersectionRender]]
name="root_margin"
description="Sets a set of offsets to add to the root's bounding_box when calculating intersections, effectively shrinking or growing the root for calculation purposes."
types=["string"]

[[properties.IntersectionRender]]
name="threshold"
description="Sets a number(s) between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target. A value of 0.0 means that even a single visible pixel counts as the target being visible. 1.0 means that the entire target element is visible."
types=["number", "number[]"]

[[properties.IntersectionRender]]
name="has_intersected"
description="Exports a readonly property which is `true` whenever `IntersectionRender` has intersected the root viewport at least once."
types=["readonly boolean"]

[[properties.IntersectionRender]]
name="is_intersecting"
description="Exports a readonly property which is `true` whenever `IntersectionRender` is intersecting the root viewport."
types=["readonly boolean"]

[[events.IntersectionRender]]
name="intersectionend"
description="Fires whenever an intersection with the root viewport ends."
types=["CustomEvent<IntersectionObserverEntry[]>"]

[[events.IntersectionRender]]
name="intersectionstart"
description="Fires whenever an intersection with the root viewport starts."
types=["CustomEvent<IntersectionObserverEntry[]>"]

[[slots.IntersectionRender]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# IntersectionRender

`IntersectionRender` disables rendering of child content before it has come into the root element's viewport at least once. Useful for lazy loading content besides media.

```svelte repl IntersectionRender Preview
<script>
    import {
        Box,
        Code,
        IntersectionRender,
        Spacer,
        Transition,
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

<IntersectionRender
    threshold={0.5}
    bind:is_intersecting
>
    <Transition animation="scale" variation="enter">
        <Box palette="inverse" padding="small">
            I am in view!
        </Box>
    </Transition>
</IntersectionRender>

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
```

## Imports

```svelte default IntersectionRender Imports
<script>
    import {IntersectionRender} from "@kahi-ui/framework";
</script>
```

## Compatibility

The Component only runs on clientside Browsers with Javascript enabled. So you need to plan a SSR-compatible fallback if using in a SSR scenario. It is also dependent on [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).

## Eager

> **NOTE**: It is good practice to give the `IntersectionRender` a fixed size that generally matches the child content when using this mode. Otherwise you can end up with janky scrolling.

You can change the behavior of `IntersectionObserver` by passing in the `loading` attribute. Which will make the Component ALWAYS disable rendering when outside of the root viewport, not just on initial load.

```svelte repl IntersectionRender Eager
<script>
    import {
        Box,
        Code,
        IntersectionRender,
        Spacer,
        Transition,
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

<IntersectionRender
    class="intersectionrender-eager"
    loading="eager"
    threshold={0.5}
    bind:is_intersecting
>
    <Transition animation="scale" variation="enter">
        <Box
            class="intersectionrender-eager"
            palette="inverse"
            padding="small"
        >
            I am in view!
        </Box>
    </Transition>
</IntersectionRender>

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
    :global(.intersectionrender-eager) {
        height: 40px;
    }
</style>
```

## Fallthrough

> **NOTE**: The REPL runs on your Browser, so this will always render anyway.

By default, `IntersectionRender` will never whenever in SSR environments. You can change it to always render in those environments via the `fallthrough` property.

```svelte repl IntersectionRender Fallthrough
<script>
    import {
        Box,
        Code,
        IntersectionRender,
        Spacer,
        Transition,
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

<IntersectionRender
    threshold={0.5}
    fallthrough
    bind:is_intersecting
>
    <Transition animation="scale" variation="enter">
        <Box palette="inverse" padding="small">
            I am in view!
        </Box>
    </Transition>
</IntersectionRender>

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
```
