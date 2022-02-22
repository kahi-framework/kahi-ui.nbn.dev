# Fonts

> **IMPORTANT**: Font CSS Custom Properties are defined as a unitless multipliers, so Components can customize scaling based on context.

Kahi UI in its `default` theme uses [Modular Scale](https://www.modularscale.com) to produce generative scaling between tiers of font sizes and line heights.

## Line Heights

Kahi UI typically uses line heights, that is, spacing between lines of text, to make things easier to read or to provide extra padding.

```svelte {title="Fonts Line Heights" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div style="max-width:25ch;">
        <Text is="strong">NANO</Text>

        <p
            style="line-height:calc(var(--fonts-line-heights-nano) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">TINY</Text>

        <p
            style="line-height:calc(var(--fonts-line-heights-tiny) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">SMALL</Text>

        <p
            style="line-height:calc(var(--fonts-line-heights-small) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">MEDIUM</Text>

        <p
            style="line-height:calc(var(--fonts-line-heights-medium) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">LARGE</Text>

        <p
            style="line-height:calc(var(--fonts-line-heights-large) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">HUGE</Text>

        <p
            style="line-height:calc(var(--fonts-line-heights-huge) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">MASSIVE</Text>

        <p
            style="line-height:calc(var(--fonts-line-heights-massive) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>
</Stack.Container>
```

## Inline Sizes

Kahi UI typically uses inline font sizes for text that is meant to be composed inside other content. Or blocks of text that the user is meant to read.

```svelte {title="Fonts Inline Sizes" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div style="max-width:25ch;">
        <Text is="strong">NANO</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-inline-nano) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">TINY</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-inline-tiny) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">SMALL</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-inline-small) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">MEDIUM</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-inline-medium) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">LARGE</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-inline-large) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">HUGE</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-inline-huge) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">MASSIVE</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-inline-massive) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </p>
    </div>
</Stack.Container>
```

## Block Sizes

Kahi UI typically uses block font sizes for giant headlining text that is small in length that needs to capture the user's attention.

```svelte {title="Fonts Block Sizes" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div style="max-width:25ch;">
        <Text is="strong">NANO</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-block-nano) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">TINY</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-block-tiny) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">SMALL</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-block-small) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">MEDIUM</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-block-medium) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">LARGE</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-block-large) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">HUGE</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-block-huge) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </p>
    </div>

    <div style="max-width:25ch;">
        <Text is="strong">MASSIVE</Text>

        <p
            style="font-size:calc(var(--fonts-sizes-block-massive) * 1rem);"
        >
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
        </p>
    </div>
</Stack.Container>
```
