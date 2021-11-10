# DayPicker

...

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

...

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

...

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

...

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

...

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

...

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

## Maximum + Minimum

...

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

...

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

...

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
