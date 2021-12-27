+++
[[properties."Popover.Container"]]
name="logic_id"
description="Renders a `<input role=\"presentation\" type=\"checkbox\" />` as sibling before child `<Popover.Section>`, which controls the visible state via CSS."
types=["string"]

[[properties."Popover.Container"]]
name="logic_state"
description="Controls the visible state of the `<Popover.Container>` whenever `logic_id` is set."
types=["boolean"]

[[properties."Popover.Container"]]
name="focus_target"
description="Configures the element given focus when `logic_state` is active. Otherwise, the first focusable element found will be used."
types=["null", "HTMLElement", "string"]

[[properties."Popover.Container"]]
name="dismissible"
description="Enables the user to press `ESC` to dismiss. Also enables dismissing via inner content losing focus or clicking outside of `<Popover.Section>`."
types=["boolean"]

[[properties."Popover.Container"]]
name="once"
description="Enables dismissing of the `<Popover.Container>` whenever inner content is clicked."
types=["boolean"]

[[properties."Popover.Section"]]
name="animation"
description="Selects the animation to be ran whenever `logic_state` is active."
default="clip"
types=["clip", "fade", "scale", "slide"]

[[properties."Popover.Section"]]
name="placement"
description="Adjusts where the child content will be placed within the `<Popover.Section>` along the vertical axis."
default="bottom"
types=["top", "left", "bottom", "right"]

[[properties."Popover.Section"]]
name="alignment_x"
description="**(`top/bottom` PLACEMENT ONLY)** Adjusts where the child content will be placed within the `<Popover.Section>` along the horizontal axis."
default="center"
types=["center", "left", "right"]

[[properties."Popover.Section"]]
name="alignment_y"
description="**(`left/right` PLACEMENT ONLY)** Adjusts where the child content will be placed within the `<Popover.Section>` along the vertical axis."
default="center"
types=["center", "bottom", "top"]

[[events."Popover.Container"]]
name="active"
description="Fires whenever the `<Popover.Container>` is activated."
types=["CustomEvent<void>"]

[[events."Popover.Container"]]
name="dismiss"
description="Fires whenever the `<Popover.Container>` is dismissed."
types=["CustomEvent<void>"]

[[slots."Popover.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Popover.Button"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Popover.Group"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Popover.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Popover

> **NOTE**: New since `v0.2.11`.

> **WARNING**: Received a breaking refactoring in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Popover` is typically used for hiding content that'll clip onto the page when activated via a button or something else.

```svelte {title="Popover Preview" mode="repl"}
<script>
    import {
        Card,
        ContextButton,
        Menu,
        Popover,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Popover
    logic_id="popover-preview"
    alignment_x="right"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open Popover
    </ContextButton>

    <Card.Container
        palette="auto"
        elevation="medium"
        max_width="content-max"
    >
        <Card.Section>
            <Menu.Container>
                <Menu.Button>
                    Copy
                    <Spacer
                        variation="inline"
                        spacing="medium"
                    />

                    <Text is="kbd">CTRL+C</Text>
                </Menu.Button>

                <Menu.Button>
                    Cut
                    <Spacer
                        variation="inline"
                        spacing="medium"
                    />

                    <Text is="kbd">CTRL+X</Text>
                </Menu.Button>

                <Menu.Divider />

                <Menu.Button>
                    Delete
                    <Spacer
                        variation="inline"
                        spacing="medium"
                    />

                    <Text is="kbd">DEL</Text>
                </Menu.Button>
            </Menu.Container>
        </Card.Section>
    </Card.Container>
</Popover>
```

## Imports

<!-- prettier-ignore -->
```svelte {title="Popover Imports"}
<script>
    import {Popover} from "@kahi-ui/framework";

    const {
        Container,
        Button,
        Group,
        Section
    } = Popover;
</script>
```

## Logic ID

> **NOTE**: When you use a [`ContextButton`](../utilities/contextbutton.md) within a `Popover`, it will automatically inherit the set `logic_id`.

You can make the `Popover` toggleable via the `logic_id` property, and then referencing that with a [`Button`](../interactables/button.md).

## Dismissible

> **NOTE**: Added keybinding support since `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can optionally have the `Popover` dismissible by clicking outside the `Popover` child content or pressing the `ESC` key, via the `dismissible` property.

```svelte {title="Popover Dismissible" mode="repl"}
<script>
    import {
        Box,
        ContextButton,
        Popover,
    } from "@kahi-ui/framework";
</script>

<Popover
    logic_id="popover-non-dismissible"
    alignment_x="right"
    spacing="medium"
    hidden
>
    <ContextButton palette="accent">
        Open NON DISMISSIBLE Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding="medium"
    >
        This is a NON DISMISSIBLE Popover.
    </Box>
</Popover>

<Popover
    logic_id="popover-is-dismissible"
    alignment_x="right"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open DISMISSIBLE Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding="medium"
    >
        This is a DISMISSIBLE Popover.
    </Box>
</Popover>
```

## Once

> **NOTE**: New since `v0.4.11`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can enable having the `Popover` dismissed whenever inner content is clicked via the `once` property.

```svelte {title="Popover Once" mode="repl"}
<script>
    import {
        Card,
        ContextButton,
        Menu,
        Popover,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Popover
    logic_id="popover-once"
    alignment_x="right"
    spacing="medium"
    dismissible
    hidden
    once
>
    <ContextButton palette="accent">
        Open ONCE Popover
    </ContextButton>

    <Card.Container
        palette="auto"
        elevation="medium"
        max_width="content-max"
    >
        <Card.Section>
            <Menu.Container>
                <Menu.Button>
                    Copy
                    <Spacer
                        variation="inline"
                        spacing="medium"
                    />

                    <Text is="kbd">CTRL+C</Text>
                </Menu.Button>

                <Menu.Button>
                    Cut
                    <Spacer
                        variation="inline"
                        spacing="medium"
                    />

                    <Text is="kbd">CTRL+X</Text>
                </Menu.Button>

                <Menu.Divider />

                <Menu.Button>
                    Delete
                    <Spacer
                        variation="inline"
                        spacing="medium"
                    />

                    <Text is="kbd">DEL</Text>
                </Menu.Button>
            </Menu.Container>
        </Card.Section>
    </Card.Container>
</Popover>
```

## State

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can manually open / close the `Popover` via the `state` property.

```svelte {title="Popover State" mode="repl"}
<script>
    import {
        Button,
        Card,
        ContextButton,
        Popover,
    } from "@kahi-ui/framework";

    let state = false;
</script>

<Button on:click={() => (state = !state)}>
    Toggle Popover
</Button>

<Popover
    logic_id="popover-state"
    alignment_x="right"
    spacing="medium"
    bind:state
    hidden
>
    <ContextButton palette="accent">
        Open Popover
    </ContextButton>

    <Card.Container
        palette="auto"
        elevation="medium"
        max_width="content-max"
    >
        <Card.Section>Toggleable Popover</Card.Section>
    </Card.Container>
</Popover>
```

## Placement

You can adjust which side your content is placed on via the `placement` property.

```svelte {title="Popover Placement" mode="repl"}
<script>
    import {
        Box,
        ContextButton,
        Popover,
    } from "@kahi-ui/framework";
</script>

<Popover
    logic_id="popover-placement-right"
    alignment_y="bottom"
    placement="right"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open RIGHT Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding="medium"
    >
        This is a RIGHT Popover.
    </Box>
</Popover>

<Popover
    logic_id="popover-placement-bottom"
    alignment_x="right"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open BOTTOM Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding="medium"
    >
        This is a BOTTOM Popover.
    </Box>
</Popover>
```

## Alignment

You can align `Popover` which direction the child content breaks, via the `alignment_x` and `alignment_y` properties respectively.

```svelte {title="Popover Alignment" mode="repl"}
<script>
    import {
        Box,
        ContextButton,
        Popover,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Popover
    logic_id="popover-alignment-right"
    alignment_x="right"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open RIGHT Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding_x="huge"
        padding_y="medium"
    >
        This is a RIGHT Popover.
    </Box>
</Popover>

<Popover
    logic_id="popover-alignment-center-horizontal"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open CENTER Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding_x="huge"
        padding_y="medium"
    >
        This is a CENTER Popover.
    </Box>
</Popover>

<Popover
    logic_id="popover-alignment-left"
    alignment_x="left"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open LEFT Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding_x="huge"
        padding_y="medium"
    >
        This is a LEFT Popover.
    </Box>
</Popover>

<Spacer spacing="huge" />

<Popover
    logic_id="popover-alignment-top"
    alignment_y="top"
    placement="right"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open TOP Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding_x="medium"
        padding_y="huge"
    >
        This is a TOP Popover.
    </Box>
</Popover>

<Popover
    logic_id="popover-alignment-center-vertical"
    placement="right"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open CENTER Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding_x="medium"
        padding_y="huge"
    >
        This is a CENTER Popover.
    </Box>
</Popover>

<Popover
    logic_id="popover-alignment-bottom"
    alignment_y="bottom"
    placement="right"
    spacing="medium"
    dismissible
    hidden
>
    <ContextButton palette="accent">
        Open BOTTOM Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding_x="medium"
        padding_y="huge"
    >
        This is a BOTTOM Popover.
    </Box>
</Popover>
```
