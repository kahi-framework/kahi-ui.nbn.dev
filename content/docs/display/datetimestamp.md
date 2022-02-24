+++
[[properties.DateTimeStamp]]
name="timestamp"
description="Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp being formatted for display."
types=["string"]

[[properties.DateTimeStamp]]
name="calendar"
description="Alters the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html)."
types=["string"]

[[properties.DateTimeStamp]]
name="locale"
description="Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags."
types=["string"]

[[properties.DateTimeStamp]]
name="day"
description="Alters how a displayed day is formatted."
types=["2-digit", "numeric"]

[[properties.DateTimeStamp]]
name="month"
description="Alters how a displayed month is formatted."
types=["2-digit", "long", "narrow", "numeric", "short"]

[[properties.DateTimeStamp]]
name="weekday"
description="Alters how a displayed weekday is formatted."
types=["long", "narrow", "short"]

[[properties.DateTimeStamp]]
name="year"
description="Alters how a displayed year is formatted."
types=["2-digit", "numeric"]

[[properties.DateTimeStamp]]
name="hour"
description="Alters how a displayed hour is formatted."
types=["2-digit", "numeric"]

[[properties.DateTimeStamp]]
name="hour_12"
description="Alters to showing hours in 12-hour format."
types=["boolean"]

[[properties.DateTimeStamp]]
name="minute"
description="Alters how a displayed minute is formatted."
types=["2-digit", "numeric"]

[[properties.DateTimeStamp]]
name="second"
description="Alters how a displayed second is formatted."
types=["2-digit", "numeric"]
+++

# DateTimeStamp

> **NOTE**: Introduced feature in `v0.4.10`.

`DateTimeStamp` formats an [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp into a human readable string, using the user preferences provided by the Browser.

```svelte {title="DateTimeStamp Preview" mode="repl"}
<script>
    import {DateTimeStamp} from "@kahi-ui/framework";

    const timestamp = "2021-11-10T13:00:42-05:00";
</script>

<DateTimeStamp {timestamp} />
```

## Imports

```svelte {title="DateTimeStamp Imports"}
<script>
    import {DateTimeStamp} from "@kahi-ui/framework";
</script>
```

## 12 Hour

You can have the timestamp render as 12-hour time (1...12 AM/PM) instead of 24-hour time (0...23) via the `hour_12` property.

```svelte {title="DateTimeStamp 12 Hour" mode="repl"}
<script>
    import {DateTimeStamp} from "@kahi-ui/framework";

    const timestamp = "2021-11-10T13:00:42-05:00";
</script>

<DateTimeStamp hour="numeric" hour_12 {timestamp} />
```

## Custom Format

> **NOTE**: By using custom format settings, the user's defaults will not be loaded and you will have to opt into each unit of information.

You can customize how each individual component of the timestamp is displayed via the `day`, `month`, `weekday`, ` year`, `hour `, `minute`, and `second` properties respectively.

```svelte {title="DateTimeStamp Custom Format" mode="repl"}
<script>
    import {DateTimeStamp} from "@kahi-ui/framework";

    const timestamp = "2021-11-10T13:00:42-05:00";
</script>

<DateTimeStamp
    day="2-digit"
    month="long"
    weekday="long"
    year="2-digit"
    hour="2-digit"
    minute="2-digit"
    second="2-digit"
    hour_12
    {timestamp}
/>
```
