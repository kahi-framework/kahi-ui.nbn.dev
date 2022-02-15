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

> **NOTE**: Introduced feature in `v0.2.11`.

> **WARNING**: Received a breaking refactoring in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Popover` is typically used for hiding content that'll clip onto the page when activated via a button or something else.

```svelte {title="Popover Preview" mode="repl"}
<script>
    import {
        Box,
        Menu,
        Popover,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Popover.Container
    logic_id="popover-preview"
    dismissible
>
    <Popover.Button palette="accent">
        Open Menu
    </Popover.Button>

    <Popover.Section
        alignment_x="right"
        spacing="medium"
    >
        <Box
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            <Menu.Container>
                <Menu.Button>
                    Copy
                    <Spacer
                        is="span"
                        spacing="medium"
                    />

                    <Text is="kbd">CTRL+C</Text>
                </Menu.Button>

                <Menu.Button>
                    Cut
                    <Spacer
                        is="span"
                        spacing="medium"
                    />

                    <Text is="kbd">CTRL+X</Text>
                </Menu.Button>

                <Menu.Divider />

                <Menu.Button>
                    Delete
                    <Spacer
                        is="span"
                        spacing="medium"
                    />

                    <Text is="kbd">DEL</Text>
                </Menu.Button>
            </Menu.Container>
        </Box>
    </Popover.Section>
</Popover.Container>
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

You can make the `Popover` toggleable via the `logic_id` property, and then referencing that with a [`Button`](../interactables/button.md). Alternatively, `<Popover.Button>` can be used while inside a `<Popover.Container>` tree, which automatically inherits `logic_id` via [Svelte Context](https://svelte.dev/docs#setContext).

```svelte {title="Popover Logic ID" mode="repl"}
<script>
    import {Box, Popover} from "@kahi-ui/framework";
</script>

<Popover.Container logic_id="popover-logic-id">
    <Popover.Button palette="accent">
        Open Popover
    </Popover.Button>

    <Popover.Section alignment_x="right">
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            <Popover.Button
                palette="auto"
                variation="clear"
            >
                Dismiss
            </Popover.Button>
        </Box>
    </Popover.Section>
</Popover.Container>
```

## Logic State

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can manually open / close the `Popover` via the `logic_state` property.

```svelte {title="Popover Logic State" mode="repl"}
<script>
    import {
        Box,
        Button,
        Popover,
    } from "@kahi-ui/framework";

    let logic_state = false;
</script>

<Popover.Container
    logic_id="popover-logic-state"
    bind:logic_state
>
    <Popover.Button>
        Open TOGGABLE Popover
    </Popover.Button>

    <Popover.Section alignment_x="right">
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            TOGGABLE Popover
            <br />

            <Button
                on:click={() =>
                    (logic_state = !logic_state)}
            >
                Toggle Popover
            </Button>
        </Box>
    </Popover.Section>
</Popover.Container>
```

## Dismissible

> **NOTE**: Added keybinding support since `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can optionally have the `Popover` dismissible by clicking outside the `<Popover.Section>` child content, pressing the `ESC` key, or inner content losing focus, via the `dismissible` property.

```svelte {title="Popover Dismissible" mode="repl"}
<script>
    import {Box, Popover} from "@kahi-ui/framework";
</script>

<Popover.Container
    logic_id="popover-dismissible-disabled"
>
    <Popover.Button>
        Open NON-DISMISSIBLE Popover
    </Popover.Button>

    <Popover.Section alignment_x="right">
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            NON-DISMISSIBLE Popover
        </Box>
    </Popover.Section>
</Popover.Container>

<Popover.Container
    logic_id="popover-dismissible-enabled"
    dismissible
>
    <Popover.Button>
        Open DISMISSIBLE Popover
    </Popover.Button>

    <Popover.Section alignment_x="right">
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            DISMISSIBLE Popover
        </Box>
    </Popover.Section>
</Popover.Container>
```

## Once

> **NOTE**: Introduced feature in `v0.4.11`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can enable having the `Popover` dismissed whenever inner content is clicked via the `once` property.

```svelte {title="Popover Once" mode="repl"}
<script>
    import {Box, Popover} from "@kahi-ui/framework";
</script>

<Popover.Container logic_id="popover-once-disabled">
    <Popover.Button>
        Open NON-ONCE Popover
    </Popover.Button>

    <Popover.Section alignment_x="right">
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            NON-ONCE Popover
        </Box>
    </Popover.Section>
</Popover.Container>

<Popover.Container
    logic_id="popover-once-enabled"
    once
>
    <Popover.Button>Open ONCE Popover</Popover.Button>

    <Popover.Section alignment_x="right">
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            ONCE Popover
        </Box>
    </Popover.Section>
</Popover.Container>
```

## Placement

You can adjust which side your content is placed on via the `placement` property.

```svelte {title="Popover Placement" mode="repl"}
<script>
    import {Box, Popover} from "@kahi-ui/framework";
</script>

<Popover.Container
    logic_id="popover-placement-right"
    dismissible
>
    <Popover.Button palette="accent">
        Open RIGHT Popover
    </Popover.Button>

    <Popover.Section
        alignment_y="bottom"
        placement="right"
        spacing="medium"
    >
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            This is a RIGHT Popover.
        </Box>
    </Popover.Section>
</Popover.Container>

<Popover.Container
    logic_id="popover-placement-bottom"
    dismissible
>
    <Popover.Button palette="accent">
        Open BOTTOM Popover
    </Popover.Button>

    <Popover.Section
        alignment_x="right"
        spacing="medium"
    >
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            This is a BOTTOM Popover.
        </Box>
    </Popover.Section>
</Popover.Container>
```

## Alignment

You can align `Popover` which direction the child content breaks, via the `alignment_x` and `alignment_y` properties respectively.

```svelte {title="Popover Alignment" mode="repl"}
<script>
    import {
        Box,
        Popover,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Popover.Container
    logic_id="popover-alignment-x-right"
    dismissible
>
    <Popover.Button palette="accent">
        Open RIGHT X Popover
    </Popover.Button>

    <Popover.Section
        alignment_x="right"
        spacing="medium"
    >
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            This is a RIGHT X Popover.
        </Box>
    </Popover.Section>
</Popover.Container>

<Popover.Container
    logic_id="popover-alignment-x-center"
    dismissible
>
    <Popover.Button palette="accent">
        Open CENTER X Popover
    </Popover.Button>

    <Popover.Section spacing="medium">
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            This is a CENTER X Popover.
        </Box>
    </Popover.Section>
</Popover.Container>

<Popover.Container
    logic_id="popover-alignment-x-left"
    dismissible
>
    <Popover.Button palette="accent">
        Open LEFT X Popover
    </Popover.Button>

    <Popover.Section
        alignment_x="left"
        spacing="medium"
    >
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            This is a LEFT X Popover.
        </Box>
    </Popover.Section>
</Popover.Container>

<Spacer spacing="huge" />

<Popover.Container
    logic_id="popover-alignment-y-top"
    dismissible
>
    <Popover.Button palette="accent">
        Open TOP Y Popover
    </Popover.Button>

    <Popover.Section
        placement="right"
        alignment_y="top"
        spacing="medium"
    >
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            This is a TOP Y Popover.
        </Box>
    </Popover.Section>
</Popover.Container>

<Popover.Container
    logic_id="popover-alignment-y-center"
    dismissible
>
    <Popover.Button palette="accent">
        Open CENTER Y Popover
    </Popover.Button>

    <Popover.Section
        placement="right"
        spacing="medium"
    >
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            This is a CENTER Y Popover.
        </Box>
    </Popover.Section>
</Popover.Container>

<Popover.Container
    logic_id="popover-alignment-y-bottom"
    dismissible
>
    <Popover.Button palette="accent">
        Open BOTTOM Y Popover
    </Popover.Button>

    <Popover.Section
        placement="right"
        alignment_y="bottom"
        spacing="medium"
    >
        <Box
            palette="inverse"
            elevation="high"
            padding="medium"
            shape="rounded"
        >
            This is a BOTTOM Y Popover.
        </Box>
    </Popover.Section>
</Popover.Container>
```
