# DateTimeStamp

`DateTimeStamp` formats an [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp into a human readable string, using the user preferences provided by the Browser.

```svelte repl DateTimeStamp Preview
<script>
    import {DateTimeStamp} from "@kahi-ui/framework";

    const timestamp = "2021-11-10T13:00:42Z";
</script>

<DateTimeStamp {timestamp} />
```

## Imports

```svelte default DateTimeStamp Imports
<script>
    import {DateTimeStamp} from "@kahi-ui/framework";
</script>
```

## 12 Hour

You can have the timestamp render as 12-hour time (1...12 AM/PM) instead of 24-hour time (0...23) via the `hour_12` property.

```svelte repl DateTimeStamp 12 Hour
<script>
    import {DateTimeStamp} from "@kahi-ui/framework";

    const timestamp = "2021-11-10T13:00:42Z";
</script>

<DateTimeStamp hour="numeric" hour_12 {timestamp} />
```

## Custom Format

> **NOTE**: By using custom format settings, the user's defaults will not be loaded and you will have to opt into each unit of information.

You can customize how each individual component of the timestamp is displayed via the `day`, `month`, `weekday`, ` year`, `hour `, `minute`, and `second` properties respectively.

```svelte repl DateTimeStamp Custom Format
<script>
    import {DateTimeStamp} from "@kahi-ui/framework";

    const timestamp = "2021-11-10T13:00:42Z";
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
