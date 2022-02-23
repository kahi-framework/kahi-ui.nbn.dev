+++
[[properties."Tab.Container"]]
name="logic_name"
description="Sets the form [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name) attribute in a [Svelte Context](https://svelte.dev/docs#setContext) for child `Tab.Label` radio buttons to group as."
types=["string"]

[[properties."Tab.Container"]]
name="logic_state"
description="Controls the currently active `Tab.Label` radio button via a [Svelte Context](https://svelte.dev/docs#setContext)."
types=["string"]

[[properties."Tab.Container"]]
name="alignment_x"
description="Adjusts where the `Tab.Anchor` / `Tab.Label` radio buttons are, along the horizontal axis."
types=["center", "stretch", "left", "right"]

[[properties."Tab.Container"]]
name="sizing"
description="Sets the size of each `Tab.Anchor` / `Tab.Label` radio buttons."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties."Tab.Group"]]
name="logic_id"
description="Sets the element [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) attribute in a [Svelte Context](https://svelte.dev/docs#setContext) for child `Tab.Group` / `Tab.Label` Components to group as."
types=["string"]

[[properties."Tab.Anchor"]]
name="current"
description="Changes the [`aria-current`](https://www.digitala11y.com/aria-current-state) attribute, telling screen readers how to handle the link."
types=["date", "location", "page", "step", "time", "true"]

[[properties."Tab.Anchor"]]
name="href"
description="Changes the URL that `Tab.Anchor` navigates end-users to when clicked."
types=["string"]

[[properties."Tab.Anchor"]]
name="rel"
description="Sets how the `Tab.Anchor` relates to the current page, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) for more information."
types=["string"]

[[properties."Tab.Anchor"]]
name="target"
description="Sets the target of the `Tab.Anchor` being navigated, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) for more information."
types=["string"]

[[properties."Tab.Anchor"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Tab.Label"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Tab.Section"]]
name="loading"
description="When the property is set and the `Tab.Section` view is not active, the child content is not rendered to DOM."
types=["lazy"]

[[events."Tab.Container"]]
name="change"
description="Fires whenever the `logic_state` changes."
types=["CustomEvent<void>"]

[[slots."Tab.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Tab.Anchor"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Tab.Label"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Tab.Group"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Tab.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties."Tab.Container"]]
name="--tab-item-palette-background-bold"
description="Controls the default RGB color value used for `border-color` / `color`."
types=["<r,g,b>"]

[[custom_properties."Tab.Container"]]
name="--tab-item-sizing-text-size"
description="Controls the default `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties."Tab.Container"]]
name="--tab-item-sizing-text-line-height"
description="Controls the default `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties."Tab.Container"]]
name="--tab-item-border-width"
description="Controls the `border-width` used for button underline."
types=["<length>"]

[[custom_properties."Tab.Container"]]
name="--tab-item-gap"
description="Controls the spacing gap between child elements, e.g. icons."
types=["<length>"]

[[custom_properties."Tab.Container"]]
name="--tab-item-padding-x"
description="Controls the X-Axis `padding-left` / `padding-right` used."
types=["<length>"]

[[custom_properties."Tab.Container"]]
name="--tab-item-padding-y"
description="Controls the X-Axis `padding-bottom` / `padding-top` used."
types=["<length>"]

[[custom_properties."Tab.Container"]]
name="--tab-item-disabled-opacity"
description="Controls the `opacity` used when disabled."
types=["<alpha-value>"]

[[custom_properties."Tab.Container"]]
name="--tab-item-focus-color-opacity"
description="Controls the `background` opacity used when focused."
types=["<alpha-value>"]

[[custom_properties."Tab.Container"]]
name="--tab-section-border-opacity"
description="Controls the `border-color` opacity used for tab track."
types=["<alpha-value>"]

[[custom_properties."Tab.Container"]]
name="--tab-section-border-width"
description="Controls the `border-width` used for tab track."
types=["<length>"]
+++

# Tab

> **NOTE**: Introduced feature in `v0.3.1`.

`Tab` Components are used for turning what would be multi-page content, into a block of multiple views with a set of radio buttons to toggle between.

```svelte {title="Tab Preview" mode="repl"}
<script>
    import {
        Heading,
        Tab,
        Text,
    } from "@kahi-ui/framework";
</script>

<Tab.Container
    logic_name="tab-preview"
    logic_state="tab-preview-1"
    alignment_x="stretch"
>
    <Tab.Group logic_id="tab-preview-1">
        <Tab.Label palette="accent">Tab One</Tab.Label>

        <Tab.Section>
            <Heading>Tab One Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien.
            </Text>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-preview-2">
        <Tab.Label palette="accent">Tab Two</Tab.Label>

        <Tab.Section>
            <Heading>Tab Two Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien.
            </Text>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-preview-3">
        <Tab.Label palette="accent">
            Tab Three
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab Three Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien.
            </Text>
        </Tab.Section>
    </Tab.Group>
</Tab.Container>
```

## Imports

<!-- prettier-ignore -->
```svelte {title="Tab Imports"}
<script>
    import {Tab} from "@kahi-ui/framework";

    const {
        Container,
        Anchor,
        Label,
        Group,
        Section,
    } = Tab;
</script>
```

## Logic State

> **NOTE**: Introduced feature in `v0.5.2`.

> **WARNING**: This feature is only available in Javascript-enabled clients.

You can manually choose which `<Tab.Section>` Component is active via the `logic_state` property.

```svelte {title="Tab Logic State" mode="repl"}
<script>
    import {
        Button,
        Heading,
        Tab,
        Text,
    } from "@kahi-ui/framework";

    let logic_state = "tab-logic-state-1";
</script>

<Button
    on:click={() =>
        (logic_state = "tab-logic-state-1")}
>
    Select Tab One
</Button>

<Button
    on:click={() =>
        (logic_state = "tab-logic-state-2")}
>
    Select Tab Two
</Button>

<Button
    on:click={() =>
        (logic_state = "tab-logic-state-3")}
>
    Select Tab Three
</Button>

<Tab.Container
    logic_name="tab-logic-state"
    alignment_x="stretch"
    bind:logic_state
>
    <Tab.Group logic_id="tab-logic-state-1">
        <Tab.Label palette="accent">Tab One</Tab.Label>

        <Tab.Section>
            <Heading>Tab One Content</Heading>

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
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-logic-state-2">
        <Tab.Label palette="accent">Tab Two</Tab.Label>

        <Tab.Section>
            <Heading>Tab Two Content</Heading>

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
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-logic-state-3">
        <Tab.Label palette="accent">
            Tab Three
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab Three Content</Heading>

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
        </Tab.Section>
    </Tab.Group>
</Tab.Container>
```

## Palette

You can change the color palette of the `Tab` radio buttons via the `palette` property.

```svelte {title="Tab Palette" mode="repl"}
<script>
    import {Heading, Tab} from "@kahi-ui/framework";
</script>

<Tab.Container
    logic_name="tab-palette"
    logic_state="tab-palette-default"
>
    <Tab.Group logic_id="tab-palette-default">
        <Tab.Label>Tab DEFAULT</Tab.Label>

        <Tab.Section>
            <Heading>Tab DEFAULT Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-palette-accent">
        <Tab.Label palette="accent">
            Tab ACCENT
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab ACCENT Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-palette-neutral">
        <Tab.Label palette="neutral">
            Tab NEUTRAL
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab NEUTRAL Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-palette-dark">
        <Tab.Label palette="dark">Tab DARK</Tab.Label>

        <Tab.Section>
            <Heading>Tab DARK Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-palette-light">
        <Tab.Label palette="light">
            Tab LIGHT
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab LIGHT Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-palette-alert">
        <Tab.Label palette="alert">
            Tab ALERT
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab ALERT Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-palette-affirmative">
        <Tab.Label palette="affirmative">
            Tab AFFIRMATIVE
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab AFFIRMATIVE Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-palette-informative">
        <Tab.Label palette="informative">
            Tab NEGATIVE
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab INFORMATIVE Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-palette-negative">
        <Tab.Label palette="negative">
            Tab NEGATIVE
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab NEGATIVE Content</Heading>
        </Tab.Section>
    </Tab.Group>
</Tab.Container>
```

## Sizing

You can alter how large each `Tab` radio button should be via the `sizing` property.

```svelte {title="Tab Sizing" mode="repl"}
<script>
    import {
        Heading,
        Stack,
        Tab,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Tab.Container
            logic_name="tab-sizing-default"
            logic_state="tab-sizing-default-1"
        >
            <Tab.Group logic_id="tab-sizing-default-1">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-default-2">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-default-3">
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>

    <div>
        <Text is="strong">NANO</Text>

        <Tab.Container
            logic_name="tab-sizing-nano"
            logic_state="tab-sizing-nano-1"
            sizing="nano"
        >
            <Tab.Group logic_id="tab-sizing-nano-1">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-nano-2">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-nano-3">
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <Tab.Container
            logic_name="tab-sizing-tiny"
            logic_state="tab-sizing-tiny-1"
            sizing="tiny"
        >
            <Tab.Group logic_id="tab-sizing-tiny-1">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-tiny-2">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-tiny-3">
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Tab.Container
            logic_name="tab-sizing-small"
            logic_state="tab-sizing-small-1"
            sizing="small"
        >
            <Tab.Group logic_id="tab-sizing-small-1">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-small-2">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-small-3">
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Tab.Container
            logic_name="tab-sizing-medium"
            logic_state="tab-sizing-medium-1"
            sizing="medium"
        >
            <Tab.Group logic_id="tab-sizing-medium-1">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-medium-2">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-medium-3">
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Tab.Container
            logic_name="tab-sizing-large"
            logic_state="tab-sizing-large-1"
            sizing="large"
        >
            <Tab.Group logic_id="tab-sizing-large-1">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-large-2">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-large-3">
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Tab.Container
            logic_name="tab-sizing-huge"
            logic_state="tab-sizing-huge-1"
            sizing="huge"
        >
            <Tab.Group logic_id="tab-sizing-huge-1">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-huge-2">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-huge-3">
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>

        <Tab.Container
            logic_name="tab-sizing-massive"
            logic_state="tab-sizing-massive-1"
            sizing="massive"
        >
            <Tab.Group logic_id="tab-sizing-massive-1">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-massive-2">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-sizing-massive-3">
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>
</Stack.Container>
```

## Alignment

You can change the alignment of each `Tab` radio button via the `alignment_x` property.

```svelte {title="Tab Alignment" mode="repl"}
<script>
    import {
        Heading,
        Stack,
        Tab,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium">
    <div>
        <Text is="strong">LEFT</Text>

        <Tab.Container
            logic_name="tab-alignment-left"
            logic_state="tab-alignment-left-1"
        >
            <Tab.Group logic_id="tab-alignment-left-1">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-alignment-left-2">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-alignment-left-3">
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>

    <div>
        <Text is="strong">CENTER</Text>

        <Tab.Container
            logic_name="tab-alignment-center"
            logic_state="tab-alignment-center-1"
            alignment_x="center"
        >
            <Tab.Group
                logic_id="tab-alignment-center-1"
            >
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group
                logic_id="tab-alignment-center-2"
            >
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group
                logic_id="tab-alignment-center-3"
            >
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>

    <div>
        <Text is="strong">RIGHT</Text>

        <Tab.Container
            logic_name="tab-alignment-right"
            logic_state="tab-alignment-right-1"
            alignment_x="right"
        >
            <Tab.Group
                logic_id="tab-alignment-right-1"
            >
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group
                logic_id="tab-alignment-right-2"
            >
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group
                logic_id="tab-alignment-right-3"
            >
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>

    <div>
        <Text is="strong">STRETCH</Text>

        <Tab.Container
            logic_name="tab-alignment-stretch"
            logic_state="tab-alignment-stretch-1"
            alignment_x="stretch"
        >
            <Tab.Group
                logic_id="tab-alignment-stretch-1"
            >
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group
                logic_id="tab-alignment-stretch-2"
            >
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group
                logic_id="tab-alignment-stretch-3"
            >
                <Tab.Label palette="accent">
                    Tab Three
                </Tab.Label>

                <Tab.Section>
                    <Heading>
                        Tab Three Content
                    </Heading>
                </Tab.Section>
            </Tab.Group>
        </Tab.Container>
    </div>
</Stack.Container>
```

## Loading

> **USAGE**: Use your Browser's devtools to observe this feature.

You can customize the slot loading behavior of individual `Tab.Section` Components to not render their children, via the `loading` property.

```svelte {title="Tab Loading" mode="repl"}
<script>
    import {
        Heading,
        Tab,
        Text,
    } from "@kahi-ui/framework";
</script>

<Tab.Container
    logic_name="tab-loading"
    logic_state="tab-lazy-1"
    alignment_x="stretch"
>
    <Tab.Group logic_id="tab-lazy-1">
        <Tab.Label palette="accent">Tab One</Tab.Label>

        <Tab.Section loading="lazy">
            <Heading>Tab One Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien.
            </Text>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-lazy-2">
        <Tab.Label palette="accent">Tab Two</Tab.Label>

        <Tab.Section loading="lazy">
            <Heading>Tab Two Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien.
            </Text>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-lazy-3">
        <Tab.Label palette="accent">
            Tab Three
        </Tab.Label>

        <Tab.Section loading="lazy">
            <Heading>Tab Three Content</Heading>

            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien.
            </Text>
        </Tab.Section>
    </Tab.Group>
</Tab.Container>
```

## Anchor

You can substitute `Tab.Label` for `Tab.Anchor` to support per-page tabbed views.

```svelte {title="Tab Anchor" mode="repl"}
<script>
    import {
        Heading,
        Tab,
        Text,
    } from "@kahi-ui/framework";
</script>

<Tab.Container alignment_x="stretch">
    <Tab.Anchor
        current="page"
        href="#"
        palette="accent"
    >
        Tab One
    </Tab.Anchor>

    <Tab.Section>
        <Heading>Tab One Content</Heading>

        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien.
        </Text>
    </Tab.Section>

    <Tab.Anchor href="#" palette="accent">
        Tab Two
    </Tab.Anchor>

    <Tab.Section>...</Tab.Section>

    <Tab.Anchor href="#" palette="accent">
        Tab Three
    </Tab.Anchor>

    <Tab.Section>...</Tab.Section>
</Tab.Container>
```

## Transitions

You can use [`Transition`](../utilities/transition.md) Components to provide fancy switching animations.

```svelte {title="Tab Transitions" mode="repl"}
<script>
    import {
        Heading,
        Tab,
        Text,
        Transition,
    } from "@kahi-ui/framework";
</script>

<Tab.Container
    logic_name="tab-transition"
    logic_state="tab-transition-1"
    alignment_x="stretch"
>
    <Tab.Group logic_id="tab-transition-1">
        <Tab.Label palette="accent">Tab One</Tab.Label>

        <Tab.Section>
            <Transition
                animation="fade"
                variation="enter"
            >
                <Heading>Tab One Content</Heading>

                <Text>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Proin
                    et consectetur orci. Curabitur a
                    egestas turpis, vitae convallis
                    sapien.
                </Text>
            </Transition>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-transition-2">
        <Tab.Label palette="accent">Tab Two</Tab.Label>

        <Tab.Section>
            <Transition
                animation="fade"
                variation="enter"
            >
                <Heading>Tab Two Content</Heading>

                <Text>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Proin
                    et consectetur orci. Curabitur a
                    egestas turpis, vitae convallis
                    sapien.
                </Text>
            </Transition>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-transition-3">
        <Tab.Label palette="accent">
            Tab Three
        </Tab.Label>

        <Tab.Section>
            <Transition
                animation="fade"
                variation="enter"
            >
                <Heading>Tab Three Content</Heading>

                <Text>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Proin
                    et consectetur orci. Curabitur a
                    egestas turpis, vitae convallis
                    sapien.
                </Text>
            </Transition>
        </Tab.Section>
    </Tab.Group>
</Tab.Container>
```
