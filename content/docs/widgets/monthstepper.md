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
name="steps"
description="Sets how many months are stepped through at each button click."
default="1"
types=["1", "number", "string"]

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
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.MonthStepper]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `MonthStepper`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

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

> **NOTE**: Introduced feature in `v0.4.10`.

`MonthStepper` is a Widget that lets users increment / decrement the currently provided month by a set number.

```svelte {title="MonthStepper Preview" mode="repl"}
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01";
</script>

<MonthStepper palette="accent" {value} />
```

## Imports

```svelte {title="MonthStepper Imports"}
<script>
    import {MonthStepper} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte {title="MonthStepper Disabled" mode="repl"}
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01";
</script>

<MonthStepper palette="accent" {value} disabled />
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte {title="MonthStepper Readonly" mode="repl"}
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01";
</script>

<MonthStepper palette="accent" {value} readonly />
```

## Maximum + Minimum

You can set maximum and minimum range of steppable months via the `max` / `min` properties.

```svelte {title="MonthStepper Maximum + Minimum" mode="repl"}
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01";

    const max = "2021-07-01";
    const min = "2021-05-01";
</script>

<MonthStepper palette="accent" {max} {min} {value} />
```

## Steps

You can control how many months the buttons increment / decrement via the `steps` property.

```svelte {title="MonthStepper Step" mode="repl"}
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01";
</script>

<MonthStepper palette="accent" steps={3} {value} />
```

## Custom Format

You can customize how the month and year components of the current timestamp is displayed via the `month` and `year` properties respectively.

```svelte {title="MonthStepper Custom Format" mode="repl"}
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01";
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

```svelte {title="MonthStepper Sizing" mode="repl"}
<script>
    import {
        MonthStepper,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const value = "2021-06-01";
</script>

<Stack.Container
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
        <Text is="strong">NANO</Text>

        <MonthStepper
            palette="accent"
            sizing="nano"
            {value}
        />
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

    <div>
        <Text is="strong">MASSIVE</Text>

        <MonthStepper
            palette="accent"
            sizing="massive"
            {value}
        />
    </div>
</Stack.Container>
```
