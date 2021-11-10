# YearStepper

...

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

...

```svelte repl YearStepper Disabled
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" {value} disabled />
```

## Readonly

...

```svelte repl YearStepper Readonly
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" {value} readonly />
```

## Maximum + Minimum

...

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

...

```svelte repl YearStepper Step
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" step={3} {value} />
```

## Custom Format

...

```svelte repl YearStepper Custom Format
<script>
    import {YearStepper} from "@kahi-ui/framework";

    const value = "2024-01-01[u-ca=gregory]";
</script>

<YearStepper palette="accent" year="2-digit" {value} />
```

## Sizing

...

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
