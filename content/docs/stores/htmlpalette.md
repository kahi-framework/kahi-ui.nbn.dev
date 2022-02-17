# htmlpalette

> **NOTE**: New since `v0.2.3`.

> **DEPRECATED**: This feature will be renamed `htmlpalette` -> `htmlmode` in `v0.6.0`.

`htmlpalette` is a [Svelte Store](https://svelte.dev/docs#svelte_store), which is bound to `<html data-palette="XXX">` and returns the changes to that attribute. Defaulting to `"light"` if not set.

> **NOTE**: Click the color scheme button in the Navigation topbar to see changes.

```svelte {title="htmlpalette Preview" mode="repl"}
<script>
    import {
        Code,
        Heading,
        Text,
        htmlmode,
    } from "@kahi-ui/framework";

    const mode_store = htmlmode();
</script>

<Heading>Application Global Palette</Heading>

<Text>
    <Code>data-palette</Code>: <Code>
        {$mode_store}
    </Code>
</Text>
```

## Imports

```javascript {title="htmlpalette Imports"}
import {htmlmode} from "@kahi-ui/framework";
```

## Compatibility

The Store is dependent on [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). So if you're rendering on the server, it'll always return `""`.
