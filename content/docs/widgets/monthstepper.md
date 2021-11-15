+++
[[properties.MonthStepper]]
name="value"
description="Sets the selected day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime)."
types=["string"]

[[properties.MonthStepper]]
name="disabled"
description="Disables months from being stepped through."
types=["boolean"]

[[properties.MonthStepper]]
name="readonly"
description="Disables months from being stepped through without visual changes."
types=["boolean"]

[[properties.MonthStepper]]
name="step"
description="Sets how many months are stepped through at each button click."
default="1"
types=["1", "number"]

[[properties.MonthStepper]]
name="max"
description="Sets the maximum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected."
types=["string"]

[[properties.MonthStepper]]
name="min"
description="Sets the minimum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected."
types=["string"]

[[properties.MonthStepper]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.MonthStepper]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `MonthStepper`."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.MonthStepper]]
name="calendar"
description="Alters the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html)."
types=["string"]

[[properties.MonthStepper]]
name="locale"
description="Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags."
types=["string"]

[[properties.MonthStepper]]
name="month"
description="Alters how a displayed month is formatted."
types=["2-digit", "long", "narrow", "numeric", "short"]

[[properties.MonthStepper]]
name="year"
description="Alters how a displayed year is formatted."
types=["2-digit", "numeric"]

[[events.MonthStepper]]
name="change"
description="Fires whenever the `value` property changes."
types=["CustomEvent<void>"]
+++

# MonthStepper

`MonthStepper` is a Widget that lets users increment / decrement the currently provided month by a set number.

```svelte repl MonthStepper Preview
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" {value} />
```

## Imports

```svelte default MonthStepper Imports
<script>
    import {MonthStepper} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte repl MonthStepper Disabled
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" {value} disabled />
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte repl MonthStepper Readonly
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" {value} readonly />
```

## Maximum + Minimum

You can set maximum and minimum range of steppable months via the `maximum` / `minimum` properties.

```svelte repl MonthStepper Maximum + Minimum
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";

    const max = "2021-07-01[u-ca=gregory]";
    const min = "2021-05-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" {max} {min} {value} />
```

## Step

You can control how many months the buttons increment / decrement via the `step` property.

```svelte repl MonthStepper Step
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" step={3} {value} />
```

## Custom Format

You can customize how the month and year components of the current timestamp is displayed via the `month` and `year` properties respectively.

```svelte repl MonthStepper Custom Format
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper
    palette="accent"
    month="numeric"
    year="2-digit"
    {value}
/>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte repl MonthStepper Sizing
<script>
    import {
        MonthStepper,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <MonthStepper palette="accent" {value} />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <MonthStepper
            palette="accent"
            sizing="tiny"
            {value}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <MonthStepper
            palette="accent"
            sizing="small"
            {value}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <MonthStepper
            palette="accent"
            sizing="medium"
            {value}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <MonthStepper
            palette="accent"
            sizing="large"
            {value}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <MonthStepper
            palette="accent"
            sizing="huge"
            {value}
        />
    </div>
</Stack>
```
