+++
[[properties.YearPicker]]
name="value"
description="Sets the selected year [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps."
types=["string[]"]

[[properties.YearPicker]]
name="disabled"
description="Disables all years from being selected, or given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps from being selected."
types=["boolean", "string[]"]

[[properties.YearPicker]]
name="readonly"
description="Disables toggling on of unselected years."
types=["boolean"]

[[properties.YearPicker]]
name="multiple"
description="Enables selection of multiple years."
types=["boolean"]

[[properties.YearPicker]]
name="once"
description="Disables toggling off of already selected years."
types=["boolean"]

[[properties.YearPicker]]
name="highlight"
description="Highlights the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps as outlined."
types=["string[]"]

[[properties.YearPicker]]
name="timestamp"
description="Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp of the calendar being listed."
types=["string"]

[[properties.YearPicker]]
name="max"
description="Sets the maximum year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected."
types=["string"]

[[properties.YearPicker]]
name="min"
description="Sets the minimum year timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected."
types=["string"]

[[properties.YearPicker]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.YearPicker]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `YearPicker`."
types=["tiny", "small", "medium", "large", "huge"]

[[properties.YearPicker]]
name="calendar"
description="Alters the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html)."
types=["string"]

[[properties.YearPicker]]
name="locale"
description="Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags."
types=["string"]

[[properties.YearPicker]]
name="year"
description="Alters how a displayed year is formatted."
types=["2-digit", "long", "narrow", "numeric", "short"]

[[events.YearPicker]]
name="change"
description="Fires whenever the `value` property changes."
types=["CustomEvent<void>"]
+++

# YearPicker

> **NOTE**: New since `v0.4.10`.

`YearPicker` is a Widget that displays a decade-based grid of years that a user can select from.

```svelte {title="YearPicker Preview" mode="repl"}
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
    const value = ["2024-01-01[u-ca=gregory]"];
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
/>
```

## Imports

```svelte {title="YearPicker Imports"}
<script>
    import {YearPicker} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte {title="YearPicker Disabled" mode="repl"}
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {timestamp}
    disabled
/>
```

## Disabled Years

You can disable specific years from being selected via the `disabled` property.

```svelte {title="YearPicker Disabled Years" mode="repl"}
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";

    const disabled = [
        "2025-01-01[u-ca=gregory]",
        "2023-01-01[u-ca=gregory]",
    ];
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {disabled}
    {timestamp}
/>
```

## Multiple

You can allow for multiple years to be selected via the `multiple` property.

```svelte {title="YearPicker Multiple" mode="repl"}
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
    const value = [
        "2025-01-01[u-ca=gregory]",
        "2023-01-01[u-ca=gregory]",
    ];
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    multiple
/>
```

## Once

You can disable selected years from being unselected via the `once` property.

```svelte {title="YearPicker Once" mode="repl"}
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
    const value = ["2024-01-01[u-ca=gregory]"];
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    once
/>
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte {title="YearPicker Readonly" mode="repl"}
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {timestamp}
    readonly
/>
```

## Highlight

> **NOTE**: By default, the current year is used.

You can select a specific set of years to be highlighted as outlines via the `highlight` property.

```svelte {title="YearPicker Highlight" mode="repl"}
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";

    const highlight = [
        "2025-01-01[u-ca=gregory]",
        "2026-01-01[u-ca=gregory]",
        "2027-01-01[u-ca=gregory]",
    ];
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {highlight}
    {timestamp}
/>
```

## Maximum + Minimum

You can set maximum and minimum range of selectable years via the `max` / `min` properties.

```svelte {title="YearPicker Maximum + Minimum" mode="repl"}
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";

    const max = "2025-01-01[u-ca=gregory]";
    const min = "2023-01-01[u-ca=gregory]";
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {max}
    {min}
    {timestamp}
/>
```

## Custom Format

You can customize how the year component of the available timestamps is displayed via the `year` property.

```svelte {title="YearPicker Custom Format" mode="repl"}
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
</script>

<YearPicker
    palette="accent"
    year="2-digit"
    width="content-max"
    {timestamp}
/>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte {title="YearPicker Sizing" mode="repl"}
<script>
    import {
        YearPicker,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <YearPicker
            palette="accent"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <YearPicker
            palette="accent"
            sizing="tiny"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <YearPicker
            palette="accent"
            sizing="small"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <YearPicker
            palette="accent"
            sizing="medium"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <YearPicker
            palette="accent"
            sizing="large"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <YearPicker
            palette="accent"
            sizing="huge"
            width="content-max"
            {timestamp}
        />
    </div>
</Stack>
```
