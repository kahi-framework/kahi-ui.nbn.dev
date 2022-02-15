+++
[[properties.TimeStamp]]
name="timestamp"
description="Sets the [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp being formatted for display."
types=["string"]

[[properties.TimeStamp]]
name="locale"
description="Alters the locale used for displaying internationalized text via [RFC 5646 / BCP 47](https://www.w3.org/International/articles/language-tags) language tags."
types=["string"]

[[properties.TimeStamp]]
name="hour"
description="Alters how a displayed hour is formatted."
types=["2-digit", "numeric"]

[[properties.TimeStamp]]
name="hour_12"
description="Alters to showing hours in 12-hour format."
types=["boolean"]

[[properties.TimeStamp]]
name="minute"
description="Alters how a displayed minute is formatted."
types=["2-digit", "numeric"]

[[properties.TimeStamp]]
name="second"
description="Alters how a displayed second is formatted."
types=["2-digit", "numeric"]
+++

# TimeStamp

> **NOTE**: Introduced feature in `v0.4.10`.

`TimeStamp` formats an [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp into a human readable string, using the user preferences provided by the Browser.

```svelte {title="TimeStamp Preview" mode="repl"}
<script>
    import {TimeStamp} from "@kahi-ui/framework";

    const timestamp = "13:00:42";
</script>

<TimeStamp {timestamp} />
```

## Imports

```svelte {title="TimeStamp Imports"}
<script>
    import {TimeStamp} from "@kahi-ui/framework";
</script>
```

## 12 Hour

You can have the timestamp render as 12-hour time (1...12 AM/PM) instead of 24-hour time (0...23) via the `hour_12` property.

```svelte {title="TimeStamp 12 Hour" mode="repl"}
<script>
    import {TimeStamp} from "@kahi-ui/framework";

    const timestamp = "13:00:42";
</script>

<TimeStamp hour_12 {timestamp} />
```

## Custom Format

> **NOTE**: By using custom format settings, the user's defaults will not be loaded and you will have to opt into each unit of information.

You can customize how each individual component of the timestamp is displayed via the `hour`, `minute`, and `second` properties respectively.

```svelte {title="TimeStamp Custom Format" mode="repl"}
<script>
    import {TimeStamp} from "@kahi-ui/framework";

    const timestamp = "13:00:42";
</script>

<TimeStamp hour="2-digit" hour_12 {timestamp} />
```
