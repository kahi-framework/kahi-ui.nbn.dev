+++
[[properties.Radio]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.Radio]]
name="sizing"
description="Renders the `Radio` at a different sizes."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties.Radio]]
name="variation"
description="Alters the appearance of the `Radio`."
types=["flush"]

[[properties.Radio]]
name="active"
description="Renders the `Radio` with `aria-pressed` attribute, and styles the `Radio` as if it where being clicked."
types=["boolean"]

[[properties.Radio]]
name="disabled"
description="Renders the `Radio` with `disabled` attribute, and styles the `Radio` partially transparent."
types=["boolean"]

[[properties.Radio]]
name="name"
description="Sets the form name of the `Radio`."
types=["string"]

[[properties.Radio]]
name="state"
description="Sets the checked state of the `Radio`."
types=["boolean"]

[[properties.Radio]]
name="value"
description="Sets the value sent whenever the parent `<form>` is submitted."
types=["string"]

[[events.Radio]]
name="change"
description="Fires whenever the `Radio` has its value changed."
types=["InputEvent"]

[[events.Radio]]
name="input"
description="Fires whenever the `Radio` has its value changed."
types=["InputEvent"]

[[slots.Radio]]
name="default"
description="Default unnamed slot. Renders the `Radio` inside a `<label>`, alongside the sibling slot content."
types=["{}"]

[[custom_properties.Radio]]
name="--radio-palette-background-bold"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties.Radio]]
name="--radio-palette-foreground-normal"
description="Controls the default RGB color value used for `color`."
types=["<r,g,b>"]

[[custom_properties.Radio]]
name="--radio-size-text-size"
description="Controls the default font size used for as relative base for `padding` and dot `font-size`."
types=["<length>", "<percentage>"]

[[custom_properties.Radio]]
name="--radio-size-text-line-height"
description="Controls the default `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Radio]]
name="--radio-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties.Radio]]
name="--radio-padding"
description="Controls the `padding` used."
types=["<length>"]

[[custom_properties.Radio]]
name="--radio-active-scale"
description="Controls the `transform: scale` used when clicked."
types=["<number>"]

[[custom_properties.Radio]]
name="--radio-disabled-opacity"
description="Controls the `opacity` used when disabled."
types=["<alpha-value>"]

[[custom_properties.Radio]]
name="--radio-dot-checked-clip-path"
description="Controls the `clip-path: inset` used when checked."
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage> round <length/percentage>"]

[[custom_properties.Radio]]
name="--radio-dot-unchecked-clip-path"
description="Controls the `clip-path: inset` used when unchecked."
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage> round <length/percentage>"]

[[custom_properties.Radio]]
name="--radio-dot-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties.Radio]]
name="--radio-block-background-opacity"
description="Controls the default `background` opacity used."
types=["<alpha-value>"]

[[custom_properties.Radio]]
name="--radio-block-checked-active-background-opacity"
description="Controls the `background` opacity used when checked and clicked."
types=["<alpha-value>"]

[[custom_properties.Radio]]
name="--radio-block-unchecked-active-background-opacity"
description="Controls the `background` opacity used when unchecked and clicked."
types=["<alpha-value>"]

[[custom_properties.Radio]]
name="--radio-flush-checked-active-color-opacity"
description="Controls the `color` opacity used when checked and clicked."
types=["<alpha-value>"]

[[custom_properties.Radio]]
name="--radio-flush-unchecked-active-color-opacity"
description="Controls the `color` opacity used when unchecked and clicked."
types=["<alpha-value>"]
+++

# Radio

> **NOTE**: New since `v0.2.7`.

> **WARNING**: Received a breaking change in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Radio` is typically used to present a set of mutually-exclusive options to the end-user, which they can then choose from.

```svelte {title="Radio Preview" mode="repl"}
<script>
    import {
        Form,
        Radio,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    let logic_state = "vanilla";
</script>

<Text is="strong">
    Select an Ice Cream Flavor
    <Text is="sup">{logic_state}</Text>
</Text>

<Stack.Container spacing="small" margin_top="small">
    <Form.Group
        logic_name="radio-preview"
        bind:logic_state
    >
        <Radio
            id="radio-preview-bubblegum"
            palette="accent"
            size="tiny"
            value="bubblegum"
        >
            Bubblegum
        </Radio>

        <Radio
            id="radio-preview-chocolate"
            palette="accent"
            size="tiny"
            value="chocolate"
        >
            Chocolate
        </Radio>

        <Radio
            id="radio-preview-vanilla"
            palette="accent"
            size="tiny"
            value="vanilla"
        >
            Vanilla
        </Radio>
    </Form.Group>
</Stack.Container>
```

## Imports

```svelte {title="Radio Imports"}
<script>
    import {Radio} from "@kahi-ui/framework";
</script>
```

## States

You can control the state of the `Radio` via the `active`, `disabled`, and `state` properties.

```svelte {title="Radio States" mode="repl"}
<script>
    import {
        Radio,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <br />
        <Radio />
    </div>

    <div>
        <Text is="strong">STATE</Text>
        <br />
        <Radio state />
    </div>

    <div>
        <Text is="strong">ACTIVE NO-STATE</Text>
        <br />
        <Radio active />
    </div>

    <div>
        <Text is="strong">ACTIVE STATE</Text>
        <br />
        <Radio active state />
    </div>

    <div>
        <Text is="strong">DISABLED NO-STATE</Text>
        <br />
        <Radio disabled />
    </div>

    <div>
        <Text is="strong">DISABLED STATE</Text>
        <br />
        <Radio disabled state />
    </div>
</Stack>
```

## Palette

You can change the color palette of the `Radio` via the `palette` property.

```svelte {title="Radio Palette" mode="repl"}
<script>
    import {
        Form,
        Radio,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Form.Group logic_name="radio-palette">
    <Stack.Container
        orientation="horizontal"
        spacing="medium"
        variation="wrap"
    >
        <div>
            <Text is="strong">DEFAULT</Text>
            <br />
            <Radio />
        </div>

        <div>
            <Text is="strong">ACCENT</Text>
            <br />
            <Radio palette="accent" />
        </div>

        <div>
            <Text is="strong">NEUTRAL</Text>
            <br />
            <Radio palette="neutral" />
        </div>

        <div>
            <Text is="strong">DARK</Text>
            <br />
            <Radio palette="dark" />
        </div>

        <div>
            <Text is="strong">LIGHT</Text>
            <br />
            <Radio palette="light" />
        </div>

        <div>
            <Text is="strong">ALERT</Text>
            <br />
            <Radio palette="alert" />
        </div>

        <div>
            <Text is="strong">AFFIRMATIVE</Text>
            <br />
            <Radio palette="affirmative" />
        </div>

        <div>
            <Text is="strong">INFORMATIVE</Text>
            <br />
            <Radio palette="informative" />
        </div>

        <div>
            <Text is="strong">NEGATIVE</Text>
            <br />
            <Radio palette="negative" />
        </div>
    </Stack.Container>
</Form.Group>
```

## Sizing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `sizing={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the size of the `Radio` via the `sizing` property.

```svelte {title="Radio Sizing" mode="repl"}
<script>
    import {
        Form,
        Radio,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Form.Group logic_name="radio-sizing">
    <Stack.Container
        orientation="horizontal"
        spacing="medium"
        variation="wrap"
    >
        <div>
            <Text is="strong">DEFAULT</Text>
            <br />
            <Radio />
        </div>

        <div>
            <Text is="strong">NANO</Text>
            <br />
            <Radio sizing="nano" />
        </div>

        <div>
            <Text is="strong">TINY</Text>
            <br />
            <Radio sizing="tiny" />
        </div>

        <div>
            <Text is="strong">SMALL</Text>
            <br />
            <Radio sizing="small" />
        </div>

        <div>
            <Text is="strong">MEDIUM</Text>
            <br />
            <Radio sizing="medium" />
        </div>

        <div>
            <Text is="strong">LARGE</Text>
            <br />
            <Radio sizing="large" />
        </div>

        <div>
            <Text is="strong">HUGE</Text>
            <br />
            <Radio sizing="huge" />
        </div>

        <div>
            <Text is="strong">MASSIVE</Text>
            <br />
            <Radio sizing="massive" />
        </div>
    </Stack.Container>
</Form.Group>
```

## Flush

> **NOTE**: New since `v0.2.13`.

You can change the appearance of the `Radio` to be flush with the rest of the Application content via the `variation` property.

```svelte {title="Radio Flush" mode="repl"}
<script>
    import {
        Form,
        Menu,
        Radio,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Menu.Container>
    <Menu.Heading>Sort By</Menu.Heading>

    <Form.Group
        logic_name="radio-flush"
        logic_state="ascending"
    >
        <Menu.Label for="radio-flush-ascending">
            Ascending
            <Spacer />
            <Radio
                value="ascending"
                palette="accent"
                variation="flush"
            />
        </Menu.Label>

        <Menu.Label for="radio-flush-decending">
            Decending
            <Spacer />
            <Radio
                value="decending"
                palette="accent"
                variation="flush"
            />
        </Menu.Label>
    </Form.Group>
</Menu.Container>
```
