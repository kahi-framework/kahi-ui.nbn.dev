+++
[[properties.NumberInput]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "off", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.NumberInput]]
name="radius"
description="Changes the border radius of the `NumberInput`."
default="none"
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{RADIUS}"]

[[properties.NumberInput]]
name="shape"
description="Changes the shape of the `NumberInput`."
types=["circle", "pill", "{VIEWPORT}:{SHAPE}"]

[[properties.NumberInput]]
name="sizing"
description="Renders the `NumberInput` at a different sizes."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties.NumberInput]]
name="variation"
description="Alters the rendered appearance of the `NumberInput`."
types=["block", "flush"]

[[properties.NumberInput]]
name="disabled"
description="Renders the `NumberInput` with `disabled` attribute, and styles the `NumberInput` partially transparent."
types=["boolean"]

[[properties.NumberInput]]
name="required"
description="Sets if the `NumberInput` should be required, which will fail submission on a `<form>` if missing."
types=["boolean"]

[[properties.NumberInput]]
name="readonly"
description="Sets if the `NumberInput` should be readonly, which will prevent further edits."
types=["boolean"]

[[properties.NumberInput]]
name="name"
description="Sets the form name of the `NumberInput`."
types=["string"]

[[properties.NumberInput]]
name="placeholder"
description="Sets the text that is rendered if there is no current value."
types=["string"]

[[properties.NumberInput]]
name="value"
description="Sets the text value of the `NumberInput`."
types=["number"]

[[properties.NumberInput]]
name="max"
description="Sets the maximum amount of characters that the end-user **CAN** input, which will fail submission on a `<form>` if the input is invalid."
types=["number", "string"]

[[properties.NumberInput]]
name="min"
description="Sets the minimum amount of characters that the end-user **MUST** input, which will fail submission on a `<form>` if the input is invalid."
types=["number", "string"]

[[properties.NumberInput]]
name="span_x="
description="Sets the width of the `NumberInput` to an approximation of the amount of characters to display."
types=["number", "string"]

[[events.NumberInput]]
name="change"
description="Fires whenever the `NumberInput` loses focus and its value was changed."
types=["InputEvent"]

[[events.NumberInput]]
name="input"
description="Fires whenever the `NumberInput` has its value changed."
types=["InputEvent"]
+++

# NumberInput

> **NOTE**: Introduced feature in `v0.4.14`.

> **IMPORTANT**: This feature only runs on Javascript-enabled clients, you **NEED** to **ALWAYS** validate user input on the server.

`NumberInput` is a subset of [`NumberInput`](./textinput.md), which only accepts numbers and masks user input accordingly.

```svelte {title="NumberInput Preview" mode="repl"}
<script>
    import {NumberInput} from "@kahi-ui/framework";

    let value = 42;
</script>

<NumberInput bind:value />
```

## Imports

```svelte {title="NumberInput Imports"}
<script>
    import {NumberInput} from "@kahi-ui/framework";
</script>
```

## Maximum + Minimum

> **NOTE**: Introduced feature in `v0.6.0`.

You can have the `NumberInput` use disallow typing in numbers not within the range of the `max` and `min` properties.

```svelte {title="NumberInput Maximum + Minimum" mode="repl"}
<script>
    import {NumberInput} from "@kahi-ui/framework";

    let value = 42;
</script>

<NumberInput max={84} min={-84} bind:value />
```

## Palette

You can change the color palette of the `NumberInput` via the `palette` property.

```svelte {title="NumberInput Palette" mode="repl"}
<script>
    import {
        NumberInput,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <NumberInput
        span_x="20"
        placeholder="This is a DEFAULT NumberInput"
    />

    <NumberInput
        palette="accent"
        span_x="20"
        placeholder="This is a ACCENT NumberInput"
    />

    <NumberInput
        palette="neutral"
        span_x="20"
        placeholder="This is a NEUTRAL NumberInput"
    />

    <NumberInput
        palette="dark"
        span_x="20"
        placeholder="This is a DARK NumberInput"
    />

    <NumberInput
        palette="light"
        span_x="20"
        placeholder="This is a LIGHT NumberInput"
    />

    <NumberInput
        palette="alert"
        span_x="20"
        placeholder="This is a ALERT NumberInput"
    />

    <NumberInput
        palette="affirmative"
        span_x="20"
        placeholder="This is a AFFIRMATIVE NumberInput"
    />

    <NumberInput
        palette="informative"
        span_x="20"
        placeholder="This is a INFORMATIVE NumberInput"
    />

    <NumberInput
        palette="negative"
        span_x="20"
        placeholder="This is a NEGATIVE NumberInput"
    />
</Stack.Container>
```

## Block

You can alter the `NumberInput` render as an opaque block via the `variation` property.

```svelte {title="NumberInput Block" mode="repl"}
<script>
    import {
        NumberInput,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <NumberInput
        variation="block"
        span_x="20"
        placeholder="This is a DEFAULT NumberInput"
    />

    <NumberInput
        variation="block"
        palette="accent"
        span_x="20"
        placeholder="This is a ACCENT NumberInput"
    />

    <NumberInput
        variation="block"
        palette="dark"
        span_x="20"
        placeholder="This is a DARK NumberInput"
    />

    <NumberInput
        variation="block"
        palette="light"
        span_x="20"
        placeholder="This is a LIGHT NumberInput"
    />

    <NumberInput
        variation="block"
        palette="alert"
        span_x="20"
        placeholder="This is a ALERT NumberInput"
    />

    <NumberInput
        variation="block"
        palette="affirmative"
        span_x="20"
        placeholder="This is a AFFIRMATIVE NumberInput"
    />

    <NumberInput
        variation="block"
        palette="negative"
        span_x="20"
        placeholder="This is a NEGATIVE NumberInput"
    />
</Stack.Container>
```

## Flush

You can change the appearance of the `NumberInput` to be flush with the rest of the Application content via the `variation` property.

```svelte {title="NumberInput Flush" mode="repl"}
<script>
    import {NumberInput} from "@kahi-ui/framework";
</script>

Input some text:
<NumberInput
    variation="flush"
    span_x="20"
    placeholder="This is a FLUSH NumberInput"
/>
```

## Sizing

> **WARNING**: This feature was renamed from `size` to `sizing` in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `sizing={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the size of the `NumberInput` via the `sizing` property.

```svelte {title="NumberInput Sizing" mode="repl"}
<script>
    import {
        NumberInput,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <NumberInput
        span_x="20"
        placeholder="This is a DEFAULT NumberInput"
    />

    <NumberInput
        sizing="nano"
        span_x="20"
        placeholder="This is a NANO NumberInput"
    />

    <NumberInput
        sizing="tiny"
        span_x="20"
        placeholder="This is a TINY NumberInput"
    />

    <NumberInput
        sizing="small"
        span_x="20"
        placeholder="This is a SMALL NumberInput"
    />

    <NumberInput
        sizing="medium"
        span_x="20"
        placeholder="This is a MEDIUM NumberInput"
    />

    <NumberInput
        sizing="large"
        span_x="20"
        placeholder="This is a LARGE NumberInput"
    />

    <NumberInput
        sizing="huge"
        span_x="20"
        placeholder="This is a HUGE NumberInput"
    />

    <NumberInput
        sizing="massive"
        span_x="20"
        placeholder="This is a MASSIVE NumberInput"
    />
</Stack.Container>
```

## Radius

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `radius={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the border radius of the `NumberInput` via the `radius` property.

```svelte {title="NumberInput Radius" mode="repl"}
<script>
    import {
        NumberInput,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <NumberInput
        span_x="20"
        placeholder="This is a DEFAULT NumberInput"
    />

    <NumberInput
        radius="none"
        span_x="20"
        placeholder="This is a NONE NumberInput"
    />

    <NumberInput
        radius="nano"
        span_x="20"
        placeholder="This is a NANO NumberInput"
    />

    <NumberInput
        radius="tiny"
        span_x="20"
        placeholder="This is a TINY NumberInput"
    />

    <NumberInput
        radius="small"
        span_x="20"
        placeholder="This is a SMALL NumberInput"
    />

    <NumberInput
        sizing="medium"
        span_x="20"
        placeholder="This is a MEDIUM NumberInput"
    />

    <NumberInput
        radius="large"
        span_x="20"
        placeholder="This is a LARGE NumberInput"
    />

    <NumberInput
        radius="huge"
        span_x="20"
        placeholder="This is a HUGE NumberInput"
    />

    <NumberInput
        radius="massive"
        span_x="20"
        placeholder="This is a MASSIVE NumberInput"
    />
</Stack.Container>
```

## Shapes

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `shape={["circle", "tablet:pill", "mobile:pill"]}`

You can change the shape of the `NumberInput` via the `shape` property.

```svelte {title="NumberInput Shapes" mode="repl"}
<script>
    import {
        NumberInput,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <NumberInput
        span_x="20"
        placeholder="This is a DEFAULT NumberInput"
    />

    <NumberInput
        shape="circle"
        span_x="20"
        placeholder="This is a CIRCLE NumberInput"
    />

    <NumberInput
        shape="pill"
        span_x="20"
        placeholder="This is a PILL NumberInput"
    />
</Stack.Container>
```

## Alignment

> **WARNING**: This feature was renamed from `align` to `alignment_x` in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

...

## Placeholder

You can set the `NumberInput` to show placeholder text whenever there is no current value.

```svelte {title="NumberInput Placeholder" mode="repl"}
<script>
    import {NumberInput} from "@kahi-ui/framework";
</script>

<NumberInput placeholder="...enter a number" />
```

## Span X

> **WARNING**: This feature was renamed from `characters` to `span_x` in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

You can set how wide your `NumberInput` to an approximation of character width via the `span_x` property.

```svelte {title="NumberInput Span X" mode="repl"}
<script>
    import {NumberInput} from "@kahi-ui/framework";
</script>

<NumberInput span_x="2" />
```
