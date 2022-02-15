# viewport

> **NOTE**: Introduced feature in `v0.2.14`.

`viewport` / `viewports` are **readonly** [Svelte Stores](https://svelte.dev/docs#svelte_store), which returns `true` whenever a [Viewport](../framework/responsitivity.md) selected in initialization is currently active.

> **USAGE**: REPL does not support viewport values, resize your Browser to observe this feature.

```svelte {title="viewport Preview" mode="repl"}
<script>
    import {
        Code,
        Heading,
        Text,
        viewport,
        viewports,
    } from "@kahi-ui/framework";

    const mobile_store = viewport("mobile");
    const tablet_store = viewport("tablet");

    const desktop_store = viewport("desktop");
    const widescreen_store = viewport("widescreen");

    const combo_store = viewports({
        mobile: true,
        tablet: true,
    });
</script>

<Heading>Viewports Enabled</Heading>

<Text>Mobile: <Code>{$mobile_store}</Code></Text>
<Text>Tablet: <Code>{$tablet_store}</Code></Text>

<Text>Desktop: <Code>{$desktop_store}</Code></Text>
<Text>
    Widescreen: <Code>
        {$widescreen_store}
    </Code>
</Text>

<Text>Combo: <Code>{$combo_store}</Code></Text>
```

## Imports

```javascript {title="viewport Imports"}
import {viewport, viewports} from "@kahi-ui/framework";
```

## Compatibility

The Stores are dependent on [`Window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia). So if you're rendering on the server, it'll always return `false`.
