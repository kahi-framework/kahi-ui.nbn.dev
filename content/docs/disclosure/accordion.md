+++
[[properties."Accordion.Container"]]
name="logic_name"
description="Sets the form [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name) attribute in a [Svelte Context](https://svelte.dev/docs#setContext) for child `Accordion.Label` buttons to group as."
types=["string"]

[[properties."Accordion.Container"]]
name="logic_state"
description="Controls the currently active `Accordion.Label` button via a [Svelte Context](https://svelte.dev/docs#setContext)."
types=["string", "string[]"]

[[properties."Accordion.Group"]]
name="logic_id"
description="Sets the element [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) attribute in a [Svelte Context](https://svelte.dev/docs#setContext) for child `Accordion.Group` / `Accordion.Label` Components to group as."
types=["string"]

[[properties."Accordion.Label"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Accordion.Section"]]
name="loading"
description="When the property is set and the `Accordion.Section` view is not active, the child content is not rendered to DOM."
types=["lazy"]

[[events."Accordion.Container"]]
name="change"
description="Fires whenever the `logic_state` changes."
types=["CustomEvent<void>"]

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
description="Controls the Y-Axis `padding-bottom` / `padding-top` used."
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

> **NOTE**: Introduced feature in `v0.4.5`.

`Accordion` Components are used for displaying related content in a collapsible stack of buttons, that toggles between views.

```svelte {title="Accordion Preview" mode="repl"}
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

<!-- prettier-ignore -->
```svelte {title="Accordion Imports"}
<script>
    import {Accordion} from "@kahi-ui/framework";

    const {
        Container,
        Label,
        Group,
        Section
    } = Accordion;
</script>
```

## Logic State

> **NOTE**: Introduced feature in `v0.5.2`.

> **WARNING**: This feature is only available in Javascript-enabled clients.

You can manually choose which `<Accordion.Section>` Components are active via the `logic_state` property.

```svelte {title="Accordion Logic State" mode="repl"}
<script>
    import {
        Accordion,
        Button,
        Heading,
        Text,
    } from "@kahi-ui/framework";

    let logic_state = "accordion-logic-state-1";
</script>

<Button
    on:click={() =>
        (logic_state = "accordion-logic-state-1")}
>
    Select Section One
</Button>

<Button
    on:click={() =>
        (logic_state = "accordion-logic-state-2")}
>
    Select Section Two
</Button>

<Button
    on:click={() =>
        (logic_state = "accordion-logic-state-3")}
>
    Select Section Three
</Button>

<Accordion.Container
    logic_name="accordion-logic-state"
    bind:logic_state
>
    <Accordion.Group
        logic_id="accordion-logic-state-1"
    >
        <Accordion.Label palette="accent">
            Section One
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

    <Accordion.Group
        logic_id="accordion-logic-state-2"
    >
        <Accordion.Label palette="accent">
            Section Two
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

    <Accordion.Group
        logic_id="accordion-logic-state-3"
    >
        <Accordion.Label palette="accent">
            Section Three
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

## Inclusive

You can change the behavior of the `Accordion` to allow multiple items to be revealed at once via the `behavior` property.

```svelte {title="Accordion Inclusive" mode="repl"}
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

## Slot

> **NOTE**: Introduced feature in `v0.5.2`.

You can customize the icons the icons that represent the if an `<Accordion.Section>` Component is open or not via the `close` / `open` slots.

```svelte {title="Accordion Slot" mode="repl"}
<script>
    import {
        Accordion,
        Heading,
        Text,
    } from "@kahi-ui/framework";
</script>

<Accordion.Container logic_name="accordion-slot">
    <Accordion.Group logic_id="accordion-slot-1">
        <Accordion.Label palette="accent">
            Section One

            <svelte:fragment slot="close">
                <Text is="span">-</Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">+</Text>
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

    <Accordion.Group logic_id="accordion-slot-2">
        <Accordion.Label palette="accent">
            Section Two

            <svelte:fragment slot="close">
                <Text is="span">-</Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">+</Text>
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

    <Accordion.Group logic_id="accordion-slot-3">
        <Accordion.Label palette="accent">
            Section Three

            <svelte:fragment slot="close">
                <Text is="span">-</Text>
            </svelte:fragment>

            <svelte:fragment slot="open">
                <Text is="span">+</Text>
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

```svelte {title="Accordion Palette" mode="repl"}
<script>
    import {
        Accordion,
        Heading,
        Text,
    } from "@kahi-ui/framework";
</script>

<Accordion.Container logic_name="accordion-palette">
    <Accordion.Group
        logic_id="accordion-palette-default"
    >
        <Accordion.Label>
            DEFAULT Section
        </Accordion.Label>

        <Accordion.Section>
            <Heading>DEFAULT Content</Heading>

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

    <Accordion.Group
        logic_id="accordion-palette-accent"
    >
        <Accordion.Label palette="accent">
            ACCENT Section
        </Accordion.Label>

        <Accordion.Section>
            <Heading>ACCENT Content</Heading>

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

    <Accordion.Group
        logic_id="accordion-palette-neutral"
    >
        <Accordion.Label palette="neutral">
            NEUTRAL Section
        </Accordion.Label>

        <Accordion.Section>
            <Heading>NEUTRAL Content</Heading>

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

    <Accordion.Group logic_id="accordion-palette-dark">
        <Accordion.Label palette="dark">
            DARK Section
        </Accordion.Label>

        <Accordion.Section>
            <Heading>DARK Content</Heading>

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

    <Accordion.Group
        logic_id="accordion-palette-light"
    >
        <Accordion.Label palette="light">
            LIGHT Section
        </Accordion.Label>

        <Accordion.Section>
            <Heading>LIGHT Content</Heading>

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

    <Accordion.Group
        logic_id="accordion-palette-alert"
    >
        <Accordion.Label palette="alert">
            ALERT Section
        </Accordion.Label>

        <Accordion.Section>
            <Heading>ALERT Content</Heading>

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

    <Accordion.Group
        logic_id="accordion-palette-affirmative"
    >
        <Accordion.Label palette="affirmative">
            AFFIRMATIVE Section
        </Accordion.Label>

        <Accordion.Section>
            <Heading>AFFIRMATIVE Content</Heading>

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

    <Accordion.Group
        logic_id="accordion-palette-informative"
    >
        <Accordion.Label palette="informative">
            INFORMATIVE Section
        </Accordion.Label>

        <Accordion.Section>
            <Heading>INFORMATIVE Content</Heading>

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

    <Accordion.Group
        logic_id="accordion-palette-negative"
    >
        <Accordion.Label palette="negative">
            NEGATIVE Section
        </Accordion.Label>

        <Accordion.Section>
            <Heading>NEGATIVE Content</Heading>

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

## Loading

> **USAGE**: Use your Browser's devtools to observe this feature.

You can customize the slot loading behavior of individual `Accordion.Section` Components to not render their children, via the `loading` property.

```svelte {title="Accordion Loading" mode="repl"}
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

You can use [`Transition`](../utilities/transition.md) Components to provide fancy switching animations.

```svelte {title="Accordion Transitions" mode="repl"}
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
