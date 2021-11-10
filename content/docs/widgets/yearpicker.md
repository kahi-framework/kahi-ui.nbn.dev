# YearPicker

...

```svelte repl YearPicker Preview
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
    const value = ["2024-01-01[u-ca=gregory]"];
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
/>
```

## Imports

```svelte default YearPicker Imports
<script>
    import {YearPicker} from "@kahi-ui/framework";
</script>
```

## Disabled

...

```svelte repl YearPicker Disabled
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {timestamp}
    disabled
/>
```

## Disabled Years

...

```svelte repl YearPicker Disabled Years
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";

    const disabled = [
        "2025-01-01[u-ca=gregory]",
        "2023-01-01[u-ca=gregory]",
    ];
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {disabled}
    {timestamp}
/>
```

## Multiple

...

```svelte repl YearPicker Multiple
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
    const value = [
        "2025-01-01[u-ca=gregory]",
        "2023-01-01[u-ca=gregory]",
    ];
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    multiple
/>
```

## Once

...

```svelte repl YearPicker Once
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
    const value = ["2024-01-01[u-ca=gregory]"];
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    once
/>
```

## Readonly

...

```svelte repl YearPicker Readonly
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {timestamp}
    readonly
/>
```

## Highlight

...

```svelte repl YearPicker Highlight
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";

    const highlight = [
        "2025-01-01[u-ca=gregory]",
        "2026-01-01[u-ca=gregory]",
        "2027-01-01[u-ca=gregory]",
    ];
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {highlight}
    {timestamp}
/>
```

## Maximum + Minimum

...

```svelte repl YearPicker Maximum + Minimum
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";

    const max = "2025-01-01[u-ca=gregory]";
    const min = "2023-01-01[u-ca=gregory]";
</script>

<YearPicker
    palette="accent"
    width="content-max"
    {max}
    {min}
    {timestamp}
/>
```

## Custom Format

...

```svelte repl YearPicker Custom Format
<script>
    import {YearPicker} from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
</script>

<YearPicker
    palette="accent"
    year="2-digit"
    width="content-max"
    {timestamp}
/>
```

## Sizing

...

```svelte repl YearPicker Sizing
<script>
    import {
        YearPicker,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const timestamp = "2020-01-01[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <YearPicker
            palette="accent"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <YearPicker
            palette="accent"
            sizing="tiny"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <YearPicker
            palette="accent"
            sizing="small"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <YearPicker
            palette="accent"
            sizing="medium"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <YearPicker
            palette="accent"
            sizing="large"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <YearPicker
            palette="accent"
            sizing="huge"
            width="content-max"
            {timestamp}
        />
    </div>
</Stack>
```
