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
types=["tiny", "small", "medium", "large", "huge"]

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
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties."Tab.Label"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties."Tab.Section"]]
name="loading"
description="When the property is set and the `Tab.Section` view is not active, the child content is not rendered to DOM."
types=["lazy"]
+++

# Tab

`Tab` Components are typically used for turning what would be multi-page content, into a single page with a set of radio buttons to toggle between views.

```svelte repl Tab Preview
<script>
    import {
        Heading,
        Tab,
        Text,
    } from "@kahi-ui/framework";
</script>

<Tab.Container
    logic_name="tab-preview"
    logic_state="tab-1"
    alignment_x="stretch"
>
    <Tab.Group logic_id="tab-1">
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

    <Tab.Group logic_id="tab-2">
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

    <Tab.Group logic_id="tab-3">
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
```html default Tab Imports
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

## Palette

You can change the color palette of the `Tab` radio buttons via the `palette` property.

```svelte repl Tab Palette
<script>
    import {Heading, Tab} from "@kahi-ui/framework";
</script>

<Tab.Container
    logic_name="tab-palette"
    logic_state="tab-default"
>
    <Tab.Group logic_id="tab-default">
        <Tab.Label>Tab DEFAULT</Tab.Label>

        <Tab.Section>
            <Heading>Tab DEFAULT Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-accent">
        <Tab.Label palette="accent">
            Tab ACCENT
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab ACCENT Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-dark">
        <Tab.Label palette="dark">Tab DARK</Tab.Label>

        <Tab.Section>
            <Heading>Tab DARK Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-light">
        <Tab.Label palette="light">
            Tab LIGHT
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab LIGHT Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-alert">
        <Tab.Label palette="alert">
            Tab ALERT
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab ALERT Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-affirmative">
        <Tab.Label palette="affirmative">
            Tab AFFIRMATIVE
        </Tab.Label>

        <Tab.Section>
            <Heading>Tab AFFIRMATIVE Content</Heading>
        </Tab.Section>
    </Tab.Group>

    <Tab.Group logic_id="tab-negative">
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

```svelte repl Tab Sizing
<script>
    import {
        Heading,
        Stack,
        Tab,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Tab.Container
            logic_name="tab-default"
            logic_state="tab-default-one"
        >
            <Tab.Group logic_id="tab-default-one">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-default-two">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-default-three">
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
            logic_name="tab-tiny"
            logic_state="tab-tiny-one"
            sizing="tiny"
        >
            <Tab.Group logic_id="tab-tiny-one">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-tiny-two">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-tiny-three">
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
            logic_name="tab-small"
            logic_state="tab-small-one"
            sizing="small"
        >
            <Tab.Group logic_id="tab-small-one">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-small-two">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-small-three">
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
            logic_name="tab-medium"
            logic_state="tab-medium-one"
            sizing="medium"
        >
            <Tab.Group logic_id="tab-medium-one">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-medium-two">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-medium-three">
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
            logic_name="tab-large"
            logic_state="tab-large-one"
            sizing="large"
        >
            <Tab.Group logic_id="tab-large-one">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-large-two">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-large-three">
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
            logic_name="tab-huge"
            logic_state="tab-huge-one"
            sizing="huge"
        >
            <Tab.Group logic_id="tab-huge-one">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-huge-two">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-huge-three">
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
</Stack>
```

## Alignment

You can change the alignment of each `Tab` radio button via the `alignment_x` property.

```svelte repl Tab Alignment
<script>
    import {
        Heading,
        Stack,
        Tab,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">LEFT</Text>

        <Tab.Container
            logic_name="tab-left"
            logic_state="tab-left-one"
        >
            <Tab.Group logic_id="tab-left-one">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-left-two">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-left-three">
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
            logic_name="tab-center"
            logic_state="tab-center-one"
            alignment_x="center"
        >
            <Tab.Group logic_id="tab-center-one">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-center-two">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-center-three">
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
            logic_name="tab-right"
            logic_state="tab-right-one"
            alignment_x="right"
        >
            <Tab.Group logic_id="tab-right-one">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-right-two">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-right-three">
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
            logic_name="tab-stretch"
            logic_state="tab-stretch-one"
            alignment_x="stretch"
        >
            <Tab.Group logic_id="tab-stretch-one">
                <Tab.Label palette="accent">
                    Tab One
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab One Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-stretch-two">
                <Tab.Label palette="accent">
                    Tab Two
                </Tab.Label>

                <Tab.Section>
                    <Heading>Tab Two Content</Heading>
                </Tab.Section>
            </Tab.Group>

            <Tab.Group logic_id="tab-stretch-three">
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
</Stack>
```

## Loading

> **NOTE**: Use the in-Browser developer tools to see this functionality in action.

You can customize the slot loading behavior of individual `Tab.Section` Components to not render their children, via the `loading` property.

```svelte repl Tab Loading
<script>
    import {
        Heading,
        Tab,
        Text,
    } from "@kahi-ui/framework";
</script>

<Tab.Container
    logic_name="tab-loading"
    logic_state="tab-1"
    alignment_x="stretch"
>
    <Tab.Group logic_id="tab-1">
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

    <Tab.Group logic_id="tab-2">
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

    <Tab.Group logic_id="tab-3">
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

```svelte repl Tab Anchor
<script>
    import {
        Heading,
        Tab,
        Text,
    } from "@kahi-ui/framework";
</script>

<Tab.Container
    logic_name="tab-anchor"
    logic_state="tab-1"
    alignment_x="stretch"
>
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
