# DayPicker

`DayPicker` is a Widget that displays a calendar-style grid of days that a user can select from.

```svelte repl DayPicker Preview
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
    const value = ["2021-11-05[u-ca=gregory]"];
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
/>
```

## Imports

```svelte default DayPicker Imports
<script>
    import {DayPicker} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte repl DayPicker Disabled
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {timestamp}
    disabled
/>
```

## Disabled Days

You can disable specific days from being selected via the `disabled` property.

```svelte repl DayPicker Disabled Days
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";

    const disabled = [
        "2021-11-05[u-ca=gregory]",
        "2021-11-19[u-ca=gregory]",
    ];
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {disabled}
    {timestamp}
/>
```

## Multiple

You can allow for multiple days to be selected via the `multiple` property.

```svelte repl DayPicker Multiple
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
    const value = [
        "2021-11-05[u-ca=gregory]",
        "2021-11-19[u-ca=gregory]",
    ];
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    multiple
/>
```

## Once

You can disable selected days from being unselected after already being selected via the `once` property.

```svelte repl DayPicker Once
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
    const value = ["2021-11-05[u-ca=gregory]"];
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    once
/>
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte repl DayPicker Readonly
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {timestamp}
    readonly
/>
```

## Highlight

> **NOTE**: By default, the current date is used.

You can select a specific set of days to be highlighted as outlines via the `highlight` property.

```svelte repl DayPicker Highlight
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";

    const highlight = [
        "2021-11-11[u-ca=gregory]",
        "2021-11-12[u-ca=gregory]",
        "2021-11-13[u-ca=gregory]",
    ];
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {highlight}
    {timestamp}
/>
```

## Maximum + Minimum

You can set maximum and minimum range of selectable days via the `maximum` / `minimum` properties.

```svelte repl DayPicker Maximum + Minimum
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";

    const max = "2021-11-19[u-ca=gregory]";
    const min = "2021-11-05[u-ca=gregory]";
</script>

<DayPicker
    palette="accent"
    width="content-max"
    {max}
    {min}
    {timestamp}
/>
```

## Custom Format

You can customize how the day component of the available timestamps is displayed via the `day` and `weekday` properties respectively.

```svelte repl DayPicker Custom Format
<script>
    import {DayPicker} from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
</script>

<DayPicker
    palette="accent"
    day="numeric"
    weekday="long"
    width="content-max"
    {timestamp}
/>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte repl DayPicker Sizing
<script>
    import {
        DayPicker,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const timestamp = "2021-11-10[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <DayPicker
            palette="accent"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <DayPicker
            palette="accent"
            sizing="tiny"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <DayPicker
            palette="accent"
            sizing="small"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <DayPicker
            palette="accent"
            sizing="medium"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <DayPicker
            palette="accent"
            sizing="large"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <DayPicker
            palette="accent"
            sizing="huge"
            width="content-max"
            {timestamp}
        />
    </div>
</Stack>
```
