+++
[[properties.Offscreen]]
name="logic_id"
description="Renders a `<input role=\"presentation\" type=\"checkbox\" />` as sibling before the `Offscreen`, which controls the visible state via CSS."
types=["string"]

[[properties.Offscreen]]
name="hidden"
description="Controls when the `Offscreen` hides its child content."
types=["boolean", "{VIEWPORT}"]

[[properties.Offscreen]]
name="state"
description="Controls the visible state of the `Offscreen` whenever `logic_id` is set."
types=["boolean"]

[[properties.Offscreen]]
name="captive"
description="Renders a `ContextBackdrop` as a sibling before the `Offscreen`, which becomes active whenever the visible state is active."
types=["boolean"]

[[properties.Offscreen]]
name="dismissible"
description="Adjusts the sibling `ContextBackdrop` to be clickable, turning off the visible state when clicked."
types=["boolean"]

[[properties.Offscreen]]
name="once"
description="Enables dismissing of the `Offscreen` whenever inner content is clicked."
types=["boolean"]

[[properties.Offscreen]]
name="alignment"
description="Adjusts where the child content will be placed within the `Offscreen` along both axis."
default="stretch"
types=["center", "stretch"]

[[properties.Offscreen]]
name="alignment_x"
description="<strong>(`top/bottom` PLACEMENT ONLY)</strong> Adjusts where the child content will be placed within the `Offscreen` along the horizontal axis."
default="stretch"
types=["center", "stretch", "left", "right"]

[[properties.Offscreen]]
name="alignment_y"
description="<strong>(`left/right` PLACEMENT ONLY)</strong> Adjusts where the child content will be placed within the `Offscreen` along the vertical axis."
default="stretch"
types=["center", "stretch", "bottom", "top"]

[[properties.Offscreen]]
name="placement"
description="Adjusts where the child content will be placed within the `Offscreen` along the vertical axis."
default="left"
types=["top", "left", "bottom", "right"]

[[events.Offscreen]]
name="active"
description="Fires whenever the `Offscreen` is activated."
types=["CustomEvent<void>"]

[[events.Offscreen]]
name="dismiss"
description="Fires whenever the `Offscreen` is dismissed."
types=["CustomEvent<void>"]

[[slots.Offscreen]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Offscreen

> **NOTE**: New since `v0.2.11`.

> **WARNING**: This Component will be merged with `Overlay` in `v0.5.0`.

`Offscreen` is typically used for hiding content that'll slide into when actived via a button or something else.

```svelte {title="Offscreen Preview" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-preview" palette="accent">
    Open Offscreen
</Button>

<Offscreen
    logic_id="offscreen-preview"
    placement="top"
    hidden
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            Well, hello there!
        </Stack>
    </Box>
</Offscreen>
```

## Imports

```svelte {title="Offscreen Imports"}
<script>
    import {Offscreen} from "@kahi-ui/framework";
</script>
```

## Logic ID

> **NOTE**: When you use a [`ContextButton`](../utilities/contextbutton.md) within a `Offscreen`, it will automatically inherit the set `logic_id`.

You can make the `Offscreen` toggleable via the `logic_id` property, and then referencing that with a [`Button`](../interactables/button.md).

## Hidden

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

`Offscreen` adds special handling for the `hidden` property, allowing you to instead customize when the child content is hidden offscreen or rendered normally.

```svelte {title="Offscreen Hidden" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button
    for="offscreen-hidden"
    palette="accent"
    hidden={["tablet", "desktop", "widescreen"]}
>
    Open HIDDEN Offscreen
</Button>

<Offscreen
    logic_id="offscreen-hidden"
    placement="top"
    hidden="mobile"
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
                hidden={[
                    "tablet",
                    "desktop",
                    "widescreen",
                ]}
            >
                X
            </ContextButton>

            I was HIDDEN on MOBILE!
        </Stack>
    </Box>
</Offscreen>
```

## Auto Focus

> **NOTE**: New since `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

Whenever the `Offscreen` becomes active, focus is moved to the first found focusable element, then restored to the previously focused element when dismissed.

```svelte {title="Offscreen Auto Focus" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-auto-focus" palette="accent">
    Open AUTO FOCUS Offscreen
</Button>

<Offscreen
    logic_id="offscreen-auto-focus"
    placement="top"
    hidden
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
                tabindex="1"
            >
                Index #1
            </ContextButton>

            <ContextButton
                palette="light"
                variation="clear"
                tabindex="2"
            >
                Index #2
            </ContextButton>
        </Stack>
    </Box>
</Offscreen>
```

You can customize which element is focused on activation with a reference or CSS Selector, via the `focus_target` property

```svelte {title="Offscreen Auto Focus Target" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";

    let target_element;
</script>

<Button
    for="offscreen-auto-focus-target"
    palette="accent"
>
    Open AUTO FOCUS Offscreen
</Button>

<Offscreen
    logic_id="offscreen-auto-focus-target"
    placement="top"
    focus_target={target_element}
    hidden
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
                tabindex="1"
            >
                Index #1
            </ContextButton>

            <ContextButton
                bind:element={target_element}
                palette="light"
                variation="clear"
                tabindex="2"
            >
                Index #2
            </ContextButton>
        </Stack>
    </Box>
</Offscreen>
```

## Focus Trapping

> **NOTE**: New since `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

> **NOTE**: Click the `Link` button, to test out the functionality in the Playground.

While the `Offscreen` is active, focus movement is trapped within the first and last found focusable elements.

```svelte {title="Offscreen Focus Trapping" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button
    for="offscreen-focus-trapping"
    palette="accent"
>
    Open FOCUS TRAPPED Offscreen
</Button>

<Offscreen
    logic_id="offscreen-focus-trapping"
    placement="top"
    hidden
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
                tabindex="3"
            >
                Index #3
            </ContextButton>

            <ContextButton
                palette="light"
                variation="clear"
                tabindex="1"
            >
                Index #1
            </ContextButton>

            <ContextButton
                palette="light"
                variation="clear"
                tabindex="5"
            >
                Index #5
            </ContextButton>

            <ContextButton
                palette="light"
                variation="clear"
                tabindex="4"
            >
                Index #4
            </ContextButton>

            <ContextButton
                palette="light"
                variation="clear"
                tabindex="2"
            >
                Index #2
            </ContextButton>
        </Stack>
    </Box>
</Offscreen>
```

You can customize which elements are used as the first and last with references or CSS Selectors, via the `focus_first` / `focus_last` properties.

```svelte {title="Offscreen Focus Trapping First + Last" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";

    let first_element;
    let last_element;
</script>

<Button
    for="offscreen-focus-trapping-first-last"
    palette="accent"
>
    Open FOCUS TRAPPED Offscreen
</Button>

<Offscreen
    logic_id="offscreen-focus-trapping-first-last"
    placement="top"
    focus_target={first_element}
    focus_first={first_element}
    focus_last={last_element}
    hidden
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
                tabindex="3"
            >
                Index #3
            </ContextButton>

            <ContextButton
                bind:element={first_element}
                palette="light"
                variation="clear"
                tabindex="1"
            >
                Index #1
            </ContextButton>

            <ContextButton
                bind:element={last_element}
                palette="light"
                variation="clear"
                tabindex="5"
            >
                Index #5
            </ContextButton>

            <ContextButton
                palette="light"
                variation="clear"
                tabindex="4"
            >
                Index #4
            </ContextButton>

            <ContextButton
                palette="light"
                variation="clear"
                tabindex="2"
            >
                Index #2
            </ContextButton>
        </Stack>
    </Box>
</Offscreen>
```

## Loading

> **NOTE**: New since `v0.4.13`.

> **NOTE**: Use the in-Browser developer tools to see this functionality in action.

You can customize the loading behavior of slotted content via the `loading` property.

```svelte {title="Offscreen Loading" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-loading" palette="accent">
    Open LAZY Offscreen
</Button>

<Offscreen
    logic_id="offscreen-loading"
    placement="top"
    loading="lazy"
    hidden
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            LAZY Offscreen
        </Stack>
    </Box>
</Offscreen>
```

## Captive

You can optionally include a backdrop by passing via the `captive` property.

```svelte {title="Offscreen Captive" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-non-captive" palette="accent">
    Open NON CAPTIVE Offscreen
</Button>

<Button for="offscreen-is-captive" palette="accent">
    Open CAPTIVE Offscreen
</Button>

<Offscreen
    logic_id="offscreen-non-captive"
    placement="top"
    hidden
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I am a NON CAPTIVE Offscreen.
        </Stack>
    </Box>
</Offscreen>

<Offscreen
    logic_id="offscreen-is-captive"
    placement="top"
    hidden
    captive
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I am a CAPTIVE Offscreen.
        </Stack>
    </Box>
</Offscreen>
```

## Dismissible

> **NOTE**: Added keybinding support since `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can optionally have the `Offscreen` dismissible by clicking the backdrop or pressing the `ESC` key, via the `dismissible` property.

```svelte {title="Offscreen Dismissible" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button
    for="offscreen-non-dismissible"
    palette="accent"
>
    Open NON DISMISSIBLE Offscreen
</Button>

<Button
    for="offscreen-is-dismissible"
    palette="accent"
>
    Open DISMISSIBLE Offscreen
</Button>

<Offscreen
    logic_id="offscreen-non-dismissible"
    placement="top"
    hidden
    captive
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I am a NON DISMISSIBLE Offscreen.
        </Stack>
    </Box>
</Offscreen>

<Offscreen
    logic_id="offscreen-is-dismissible"
    placement="top"
    hidden
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I am a DISMISSIBLE Offscreen.
        </Stack>
    </Box>
</Offscreen>
```

## Once

> **NOTE**: New since `v0.4.11`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can enable having the `Offscreen` dismissed whenever inner content is clicked via the `once` property.

```svelte {title="Offscreen Once" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-once" palette="accent">
    Open ONCE Offscreen
</Button>

<Offscreen
    logic_id="offscreen-once"
    placement="top"
    hidden
    captive
    dismissible
    once
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            Well, hello there!
        </Stack>
    </Box>
</Offscreen>
```

## State

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can manually open / close the `Offscreen` via the `state` property.

```svelte {title="Offscreen State" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";

    let state = false;
</script>

<Button on:click={() => (state = !state)}>
    Toggle Offscreen
</Button>

<Offscreen
    logic_id="offscreen-state"
    placement="bottom"
    bind:state
    hidden
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            Toggleable Offscreen
        </Stack>
    </Box>
</Offscreen>
```

## Placement

You can adjust which side your content is hidden on via the `placement` property.

```svelte {title="Offscreen Placement" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-placement" palette="accent">
    Open PLACED Offscreen
</Button>

<Offscreen
    logic_id="offscreen-placement"
    placement="left"
    hidden
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack spacing="medium">
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I was PLACED on the LEFT!
        </Stack>
    </Box>
</Offscreen>
```

## Alignment

You can align `Offscreen` content via the `alignment`, `alignment_x`, and `alignment_y` properties respectively.

```svelte {title="Offscreen Alignment" mode="repl"}
<script>
    import {
        Box,
        Button,
        ContextButton,
        Offscreen,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Button for="offscreen-alignment" palette="accent">
    Open ALIGNED Offscreen
</Button>

<Offscreen
    logic_id="offscreen-alignment"
    placement="top"
    alignment_x="right"
    hidden
    captive
    dismissible
>
    <Box palette="accent" padding="medium">
        <Stack
            orientation="horizontal"
            alignment_y="center"
            spacing="medium"
        >
            <ContextButton
                palette="light"
                variation="clear"
            >
                X
            </ContextButton>

            I was ALIGNED to the RIGHT!
        </Stack>
    </Box>
</Offscreen>
```
