+++
[[properties.Figure]]
name="fit"
description="Alters how the media of the `Figure` should fit within its containing box."
types=["contain", "cover", "fill", "none", "scale-down"]

[[properties.Figure]]
name="radius"
description="Changes the border radius of the `Figure`."
default="none"
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{RADIUS}"]

[[properties.Figure]]
name="shape"
description="Changes the shape of the `Figure`."
types=["circle", "pill", "{VIEWPORT}:{SHAPE}"]

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

## Fit

> **NOTE**: Added responsitivity in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `fit={["contain", "tablet:cover", "mobile:cover"]}`

You can change how the child content is stretched across the `Figure` container via the `fit` property.

```svelte {title="Figure Fit" mode="repl"}
<script>
    import {
        Figure,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Figure size="small">
            <img
                src={IMAGE_BACKGROUND}
                data-width="tiny"
                data-height="medium"
            />
        </Figure>
    </div>

    <div>
        <Text is="strong">CONTAIN</Text>
        <Figure fit="contain">
            <img
                src={IMAGE_BACKGROUND}
                data-width="tiny"
                data-height="medium"
            />
        </Figure>
    </div>

    <div>
        <Text is="strong">COVER</Text>
        <Figure fit="cover">
            <img
                src={IMAGE_BACKGROUND}
                data-width="tiny"
                data-height="medium"
            />
        </Figure>
    </div>

    <div>
        <Text is="strong">FILL</Text>
        <Figure fit="fill">
            <img
                src={IMAGE_BACKGROUND}
                data-width="tiny"
                data-height="medium"
            />
        </Figure>
    </div>

    <div>
        <Text is="strong">NONE</Text>
        <Figure fit="none">
            <img
                src={IMAGE_BACKGROUND}
                data-width="tiny"
                data-height="medium"
            />
        </Figure>
    </div>

    <div>
        <Text is="strong">SCALE-DOWN</Text>
        <Figure fit="scale-down">
            <img
                src={IMAGE_BACKGROUND}
                data-width="tiny"
                data-height="medium"
            />
        </Figure>
    </div>
</Stack.Container>
```

## Radius

> **NOTE**: New since `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `radius={["tiny", "tablet:medium", "mobile:medium"]}`

You can modify the border radius of the child content via the `radius` property.

```svelte {title="Figure Radius" mode="repl"}
<script>
    import {
        Figure,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container spacing="medium" sizing="tiny">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Figure>
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong" />
        <Figure radius="none">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong" />
        <Figure radius="nano">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong" />
        <Figure radius="tiny">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong" />
        <Figure radius="small">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong" />
        <Figure radius="medium">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong" />
        <Figure radius="large">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong" />
        <Figure radius="huge">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong" />
        <Figure radius="massive">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>
</Mosaic.Container>
```

## Shape

> **NOTE**: New since `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `shape={["circle", "tablet:pill", "mobile:pill"]}`

You can modify the shape of the child content via the `shape` property.

```svelte {title="Figure Shape" mode="repl"}
<script>
    import {
        Figure,
        Mosaic,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container spacing="medium" sizing="tiny">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Figure>
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">CIRCLE</Text>
        <Figure shape="circle">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>

    <div>
        <Text is="strong">PILL</Text>
        <Figure shape="pill">
            <img src={IMAGE_BACKGROUND} />
        </Figure>
    </div>
</Mosaic.Container>
```
