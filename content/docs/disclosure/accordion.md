+++
[[events."Accordion.Label"]]
name="click"
description="Fires whenever the `Accordion.Label` is clicked."
types=["MouseEvent"]

[[slots."Accordion.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Accordion.Label"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Accordion.Label"]]
name="close"
description="Slot for rendering the content (usually an icon) shown when the `Accordion.Section` can be closed."
types=["{}"]

[[slots."Accordion.Label"]]
name="open"
description="Slot for rendering the content (usually an icon) shown when the `Accordion.Section` can be opened."
types=["{}"]

[[slots."Accordion.Group"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Accordion.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties."Accordion.Container"]]
name="--accordion-item-palette-background-bold"
description="Controls the default RGB color value used for `border-color` / `color`."
types=["<r,g,b>"]

[[custom_properties."Accordion.Container"]]
name="--accordion-item-border-opacity"
description="Controls the `border-color` used for button overline."
types=["<length>"]

[[custom_properties."Accordion.Container"]]
name="--accordion-item-border-width"
description="Controls the `border-width` used for button overline."
types=["<length>"]

[[custom_properties."Accordion.Container"]]
name="--accordion-item-gap"
description="Controls the spacing gap between child elements, e.g. icons."
types=["<length>"]

[[custom_properties."Accordion.Container"]]
name="--accordion-item-padding-x"
description="Controls the X-Axis `padding-left` / `padding-right` used."
types=["<length>"]

[[custom_properties."Accordion.Container"]]
name="--accordion-item-padding-y"
description="Controls the X-Axis `padding-bottom` / `padding-top` used."
types=["<length>"]

[[custom_properties."Accordion.Container"]]
name="--accordion-item-disabled-opacity"
description="Controls the `opacity` used when disabled."
types=["<alpha-value>"]

[[custom_properties."Accordion.Container"]]
name="--accordion-item-focus-color-opacity"
description="Controls the `background` opacity used when focused."
types=["<alpha-value>"]
+++

# Accordion

...

```svelte repl Accordion Preview
<script>
    import {
        Accordion,
        Heading,
        Text,
    } from "@kahi-ui/framework";
</script>

<Accordion.Container logic_name="accordion-preview">
    <Accordion.Group logic_id="accordion-preview-1">
        <Accordion.Label palette="accent">
            Section One

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section>
            <Heading>Item One Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Accordion.Section>
    </Accordion.Group>

    <Accordion.Group logic_id="accordion-preview-2">
        <Accordion.Label palette="accent">
            Section Two

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section>
            <Heading>Item Two Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Accordion.Section>
    </Accordion.Group>

    <Accordion.Group logic_id="accordion-preview-3">
        <Accordion.Label palette="accent">
            Section Three

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section>
            <Heading>Item Three Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Accordion.Section>
    </Accordion.Group>
</Accordion.Container>
```

## Imports

```svelte default Accordion Imports
<script>
    import {Accordion} from "@kahi-ui/framework";

    const {Container, Label, Group, Section} =
        Accordion;
</script>
```

## Inclusive

You can change the behavior of the `Accordion` to allow multiple items to be revealed at once via the `behavior` property.

```svelte repl Accordion Inclusive
<script>
    import {
        Accordion,
        Heading,
        Text,
    } from "@kahi-ui/framework";
</script>

<Accordion.Container
    behavior="inclusive"
    logic_name="accordion-inclusive"
>
    <Accordion.Group logic_id="accordion-inclusive-1">
        <Accordion.Label palette="accent">
            Section One

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section>
            <Heading>Item One Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Accordion.Section>
    </Accordion.Group>

    <Accordion.Group logic_id="accordion-inclusive-2">
        <Accordion.Label palette="accent">
            Section Two

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section>
            <Heading>Item Two Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Accordion.Section>
    </Accordion.Group>

    <Accordion.Group logic_id="accordion-inclusive-3">
        <Accordion.Label palette="accent">
            Section Three

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section>
            <Heading>Item Three Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Accordion.Section>
    </Accordion.Group>
</Accordion.Container>
```

## Palette

You can change the color palette of the `Accordion` buttons via the `palette` property.

```svelte repl Accordion Palette

```

## Loading

> **NOTE**: Use the in-Browser developer tools to see this functionality in action.

You can customize the slot loading behavior of individual `Accordion.Section` Components to not render their children, via the `loading` property.

```svelte repl Accordion Loading
<script>
    import {
        Accordion,
        Heading,
        Text,
    } from "@kahi-ui/framework";
</script>

<Accordion.Container logic_name="accordion-loading">
    <Accordion.Group logic_id="accordion-loading-1">
        <Accordion.Label palette="accent">
            Section One

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section loading="lazy">
            <Heading>Item One Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Accordion.Section>
    </Accordion.Group>

    <Accordion.Group logic_id="accordion-loading-2">
        <Accordion.Label palette="accent">
            Section Two

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section loading="lazy">
            <Heading>Item Two Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Accordion.Section>
    </Accordion.Group>

    <Accordion.Group logic_id="accordion-loading-3">
        <Accordion.Label palette="accent">
            Section Three

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section loading="lazy">
            <Heading>Item Three Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Accordion.Section>
    </Accordion.Group>
</Accordion.Container>
```

## Transitions

You can use [`Transition`](../utilities/Transition.md) Components to provide fancy switching animations.

```svelte repl Accordion Transitions
<script>
    import {
        Accordion,
        Heading,
        Text,
        Transition,
    } from "@kahi-ui/framework";
</script>

<Accordion.Container
    logic_name="accordion-transitions"
>
    <Accordion.Group
        logic_id="accordion-transitions-1"
    >
        <Accordion.Label palette="accent">
            Section One

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section>
            <Transition
                animation="fade"
                variation="enter"
            >
                <Heading>Item One Content</Heading>

                <Text>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Proin
                    et consectetur orci. Curabitur a
                    egestas turpis, vitae convallis
                    sapien. Sed pellentesque rutrum
                    tellus, in iaculis dolor tincidunt
                    non. Orci varius natoque penatibus
                    et magnis dis parturient montes,
                    nascetur ridiculus mus.
                </Text>
            </Transition>
        </Accordion.Section>
    </Accordion.Group>

    <Accordion.Group
        logic_id="accordion-transitions-2"
    >
        <Accordion.Label palette="accent">
            Section Two

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section>
            <Transition
                animation="fade"
                variation="enter"
            >
                <Heading>Item Two Content</Heading>

                <Text>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Proin
                    et consectetur orci. Curabitur a
                    egestas turpis, vitae convallis
                    sapien. Sed pellentesque rutrum
                    tellus, in iaculis dolor tincidunt
                    non. Orci varius natoque penatibus
                    et magnis dis parturient montes,
                    nascetur ridiculus mus.
                </Text>
            </Transition>
        </Accordion.Section>
    </Accordion.Group>

    <Accordion.Group
        logic_id="accordion-transitions-3"
    >
        <Accordion.Label palette="accent">
            Section Three

            <svelte:fragment slot="close">
                <Text is="span">
                    &blacktriangledown;
                </Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">
                    &blacktriangleright;
                </Text>
            </svelte:fragment>
        </Accordion.Label>

        <Accordion.Section>
            <Transition
                animation="fade"
                variation="enter"
            >
                <Heading>Item Three Content</Heading>

                <Text>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Proin
                    et consectetur orci. Curabitur a
                    egestas turpis, vitae convallis
                    sapien. Sed pellentesque rutrum
                    tellus, in iaculis dolor tincidunt
                    non. Orci varius natoque penatibus
                    et magnis dis parturient montes,
                    nascetur ridiculus mus.
                </Text>
            </Transition>
        </Accordion.Section>
    </Accordion.Group>
</Accordion.Container>
```
