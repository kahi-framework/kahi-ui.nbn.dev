+++
[[properties.YearStepper]]
name="value"
description="Sets the selected day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime)."
types=["string"]

[[properties.YearStepper]]
name="disabled"
description="Disables months from being stepped through."
types=["boolean"]

[[properties.YearStepper]]
name="readonly"
description="Disables months from being stepped through without visual changes."
types=["boolean"]

[[properties.YearStepper]]
name="step"
description="Sets how many months are stepped through at each button click."
default="1"
types=["1", "number"]

[[properties.YearStepper]]
name="max"
description="Sets the maximum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected."
types=["string"]

[[properties.YearStepper]]
name="min"
description="Sets the minimum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected."
types=["string"]

[[properties.YearStepper]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.YearStepper]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `YearStepper`."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.YearStepper]]
name="calendar"
description="Alters the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html)."
types=["string"]

[[properties.YearStepper]]
name="locale"
description="Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags."
types=["string"]

[[properties.YearStepper]]
name="year"
description="Alters how a displayed year is formatted."
types=["2-digit", "numeric"]

[[events.YearStepper]]
name="change"
description="Fires whenever the `value` property changes."
types=["CustomEvent<void>"]
+++

# YearStepper

`YearStepper` is a Widget that lets users increment / decrement the currently provided year by a set number.

```svelte repl YearStepper Preview
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" {value} />
```

## Imports

```svelte default YearStepper Imports
<script>
    import {YearStepper} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte repl YearStepper Disabled
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" {value} disabled />
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte repl YearStepper Readonly
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" {value} readonly />
```

## Maximum + Minimum

You can set maximum and minimum range of steppable years via the `maximum` / `minimum` properties.

```svelte repl YearStepper Maximum + Minimum
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";

    const max = "2025-01-01[u-ca=gregory]";
    const min = "2023-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" {max} {min} {value} />
```

## Step

You can control how many years the buttons increment / decrement via the `step` property.

```svelte repl YearStepper Step
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" step={3} {value} />
```

## Custom Format

You can customize how the year component of the current timestamp is displayed via the `year` property.

```svelte repl YearStepper Custom Format
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" year="2-digit" {value} />
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte repl YearStepper Sizing
<script>
    import {
        YearStepper,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <YearStepper palette="accent" {value} />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <YearStepper
            palette="accent"
            sizing="tiny"
            {value}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <YearStepper
            palette="accent"
            sizing="small"
            {value}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <YearStepper
            palette="accent"
            sizing="medium"
            {value}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <YearStepper
            palette="accent"
            sizing="large"
            {value}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <YearStepper
            palette="accent"
            sizing="huge"
            {value}
        />
    </div>
</Stack>
```
