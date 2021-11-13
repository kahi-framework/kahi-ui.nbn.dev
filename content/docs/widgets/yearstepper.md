# YearStepper

`YearStepper` is a Widget that lets users increment / decrement the currently provided year by a set number.

```svelte repl YearStepper Preview
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" {value} />
```

## Imports

```svelte default YearStepper Imports
<script>
    import {YearStepper} from "@kahi-ui/framework";
</script>
```

## Disabled

You can disable all interactivity via the `disabled` property.

```svelte repl YearStepper Disabled
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" {value} disabled />
```

## Readonly

You can disable interactivity without changing the visuals via the `readonly` property.

```svelte repl YearStepper Readonly
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" {value} readonly />
```

## Maximum + Minimum

You can set maximum and minimum range of steppable years via the `maximum` / `minimum` properties.

```svelte repl YearStepper Maximum + Minimum
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";

    const max = "2025-01-01[u-ca=gregory]";
    const min = "2023-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" {max} {min} {value} />
```

## Step

You can control how many years the buttons increment / decrement via the `step` property.

```svelte repl YearStepper Step
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" step={3} {value} />
```

## Custom Format

You can customize how the year component of the current timestamp is displayed via the `year` property.

```svelte repl YearStepper Custom Format
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" year="2-digit" {value} />
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte repl YearStepper Sizing
<script>
    import {
        YearStepper,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <YearStepper palette="accent" {value} />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <YearStepper
            palette="accent"
            sizing="tiny"
            {value}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <YearStepper
            palette="accent"
            sizing="small"
            {value}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <YearStepper
            palette="accent"
            sizing="medium"
            {value}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <YearStepper
            palette="accent"
            sizing="large"
            {value}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <YearStepper
            palette="accent"
            sizing="huge"
            {value}
        />
    </div>
</Stack>
```
