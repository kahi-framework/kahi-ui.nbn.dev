# Elevations

Kahi UI uses box shadows to convey the physicality of "how far hovering above the page" any given Component is.

```svelte {title="Elevations Preview" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="large"
    variation="wrap"
>
    <div>
        <Text is="strong">LOWEST</Text>

        <div
            data-size="icon-massive"
            style="box-shadow:var(--elevations-lowest);"
        />
    </div>

    <div>
        <Text is="strong">LOWER</Text>

        <div
            data-size="icon-massive"
            style="box-shadow:var(--elevations-lower);"
        />
    </div>

    <div>
        <Text is="strong">LOW</Text>

        <div
            data-size="icon-massive"
            style="box-shadow:var(--elevations-low);"
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <div
            data-size="icon-massive"
            style="box-shadow:var(--elevations-medium);"
        />
    </div>

    <div>
        <Text is="strong">HIGH</Text>

        <div
            data-size="icon-massive"
            style="box-shadow:var(--elevations-high);"
        />
    </div>

    <div>
        <Text is="strong">HIGHER</Text>

        <div
            data-size="icon-massive"
            style="box-shadow:var(--elevations-higher);"
        />
    </div>

    <div>
        <Text is="strong">HIGHEST</Text>

        <div
            data-size="icon-massive"
            style="box-shadow:var(--elevations-highest);"
        />
    </div>
</Stack.Container>
```
