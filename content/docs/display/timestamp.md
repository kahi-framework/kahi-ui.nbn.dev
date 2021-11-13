# TimeStamp

`TimeStamp` formats an [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp into a human readable string, using the user preferences provided by the Browser.

```svelte repl TimeStamp Preview
<script>
    import {TimeStamp} from "@kahi-ui/framework";

    const timestamp = "13:00:42";
</script>

<TimeStamp {timestamp} />
```

## Imports

```svelte default TimeStamp Imports
<script>
    import {TimeStamp} from "@kahi-ui/framework";
</script>
```

## 12 Hour

You can have the timestamp render as 12-hour time (1...12 AM/PM) instead of 24-hour time (0...23) via the `hour_12` property.

```svelte repl TimeStamp 12 Hour
<script>
    import {TimeStamp} from "@kahi-ui/framework";

    const timestamp = "13:00:42";
</script>

<TimeStamp hour_12 {timestamp} />
```

## Custom Format

> **NOTE**: By using custom format settings, the user's defaults will not be loaded and you will have to opt into each unit of information.

You can customize how each individual component of the timestamp is displayed via the `hour`, `minute`, and `second` properties respectively.

```svelte repl TimeStamp Custom Format
<script>
    import {TimeStamp} from "@kahi-ui/framework";

    const timestamp = "13:00:42";
</script>

<TimeStamp hour="2-digit" hour_12 {timestamp} />
```
