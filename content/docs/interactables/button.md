+++
[[properties.Button]]
name="is"
description="Alters the HTML tag rendered to the DOM."
default="button"
types=["a", "button", "input", "label"]

[[properties.Button]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "off", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.Button]]
name="radius"
description="Changes the border radius of the `Button`."
default="none"
types=["none", "nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{RADIUS}"]

[[properties.Button]]
name="shape"
description="Changes the shape of the `Button`."
types=["circle", "pill", "{VIEWPORT}:{SHAPE}"]

[[properties.Button]]
name="sizing"
description="Renders the `Button` at a different sizes."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties.Button]]
name="variation"
description="Changes the how the `Button` is rendered."
types=["clear", "outline", "subtle", "[\"subtle\", \"clear\" | \"outline\"]"]

[[properties.Button]]
name="active"
description="Renders the `Button` with `aria-pressed` attribute, and styles the `Button` as if it where being clicked."
types=["boolean"]

[[properties.Button]]
name="disabled"
description="Renders the `Button` with `disabled` / `aria-disabled` attributes, and styles the `Button` partially transparent."
types=["boolean"]

[[properties.Button]]
name="name"
description="Sets the form name of the `Button` whenever `Button.type` is set."
types=["string"]

[[properties.Button]]
name="type"
description="Renders the `Button` as a `<input />` as a specific form type."
types=["button", "reset", "submit"]

[[properties.Button]]
name="value"
description="Sets the form value of the `Button` whenever `Button.type` is set."
types=["string"]

[[properties.Button]]
name="download"
description="If linking to a downloadable file, this property will be used as the suggested file name."
types=["string"]

[[properties.Button]]
name="href"
description="Renders the `Button` as a `<a role=\"button\">` and links to the specified `href` property."
types=["string"]

[[properties.Button]]
name="rel"
description="Sets how the Anchor relates to the current page, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) for more information."
types=["string"]

[[properties.Button]]
name="target"
description="Sets the target of the Anchor being navigated, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) for more information."
types=["string"]

[[properties.Button]]
name="for"
description="Renders the `Button` as a `<label role=\"button\">` which targets the element ID set to the `for` property."
types=["string"]

[[slots.Button]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Button]]
name="--button-palette-background-light"
description="Controls the default RGB color value used for `background` (block)."
types=["<r,g,b>"]

[[custom_properties.Button]]
name="--button-palette-background-normal"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties.Button]]
name="--button-palette-background-bold"
description="Controls the default RGB color value used for `background` / `border-color` (outline) / `color` (clear)."
types=["<r,g,b>"]

[[custom_properties.Button]]
name="--button-palette-foreground-normal"
description="Controls the default RGB color value used for `color`."
types=["<r,g,b>"]

[[custom_properties.Button]]
name="--button-size-text-size"
description="Controls the default `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties.Button]]
name="--button-size-text-line-height"
description="Controls the default `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Button]]
name="--button-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties.Button]]
name="--button-border-width"
description="Controls the `border-width` used."
types=["<length>"]

[[custom_properties.Button]]
name="--button-font-weight"
description="Controls the `font-weight` used."
types=["<normal>", "<bold>", "<bolder>", "<lighter>", "<number>"]

[[custom_properties.Button]]
name="--button-gap"
description="Controls the spacing gap between child elements, e.g. icons."
types=["<length>"]

[[custom_properties.Button]]
name="--button-padding-x"
description="Controls the X-Axis `padding-left` / `padding-right` used."
types=["<length>"]

[[custom_properties.Button]]
name="--button-padding-y"
description="Controls the Y-Axis `padding-bottom` / `padding-top` used."
types=["<length>"]

[[custom_properties.Button]]
name="--button-active-scale"
description="Controls the `transform: scale` used when clicked."
types=["<number>"]

[[custom_properties.Button]]
name="--button-disabled-opacity"
description="Controls the `opacity` used when disabled."
types=["<alpha-value>"]

[[custom_properties.Button]]
name="--button-clear-active-background-opacity"
description="Controls the `background` opacity used when clicked."
types=["<alpha-value>"]

[[custom_properties.Button]]
name="--button-clear-focus-background-opacity"
description="Controls the `background` opacity used when focused."
types=["<alpha-value>"]

[[custom_properties.Button]]
name="--button-outline-focus-background-opacity"
description="Controls the `background` opacity used when focused."
types=["<alpha-value>"]

[[custom_properties.Button]]
name="--button-outline-focus-border-opacity"
description="Controls the `border-color` opacity used when focused."
types=["<alpha-value>"]
+++

# Button

> **NOTE**: Introduced feature in `v0.2.0`.

`Button` is used to usually trigger an action in the Web Application, such as submitting forms or opening an Overlay.

```svelte {title="Button Preview" mode="repl"}
<script>
    import {Button} from "@kahi-ui/framework";
</script>

<Button palette="accent">Click Me!</Button>
```

## Imports

```svelte {title="Button Imports"}
<script>
    import {Button} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of the `Button` via the `palette` property.

```svelte {title="Button Palette" mode="repl"}
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Button>This is a DEFAULT Button!</Button>

    <Button palette="accent">
        This is a ACCENT Button!
    </Button>

    <Button palette="neutral">
        This is a NEUTRAL Button!
    </Button>

    <Button palette="light">
        This is a LIGHT Button!
    </Button>

    <Button palette="dark">
        This is a DARK Button!
    </Button>

    <Button palette="alert">
        This is a ALERT Button!
    </Button>

    <Button palette="affirmative">
        This is a AFFIRMATIVE Button!
    </Button>

    <Button palette="informative">
        This is a INFORMATIVE Button!
    </Button>

    <Button palette="negative">
        This is a NEGATIVE Button!
    </Button>
</Stack.Container>
```

## Clear

`Button` components have a special variation that renders as text with no background, that lightly fills in when clicked.

```svelte {title="Button Clear" mode="repl"}
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Button variation="clear">
        This is a DEFAULT Button!
    </Button>

    <Button variation="clear" palette="accent">
        This is a ACCENT Button!
    </Button>

    <Button variation="clear" palette="neutral">
        This is a NEUTRAL Button!
    </Button>

    <Button variation="clear" palette="light">
        This is a LIGHT Button!
    </Button>

    <Button variation="clear" palette="dark">
        This is a DARK Button!
    </Button>

    <Button variation="clear" palette="alert">
        This is a ALERT Button!
    </Button>

    <Button variation="clear" palette="affirmative">
        This is a AFFIRMATIVE Button!
    </Button>

    <Button variation="clear" palette="informative">
        This is a INFORMATIVE Button!
    </Button>

    <Button variation="clear" palette="negative">
        This is a NEGATIVE Button!
    </Button>
</Stack.Container>
```

## Outline

`Button` components have a special variation that renders them as text with an outline, the fills in when clicked.

```svelte {title="Button Outline" mode="repl"}
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Button variation="outline">
        This is a DEFAULT Button!
    </Button>

    <Button variation="outline" palette="accent">
        This is a ACCENT Button!
    </Button>

    <Button variation="outline" palette="neutral">
        This is a NEUTRAL Button!
    </Button>

    <Button variation="outline" palette="light">
        This is a LIGHT Button!
    </Button>

    <Button variation="outline" palette="dark">
        This is a DARK Button!
    </Button>

    <Button variation="outline" palette="alert">
        This is a ALERT Button!
    </Button>

    <Button variation="outline" palette="affirmative">
        This is a AFFIRMATIVE Button!
    </Button>

    <Button variation="outline" palette="informative">
        This is a INFORMATIVE Button!
    </Button>

    <Button variation="outline" palette="negative">
        This is a NEGATIVE Button!
    </Button>
</Stack.Container>
```

## Subtle

> **NOTE**: Introduced feature in `v0.5.1`.

You can alter the `Button` Component to use less intense / remove "attention grabbing" animations via the `variation` property.

```svelte {title="Button Subtle" mode="repl"}
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Button palette="inverse" variation="subtle">
        This is a SUBTLE BLOCK Button!
    </Button>

    <Button
        palette="inverse"
        variation={["subtle", "clear"]}
    >
        This is a CLEAR OUTLINE Button!
    </Button>

    <Button
        palette="inverse"
        variation={["subtle", "outline"]}
    >
        This is a SUBTLE OUTLINE Button!
    </Button>
</Stack.Container>
```

## States

You can control the state of the `Button` via the `active` and `disabled` properties.

```svelte {title="Button States" mode="repl"}
<script>
    import {
        Button,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Text is="strong">DEFAULT</Text>
<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Button>DEFAULT</Button>
    <Button disabled>DISABLED INACTIVE</Button>
    <Button active>ACTIVE</Button>
    <Button active disabled>DISABLED ACTIVE</Button>
</Stack.Container>

<Text is="strong">OUTLINE</Text>
<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Button variation="outline">DEFAULT</Button>
    <Button variation="outline" disabled>
        DISABLED INACTIVE
    </Button>

    <Button variation="outline" active>ACTIVE</Button>
    <Button variation="outline" active disabled>
        DISABLED ACTIVE
    </Button>
</Stack.Container>

<Text is="strong">CLEAR</Text>
<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Button variation="clear">DEFAULT</Button>
    <Button variation="clear" disabled>
        DISABLED INACTIVE
    </Button>
    <Button variation="clear" active>ACTIVE</Button>
    <Button variation="clear" active disabled>
        DISABLED ACTIVE
    </Button>
</Stack.Container>
```

## Sizing

> **WARNING**: This feature was renamed from `size` to `sizing` in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `sizing={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the size of the `Button` via the `sizing` property.

```svelte {title="Button Sizing" mode="repl"}
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <Button>This is a DEFAULT Button!</Button>

    <Button sizing="nano">
        This is a NANO Button!
    </Button>

    <Button sizing="tiny">
        This is a TINY Button!
    </Button>

    <Button sizing="small">
        This is a SMALL Button!
    </Button>

    <Button sizing="medium">
        This is a MEDIUM Button!
    </Button>

    <Button sizing="large">
        This is a LARGE Button!
    </Button>

    <Button sizing="huge">
        This is a HUGE Button!
    </Button>

    <Button sizing="massive">
        This is a MASSIVE Button!
    </Button>
</Stack.Container>
```

## Radius

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `radius={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the border radius of the `Button` via the `radius` property.

```svelte {title="Button Radius" mode="repl"}
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <Button>This is a DEFAULT Button!</Button>

    <Button radius="none">
        This is a NONE Button!
    </Button>

    <Button radius="nano">
        This is a NANO Button!
    </Button>

    <Button radius="tiny">
        This is a TINY Button!
    </Button>

    <Button radius="small">
        This is a SMALL Button!
    </Button>

    <Button radius="medium">
        This is a MEDIUM Button!
    </Button>

    <Button radius="large">
        This is a LARGE Button!
    </Button>

    <Button radius="huge">
        This is a HUGE Button!
    </Button>

    <Button radius="massive">
        This is a MASSIVE Button!
    </Button>
</Stack.Container>
```

## Shapes

> **NOTE**: Introduced feature in `v0.6.0`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `shape={["circle", "tablet:pill", "mobile:pill"]}`

You can change the shape of the `Button` via the `shape` property.

```svelte {title="Button Shapes" mode="repl"}
<script>
    import {Button, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    alignment_y="top"
    spacing="medium"
    variation="wrap"
>
    <Button>This is a DEFAULT Button!</Button>

    <Button shape="circle">
        This is a CIRCLE Button!
    </Button>

    <Button shape="pill">
        This is a PILL Button!
    </Button>
</Stack.Container>
```

## Elements

> **WARNING**: This feature was updated to require explicit `is` property in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

You can alter the HTML element tag rendered to DOM via the `is` property to render things like links and form buttons.

```svelte {title="Button Elements" mode="repl"}
<script>
    import {
        Button,
        Check,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Check id="button-types-label" />

<Stack.Container
    alignment_y="top"
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Button>This is a DEFAULT Button!</Button>

    <Button
        is="a"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
    >
        This is an ANCHOR Button!
    </Button>

    <Button is="label" for="button-types-label">
        This is a LABEL Button!
    </Button>

    <Button
        is="input"
        value="This is an INPUT Button!"
    />

    <Button
        is="input"
        type="submit"
        value="This is a SUBMIT Button!"
    />

    <Button
        is="input"
        type="reset"
        value="This is a RESET Button!"
    />
</Stack.Container>
```
