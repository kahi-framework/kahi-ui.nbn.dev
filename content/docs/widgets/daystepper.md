# DayStepper

...

```svelte repl DayStepper Preview
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<DayStepper palette="accent" {value} />
```

## Imports

```svelte default DayStepper Imports
<script>
    import {DayStepper} from "@kahi-ui/framework";
</script>
```

## Disabled

...

```svelte repl DayStepper Disabled
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<DayStepper palette="accent" {value} disabled />
```

## Readonly

...

```svelte repl DayStepper Readonly
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<DayStepper palette="accent" {value} readonly />
```

## Maximum + Minimum

...

```svelte repl DayStepper Maximum + Minimum
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";

    const max = "2021-11-13[u-ca=gregory]";
    const min = "2021-11-07[u-ca=gregory]";
</script>

<DayStepper palette="accent" {max} {min} {value} />
```

## Step

...

```svelte repl DayStepper Step
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<DayStepper palette="accent" step={3} {value} />
```

## Custom Format

...

```svelte repl DayStepper Custom Format
<script>
    import {DayStepper} from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<DayStepper
    palette="accent"
    day="numeric"
    month="numeric"
    weekday="short"
    {value}
/>
```

## Sizing

...

```svelte repl DayStepper Sizing
<script>
    import {
        DayStepper,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const value = "2021-11-10[u-ca=gregory]";
</script>

<Stack
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <DayStepper palette="accent" {value} />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <DayStepper
            palette="accent"
            sizing="tiny"
            {value}
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <DayStepper
            palette="accent"
            sizing="small"
            {value}
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <DayStepper
            palette="accent"
            sizing="medium"
            {value}
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <DayStepper
            palette="accent"
            sizing="large"
            {value}
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <DayStepper
            palette="accent"
            sizing="huge"
            {value}
        />
    </div>
</Stack>
```
