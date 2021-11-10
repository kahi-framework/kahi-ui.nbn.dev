# MonthStepper

...

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

...

```svelte repl MonthStepper Disabled
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" {value} disabled />
```

## Readonly

...

```svelte repl MonthStepper Readonly
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" {value} readonly />
```

## Maximum + Minimum

...

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

...

```svelte repl MonthStepper Step
<script>
    import {MonthStepper} from "@kahi-ui/framework";

    const value = "2021-06-01[u-ca=gregory]";
</script>

<MonthStepper palette="accent" step={3} {value} />
```

## Custom Format

...

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

...

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
