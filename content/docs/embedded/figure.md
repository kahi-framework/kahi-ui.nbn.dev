+++
[[properties.Figure]]
name="fit"
description="Alters how the media of the `Figure` should fit within its containing box."
types=["contain", "cover", "fill", "none", "scale-down"]

[[properties.Figure]]
name="shape"
description="Changes the shape of the `Figure`."
default="none"
types=["none", "pill", "rounded"]

[[properties.Figure]]
name="size"
description="Changes how big the `Figure` should be forced to render, while keeping the aspect ratio. When `variation=\"icon\"`, sizes are smaller and aspect ratio is ignored."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.Figure]]
name="variation"
description="Alters how some of the other properties changes the `Figure`. e.g. `size`"
types=["icon"]

[[slots.Figure]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Figure

> **NOTE**: New since `v0.2.1`.

`Figure` is a multimedia container Component, providing modifications for things such as images and videos.

```svelte {title="Figure Preview" mode="repl"}
<script>
    import {Figure} from "@kahi-ui/framework";
</script>

<Figure max_width="33">
    <img src={IMAGE_BACKGROUND} />
</Figure>
```

## Imports

```svelte {title="Figure Imports"}
<script>
    import {Figure} from "@kahi-ui/framework";
</script>
```

## Shape

You can modify the shape of the child content via the `shape` property.

```svelte {title="Figure Shape" mode="repl"}
<script>
    import {
        Figure,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic spacing="medium" sizing="tiny">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Figure>
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">PILL</Text>
        <Figure shape="pill">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">ROUNDED</Text>
        <Figure shape="rounded">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>
</Mosaic>
```

## Size

You can modify the size of the child content between five presets via the `size` property. Along with separate set of sizes meant for icon-sized content by including `variation="icon"`.

```svelte {title="Figure Size" mode="repl"}
<script>
    import {
        Figure,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack class="figure-size" spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Figure max_width="25">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <Stack orientation="horizontal" spacing="medium">
        <div>
            <Text is="strong">TINY (ICON)</Text>
            <Figure size="tiny" variation="icon">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">SMALL (ICON)</Text>
            <Figure size="small" variation="icon">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">MEDIUM (ICON)</Text>
            <Figure size="medium" variation="icon">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">LARGE (ICON)</Text>
            <Figure size="large" variation="icon">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">HUGE (ICON)</Text>
            <Figure size="huge" variation="icon">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>
    </Stack>

    <Stack spacing="medium">
        <div>
            <Text is="strong">TINY</Text>
            <Figure size="tiny">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">SMALL</Text>
            <Figure size="small">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">MEDIUM</Text>
            <Figure size="medium">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">LARGE</Text>
            <Figure size="large">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>

        <div>
            <Text is="strong">HUGE</Text>
            <Figure size="huge">
                <img src={IMAGE_BACKGROUND} />
            </Figure>
        </div>
    </Stack>
</Stack>

<style>
    :global(.figure-size figure[data-size] > img) {
        max-width: max-content;
    }
</style>
```

## Fit

You can change how the child content is stretched across the `Figure` container via the `fit` property.

```svelte {title="Figure Fit" mode="repl"}
<script>
    import {
        Figure,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    class="figure-fit"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Figure variation="icon">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">CONTAIN</Text>
        <Figure fit="contain" variation="icon">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">COVER</Text>
        <Figure fit="cover" variation="icon">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">FILL</Text>
        <Figure fit="fill" variation="icon">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">NONE</Text>
        <Figure fit="none" variation="icon">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">SCALE-DOWN</Text>
        <Figure fit="scale-down" variation="icon">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>
</Stack>

<style>
    :global(.figure-fit img) {
        width: 12rem;
        height: 18rem;
    }
</style>
```
