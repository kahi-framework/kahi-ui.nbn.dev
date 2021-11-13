+++
[[properties.DayStepper]]
name="value"
description="Sets the selected day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime)."
types=["string"]

[[properties.DayStepper]]
name="disabled"
description="Disables days from being stepped through."
types=["boolean"]

[[properties.DayStepper]]
name="readonly"
description="Disables days from being stepped through without visual changes."
types=["boolean"]

[[properties.DayStepper]]
name="step"
description="Sets how many days are stepped through at each button click."
default="1"
types=["1", "number"]

[[properties.DayStepper]]
name="max"
description="Sets the maximum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected."
types=["string"]

[[properties.DayStepper]]
name="min"
description="Sets the minimum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected."
types=["string"]

[[properties.DayStepper]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.DayStepper]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `DayStepper`."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.DayStepper]]
name="calendar"
description="Alters the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html)."
types=["string"]

[[properties.DayStepper]]
name="locale"
description="Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags."
types=["string"]

[[properties.DayStepper]]
name="day"
description="Alters how a displayed day is formatted."
types=["2-digit", "numeric"]

[[properties.DayStepper]]
name="month"
description="Alters how a displayed month is formatted."
types=["2-digit", "long", "narrow", "numeric", "short"]

[[properties.DayStepper]]
name="weekday"
description="Alters how a displayed weekday is formatted."
types=["long", "narrow", "short"]

[[events.DayStepper]]
name="change"
description="Fires whenever the `value` property changes."
types=["CustomEvent<void>"]
+++

# DayStepper

`DayStepper` is a Widget that lets users increment / decrement the currently provided day by a set number.

```svelte repl DayStepper Preview
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<DayStepper palette="accent" {value} />
```

## Imports

```svelte default DayStepper Imports
<script>
    import {DayStepper} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte repl DayStepper Disabled
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<DayStepper palette="accent" {value} disabled />
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte repl DayStepper Readonly
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<DayStepper palette="accent" {value} readonly />
```

## Maximum + Minimum

You can set maximum and minimum range of steppable days via the `maximum` / `minimum` properties.

```svelte repl DayStepper Maximum + Minimum
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";

    const max = "2021-11-13[u-ca=gregory]";
    const min = "2021-11-07[u-ca=gregory]";
</script>

<DayStepper palette="accent" {max} {min} {value} />
```

## Step

You can control how many days the buttons increment / decrement via the `step` property.

```svelte repl DayStepper Step
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<DayStepper palette="accent" step={3} {value} />
```

## Custom Format

You can customize how the day and month components of the current timestamp is displayed via the `day`, `weekday`, and `month` properties respectively.

```svelte repl DayStepper Custom Format
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<DayStepper
    palette="accent"
    day="numeric"
    month="numeric"
    weekday="short"
    {value}
/>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte repl DayStepper Sizing
<script>
    import {
        DayStepper,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <DayStepper palette="accent" {value} />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <DayStepper
            palette="accent"
            sizing="tiny"
            {value}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <DayStepper
            palette="accent"
            sizing="small"
            {value}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <DayStepper
            palette="accent"
            sizing="medium"
            {value}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <DayStepper
            palette="accent"
            sizing="large"
            {value}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <DayStepper
            palette="accent"
            sizing="huge"
            {value}
        />
    </div>
</Stack>
```
