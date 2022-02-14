# darkmode

> **NOTE**: New since `v0.2.3`.

`darkmode` is a **readonly** [Svelte Store](https://svelte.dev/docs#svelte_store), which returns `true` whenever either [`htmldark`](./htmlmode.md) or [`prefersdark`](./prefersscheme.md) are truthy.

> **NOTE**: Click the color scheme button in the top navigation to see changes.

```svelte {title="darkmode Preview" mode="repl"}
<script>
    import {Text, darkmode} from "@kahi-ui/framework";

    const darkmode_store = darkmode();
</script>

<Text>
    {$darkmode_store
        ? "Darkmode is enabled!"
        : "Lightmode is enabled!"}
</Text>
```

## Imports

```javascript {title="darkmode Imports"}
import {darkmode, lightmode} from "@kahi-ui/framework";
```

## Light Mode

> **NOTE**: New since `v0.6.0`.

To check if lightmode is enabled, the `lightmode` Store is available.

```svelte {title="darkmode Light Mode" mode="repl"}
<script>
    import {Text, lightmode} from "@kahi-ui/framework";

    const lightmode_store = lightmode();
</script>

<Text>
    {$lightmode_store
        ? "Lightmode is enabled!"
        : "Darkmode is enabled!"}
</Text>
```

## Storage

To stay unopinonated in your Application's architecture, Kahi UI does **NOT** supply any mechanism to store data on the user's Browser. So if you want to provide a manual switch for users to change your Application's theme mode like this documentation website. It's recommended to use something like the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) and [`htmlmode`](./htmlmode.md).

## Compatibility

The Store is dependent on [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) / [`Window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia). So if you're rendering on the server, it'll always return `false` for `darkmode`, defaulting to `true` for `lightmode`.
