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
name="steps"
description="Sets how many months are stepped through at each button click."
default="1"
types=["1", "number", "number"]

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
types=["auto", "inverse", "inherit", "accent", "neutral", "off", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.YearStepper]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `YearStepper`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

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

> **NOTE**: Introduced feature in `v0.4.10`.

> **WARNING**: This feature received a breaking change in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

`YearStepper` is a Widget that lets users increment / decrement the currently provided year by a set number.

```svelte {title="YearStepper Preview" mode="repl"}
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01";
</script>

<YearStepper palette="accent" {value} />
```

## Imports

```svelte {title="YearStepper Imports"}
<script>
    import {YearStepper} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte {title="YearStepper Disabled" mode="repl"}
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01";
</script>

<YearStepper palette="accent" {value} disabled />
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte {title="YearStepper Readonly" mode="repl"}
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01";
</script>

<YearStepper palette="accent" {value} readonly />
```

## Maximum + Minimum

You can set maximum and minimum range of steppable years via the `max` / `min` properties.

```svelte {title="YearStepper Maximum + Minimum" mode="repl"}
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01";

    const max = "2025-01-01";
    const min = "2023-01-01";
</script>

<YearStepper palette="accent" {max} {min} {value} />
```

## Steps

> **WARNING**: This feature was renamed from `step` to `steps` in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

You can control how many years the buttons increment / decrement via the `steps` property.

```svelte {title="YearStepper Step" mode="repl"}
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01";
</script>

<YearStepper palette="accent" steps={3} {value} />
```

## Custom Format

You can customize how the year component of the current timestamp is displayed via the `year` property.

```svelte {title="YearStepper Custom Format" mode="repl"}
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01";
</script>

<YearStepper palette="accent" year="2-digit" {value} />
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte {title="YearStepper Sizing" mode="repl"}
<script>
    import {
        YearStepper,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const value = "2024-01-01";
</script>

<Stack.Container
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
        <Text is="strong">NANO</Text>

        <YearStepper
            palette="accent"
            sizing="nano"
            {value}
        />
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

    <div>
        <Text is="strong">MASSIVE</Text>

        <YearStepper
            palette="accent"
            sizing="massive"
            {value}
        />
    </div>
</Stack.Container>
```
