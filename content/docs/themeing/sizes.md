# Sizes

Kahi UI in its `default` theme uses [Modular Scale](https://www.modularscale.com) and stepping scaling to produce generative size tiers used throughout the Framework.

## Block Sizes

> **IMPORTANT**: Block size CSS Custom Properties are defined as a unitless multipliers, so Components can customize scaling based on context.

Kahi UI typically uses block sizes to show chunks of content in uniform sizes, such as [`Mosaic`](../layouts/mosaic.md).

```svelte {title="Sizes Block Sizes" mode="repl"}
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
            style="background:currentColor;width:calc(var(--sizes-block-nano) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--sizes-block-tiny) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--sizes-block-small) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--sizes-block-medium) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--sizes-block-large) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--sizes-block-huge) * 1rem);"
        />
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:calc(var(--sizes-block-massive) * 1rem);"
        />
    </div>
</Stack.Container>
```

## Border Sizes

Kahi UI uses border sizes to provide a standard set of border widths for Components.

```svelte {title="Sizes Border Sizes" mode="repl"}
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
            style="background:currentColor;width:var(--sizes-borders-nano);"
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:var(--sizes-borders-tiny);"
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:var(--sizes-borders-small);"
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:var(--sizes-borders-medium);"
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:var(--sizes-borders-large);"
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:var(--sizes-borders-huge);"
        />
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>

        <div
            data-height="icon-nano"
            style="background:currentColor;width:var(--sizes-borders-massive);"
        />
    </div>
</Stack.Container>
```

## Icon Sizes

Kahi UI provides icon sizes that reflect standard icon sizing used in other applications and environments.

```svelte {title="Sizes Icon Sizes" mode="repl"}
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
            style="background:currentColor;width:var(--sizes-icon-nano);height:var(--sizes-icon-nano);"
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <div
            style="background:currentColor;width:var(--sizes-icon-tiny);height:var(--sizes-icon-tiny);"
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <div
            style="background:currentColor;width:var(--sizes-icon-small);height:var(--sizes-icon-small);"
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <div
            style="background:currentColor;width:var(--sizes-icon-medium);height:var(--sizes-icon-medium);"
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <div
            style="background:currentColor;width:var(--sizes-icon-large);height:var(--sizes-icon-large);"
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <div
            style="background:currentColor;width:var(--sizes-icon-huge);height:var(--sizes-icon-huge);"
        />
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>

        <div
            style="background:currentColor;width:var(--sizes-icon-massive);height:var(--sizes-icon-massive);"
        />
    </div>
</Stack.Container>
```

## Prose Size

Kahi UI defines a single variable to determine how long a paragraph _should_ get before being broken into a new line.

```svelte {title="Sizes Prose Size" mode="repl"}
<p
    style="border:1px solid currentColor;width:var(--sizes-prose);"
>
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Proin et consectetur orci. Curabitur a
    egestas turpis, vitae convallis sapien. Sed
    pellentesque rutrum tellus, in iaculis dolor
    tincidunt non. Orci varius natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus
    mus.
</p>
```
