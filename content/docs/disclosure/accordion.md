# Accordion

...

```svelte repl Accordion Preview

```

## Imports

```svelte default Accordion Imports
<script>
    import {Accordion} from "@kahi-ui/framework";

    const {Container, Label, Group, Section} =
        Accordion;
</script>
```

## Palette

You can change the color palette of the `Accordion` buttons via the `palette` property.

```svelte repl Accordion Palette

```

## Loading

> **NOTE**: Use the in-Browser developer tools to see this functionality in action.

You can customize the slot loading behavior of individual `Accordion.Section` Components to not render their children, via the `loading` property.

```svelte repl Accordion Loading

```

## Transitions

You can use [`Transition`](../utilities/Transition.md) Components to provide fancy switching animations.

```svelte repl Accordion Transitions

```
