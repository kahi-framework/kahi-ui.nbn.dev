+++
[[properties.NumberInput]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.NumberInput]]
name="sizing"
description="Renders the `NumberInput` at a different sizes."
types=["tiny", "small", "medium", "large", "huge"]

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
name="characters"
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

> **NOTE**: New since `v0.4.14`.

> **IMPORTANT**: Input masking only runs on the Browser, you need to **ALWAYS** validate user-generated input on the server.

`NumberInput` is a subset of [`TextInput`](./textinput.md), which only accepts numbers and masks user input accordingly.

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

## Palette

You can change the color palette of the `NumberInput` via the `palette` property.

```svelte {title="NumberInput Palette" mode="repl"}
<script>
    import {
        Stack,
        NumberInput,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <NumberInput
        characters="20"
        placeholder="This is a DEFAULT NumberInput"
    />

    <NumberInput
        palette="accent"
        characters="20"
        placeholder="This is a ACCENT NumberInput"
    />

    <NumberInput
        palette="dark"
        characters="20"
        placeholder="This is a DARK NumberInput"
    />

    <NumberInput
        palette="light"
        characters="20"
        placeholder="This is a LIGHT NumberInput"
    />

    <NumberInput
        palette="alert"
        characters="20"
        placeholder="This is a ALERT NumberInput"
    />

    <NumberInput
        palette="affirmative"
        characters="20"
        placeholder="This is a AFFIRMATIVE NumberInput"
    />

    <NumberInput
        palette="negative"
        characters="20"
        placeholder="This is a NEGATIVE NumberInput"
    />
</Stack>
```

## Sizing

> **DEPRECATED**: This property will be renamed `size` -> `sizing` in `v0.6.0`.

You can change the size of the `NumberInput` via the `sizing` property.

```svelte {title="NumberInput Sizing" mode="repl"}
<script>
    import {
        Stack,
        NumberInput,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <NumberInput
        characters="20"
        placeholder="This is a DEFAULT NumberInput"
    />

    <NumberInput
        sizing="tiny"
        characters="20"
        placeholder="This is a TINY NumberInput"
    />

    <NumberInput
        sizing="small"
        characters="20"
        placeholder="This is a SMALL NumberInput"
    />

    <NumberInput
        sizing="medium"
        characters="20"
        placeholder="This is a MEDIUM NumberInput"
    />

    <NumberInput
        sizing="large"
        characters="20"
        placeholder="This is a LARGE NumberInput"
    />

    <NumberInput
        sizing="huge"
        characters="20"
        placeholder="This is a HUGE NumberInput"
    />
</Stack>
```

## Block

You can alter the `NumberInput` render as an opaque block via the `variation` property.

```svelte {title="NumberInput Block" mode="repl"}
<script>
    import {
        Stack,
        NumberInput,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <NumberInput
        variation="block"
        characters="20"
        placeholder="This is a DEFAULT NumberInput"
    />

    <NumberInput
        variation="block"
        palette="accent"
        characters="20"
        placeholder="This is a ACCENT NumberInput"
    />

    <NumberInput
        variation="block"
        palette="dark"
        characters="20"
        placeholder="This is a DARK NumberInput"
    />

    <NumberInput
        variation="block"
        palette="light"
        characters="20"
        placeholder="This is a LIGHT NumberInput"
    />

    <NumberInput
        variation="block"
        palette="alert"
        characters="20"
        placeholder="This is a ALERT NumberInput"
    />

    <NumberInput
        variation="block"
        palette="affirmative"
        characters="20"
        placeholder="This is a AFFIRMATIVE NumberInput"
    />

    <NumberInput
        variation="block"
        palette="negative"
        characters="20"
        placeholder="This is a NEGATIVE NumberInput"
    />
</Stack>
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
    characters="20"
    placeholder="This is a FLUSH NumberInput"
/>
```

## Placeholder

You can set the `NumberInput` to show placeholder text whenever there is no current value.

```svelte {title="NumberInput Placeholder" mode="repl"}
<script>
    import {NumberInput} from "@kahi-ui/framework";
</script>

<NumberInput placeholder="...enter a number" />
```

## Field Character Size

You can set how wide your `NumberInput` to an approximation of character width via the `characters` property.

```svelte {title="NumberInput Field Character Size" mode="repl"}
<script>
    import {NumberInput} from "@kahi-ui/framework";
</script>

<NumberInput characters="2" />
```
