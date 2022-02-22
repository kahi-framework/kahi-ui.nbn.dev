# Spacings

> **IMPORTANT**: Spacing CSS Custom Properties are defined as a unitless multipliers, so Components can customize scaling based on context.

Kahi UI in its `default` theme uses [Modular Scale](https://www.modularscale.com) to produce generative scaling between tiers spacing used throughout the Framework.

## Block Spacings

Kahi UI typically uses block spacing for more obvious distinctions chunks of content, such as spacing between grid items.

```svelte {title="Spacings Block Spacings" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="large"
    variation="wrap"
>
    <div>
        <Text is="strong">NANO</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-block-nano) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-block-tiny) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-block-small) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-block-medium) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-block-large) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-block-huge) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-block-massive) * 1rem);"
        />
    </div>
</Stack.Container>
```

## Inline Spacings

Kahi UI typically uses inline spacing for more fine-grained visuals where subtlely is needed. Such as spacing between letters in categorization legends.

```svelte {title="Spacings Inline Spacings" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="large"
    variation="wrap"
>
    <div>
        <Text is="strong">NANO</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-inline-nano) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-inline-tiny) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-inline-small) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-inline-medium) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-inline-large) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-inline-huge) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--spacings-inline-massive) * 1rem);"
        />
    </div>
</Stack.Container>
```
