+++
[[properties.TimePicker]]
name="value"
description="Sets the selected timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime)."
types=["string"]

[[properties.TimePicker]]
name="disabled"
description="Disables any component of time from being selected."
types=["boolean", "string[]"]

[[properties.TimePicker]]
name="readonly"
description="Disables any component of time from being selected without visual changes."
types=["boolean"]

[[properties.TimePicker]]
name="now"
description="Enables displaying of the \"NOW\" button, allowing users to set the Widget to current clock time."
types=["boolean"]

[[properties.TimePicker]]
name="scroll"
description="Enables auto scrolling to current time on mounting."
types=["boolean"]

[[properties.TimePicker]]
name="highlight"
description="Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp of the current time to be highlighted as outlines."
types=["string[]"]

[[properties.TimePicker]]
name="max"
description="Sets the maximum timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the future that can be selected."
types=["string"]

[[properties.TimePicker]]
name="min"
description="Sets the minimum timestamp [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) in the past that can be selected."
types=["string"]

[[properties.TimePicker]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.TimePicker]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `TimePicker`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties.TimePicker]]
name="locale"
description="Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags."
types=["string"]

[[properties.TimePicker]]
name="hour"
description="Alters how a displayed hour is formatted."
types=["2-digit", "numeric"]

[[properties.TimePicker]]
name="hour_12"
description="Alters to showing hours in 12-hour format."
types=["boolean"]

[[properties.TimePicker]]
name="minute"
description="Alters how a displayed minute is formatted."
types=["2-digit", "numeric"]

[[properties.TimePicker]]
name="second"
description="Alters how a displayed second is formatted."
types=["2-digit", "numeric"]

[[events.TimePicker]]
name="change"
description="Fires whenever the `value` property changes."
types=["CustomEvent<void>"]

[[events.TimePicker]]
name="now"
description="Fires whenever the \"NOW\" button is clicked when enabled."
types=["CustomEvent<void>"]
+++

# TimePicker

> **NOTE**: New since `v0.4.10`.

`TimePicker` is a Widget that displays a set of hour, minute, second clock scrollable areas that a user can select from.

```svelte {title="TimePicker Preview" mode="repl"}
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} />
```

## Imports

```svelte {title="TimePicker Imports"}
<script>
    import {TimePicker} from "@kahi-ui/framework";
</script>
```

## Now

You can enable the displaying of a "NOW" button to allow the user to set the picker to the current time, via the `now` property.

```svelte {title="TimePicker Now" mode="repl"}
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} now />
```

## Auto Scroll

> **WARNING**: This property will cause layout reflowing. And can result poor performance when mounted during points of high activity. e.g. when your web page first loads

You can enable auto scrolling to the currently set `value` when `TimePicker` is mounted, via the `scroll` property.

```svelte {title="TimePicker Now" mode="repl"}
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} scroll />
```

## 12 Hour

> **NOTE**: By default, this value respects the user default if available.

You can have the hours render as 12-hour time (1...12 AM/PM) instead of 24-hour time (0...23) via the `hour_12` property.

```svelte {title="TimePicker 12 Hour" mode="repl"}
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} hour_12 />
```

## 24 Hour

> **NOTE**: By default, this value respects the user default if available.

You can have the hours render as 24-hour time (0...23) instead of 12-hour time (1...12 AM/PM) via the `hour_12` property.

```svelte {title="TimePicker 24 Hour" mode="repl"}
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" hour_12={false} {value} />
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte {title="TimePicker Disabled" mode="repl"}
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} disabled />
```

## Disabled Timestamps

You can disable all interactivity via the `disabled` property.

```svelte {title="TimePicker Disabled" mode="repl"}
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";

    const disabled = ["11:00:00", "15:00:00"];
</script>

<TimePicker palette="accent" {disabled} {value} />
```

## Highlight

> **NOTE**: By default, the current time is used.

You can select a specific timestamp to be highlighted as outlines via the `highlight` property.

```svelte {title="TimePicker Highlight" mode="repl"}
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";

    const highlight = ["15:00:00"];
</script>

<TimePicker palette="accent" {highlight} {value} />
```

## Maximum + Minimum

You can set maximum and minimum range of selectable times via the `max` / `min` properties.

```svelte {title="TimePicker Maximum + Minimum" mode="repl"}
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";

    const max = "15:45:30";
    const min = "11:15:00";
</script>

<TimePicker palette="accent" {max} {min} {value} />
```

## Custom Format

You can customize how the hour, minute, second components of the available timestamps is displayed via the `hour`, `minute`, and `second` properties respectively.

```svelte {title="TimePicker Custom Format" mode="repl"}
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker
    palette="accent"
    hour="2-digit"
    minute="2-digit"
    second="2-digit"
    {value}
    hour_12
/>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte {title="TimePicker Sizing" mode="repl"}
<script>
    import {
        Stack,
        Text,
        TimePicker,
    } from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <TimePicker palette="accent" {value} />
    </div>

    <div>
        <Text is="strong">NANO</Text>

        <TimePicker
            palette="accent"
            sizing="nano"
            {value}
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <TimePicker
            palette="accent"
            sizing="tiny"
            {value}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <TimePicker
            palette="accent"
            sizing="small"
            {value}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <TimePicker
            palette="accent"
            sizing="medium"
            {value}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <TimePicker
            palette="accent"
            sizing="large"
            {value}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <TimePicker
            palette="accent"
            sizing="huge"
            {value}
        />
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>

        <TimePicker
            palette="accent"
            sizing="massive"
            {value}
        />
    </div>
</Stack.Container>
```
