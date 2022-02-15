+++
[[properties.MonthPicker]]
name="value"
description="Sets the selected month [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps."
types=["string[]"]

[[properties.MonthPicker]]
name="disabled"
description="Disables all months from being selected, or given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps from being selected."
types=["boolean", "string[]"]

[[properties.MonthPicker]]
name="readonly"
description="Disables toggling on of unselected months."
types=["boolean"]

[[properties.MonthPicker]]
name="multiple"
description="Enables selection of multiple months."
types=["boolean"]

[[properties.MonthPicker]]
name="once"
description="Disables toggling off of already selected months."
types=["boolean"]

[[properties.MonthPicker]]
name="highlight"
description="Highlights the given [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamps as outlined."
types=["string[]"]

[[properties.MonthPicker]]
name="timestamp"
description="Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp of the calendar being listed."
types=["string"]

[[properties.MonthPicker]]
name="max"
description="Sets the maximum month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected."
types=["string"]

[[properties.MonthPicker]]
name="min"
description="Sets the minimum month timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected."
types=["string"]

[[properties.MonthPicker]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.MonthPicker]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `MonthPicker`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties.MonthPicker]]
name="locale"
description="Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags."
types=["string"]

[[properties.MonthPicker]]
name="month"
description="Alters how a displayed month is formatted."
types=["2-digit", "long", "narrow", "numeric", "short"]

[[events.MonthPicker]]
name="change"
description="Fires whenever the `value` property changes."
types=["CustomEvent<void>"]
+++

# MonthPicker

> **NOTE**: Introduced feature in `v0.4.10`.

`MonthPicker` is a Widget that displays a fiscal quaterly grid of months that a user can select from.

```svelte {title="MonthPicker Preview" mode="repl"}
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01";
    const value = ["2021-06-01"];
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
/>
```

## Imports

```svelte {title="MonthPicker Imports"}
<script>
    import {MonthPicker} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte {title="MonthPicker Disabled" mode="repl"}
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01";
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {timestamp}
    disabled
/>
```

## Disabled Months

You can disable specific months from being selected via the `disabled` property.

```svelte {title="MonthPicker Disabled Months" mode="repl"}
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01";

    const disabled = ["2021-06-01", "2021-12-01"];
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {disabled}
    {timestamp}
/>
```

## Multiple

You can allow for multiple months to be selected via the `multiple` property.

```svelte {title="MonthPicker Multiple" mode="repl"}
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01";
    const value = ["2021-06-01", "2021-12-01"];
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    multiple
/>
```

## Once

You can disable selected months from being unselected via the `once` property.

```svelte {title="MonthPicker Once" mode="repl"}
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01";
    const value = ["2021-06-01"];
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    once
/>
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte {title="MonthPicker Readonly" mode="repl"}
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01";
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {timestamp}
    readonly
/>
```

## Highlight

> **NOTE**: By default, the current month is used.

You can select a specific set of months to be highlighted as outlines via the `highlight` property.

```svelte {title="MonthPicker Highlight" mode="repl"}
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01";

    const highlight = [
        "2021-10-01",
        "2021-11-01",
        "2021-12-01",
    ];
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {highlight}
    {timestamp}
/>
```

## Maximum + Minimum

You can set maximum and minimum range of selectable months via the `max` / `min` properties.

```svelte {title="MonthPicker Maximum + Minimum" mode="repl"}
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01";

    const max = "2021-07-01";
    const min = "2021-05-01";
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {max}
    {min}
    {timestamp}
/>
```

## Custom Format

You can customize how the month component of the available timestamps is displayed via the `month` property.

```svelte {title="MonthPicker Custom Format" mode="repl"}
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01";
</script>

<MonthPicker
    palette="accent"
    month="long"
    width="content-max"
    {timestamp}
/>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte {title="MonthPicker Sizing" mode="repl"}
<script>
    import {
        MonthPicker,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const timestamp = "2021-01-01";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <MonthPicker
            palette="accent"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">NANO</Text>

        <MonthPicker
            palette="accent"
            sizing="nano"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <MonthPicker
            palette="accent"
            sizing="tiny"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <MonthPicker
            palette="accent"
            sizing="small"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <MonthPicker
            palette="accent"
            sizing="medium"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <MonthPicker
            palette="accent"
            sizing="large"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <MonthPicker
            palette="accent"
            sizing="huge"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>

        <MonthPicker
            palette="accent"
            sizing="massive"
            width="content-max"
            {timestamp}
        />
    </div>
</Stack.Container>
```
