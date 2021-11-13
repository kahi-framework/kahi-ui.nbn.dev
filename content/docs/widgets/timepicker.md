# TimePicker

`TimePicker` is a Widget that displays a set of hour, minute, second clock scrollable areas that a user can select from.

```svelte repl TimePicker Preview
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} />
```

## Imports

```svelte default TimePicker Imports
<script>
    import {TimePicker} from "@kahi-ui/framework";
</script>
```

## Now

You can enable the displaying of a "NOW" button to allow the user to set the picker to the current time, via the `now` property.

```svelte repl TimePicker Now
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} now />
```

## 12 Hour

You can have the hours render as 12-hour time (1...12 AM/PM) instead of 24-hour time (0...23) via the `hour_12` property.

```svelte repl TimePicker 12 Hour
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} hour_12 />
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte repl TimePicker Disabled
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} disabled />
```

## Highlight

> **NOTE**: By default, the current time is used.

You can select a specific timestamp to be highlighted as outlines via the `highlight` property.

```svelte repl TimePicker Highlight
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";

    const highlight = "15:00:00";
</script>

<TimePicker palette="accent" {highlight} {value} />
```

## Maximum + Minimum

You can set maximum and minimum range of selectable times via the `maximum` / `minimum` properties.

```svelte repl TimePicker Maximum + Minimum
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

```svelte repl TimePicker Custom Format
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker
    palette="accent"
    hour="numeric"
    minute="2-digit"
    second="2-digit"
    {value}
    hour_12
/>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte repl TimePicker Sizing
<script>
    import {
        Stack,
        Text,
        TimePicker,
    } from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<Stack
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
</Stack>
```
