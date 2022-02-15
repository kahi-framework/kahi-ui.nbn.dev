+++
[[properties.TextInput]]
name="is"
description="Changes the HTML tag used for rendering the `TextInput`."
default="input"
types=["input", "textarea"]

[[properties.TextInput]]
name="type"
description="Sets which type of text is being accepted."
default="text"
types=["email", "password", "search", "text", "url"]

[[properties.TextInput]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.TextInput]]
name="radius"
description="Changes the border radius of the `TextInput`."
default="none"
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{RADIUS}"]

[[properties.TextInput]]
name="shape"
description="Changes the shape of the `TextInput`."
types=["circle", "pill", "{VIEWPORT}:{SHAPE}"]

[[properties.TextInput]]
name="sizing"
description="Renders the `TextInput` at a different sizes."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties.TextInput]]
name="variation"
description="Alters the rendered appearance of the `TextInput`."
types=["block", "flush"]

[[properties.TextInput]]
name="disabled"
description="Renders the `TextInput` with `disabled` attribute, and styles the `TextInput` partially transparent."
types=["boolean"]

[[properties.TextInput]]
name="required"
description="Sets if the `TextInput` should be required, which will fail submission on a `<form>` if missing."
types=["boolean"]

[[properties.TextInput]]
name="readonly"
description="Sets if the `TextInput` should be readonly, which will prevent further edits."
types=["boolean"]

[[properties.TextInput]]
name="name"
description="Sets the form name of the `TextInput`."
types=["string"]

[[properties.TextInput]]
name="max"
description="Sets the maximum amount of characters that the end-user **CAN** input, which will fail submission on a `<form>` if the input is invalid."
types=["number", "string"]

[[properties.TextInput]]
name="min"
description="Sets the minimum amount of characters that the end-user **MUST** input, which will fail submission on a `<form>` if the input is invalid."
types=["number", "string"]

[[properties.TextInput]]
name="mask"
description="Enables user input masking dropping characters that aren't validated by the `pattern` property or `mask` event."
types=["string"]

[[properties.TextInput]]
name="pattern"
description="Sets a validation Regular Expression on `TextInput`, which will fail submission on a `<form>` if the input is invalid."
types=["RegExp", "string"]

[[properties.TextInput]]
name="placeholder"
description="Sets the text that is rendered if there is no current value."
types=["string"]

[[properties.TextInput]]
name="value"
description="Sets the text value of the `TextInput`."
types=["string"]

[[properties.TextInput]]
name="characters"
description="Sets the width of the `TextInput` to an approximation of the amount of characters to display."
types=["number", "string"]

[[properties.TextInput]]
name="lines"
description="**(TEXTAREA ONLY)** Sets the height of the `TextInput` to an approximation of the amount of text lines to display."
types=["number", "string"]

[[properties.TextInput]]
name="resizable"
description="**(TEXTAREA ONLY)** Sets if the `TextArea` should be resizable by the end-user."
types=["boolean", "x", "y"]

[[properties.TextInput]]
name="spell_check"
description="**(TEXTAREA ONLY)** Sets if Browser spellcheck should be enabled. Allows the Browser to automatically determine this, if unset."
types=["boolean"]

[[events.TextInput]]
name="change"
description="Fires whenever the `TextInput` loses focus and its value was changed."
types=["InputEvent"]

[[events.TextInput]]
name="input"
description="Fires whenever the `TextInput` has its value changed."
types=["InputEvent"]

[[events.TextInput]]
name="mask"
description="Fires whenever the `TextInput` is receiving input and the `mask` property is set to `true`."
types=["CustomEvent<{value: string}>"]

[[custom_properties.TextInput]]
name="--textinput-palette-background-bold"
description="Controls the default RGB color value used for `background` (block) / `border-color` (outline) / `color` (flush)."
types=["<r,g,b>"]

[[custom_properties.TextInput]]
name="--textinput-palette-foreground-normal"
description="Controls the default RGB color value used for `color`."
types=["<r,g,b>"]

[[custom_properties.TextInput]]
name="--textinput-size-text-size"
description="Controls the default `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties.TextInput]]
name="--textinput-size-text-line-height"
description="Controls the default `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.TextInput]]
name="--textinput-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties.TextInput]]
name="--textinput-border-width"
description="Controls the `border-width` used."
types=["<length>"]

[[custom_properties.TextInput]]
name="--textinput-padding-x"
description="Controls the X-Axis `padding-left` / `padding-right` used."
types=["<length>"]

[[custom_properties.TextInput]]
name="--textinput-padding-y"
description="Controls the Y-Axis `padding-bottom` / `padding-top` used."
types=["<length>"]

[[custom_properties.TextInput]]
name="--textinput-disabled-opacity"
description="Controls the `opacity` used when disabled."
types=["<alpha-value>"]

[[custom_properties.TextInput]]
name="--textinput-placeholder-opacity"
description="Controls the `opacity` used for placeholder text."
types=["<alpha-value>"]

[[custom_properties.TextInput]]
name="--textinput-block-background-opacity"
description="Controls the default `background` opacity used."
types=["<alpha-value>"]

[[custom_properties.TextInput]]
name="--textinput-block-hover-background-opacity"
description="Controls the `background` opacity used when focused."
types=["<alpha-value>"]

[[custom_properties.TextInput]]
name="--textinput-outline-border-opacity"
description="Controls the default `border-color` opacity used."
types=["<alpha-value>"]

[[custom_properties.TextInput]]
name="--textinput-outline-hover-border-opacity"
description="Controls the `border-color` opacity used when hovered."
types=["<alpha-value>"]
+++

# TextInput

> **NOTE**: Introduced feature in `v0.2.7`.

> **WARNING**: Received a breaking change in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`TextInput` is typically used for capturing string input from an end-user for input into forms, XHR requests, etc.

```svelte {title="TextInput Preview" mode="repl"}
<script>
    import {
        Code,
        Form,
        TextInput,
    } from "@kahi-ui/framework";

    let value = "sample@sample.org";
</script>

<Form.Control logic_id="textinput-preview">
    <Form.Label>
        Register E-Mail for Newsletter
    </Form.Label>

    <TextInput bind:value />
    <Form.HelpText>
        Make sure to enter a valid E-Mail Address, e.g.
        <Code>sample@sample.org</Code>
    </Form.HelpText>
</Form.Control>
```

## Imports

```svelte {title="TextInput Imports"}
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>
```

## Input Masking

> **NOTE**: Introduced feature in `v0.4.14`.

> **IMPORTANT**: This feature only runs on Javascript-enabled clients, you **NEED** to **ALWAYS** validate user input on the server.

You can enable input masking (dropping input that doesn't match a constraint) by enabling `mask` and setting the `pattern` properties.

> **NOTE**: The below input is masked to [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) input, e.g. `abcdef1234567890`

```svelte {title="TextInput Input Masking - Pattern" mode="repl"}
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

<TextInput pattern="[0-9a-fA-F]+" mask />
```

Or by implementing custom logic via the `mask` event.

```svelte {title="TextInput Input Masking - Event" mode="repl"}
<script>
    import {TextInput} from "@kahi-ui/framework";

    const CHARACTERS_HEXADECIMAL = new Set([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ]);

    function on_mask(event) {
        for (const character of event.detail.value) {
            if (
                !CHARACTERS_HEXADECIMAL.has(
                    character.toLowerCase()
                )
            ) {
                event.preventDefault();
                return;
            }
        }
    }
</script>

<TextInput mask on:mask={on_mask} />
```

## Palette

You can change the color palette of the `TextInput` via the `palette` property.

```svelte {title="TextInput Palette" mode="repl"}
<script>
    import {
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <TextInput
        span_x="20"
        value="This is a DEFAULT TextInput"
    />

    <TextInput
        palette="accent"
        span_x="20"
        value="This is a ACCENT TextInput"
    />

    <TextInput
        palette="dark"
        span_x="20"
        value="This is a DARK TextInput"
    />

    <TextInput
        palette="light"
        span_x="20"
        value="This is a LIGHT TextInput"
    />

    <TextInput
        palette="alert"
        span_x="20"
        value="This is a ALERT TextInput"
    />

    <TextInput
        palette="affirmative"
        span_x="20"
        value="This is a AFFIRMATIVE TextInput"
    />

    <TextInput
        palette="negative"
        span_x="20"
        value="This is a NEGATIVE TextInput"
    />
</Stack.Container>
```

## Block

You can alter the `TextInput` render as an opaque block via the `variation` property.

```svelte {title="TextInput Block" mode="repl"}
<script>
    import {
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <TextInput
        variation="block"
        span_x="20"
        value="This is a DEFAULT TextInput"
    />

    <TextInput
        variation="block"
        palette="accent"
        span_x="20"
        value="This is a ACCENT TextInput"
    />

    <TextInput
        variation="block"
        palette="dark"
        span_x="20"
        value="This is a DARK TextInput"
    />

    <TextInput
        variation="block"
        palette="light"
        span_x="20"
        value="This is a LIGHT TextInput"
    />

    <TextInput
        variation="block"
        palette="alert"
        span_x="20"
        value="This is a ALERT TextInput"
    />

    <TextInput
        variation="block"
        palette="affirmative"
        span_x="20"
        value="This is a AFFIRMATIVE TextInput"
    />

    <TextInput
        variation="block"
        palette="negative"
        span_x="20"
        value="This is a NEGATIVE TextInput"
    />
</Stack.Container>
```

## Flush

> **NOTE**: Introduced feature in `v0.2.16`.

You can change the appearance of the `TextInput` to be flush with the rest of the Application content via the `variation` property.

```svelte {title="TextInput Flush" mode="repl"}
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

Input some text:
<TextInput
    variation="flush"
    span_x="20"
    value="This is a FLUSH TextInput"
/>
```

## Sizing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `sizing={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the size of the `TextInput` via the `sizing` property.

```svelte {title="TextInput Sizing" mode="repl"}
<script>
    import {
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <TextInput
        span_x="20"
        value="This is a DEFAULT TextInput"
    />

    <TextInput
        sizing="nano"
        span_x="20"
        value="This is a NANO TextInput"
    />

    <TextInput
        sizing="tiny"
        span_x="20"
        value="This is a TINY TextInput"
    />

    <TextInput
        sizing="small"
        span_x="20"
        value="This is a SMALL TextInput"
    />

    <TextInput
        sizing="medium"
        span_x="20"
        value="This is a MEDIUM TextInput"
    />

    <TextInput
        sizing="large"
        span_x="20"
        value="This is a LARGE TextInput"
    />

    <TextInput
        sizing="huge"
        span_x="20"
        value="This is a HUGE TextInput"
    />

    <TextInput
        sizing="massive"
        span_x="20"
        value="This is a MASSIVE TextInput"
    />
</Stack.Container>
```

## Radius

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `radius={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the border radius of the `TextInput` via the `radius` property.

```svelte {title="TextInput Radius" mode="repl"}
<script>
    import {
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <TextInput
        span_x="20"
        value="This is a DEFAULT TextInput"
    />

    <TextInput
        radius="none"
        span_x="20"
        value="This is a NONE TextInput"
    />

    <TextInput
        radius="nano"
        span_x="20"
        value="This is a NANO TextInput"
    />

    <TextInput
        radius="tiny"
        span_x="20"
        value="This is a TINY TextInput"
    />

    <TextInput
        radius="small"
        span_x="20"
        value="This is a SMALL TextInput"
    />

    <TextInput
        radius="medium"
        span_x="20"
        value="This is a MEDIUM TextInput"
    />

    <TextInput
        sizing="large"
        span_x="20"
        value="This is a LARGE TextInput"
    />

    <TextInput
        radius="huge"
        span_x="20"
        value="This is a HUGE TextInput"
    />

    <TextInput
        radius="massive"
        span_x="20"
        value="This is a MASSIVE TextInput"
    />
</Stack.Container>
```

## Shapes

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `shape={["circle", "tablet:pill", "mobile:pill"]}`

You can change the shape of the `TextInput` via the `shape` property.

```svelte {title="TextInput Shapes" mode="repl"}
<script>
    import {
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <TextInput
        span_x="20"
        value="This is a DEFAULT TextInput"
    />

    <TextInput
        shape="nano"
        span_x="20"
        value="This is a CIRCLE TextInput"
    />

    <TextInput
        shape="pill"
        span_x="20"
        value="This is a PILL TextInput"
    />
</Stack.Container>
```

## Types

You can change your input type between `email`, `password`, `search`, `text` **(DEFAULT)**, `url` via the `type` property.

```svelte {title="TextInput Types" mode="repl"}
<script>
    import {
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <TextInput
        type="email"
        span_x="20"
        value="sample@sample.org"
    />

    <TextInput
        type="password"
        span_x="20"
        value="abcdef1002"
    />

    <TextInput
        type="url"
        span_x="20"
        value="https://google.com"
    />
</Stack.Container>
```

## TextArea

You can have the `TextInput` render as a `<textarea>` via the `is` property.

```svelte {title="TextInput TextArea" mode="repl"}
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

<TextInput
    is="textarea"
    value="This is a TextArea TextInput"
/>
```

## Placeholder

You can set the `TextInput` to show placeholder text whenever there is no current value.

```svelte {title="TextInput Placeholder" mode="repl"}
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

<TextInput placeholder="...enter some text" />
```

## Span X + Y

You can set how wide your `TextInput` to an approximation of character width and new lines via the `span_x` and `span_y` properties respectively.

```svelte {title="TextInput Span X + Y" mode="repl"}
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

<TextInput
    value="This input should be about 4 characters wide."
    span_x="4"
/>

<TextInput
    is="textarea"
    value="This input should be about 3 lines tall."
    span_y="3"
/>
```

## Resizable TextArea

You alter the a `<textarea>` based `TextInput` to resizable both axis `true`, horizontally `x`, or vertically `y` via the `resizable` property.

```svelte {title="TextInput Resizable TextArea" mode="repl"}
<script>
    import {TextInput} from "@kahi-ui/framework";
</script>

<TextInput
    is="textarea"
    value="This is a resizable TextArea"
    resizable
/>
```
