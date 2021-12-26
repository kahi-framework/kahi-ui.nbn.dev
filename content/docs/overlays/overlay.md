+++
[[properties.Overlay]]
name="logic_id"
description="Renders a `<input role=\"presentation\" type=\"checkbox\" />` as sibling before the `Overlay`, which controls the visible state via CSS."
types=["string"]

[[properties.Overlay]]
name="state"
description="Controls the visible state of the `Overlay` whenever `logic_id` is set."
types=["boolean"]

[[properties.Overlay]]
name="captive"
description="Renders a `ContextBackdrop` as a sibling before the `Overlay`, which becomes active whenever the visible state is active."
types=["boolean"]

[[properties.Overlay]]
name="dismissible"
description="Adjusts the sibling `ContextBackdrop` to be clickable, turning off the visible state when clicked."
types=["boolean"]

[[properties.Overlay]]
name="once"
description="Enables dismissing of the `Overlay` whenever inner content is clicked."
types=["boolean"]

[[properties.Overlay]]
name="orientation"
description="Renders the `Overlay` children horizontally."
types=["horizontal", "{VIEWPORT}:horizontal"]

[[properties.Overlay]]
name="alignment"
description="Adjusts where the child content will be placed within the `Overlay` along both axis."
default="center"
types=["center", "stretch", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Overlay]]
name="alignment_x"
description="Adjusts where the child content will be placed within the `Overlay` along the horizontal axis."
default="center"
types=["center", "stretch", "left", "right", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Overlay]]
name="alignment_y"
description="Adjusts where the child content will be placed within the `Overlay` along the vertical axis."
default="center"
types=["center", "stretch", "bottom", "top", "{VIEWPORT}:{ALIGNMENT}"]

[[properties.Overlay]]
name="spacing"
description="Adjusts the visual spacing between child content in the `Overlay`."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Overlay]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between child content in the `Overlay`."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[properties.Overlay]]
name="spacing_y"
description="Adjusts the vertical visual spacing between child content in the `Overlay`."
types=["tiny", "small", "medium", "large", "huge", "{VIEWPORT}:{SPACING}"]

[[events.Overlay]]
name="active"
description="Fires whenever the `Overlay` is activated."
types=["CustomEvent<void>"]

[[events.Overlay]]
name="dismiss"
description="Fires whenever the `Overlay` is dismissed."
types=["CustomEvent<void>"]

[[slots.Overlay]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Overlay

> **NOTE**: New since `v0.2.4`.

> **WARNING**: Received a breaking refactoring in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Overlay` is typically used for rendering full-screen content over the rest of the page, optionally including a backdrop or being toggleable.

```svelte {title="Overlay Preview" mode="repl"}
<script>
    import {
        Button,
        Card,
        Code,
        ContextButton,
        Overlay,
        Text,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-preview" palette="accent">
    Open Modal
</Button>

<Overlay
    logic_id="overlay-preview"
    captive
    dismissible
>
    <Card.Container palette="auto" max_width="75">
        <Card.Header>Are you sure?</Card.Header>

        <Card.Section>
            <Text>
                Are you sure you want to delete:
                <Code>important-file.docx</Code>?
            </Text>
        </Card.Section>

        <Card.Footer>
            <ContextButton variation="clear">
                Cancel
            </ContextButton>

            <Button palette="negative">Delete</Button>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Imports

```svelte {title="Overlay Imports"}
<script>
    import {Overlay} from "@kahi-ui/framework";
</script>
```

## Logic ID

> **NOTE**: When you use a [`ContextButton`](../utilities/contextbutton.md) within a `Overlay`, it will automatically inherit the set `logic_id`.

You can make the `Overlay` toggleable via the `logic_id` property, and then referencing that with a [`Button`](../interactables/button.md).

```svelte {title="Overlay Logic ID" mode="repl"}
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-toggleable">Toggle Modal</Button>

<Overlay logic_id="overlay-toggleable">
    <Card.Container palette="auto" max_width="75">
        <Card.Header>Toggleable Modal</Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Auto Focus

> **NOTE**: New since `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

Whenever the `Overlay` becomes active, focus is moved to the first found focusable element, then restored to the previously focused element when dismissed.

```svelte {title="Overlay Auto Focus" mode="repl"}
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-auto-focus" palette="accent">
    Open AUTO FOCUSED Modal
</Button>

<Overlay logic_id="overlay-auto-focus">
    <Card.Container palette="auto" max_width="75">
        <Card.Header>AUTO FOCUSED Modal</Card.Header>

        <Card.Footer>
            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="1"
            >
                Index #1
            </ContextButton>

            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="2"
            >
                Index #2
            </ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

You can customize which element is focused on activation with a reference or CSS Selector, via the `focus_target` property

```svelte {title="Overlay Auto Focus Target" mode="repl"}
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";

    let target_element;
</script>

<Button
    for="overlay-auto-focus-target"
    palette="accent"
>
    Open AUTO FOCUSED Modal
</Button>

<Overlay
    logic_id="overlay-auto-focus-target"
    focus_target={target_element}
>
    <Card.Container palette="auto" max_width="75">
        <Card.Header>AUTO FOCUSED Modal</Card.Header>

        <Card.Footer>
            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="1"
            >
                Index #1
            </ContextButton>

            <ContextButton
                bind:element={target_element}
                palette="inverse"
                variation="clear"
                tabindex="2"
            >
                Index #2
            </ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Focus Trapping

> **NOTE**: New since `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

> **NOTE**: Click the `Link` button, to test out the functionality in the Playground.

While the `Overlay` is active, focus movement is trapped within the first and last found focusable elements.

```svelte {title="Overlay Focus Trapping" mode="repl"}
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-focus-trapping" palette="accent">
    Open FOCUS TRAPPED Modal
</Button>

<Overlay logic_id="overlay-focus-trapping">
    <Card.Container palette="auto" max_width="75">
        <Card.Header>FOCUS TRAPPED Modal</Card.Header>

        <Card.Footer>
            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="3"
            >
                Index #3
            </ContextButton>

            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="1"
            >
                Index #1
            </ContextButton>

            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="5"
            >
                Index #5
            </ContextButton>

            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="4"
            >
                Index #4
            </ContextButton>

            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="2"
            >
                Index #2
            </ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

You can customize which elements are used as the first and last with references or CSS Selectors, via the `focus_first` / `focus_last` properties.

```svelte {title="Overlay Focus Trapping First + Last" mode="repl"}
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";

    let first_element;
    let last_element;
</script>

<Button
    for="overlay-focus-trapping-first-last"
    palette="accent"
>
    Open FOCUS TRAPPED Modal
</Button>

<Overlay
    logic_id="overlay-focus-trapping-first-last"
    focus_target={first_element}
    focus_first={first_element}
    focus_last={last_element}
>
    <Card.Container palette="auto" max_width="75">
        <Card.Header>FOCUS TRAPPED Modal</Card.Header>

        <Card.Footer>
            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="3"
            >
                Index #3
            </ContextButton>

            <ContextButton
                bind:element={first_element}
                palette="inverse"
                variation="clear"
                tabindex="1"
            >
                Index #1
            </ContextButton>

            <ContextButton
                bind:element={last_element}
                palette="inverse"
                variation="clear"
                tabindex="5"
            >
                Index #5
            </ContextButton>

            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="4"
            >
                Index #4
            </ContextButton>

            <ContextButton
                palette="inverse"
                variation="clear"
                tabindex="2"
            >
                Index #2
            </ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Loading

> **NOTE**: New since `v0.4.13`.

> **NOTE**: Use the in-Browser developer tools to see this functionality in action.

You can customize the loading behavior of slotted content via the `loading` property.

```svelte {title="Overlay Loading" mode="repl"}
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-loading" palette="accent">
    Open LAZY Modal
</Button>

<Overlay logic_id="overlay-loading" loading="lazy">
    <Card.Container palette="auto" max_width="75">
        <Card.Header>LAZY Modal</Card.Header>

        <Card.Footer>
            <ContextButton
                palette="inverse"
                variation="clear"
            >
                Close
            </ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Captive

You can optionally include a backdrop by passing via the `captive` property.

```svelte {title="Overlay Captive" mode="repl"}
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-non-captive">
    Open NON CAPTIVE Modal
</Button>

<Button for="overlay-is-captive" palette="accent">
    Open CAPTIVE Modal
</Button>

<Overlay logic_id="overlay-non-captive">
    <Card.Container palette="auto" max_width="75">
        <Card.Header>NON CAPTIVE Modal</Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>

<Overlay logic_id="overlay-is-captive" captive>
    <Card.Container palette="auto" max_width="75">
        <Card.Header>CAPTIVE Modal</Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Dismissible

> **NOTE**: Added keybinding support since `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can optionally have the `Overlay` dismissible by clicking the backdrop or pressing the `ESC` key, via the `dismissible` property.

```svelte {title="Overlay Dismissible" mode="repl"}
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-non-dismissible">
    Open NON DISMISSIBLE Modal
</Button>

<Button for="overlay-is-dismissible" palette="accent">
    Open DISMISSIBLE Modal
</Button>

<Overlay logic_id="overlay-non-dismissible" captive>
    <Card.Container palette="auto" max_width="75">
        <Card.Header>
            NON DISMISSIBLE Modal
        </Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>

<Overlay
    logic_id="overlay-is-dismissible"
    captive
    dismissible
>
    <Card.Container palette="auto" max_width="75">
        <Card.Header>DISMISSIBLE Modal</Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Once

> **NOTE**: New since `v0.4.11`.

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can enable having the `Overlay` dismissed whenever inner content is clicked via the `once` property.

```svelte {title="Overlay Once" mode="repl"}
<script>
    import {
        Button,
        Card,
        Code,
        ContextButton,
        Overlay,
        Text,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-once" palette="accent">
    Open ONCE Modal
</Button>

<Overlay
    logic_id="overlay-once"
    captive
    dismissible
    once
>
    <Card.Container palette="auto" max_width="75">
        <Card.Header>Are you sure?</Card.Header>

        <Card.Section>
            <Text>
                Are you sure you want to delete:
                <Code>important-file.docx</Code>?
            </Text>
        </Card.Section>

        <Card.Footer>
            <ContextButton variation="clear">
                Cancel
            </ContextButton>

            <Button palette="negative">Delete</Button>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## State

> **WARNING**: This feature is only available in Javascript-enabled Browsers.

You can manually open / close the `Overlay` via the `state` property.

```svelte {title="Overlay State" mode="repl"}
<script>
    import {
        Button,
        Card,
        ContextButton,
        Overlay,
    } from "@kahi-ui/framework";

    let state = false;
</script>

<Button on:click={() => (state = !state)}>
    Toggle Modal
</Button>

<Overlay logic_id="overlay-state" bind:state>
    <Card.Container palette="auto" max_width="75">
        <Card.Header>Toggleable Modal</Card.Header>

        <Card.Footer>
            <ContextButton>Dismiss</ContextButton>
        </Card.Footer>
    </Card.Container>
</Overlay>
```

## Orientation

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `orientation={["desktop:horizontal", "widescreen:horizontal"]}`

You can set the `Overlay` to render horizontally via the `orientation` property.

```svelte {title="Overlay Orientation" mode="repl"}
<script>
    import {Box, Overlay} from "@kahi-ui/framework";
</script>

<Overlay
    orientation="horizontal"
    spacing="medium"
    padding_bottom="medium"
    padding_right="medium"
>
    <Box>I am the first Box!</Box>
    <Box>And I am a sibling!</Box>
</Overlay>
```

## Alignment

You can align `Overlay` content via the `alignment`, `alignment_x`, and `alignment_y` properties respectively.

```svelte {title="Overlay Alignment" mode="repl"}
<script>
    import {
        Button,
        Code,
        Overlay,
        Tile,
        Text,
    } from "@kahi-ui/framework";
</script>

<Overlay
    alignment_x="right"
    alignment_y="bottom"
    padding_bottom="medium"
    padding_right="medium"
>
    <Tile.Container
        palette="auto"
        elevation="medium"
        width="content-max"
        max_width="75"
    >
        <Tile.Section>
            <Tile.Header>File Deleted</Tile.Header>

            <Text>
                <Code>important_file.docx</Code> was deleted
                from cloud storage.
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Button
                palette="negative"
                data-size="small"
            >
                X
            </Button>
        </Tile.Footer>
    </Tile.Container>
</Overlay>
```

## Spacing

You can adjust the spacing between `Overlay` content via the `spacing`, `spacing_x`, and `spacing_y` properties respectively.

```svelte {title="Overlay Spacing" mode="repl"}
<script>
    import {
        Button,
        Code,
        Overlay,
        Tile,
        Text,
    } from "@kahi-ui/framework";
</script>

<Overlay
    alignment_x="right"
    alignment_y="bottom"
    spacing="medium"
    padding_bottom="medium"
    padding_right="medium"
>
    <Tile.Container
        palette="auto"
        elevation="medium"
        width="content-max"
        max_width="75"
    >
        <Tile.Section>
            <Tile.Header>File Deleted</Tile.Header>

            <Text>
                <Code>important_file.docx</Code> was deleted
                from cloud storage.
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Button
                palette="negative"
                data-size="small"
            >
                X
            </Button>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        palette="auto"
        elevation="medium"
        width="content-max"
        max_width="75"
    >
        <Tile.Section>
            <Tile.Header>File Deleted</Tile.Header>

            <Text>
                <Code>other_file.png</Code> was deleted
                from cloud storage.
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Button
                palette="negative"
                data-size="small"
            >
                X
            </Button>
        </Tile.Footer>
    </Tile.Container>
</Overlay>
```
