+++
[[properties.DateStamp]]
name="timestamp"
description="Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp being formatted for display."
types=["string"]

[[properties.DateStamp]]
name="calendar"
description="Alters the calendar used for calculations / formatting via [Temporal Calendar Codes](https://tc39.es/proposal-temporal/docs/calendar.html)."
types=["string"]

[[properties.DateStamp]]
name="locale"
description="Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags."
types=["string"]

[[properties.DateStamp]]
name="day"
description="Alters how a displayed day is formatted."
types=["2-digit", "numeric"]

[[properties.DateStamp]]
name="month"
description="Alters how a displayed month is formatted."
types=["2-digit", "long", "narrow", "numeric", "short"]

[[properties.DateStamp]]
name="weekday"
description="Alters how a displayed weekday is formatted."
types=["long", "narrow", "short"]

[[properties.DateStamp]]
name="year"
description="Alters how a displayed year is formatted."
types=["2-digit", "numeric"]
+++

# DateStamp

`DateStamp` formats an [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp into a human readable string, using the user preferences provided by the Browser.

```svelte {title="DateStamp Preview" mode="repl"}
<script>
    import {DateStamp} from "@kahi-ui/framework";

    const timestamp = "2021-11-10";
</script>

<DateStamp {timestamp} />
```

## Imports

```svelte {title="DateStamp Imports"}
<script>
    import {DateStamp} from "@kahi-ui/framework";
</script>
```

## Custom Format

> **NOTE**: By using custom format settings, the user's defaults will not be loaded and you will have to opt into each unit of information.

You can customize how each individual component of the timestamp is displayed via the `day`, `month`, `weekday`, and `year` properties respectively.

```svelte {title="DateStamp Custom Format" mode="repl"}
<script>
    import {DateStamp} from "@kahi-ui/framework";

    const timestamp = "2021-11-10";
</script>

<DateStamp
    day="2-digit"
    month="long"
    weekday="long"
    year="2-digit"
    {timestamp}
/>
```
