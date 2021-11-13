# MonthStepper

`MonthStepper` is a Widget that lets users increment / decrement the currently provided month by a set number.

```svelte repl MonthStepper Preview
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" {value} />
```

## Imports

```svelte default MonthStepper Imports
<script>
    import {MonthStepper} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte repl MonthStepper Disabled
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" {value} disabled />
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte repl MonthStepper Readonly
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" {value} readonly />
```

## Maximum + Minimum

You can set maximum and minimum range of steppable months via the `maximum` / `minimum` properties.

```svelte repl MonthStepper Maximum + Minimum
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";

    const max = "2021-07-01[u-ca=gregory]";
    const min = "2021-05-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" {max} {min} {value} />
```

## Step

You can control how many months the buttons increment / decrement via the `step` property.

```svelte repl MonthStepper Step
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" step={3} {value} />
```

## Custom Format

You can customize how the month and year components of the current timestamp is displayed via the `month` and `year` properties respectively.

```svelte repl MonthStepper Custom Format
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper
    palette="accent"
    month="numeric"
    year="2-digit"
    {value}
/>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte repl MonthStepper Sizing
<script>
    import {
        MonthStepper,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <MonthStepper palette="accent" {value} />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <MonthStepper
            palette="accent"
            sizing="tiny"
            {value}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <MonthStepper
            palette="accent"
            sizing="small"
            {value}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <MonthStepper
            palette="accent"
            sizing="medium"
            {value}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <MonthStepper
            palette="accent"
            sizing="large"
            {value}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <MonthStepper
            palette="accent"
            sizing="huge"
            {value}
        />
    </div>
</Stack>
```
