# YearPicker

`YearPicker` is a Widget that displays a decade-based grid of days that a user can select from.

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

You can disable all interactivity via the `disabled` property.

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

You can disable specific years from being selected via the `disabled` property.

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

You can allow for multiple years to be selected via the `multiple` property.

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

You can disable selected years from being unselected after already being selected via the `once` property.

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

You can disable interactivity without changing the visuals via the `readonly` property.

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

> **NOTE**: By default, the current date is used.

You can select a specific set of years to be highlighted as outlines via the `highlight` property.

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

You can set maximum and minimum range of selectable years via the `maximum` / `minimum` properties.

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

You can customize how the year component of the available timestamps is displayed via the `year` property.

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

You can alter the overall spacing / sizing look and feel via the `sizing` property.

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
