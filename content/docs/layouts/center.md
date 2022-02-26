+++
[[slots.Center]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Center

> **NOTE**: Introduced feature in `v0.4.2`.

`Center` is a layout primitive used to quickly center the child content within its self.

```svelte {title="Center Preview" mode="repl"}
<script>
    import {Box, Center} from "@kahi-ui/framework";
</script>

<Box palette="inverse">
    <Center class="center-preview">
        This text is centered!
    </Center>
</Box>

<style>
    :global(.center-preview) {
        height: 100px;
    }
</style>
```

## Imports

```svelte {title="Center Imports"}
<script>
    import {Center} from "@kahi-ui/framework";
</script>
```
