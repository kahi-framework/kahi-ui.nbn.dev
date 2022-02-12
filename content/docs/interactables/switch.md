+++
[[properties.Check]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.Check]]
name="sizing"
description="Renders the `Check` at a different sizes."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties.Check]]
name="variation"
description="Alters the appearance of the `Check`."
types=["flush"]

[[properties.Check]]
name="active"
description="Renders the `Check` with `aria-pressed` attribute, and styles the `Check` as if it where being clicked."
types=["boolean"]

[[properties.Check]]
name="disabled"
description="Renders the `Check` with `disabled` attribute, and styles the `Check` partially transparent."
types=["boolean"]

[[properties.Check]]
name="name"
description="Sets the form name of the `Check`."
types=["string"]

[[properties.Check]]
name="state"
description="Sets the checked state of the `Check`."
types=["boolean"]

[[properties.Check]]
name="value"
description="Sets the value sent whenever the parent `<form>` is submitted."
types=["string"]

[[events.Check]]
name="change"
description="Fires whenever the `Check` has its value changed."
types=["InputEvent"]

[[events.Check]]
name="input"
description="Fires whenever the `Check` has its value changed."
types=["InputEvent"]

[[custom_properties.Switch]]
name="--switch-palette-background-bold"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties.Switch]]
name="--switch-palette-foreground-normal"
description="Controls the default RGB color value used for `color`."
types=["<r,g,b>"]

[[custom_properties.Switch]]
name="--switch-size-text-size"
description="Controls the default font size used for as relative base for `padding` and dot `font-size`."
types=["<length>", "<percentage>"]

[[custom_properties.Switch]]
name="--switch-size-text-line-height"
description="Controls the default `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties.Switch]]
name="--switch-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties.Switch]]
name="--switch-padding"
description="Controls the `padding` used."
types=["<length>"]

[[custom_properties.Switch]]
name="--switch-active-scale"
description="Controls the `transform: scale` used when clicked."
types=["<number>"]

[[custom_properties.Switch]]
name="--switch-disabled-opacity"
description="Controls the `opacity` used when disabled."
types=["<alpha-value>"]

[[custom_properties.Switch]]
name="--switch-dot-active-clip-path"
description="Controls the `clip-path: inset` used when clicked."
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage> round <length/percentage>"]

[[custom_properties.Switch]]
name="--switch-dot-checked-clip-path"
description="Controls the `clip-path: inset` used when checked."
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage> round <length/percentage>"]

[[custom_properties.Switch]]
name="--switch-dot-unchecked-clip-path"
description="Controls the `clip-path: inset` used when unchecked."
types=["<length-percentage> <length-percentage> <length-percentage> <length-percentage> round <length/percentage>"]

[[custom_properties.Switch]]
name="--switch-dot-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties.Switch]]
name="--switch-block-background-opacity"
description="Controls the default `background` opacity used."
types=["<alpha-value>"]

[[custom_properties.Switch]]
name="--switch-block-checked-active-background-opacity"
description="Controls the `background` opacity used when checked and clicked."
types=["<alpha-value>"]

[[custom_properties.Switch]]
name="--switch-block-unchecked-active-background-opacity"
description="Controls the `background` opacity used when unchecked and clicked."
types=["<alpha-value>"]
+++

# Switch

> **NOTE**: New since `v0.2.7`.

> **WARNING**: Received a breaking change in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Switch` is typically used to present to the end-user features, settings, and other toggles that they can turn on / off.

```svelte {title="Switch Preview" mode="repl"}
<script>
    import {Form, Switch} from "@kahi-ui/framework";
</script>

<Form.Label for="switch-preview">
    Remember Login?
    <Switch palette="affirmative" />
</Form.Label>
```

## Imports

```svelte {title="Switch Imports"}
<script>
    import {Switch} from "@kahi-ui/framework";
</script>
```

## States

You can control the state of the `Switch` via the `active`, `disabled`, and `state` properties.

```svelte {title="Switch States" mode="repl"}
<script>
    import {
        Switch,
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
        <Switch />
    </div>

    <div>
        <Text is="strong">STATE</Text>
        <br />
        <Switch state />
    </div>

    <div>
        <Text is="strong">ACTIVE NO-STATE</Text>
        <br />
        <Switch active />
    </div>

    <div>
        <Text is="strong">ACTIVE STATE</Text>
        <br />
        <Switch active state />
    </div>

    <div>
        <Text is="strong">DISABLED NO-STATE</Text>
        <br />
        <Switch disabled />
    </div>

    <div>
        <Text is="strong">DISABLED STATE</Text>
        <br />
        <Switch disabled state />
    </div>
</Stack>
```

## Palette

You can change the color palette of the `Switch` via the `palette` property.

```svelte {title="Switch Palette" mode="repl"}
<script>
    import {
        Switch,
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
        <Switch />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>
        <br />
        <Switch palette="accent" />
    </div>

    <div>
        <Text is="strong">NEUTRAL</Text>
        <br />
        <Switch palette="neutral" />
    </div>

    <div>
        <Text is="strong">DARK</Text>
        <br />
        <Switch palette="dark" />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>
        <br />
        <Switch palette="light" />
    </div>

    <div>
        <Text is="strong">ALERT</Text>
        <br />
        <Switch palette="alert" />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>
        <br />
        <Switch palette="affirmative" />
    </div>

    <div>
        <Text is="strong">INFORMATIVE</Text>
        <br />
        <Switch palette="informative" />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>
        <br />
        <Switch palette="negative" />
    </div>
</Stack>
```

## Sizing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `sizing={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the size of the `Switch` via the `sizing` property.

```svelte {title="Switch Sizing" mode="repl"}
<script>
    import {
        Switch,
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
        <Switch />
    </div>

    <div>
        <Text is="strong">NANO</Text>
        <br />
        <Switch sizing="nano" />
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <br />
        <Switch sizing="tiny" />
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <br />
        <Switch sizing="small" />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <br />
        <Switch sizing="medium" />
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <br />
        <Switch sizing="large" />
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <br />
        <Switch sizing="huge" />
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>
        <br />
        <Switch sizing="massive" />
    </div>
</Stack>
```
