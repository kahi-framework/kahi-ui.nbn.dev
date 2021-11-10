# TimePicker

...

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

...

```svelte repl TimePicker Now
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} now />
```

## 12 Hour

...

```svelte repl TimePicker 12 Hour
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} hour_12 />
```

## Disabled

...

```svelte repl TimePicker Disabled
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker palette="accent" {value} disabled />
```

## Highlight

...

```svelte repl TimePicker Highlight
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";

    const highlight = "15:00:00";
</script>

<TimePicker palette="accent" {highlight} {value} />
```

## Maximum + Minimum

...

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

...

```svelte repl TimePicker Format
<script>
    import {TimePicker} from "@kahi-ui/framework";

    const value = "13:30:15";
</script>

<TimePicker
    palette="accent"
    hour="numeric"
    minute="numeric"
    second="numeric"
    {value}
    hour_12
/>
```

## Sizing

...

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

        <TimePicker palette="accent" sizing="tiny" {value} />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <TimePicker palette="accent" sizing="small" {value} />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <TimePicker palette="accent" sizing="medium" {value} />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <TimePicker palette="accent" sizing="large" {value} />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <TimePicker palette="accent" sizing="huge" {value} />
    </div>
</Stack>
```
