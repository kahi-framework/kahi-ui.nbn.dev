+++
[[properties."*"]]
name="sveltekit:noscroll"
description="Configures SvelteKit to disable scrolling to top / linked element ID #hash whenever the link is clicked."
types=["boolean"]

[[properties."*"]]
name="sveltekit:prefetch"
description="Configures SvelteKit to fetch the linked route's [`load`](https://kit.svelte.dev/docs#loading) whenever the link is hovered."
types=["boolean"]
+++

# SvelteKit

All Components have access to all global [SvelteKit](https://kit.svelte.dev) attributes.

## sveltekit:noscroll

> **NOTE**: New since `v0.2.0`.

[`sveltekit:noscroll`](https://kit.svelte.dev/docs#anchor-options-sveltekit-noscroll) configures SvelteKit to disable scrolling to top / linked element ID #hash whenever the link is clicked.

```svelte {title="SvelteKit NoScroll" mode="repl"}
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor
    href="/docs/interactables/button"
    sveltekit:noscroll
>
    Goto Button
</Anchor>
```

## sveltekit:prefetch

> **NOTE**: New since `v0.2.0`.

[`sveltekit:prefetch`](https://kit.svelte.dev/docs#anchor-options-sveltekit-prefetch) configures SvelteKit to fetch the linked route's [`load`](https://kit.svelte.dev/docs#loading) whenever the link is hovered.

```svelte {title="SvelteKit Prefetch" mode="repl"}
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor
    href="/docs/interactables/button"
    sveltekit:prefetch
>
    Goto Button
</Anchor>
```
