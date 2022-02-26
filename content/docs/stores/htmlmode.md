# htmlmode

> **NOTE**: Introduced feature in `v0.2.3`.

> **WARNING**: This feature was renamed from `htmlpalette` to `htmlmode` in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

> **USAGE**: This feature can be demonstrated by clicking the **Theme Toggle** button in the top navigation.

`htmlmode` is a [Svelte Store](https://svelte.dev/docs#svelte_store), which is bound to `<html data-mode="XXX">` and updates whenever that attribute is changed. Defaulting to an empty string (`""`) if not set.

```svelte {title="htmlmode Preview" mode="repl"}
<script>
    import {
        Code,
        Heading,
        Text,
        htmlmode,
    } from "@kahi-ui/framework";

    const mode_store = htmlmode();
</script>

<Heading>Application Theme Mode</Heading>

<Text>
    <Code>&lt;html data-mode&gt;</Code>: <Code>
        "{$mode_store}"
    </Code>
</Text>
```

## Imports

```javascript {title="htmlmode Imports"}
import {
    htmlmode,
    htmldark,
    htmllight,
} from "@kahi-ui/framework";
```

## Built-In Shortcuts

> **NOTE**: Introduced feature in `v0.6.0`.

The `htmlmode` Store also comes with two **readonly** preconfigured shortcut Stores, `htmldark` and `htmllight`.

```svelte {title="htmlmode Built-In Shortcuts" mode="repl"}
<script>
    import {
        Code,
        Heading,
        Text,
        htmldark,
        htmllight,
    } from "@kahi-ui/framework";

    const dark_store = htmldark();
    const light_store = htmllight();
</script>

<Heading>Application Theme Mode</Heading>

<Text>
    <Code>&lt;html data-mode="dark"&gt;</Code>: <Code>
        {$dark_store}
    </Code>
</Text>

<Text>
    <Code>&lt;html data-mode="light"&gt;</Code>: <Code>
        {$light_store}
    </Code>
</Text>
```

## Compatibility

The Store is dependent on [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). So if you're rendering on the server, it'll always return an empty string (`""`).
