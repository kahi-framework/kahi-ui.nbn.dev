+++
[[properties.Progress]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.Progress]]
name="radius"
description="Changes the border radius of the `Progress`."
default="none"
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{RADIUS}"]

[[properties.Progress]]
name="shape"
description="Changes the shape of the `Progress`."
types=["circle"]

[[properties.Progress]]
name="sizing"
description="Renders the `Progress` at a different sizes."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties.Progress]]
name="value"
description="Changes the percentage value _(0.0...1.0)_ that is rendered. If `undefined`, a loading animation is played."
default="undefined"
types=["undefined", "number", "string"]

[[slots.Progress]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Progress]]
name="--progress-palette-background-bold"
description="Controls the default RGB color value used for `background-image` / `stroke`."
types=["<r,g,b>"]

[[custom_properties.Progress]]
name="--progress-size-icon"
description="Controls the default `height` for progress bars and `width` / `height` for progress circles."
types=["<length>", "<percentage>"]

[[custom_properties.Progress]]
name="--progress-background-opacity"
description="Controls opacity of the `Progress` background track color."
types=["<alpha-value>"]

[[custom_properties.Progress]]
name="--progress-border-radius"
description="Controls the `border-radius` of progress bars."
types=["<length>", "<percentage>"]
+++

# Progress

> **NOTE**: Introduced feature in `v0.3.1`.

`Progress` is typically used to render feedback to the end-user about how complete a current task is.

```svelte {title="Progress Preview" mode="repl"}
<script>
    import {
        Button,
        Progress,
    } from "@kahi-ui/framework";

    let value = 0.5;
</script>

<Progress shape="circle" {value} />
<Progress {value} />

<Button
    palette="negative"
    on:click={() =>
        (value = Math.max(0, value - 0.05))}
>
    -0.05
</Button>

<Button
    palette="affirmative"
    on:click={() =>
        (value = Math.min(1, value + 0.05))}
>
    +0.05
</Button>
```

## Imports

```svelte {title="Progress Imports"}
<script>
    import {Progress} from "@kahi-ui/framework";
</script>
```

## Radius

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `radius={["tiny", "tablet:medium", "mobile:medium"]}`

You can modify the border radius of a bar `Progress` via the `radius` property.

```svelte {title="Progress Radius" mode="repl"}
<script>
    import {
        Mosaic,
        Progress,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="small" spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Progress value={0.5} />
    </div>

    <div>
        <Text is="strong">NONE</Text>
        <Progress value={0.5} radius="none" />
    </div>

    <div>
        <Text is="strong">NANO</Text>
        <Progress value={0.5} radius="nano" />
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <Progress value={0.5} radius="tiny" />
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <Progress value={0.5} radius="small" />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <Progress value={0.5} radius="medium" />
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <Progress value={0.5} radius="large" />
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <Progress value={0.5} radius="huge" />
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>
        <Progress value={0.5} radius="massive" />
    </div>
</Mosaic.Container>
```

## Shape

You can modify the shape of the `Progress` via the `shape` property.

```svelte {title="Progress Shape" mode="repl"}
<script>
    import {Progress} from "@kahi-ui/framework";
</script>

<Progress shape="circle" value={0.5} />
<Progress value={0.5} />
```

## Palette

You can change the color palette of the `Progress` via the `palette` property.

```svelte {title="Progress Palette" mode="repl"}
<script>
    import {
        Mosaic,
        Progress,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium" variation="wrap">
    <Stack.Container
        orientation="horizontal"
        spacing="medium"
        variation="wrap"
    >
        <div>
            <Text is="strong">DEFAULT</Text>
            <br />

            <Progress shape="circle" value={0.5} />
        </div>

        <div>
            <Text is="strong">ACCENT</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                palette="accent"
            />
        </div>

        <div>
            <Text is="strong">NEUTRAL</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                palette="neutral"
            />
        </div>

        <div>
            <Text is="strong">DARK</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                palette="dark"
            />
        </div>

        <div>
            <Text is="strong">LIGHT</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                palette="light"
            />
        </div>

        <div>
            <Text is="strong">ALERT</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                palette="alert"
            />
        </div>

        <div>
            <Text is="strong">AFFIRMATIVE</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                palette="affirmative"
            />
        </div>

        <div>
            <Text is="strong">INFORMATIVE</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                palette="informative"
            />
        </div>

        <div>
            <Text is="strong">NEGATIVE</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                palette="negative"
            />
        </div>
    </Stack.Container>

    <Mosaic.Container sizing="small" spacing="medium">
        <div>
            <Text is="strong">DEFAULT</Text>
            <Progress value={0.5} />
        </div>

        <div>
            <Text is="strong">ACCENT</Text>
            <Progress value={0.5} palette="accent" />
        </div>

        <div>
            <Text is="strong">NEUTRAL</Text>
            <Progress value={0.5} palette="neutral" />
        </div>

        <div>
            <Text is="strong">DARK</Text>
            <Progress value={0.5} palette="dark" />
        </div>

        <div>
            <Text is="strong">LIGHT</Text>
            <Progress value={0.5} palette="light" />
        </div>

        <div>
            <Text is="strong">ALERT</Text>
            <Progress value={0.5} palette="alert" />
        </div>

        <div>
            <Text is="strong">AFFIRMATIVE</Text>
            <Progress
                value={0.5}
                palette="affirmative"
            />
        </div>

        <div>
            <Text is="strong">INFORMATIVE</Text>
            <Progress
                value={0.5}
                palette="informative"
            />
        </div>

        <div>
            <Text is="strong">NEGATIVE</Text>
            <Progress value={0.5} palette="negative" />
        </div>
    </Mosaic.Container>
</Stack.Container>
```

## Sizing

You can change the size of the `Progress` via the `sizing` property.

```svelte {title="Progress Sizing" mode="repl"}
<script>
    import {
        Mosaic,
        Progress,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium" variation="wrap">
    <Stack.Container
        orientation="horizontal"
        spacing="medium"
        variation="wrap"
    >
        <div>
            <Text is="strong">DEFAULT</Text>
            <br />

            <Progress shape="circle" value={0.5} />
        </div>

        <div>
            <Text is="strong">TINY</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                sizing="tiny"
            />
        </div>

        <div>
            <Text is="strong">SMALL</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                sizing="small"
            />
        </div>

        <div>
            <Text is="strong">MEDIUM</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                sizing="medium"
            />
        </div>

        <div>
            <Text is="strong">LARGE</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                sizing="large"
            />
        </div>

        <div>
            <Text is="strong">HUGE</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                sizing="huge"
            />
        </div>
    </Stack.Container>

    <Mosaic.Container sizing="small" spacing="medium">
        <div>
            <Text is="strong">DEFAULT</Text>
            <Progress value={0.5} />
        </div>

        <div>
            <Text is="strong">TINY</Text>
            <Progress value={0.5} sizing="tiny" />
        </div>

        <div>
            <Text is="strong">SMALL</Text>
            <Progress value={0.5} sizing="small" />
        </div>

        <div>
            <Text is="strong">MEDIUM</Text>
            <Progress value={0.5} sizing="medium" />
        </div>

        <div>
            <Text is="strong">LARGE</Text>
            <Progress value={0.5} sizing="large" />
        </div>

        <div>
            <Text is="strong">HUGE</Text>
            <Progress value={0.5} sizing="huge" />
        </div>
    </Mosaic.Container>
</Stack.Container>
```

## Indeterminate

By not passing the `value` property, the `Progress` will render with an animation for tasks that don't have trackable progression.

```svelte {title="Progress Indeterminate" mode="repl"}
<script>
    import {
        Mosaic,
        Progress,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium" variation="wrap">
    <Stack.Container
        orientation="horizontal"
        spacing="medium"
        variation="wrap"
    >
        <div>
            <Text is="strong">DEFAULT</Text>
            <br />

            <Progress shape="circle" />
        </div>

        <div>
            <Text is="strong">ACCENT</Text>
            <br />

            <Progress
                shape="circle"
                palette="accent"
            />
        </div>

        <div>
            <Text is="strong">NEUTRAL</Text>
            <br />

            <Progress
                shape="circle"
                palette="neutral"
            />
        </div>

        <div>
            <Text is="strong">DARK</Text>
            <br />

            <Progress shape="circle" palette="dark" />
        </div>

        <div>
            <Text is="strong">LIGHT</Text>
            <br />

            <Progress shape="circle" palette="light" />
        </div>

        <div>
            <Text is="strong">ALERT</Text>
            <br />

            <Progress shape="circle" palette="alert" />
        </div>

        <div>
            <Text is="strong">AFFIRMATIVE</Text>
            <br />

            <Progress
                shape="circle"
                palette="affirmative"
            />
        </div>

        <div>
            <Text is="strong">INFORMATIVE</Text>
            <br />

            <Progress
                shape="circle"
                palette="informative"
            />
        </div>

        <div>
            <Text is="strong">NEGATIVE</Text>
            <br />

            <Progress
                shape="circle"
                palette="negative"
            />
        </div>
    </Stack.Container>

    <Mosaic.Container sizing="small" spacing="medium">
        <div>
            <Text is="strong">DEFAULT</Text>
            <Progress />
        </div>

        <div>
            <Text is="strong">ACCENT</Text>
            <Progress palette="accent" />
        </div>

        <div>
            <Text is="strong">NEUTRAL</Text>
            <Progress palette="neutral" />
        </div>

        <div>
            <Text is="strong">DARK</Text>
            <Progress palette="dark" />
        </div>

        <div>
            <Text is="strong">LIGHT</Text>
            <Progress palette="light" />
        </div>

        <div>
            <Text is="strong">ALERT</Text>
            <Progress palette="alert" />
        </div>

        <div>
            <Text is="strong">AFFIRMATIVE</Text>
            <Progress palette="affirmative" />
        </div>

        <div>
            <Text is="strong">INFORMATIVE</Text>
            <Progress palette="informative" />
        </div>

        <div>
            <Text is="strong">NEGATIVE</Text>
            <Progress palette="negative" />
        </div>
    </Mosaic.Container>
</Stack.Container>
```
