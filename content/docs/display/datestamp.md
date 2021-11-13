# DateStamp

`DateStamp` formats an [ISO 8601 / RFC 3339](https://www.w3.org/TR/NOTE-datetime) timestamp into a human readable string, using the user preferences provided by the Browser.

```svelte repl DateStamp Preview
<script>
    import {DateStamp} from "@kahi-ui/framework";

    const timestamp = "2021-11-10";
</script>

<DateStamp {timestamp} />
```

## Imports

```svelte default DateStamp Imports
<script>
    import {DateStamp} from "@kahi-ui/framework";
</script>
```

## Custom Format

> **NOTE**: By using custom format settings, the user's defaults will not be loaded and you will have to opt into each unit of information.

You can customize how each individual component of the timestamp is displayed via the `day`, `month`, `weekday`, and `year` properties respectively.

```svelte repl DateStamp Custom Format
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
