+++
[[slots.Center]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Center

`Center` is a layout primitive used to quickly center the child content within its self.

```svelte repl Center Preview
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

```svelte default Center Imports
<script>
    import {Center} from "@kahi-ui/framework";
</script>
```
