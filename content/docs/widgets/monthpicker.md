# MonthPicker

`MonthPicker` is a Widget that displays a fiscal quaterly grid of months that a user can select from.

```svelte repl MonthPicker Preview
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01[u-ca=gregory]";
    const value = ["2021-06-01[u-ca=gregory]"];
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
/>
```

## Imports

```svelte default MonthPicker Imports
<script>
    import {MonthPicker} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte repl MonthPicker Disabled
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01[u-ca=gregory]";
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {timestamp}
    disabled
/>
```

## Disabled Months

You can disable specific months from being selected via the `disabled` property.

```svelte repl MonthPicker Disabled Months
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01[u-ca=gregory]";

    const disabled = [
        "2021-06-01[u-ca=gregory]",
        "2021-12-01[u-ca=gregory]",
    ];
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {disabled}
    {timestamp}
/>
```

## Multiple

You can allow for multiple months to be selected via the `multiple` property.

```svelte repl MonthPicker Multiple
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01[u-ca=gregory]";
    const value = [
        "2021-06-01[u-ca=gregory]",
        "2021-12-01[u-ca=gregory]",
    ];
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    multiple
/>
```

## Once

You can disable selected months from being unselected after already being selected via the `once` property.

```svelte repl MonthPicker Once
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01[u-ca=gregory]";
    const value = ["2021-06-01[u-ca=gregory]"];
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {timestamp}
    {value}
    once
/>
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte repl MonthPicker Readonly
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01[u-ca=gregory]";
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {timestamp}
    readonly
/>
```

## Highlight

> **NOTE**: By default, the current date is used.

You can select a specific set of months to be highlighted as outlines via the `highlight` property.

```svelte repl MonthPicker Highlight
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01[u-ca=gregory]";

    const highlight = [
        "2021-10-01[u-ca=gregory]",
        "2021-11-01[u-ca=gregory]",
        "2021-12-01[u-ca=gregory]",
    ];
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {highlight}
    {timestamp}
/>
```

## Maximum + Minimum

You can set maximum and minimum range of selectable months via the `maximum` / `minimum` properties.

```svelte repl MonthPicker Maximum + Minimum
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01[u-ca=gregory]";

    const max = "2021-07-01[u-ca=gregory]";
    const min = "2021-05-01[u-ca=gregory]";
</script>

<MonthPicker
    palette="accent"
    width="content-max"
    {max}
    {min}
    {timestamp}
/>
```

## Custom Format

You can customize how the month component of the available timestamps is displayed via the `month` property.

```svelte repl MonthPicker Custom Format
<script>
    import {MonthPicker} from "@kahi-ui/framework";

    const timestamp = "2021-01-01[u-ca=gregory]";
</script>

<MonthPicker
    palette="accent"
    month="long"
    width="content-max"
    {timestamp}
/>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte repl MonthPicker Sizing
<script>
    import {
        MonthPicker,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const timestamp = "2021-01-01[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <MonthPicker
            palette="accent"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <MonthPicker
            palette="accent"
            sizing="tiny"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <MonthPicker
            palette="accent"
            sizing="small"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <MonthPicker
            palette="accent"
            sizing="medium"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <MonthPicker
            palette="accent"
            sizing="large"
            width="content-max"
            {timestamp}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <MonthPicker
            palette="accent"
            sizing="huge"
            width="content-max"
            {timestamp}
        />
    </div>
</Stack>
```
