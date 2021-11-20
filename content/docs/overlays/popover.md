+++
[[properties.Popover]]
name="logic_id"
description="Renders a `<input role=\"presentation\" type=\"checkbox\" />` as sibling before the `Popover`, which controls the visible state via CSS."
types=["string"]

[[properties.Popover]]
name="hidden"
description="Controls when the `Popover` hides its child content."
types=["boolean", "{VIEWPORT}"]

[[properties.Popover]]
name="state"
description="Controls the visible state of the `Popover` whenever `logic_id` is set."
types=["boolean"]

[[properties.Popover]]
name="dismissible"
description="Adjusts the sibling `ContextBackdrop` to be clickable, turning off the visible state when clicked."
types=["boolean"]

[[properties.Popover]]
name="once"
description="Enables dismissing of the `Popover` whenever inner content is clicked."
types=["boolean"]

[[properties.Popover]]
name="alignment_x"
description="<strong>(`top/bottom` PLACEMENT ONLY)</strong> Adjusts where the child content will be placed within the `Popover` along the horizontal axis."
default="center"
types=["center", "left", "right"]

[[properties.Popover]]
name="alignment_y"
description="<strong>(`left/right` PLACEMENT ONLY)</strong> Adjusts where the child content will be placed within the `Popover` along the vertical axis."
default="center"
types=["center", "bottom", "top"]

[[properties.Popover]]
name="placement"
description="Adjusts where the child content will be placed within the `Popover` along the vertical axis."
default="left"
types=["top", "left", "bottom", "right"]

[[events.Popover]]
name="active"
description="Fires whenever the `Popover` is activated."
types=["CustomEvent<void>"]

[[events.Popover]]
name="dismiss"
description="Fires whenever the `Popover` is dismissed."
types=["CustomEvent<void>"]

[[slots.Popover]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Popover

`Popover` is typically used for hiding content that'll clip onto the page when activated via a button or something else.

```svelte repl Popover Preview
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

```svelte default Popover Imports
<script>
    import {Popover} from "@kahi-ui/framework";
</script>
```

## Logic ID

> **NOTE**: When you use a [`ContextButton`](../utilities/contextbutton.md) within a `Popover`, it will automatically inherit the set `logic_id`.

You can make the `Popover` toggleable via the `logic_id` property, and then referencing that with a [`Button`](../interactables/button.md).

## Hidden

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

`Popover` adds special handling for the `hidden` property, allowing you to instead customize when the child content is hidden or rendered normally.

```svelte repl Popover Hidden
<script>
    import {
        Box,
        ContextButton,
        Popover,
    } from "@kahi-ui/framework";
</script>

<Popover
    logic_id="popover-hidden"
    alignment_x="right"
    hidden="mobile"
    spacing="medium"
    dismissible
>
    <ContextButton
        palette="accent"
        hidden={["tablet", "desktop", "widescreen"]}
    >
        Open HIDDEN Popover
    </ContextButton>

    <Box
        palette="inverse"
        max_width="content-max"
        padding="medium"
    >
        This was HIDDEN on MOBILE only.
    </Box>
</Popover>
```

## Dismissible

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can optionally have the `Popover` dismissible by clicking outside the `Popover` child content via the `dismissible` property.

```svelte repl Popover Dismissible
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

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can enable having the `Popover` dismissed whenever inner content is clicked via the `once` property.

```svelte repl Popover Once
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

```svelte repl Popover State
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

```svelte repl Popover Placement
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

You can align `Popover` content via the `alignment_x` and `alignment_y` properties respectively.

```svelte repl Popover Alignment
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
