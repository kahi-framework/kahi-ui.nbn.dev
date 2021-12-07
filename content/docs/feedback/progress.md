+++
[[properties.Progress]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Progress]]
name="shape"
description="Changes the shape of the `Progress`."
types=["circle"]

[[properties.Progress]]
name="size"
description="Renders the `Progress` at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.Progress]]
name="value"
description="Changes the percentage value _(0.0...1.0)_ that is rendered."
types=["number", "string", "undefined"]

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

> **NOTE**: New since `v0.3.1`.

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

<Stack spacing="medium" variation="wrap">
    <Stack
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
            <Text is="strong">NEGATIVE</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                palette="negative"
            />
        </div>
    </Stack>

    <Mosaic sizing="small" spacing="medium">
        <div>
            <Text is="strong">DEFAULT</Text>
            <Progress value={0.5} />
        </div>

        <div>
            <Text is="strong">ACCENT</Text>
            <Progress value={0.5} palette="accent" />
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
            <Text is="strong">NEGATIVE</Text>
            <Progress value={0.5} palette="negative" />
        </div>
    </Mosaic>
</Stack>
```

## Size

You can change the size of the `Progress` via the `size` property.

```svelte {title="Progress Palette" mode="repl"}
<script>
    import {
        Mosaic,
        Progress,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium" variation="wrap">
    <Stack
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
                size="tiny"
            />
        </div>

        <div>
            <Text is="strong">SMALL</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                size="small"
            />
        </div>

        <div>
            <Text is="strong">MEDIUM</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                size="medium"
            />
        </div>

        <div>
            <Text is="strong">LARGE</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                size="large"
            />
        </div>

        <div>
            <Text is="strong">HUGE</Text>
            <br />

            <Progress
                shape="circle"
                value={0.5}
                size="huge"
            />
        </div>
    </Stack>

    <Mosaic sizing="small" spacing="medium">
        <div>
            <Text is="strong">DEFAULT</Text>
            <Progress value={0.5} />
        </div>

        <div>
            <Text is="strong">TINY</Text>
            <Progress value={0.5} size="tiny" />
        </div>

        <div>
            <Text is="strong">SMALL</Text>
            <Progress value={0.5} size="small" />
        </div>

        <div>
            <Text is="strong">MEDIUM</Text>
            <Progress value={0.5} size="medium" />
        </div>

        <div>
            <Text is="strong">LARGE</Text>
            <Progress value={0.5} size="large" />
        </div>

        <div>
            <Text is="strong">HUGE</Text>
            <Progress value={0.5} size="huge" />
        </div>
    </Mosaic>
</Stack>
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

<Stack spacing="medium" variation="wrap">
    <Stack
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
            <Text is="strong">NEGATIVE</Text>
            <br />

            <Progress
                shape="circle"
                palette="negative"
            />
        </div>
    </Stack>

    <Mosaic sizing="small" spacing="medium">
        <div>
            <Text is="strong">DEFAULT</Text>
            <Progress />
        </div>

        <div>
            <Text is="strong">ACCENT</Text>
            <Progress palette="accent" />
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
            <Text is="strong">NEGATIVE</Text>
            <Progress palette="negative" />
        </div>
    </Mosaic>
</Stack>
```
