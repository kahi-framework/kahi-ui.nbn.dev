+++
[[properties.DayPicker]]
name="value"
description="Sets the selected day [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps."
types=["string[]"]

[[properties.DayPicker]]
name="disabled"
description="Disables all days from being selected, or given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps from being selected."
types=["boolean", "string[]"]

[[properties.DayPicker]]
name="readonly"
description="Disables toggling on of unselected days."
types=["boolean"]

[[properties.DayPicker]]
name="multiple"
description="Enables selection of multiple days."
types=["boolean"]

[[properties.DayPicker]]
name="once"
description="Disables toggling off of already selected days."
types=["boolean"]

[[properties.DayPicker]]
name="highlight"
description="Highlights the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps as outlined."
types=["string[]"]

[[properties.DayPicker]]
name="timestamp"
description="Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp of the calendar being listed."
types=["string"]

[[properties.DayPicker]]
name="max"
description="Sets the maximum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected."
types=["string"]

[[properties.DayPicker]]
name="min"
description="Sets the minimum day timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected."
types=["string"]

[[properties.DayPicker]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.DayPicker]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `DayPicker`."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.DayPicker]]
name="calendar"
description="Alters the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html)."
types=["string"]

[[properties.DayPicker]]
name="locale"
description="Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags."
types=["string"]

[[properties.DayPicker]]
name="day"
description="Alters how a displayed day is formatted."
types=["2-digit", "numeric"]

[[properties.DayPicker]]
name="weekday"
description="Alters how a displayed weekday is formatted."
types=["long", "narrow", "short"]

[[events.DayPicker]]
name="change"
description="Fires whenever the `value` property changes."
types=["CustomEvent<void>"]
+++

# DayPicker

> **NOTE**: New since `v0.4.10`.

`DayPicker` is a Widget that displays a calendar-style grid of days that a user can select from.

```svelte {title="DayPicker Preview" mode="repl"}
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
    const value = ["2021-11-05[u-ca=gregory]"];
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
/>
```

## Imports

```svelte {title="DayPicker Imports"}
<script>
    import {DayPicker} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte {title="DayPicker Disabled" mode="repl"}
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {timestamp}
    disabled
/>
```

## Disabled Days

You can disable specific days from being selected via the `disabled` property.

```svelte {title="DayPicker Disabled Days" mode="repl"}
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";

    const disabled = [
        "2021-11-05[u-ca=gregory]",
        "2021-11-19[u-ca=gregory]",
    ];
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {disabled}
    {timestamp}
/>
```

## Multiple

You can allow for multiple days to be selected via the `multiple` property.

```svelte {title="DayPicker Multiple" mode="repl"}
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
    const value = [
        "2021-11-05[u-ca=gregory]",
        "2021-11-19[u-ca=gregory]",
    ];
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    multiple
/>
```

## Once

You can disable selected days from being unselected via the `once` property.

```svelte {title="DayPicker Once" mode="repl"}
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
    const value = ["2021-11-05[u-ca=gregory]"];
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    once
/>
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte {title="DayPicker Readonly" mode="repl"}
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {timestamp}
    readonly
/>
```

## Highlight

> **NOTE**: By default, the current day is used.

You can select a specific set of days to be highlighted as outlines via the `highlight` property.

```svelte {title="DayPicker Highlight" mode="repl"}
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";

    const highlight = [
        "2021-11-11[u-ca=gregory]",
        "2021-11-12[u-ca=gregory]",
        "2021-11-13[u-ca=gregory]",
    ];
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {highlight}
    {timestamp}
/>
```

## Maximum + Minimum

You can set maximum and minimum range of selectable days via the `max` / `min` properties.

```svelte {title="DayPicker Maximum + Minimum" mode="repl"}
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";

    const max = "2021-11-19[u-ca=gregory]";
    const min = "2021-11-05[u-ca=gregory]";
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {max}
    {min}
    {timestamp}
/>
```

## Custom Format

You can customize how the day component of the available timestamps is displayed via the `day` and `weekday` properties respectively.

```svelte {title="DayPicker Custom Format" mode="repl"}
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
</script>

<DayPicker
    palette="accent"
    day="numeric"
    weekday="long"
    width="content-max"
    {timestamp}
/>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte {title="DayPicker Sizing" mode="repl"}
<script>
    import {
        DayPicker,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <DayPicker
            palette="accent"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <DayPicker
            palette="accent"
            sizing="tiny"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <DayPicker
            palette="accent"
            sizing="small"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <DayPicker
            palette="accent"
            sizing="medium"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <DayPicker
            palette="accent"
            sizing="large"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <DayPicker
            palette="accent"
            sizing="huge"
            width="content-max"
            {timestamp}
        />
    </div>
</Stack>
```
