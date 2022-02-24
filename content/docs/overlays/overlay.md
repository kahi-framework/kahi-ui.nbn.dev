+++
[[properties."Overlay.Container"]]
name="logic_id"
description="Renders a `<input role=\"presentation\" type=\"checkbox\" />` as sibling before child `<Overlay.Section>`, which controls the visible state via CSS."
types=["string"]

[[properties."Overlay.Container"]]
name="logic_state"
description="Controls the visible state of the `<Overlay.Container>` whenever `logic_id` is set."
types=["boolean"]

[[properties."Overlay.Container"]]
name="focus_first"
description="Configures the starting element used to set the boundaries of the focus trapping looping. Otherwise, the first focusable element found will be used."
types=["null", "HTMLElement", "string"]

[[properties."Overlay.Container"]]
name="focus_last"
description="Configures the end element used to set the boundaries of the focus trapping looping. Otherwise, the last focusable element found will be used."
types=["null", "HTMLElement", "string"]

[[properties."Overlay.Container"]]
name="focus_target"
description="Configures the element given focus when `logic_state` is active. Otherwise, the first focusable element found will be used."
types=["null", "HTMLElement", "string"]

[[properties."Overlay.Container"]]
name="dismissible"
description="Enables the user to press `ESC` or click the `<Overlay.Backdrop>` to dismiss."
types=["boolean"]

[[properties."Overlay.Container"]]
name="loading"
description="When the property is set and the `logic_state` view is not active, the child content in `<Overlay.Section>` is not rendered to DOM."
types=["lazy"]

[[properties."Overlay.Container"]]
name="once"
description="Enables dismissing of the `<Overlay.Container>` whenever inner content is clicked."
types=["boolean"]

[[properties."Overlay.Section"]]
name="animation"
description="Selects the animation to be ran whenever `logic_state` is active."
default="scale"
types=["clip", "fade", "scale", "slide"]

[[properties."Overlay.Section"]]
name="direction"
description="Sets the direction in which the selected animation will move to, if applicable."
default="bottom"
types=["bottom", "left", "right", "top"]

[[properties."Overlay.Section"]]
name="orientation"
description="Renders the `<Overlay.Section>` children horizontally."
types=["horizontal", "{VIEWPORT}:horizontal"]

[[properties."Overlay.Section"]]
name="alignment"
description="Adjusts where the child content will be placed within the `<Overlay.Section>` along both axis."
default="center"
types=["center", "stretch", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Overlay.Section"]]
name="alignment_x"
description="Adjusts where the child content will be placed within the `<Overlay.Section>` along the horizontal axis."
default="center"
types=["center", "stretch", "left", "right", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Overlay.Section"]]
name="alignment_y"
description="Adjusts where the child content will be placed within the `<Overlay.Section>` along the vertical axis."
default="center"
types=["center", "stretch", "bottom", "top", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Overlay.Section"]]
name="spacing"
description="Adjusts the visual spacing between child content in the `<Overlay.Section>`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."Overlay.Section"]]
name="spacing_x"
description="Adjusts the horizontal visual spacing between child content in the `<Overlay.Section>`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties."Overlay.Section"]]
name="spacing_y"
description="Adjusts the vertical visual spacing between child content in the `<Overlay.Section>`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[events."Overlay.Container"]]
name="active"
description="Fires whenever the `<Overlay.Container>` is activated."
types=["CustomEvent<void>"]

[[events."Overlay.Container"]]
name="dismiss"
description="Fires whenever the `<Overlay.Container>` is dismissed."
types=["CustomEvent<void>"]

[[slots."Overlay.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Overlay.Button"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Overlay.Group"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Overlay.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Overlay

> **NOTE**: Introduced feature in `v0.2.4`.

> **WARNING**: This feature received a breaking change in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

`Overlay` is typically used for rendering full-screen content over the rest of the page, optionally including a backdrop or being toggleable.

```svelte {title="Overlay Preview" mode="repl"}
<script>
    import {
        Button,
        Card,
        Code,
        Overlay,
        Text,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-preview" palette="accent">
    Open MODAL
</Button>

<Overlay.Container
    logic_id="overlay-preview"
    dismissible
>
    <Overlay.Backdrop />

    <Overlay.Section>
        <Card.Container max_width="75">
            <Card.Header>Delete File?</Card.Header>

            <Card.Section>
                <Text>
                    Are you sure you want to delete:
                    <Code>important-file.docx</Code>?
                </Text>
            </Card.Section>

            <Card.Footer>
                <Overlay.Button
                    palette="inverse"
                    variation="clear"
                >
                    Cancel
                </Overlay.Button>

                <Button palette="negative">
                    Delete
                </Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Imports

<!-- prettier-ignore -->
```svelte {title="Overlay Imports"}
<script>
    import {Overlay} from "@kahi-ui/framework";

    const {
        Backdrop,
        Container,
        Button,
        Group,
        Section
    } = Overlay;
</script>
```

## Logic ID

You can make the `Overlay` toggleable via the `logic_id` property, and then referencing that with a [`Button`](../interactables/button.md). Alternatively, `<Overlay.Button>` can be used while inside a `<Overlay.Container>` tree, which automatically inherits `logic_id` via [Svelte Context](https://svelte.dev/docs#setContext).

```svelte {title="Overlay Logic ID" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-logic-id">Open Overlay</Button>

<Overlay.Container logic_id="overlay-logic-id">
    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>Opened Overlay</Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Logic State

> **WARNING**: This feature is only available in Javascript-enabled clients.

You can manually open / close the `Overlay` via the `logic_state` property.

```svelte {title="Overlay State" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";

    let logic_state = false;
</script>

<Button on:click={() => (logic_state = !logic_state)}>
    Toggle Overlay
</Button>

<Overlay.Container
    logic_id="overlay-logic-state"
    bind:logic_state
>
    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>TOGGABLE Overlay</Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Auto Focus

> **NOTE**: Introduced feature in `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled clients.

Whenever the `Overlay` becomes active, focus is moved to the first found focusable element, then restored to the previously focused element when dismissed.

```svelte {title="Overlay Auto Focus" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-auto-focus">
    Open AUTO FOCUSED Overlay
</Button>

<Overlay.Container logic_id="overlay-auto-focus">
    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>
                AUTO FOCUSED Overlay
            </Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #1
                </Overlay.Button>

                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #2
                </Overlay.Button>

                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #3
                </Overlay.Button>

                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #4
                </Overlay.Button>

                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #5
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

You can customize which element is focused on activation with a reference or CSS Selector, via the `focus_target` property

```svelte {title="Overlay Auto Focus Target" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";

    let target_element;
</script>

<Button for="overlay-auto-focus-target">
    Open AUTO FOCUSED Overlay
</Button>

<Overlay.Container
    logic_id="overlay-auto-focus-target"
    focus_target={target_element}
>
    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>
                AUTO FOCUSED Overlay
            </Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #1
                </Overlay.Button>

                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #2
                </Overlay.Button>

                <Overlay.Button
                    bind:element={target_element}
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #3
                </Overlay.Button>

                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #4
                </Overlay.Button>

                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #5
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Focus Trapping

> **NOTE**: Introduced feature in `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled clients.

> **USAGE**: This feature can not be demonstrated in the REPL, click the **Link** button to open in Playground.

While the `Overlay` is active, focus movement is trapped within the first and last found focusable elements.

```svelte {title="Overlay Focus Trapping" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-focus-trapping">
    Open FOCUS TRAPPED Overlay
</Button>

<Overlay.Container logic_id="overlay-focus-trapping">
    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>
                FOCUS TRAPPED Overlay
            </Card.Header>

            <Card.Footer>
                <Overlay.Button
                    tabindex="3"
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #3
                </Overlay.Button>

                <Overlay.Button
                    tabindex="1"
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #1
                </Overlay.Button>

                <Overlay.Button
                    tabindex="5"
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #5
                </Overlay.Button>

                <Overlay.Button
                    tabindex="4"
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #4
                </Overlay.Button>

                <Overlay.Button
                    tabindex="2"
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #2
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

You can customize which elements are used as the first and last with references or CSS Selectors, via the `focus_first` / `focus_last` properties.

```svelte {title="Overlay Focus Trapping First + Last" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";

    let first_element;
    let last_element;
</script>

<Button for="overlay-focus-trapping-first-last">
    Open FOCUS TRAPPED Overlay
</Button>

<Overlay.Container
    logic_id="overlay-focus-trapping-first-last"
    focus_first={first_element}
    focus_last={last_element}
>
    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>
                FOCUS TRAPPED Overlay
            </Card.Header>

            <Card.Footer>
                <Overlay.Button
                    tabindex="3"
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #3
                </Overlay.Button>

                <Overlay.Button
                    bind:element={first_element}
                    tabindex="1"
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #1
                </Overlay.Button>

                <Overlay.Button
                    bind:element={last_element}
                    tabindex="5"
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #5
                </Overlay.Button>

                <Overlay.Button
                    tabindex="4"
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #4
                </Overlay.Button>

                <Overlay.Button
                    tabindex="2"
                    palette="auto"
                    variation="clear"
                >
                    Dismiss #2
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Loading

> **NOTE**: Introduced feature in `v0.4.13`.

> **USAGE**: Use your Browser's devtools to observe this feature.

You can customize the loading behavior of slotted content via the `loading` property.

```svelte {title="Overlay Loading" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-lazy">Open LAZY Overlay</Button>

<Overlay.Container
    logic_id="overlay-lazy"
    loading="lazy"
>
    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>LAZY Overlay</Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Backdrop

You can optionally include a backdrop by passing via composing the `<Overlay.Backdrop>` Component.

```svelte {title="Overlay Backdrop" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-backdrop-no">
    Open NO BACKDROP Overlay
</Button>

<Button for="overlay-backdrop-has">
    Open HAS BACKDROP Overlay
</Button>

<Overlay.Container logic_id="overlay-backdrop-no">
    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>
                NO BACKDROP Overlay
            </Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>

<Overlay.Container logic_id="overlay-backdrop-has">
    <Overlay.Backdrop />

    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>
                HAS BACKDROP Overlay
            </Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Dismissible

> **NOTE**: Introduced keybinding support in `v0.4.13`.

> **WARNING**: This feature is only available in Javascript-enabled clients.

You can optionally have the `Overlay` dismissible by pressing the `ESC` key or clicking the `<Overlay.Backdrop>` if applicable, via the `dismissible` property.

```svelte {title="Overlay Dismissible" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-dismissible-disabled">
    Open NON-DISMISSIBLE Overlay
</Button>

<Button for="overlay-dismissible-enabled">
    Open DISMISSIBLE Overlay
</Button>

<Overlay.Container
    logic_id="overlay-dismissible-disabled"
>
    <Overlay.Backdrop />

    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>
                NON-DISMISSIBLE Overlay
            </Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>

<Overlay.Container
    logic_id="overlay-dismissible-enabled"
    dismissible
>
    <Overlay.Backdrop />

    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>
                DISMISSIBLE Overlay
            </Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Once

> **NOTE**: Introduced feature in `v0.4.11`.

> **WARNING**: This feature is only available in Javascript-enabled clients.

You can enable having the `Overlay` dismissed whenever `<Overlay.Section>` inner content is clicked via the `once` property.

```svelte {title="Overlay Once" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-once-disabled">
    Open NON-ONCE Overlay
</Button>

<Button for="overlay-once-enabled">
    Open ONCE Overlay
</Button>

<Overlay.Container logic_id="overlay-once-disabled">
    <Overlay.Backdrop />

    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>NON-ONCE Overlay</Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>

<Overlay.Container
    logic_id="overlay-once-enabled"
    once
>
    <Overlay.Backdrop />

    <Overlay.Section>
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>ONCE Overlay</Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Orientation

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `orientation={["desktop:horizontal", "widescreen:horizontal"]}`

You can set the `Overlay` to render horizontally via the `orientation` property.

```svelte {title="Overlay Orientation" mode="repl"}
<script>
    import {Box, Overlay} from "@kahi-ui/framework";
</script>

<Overlay.Container>
    <Overlay.Section
        orientation="horizontal"
        spacing="medium"
        padding_bottom="medium"
        padding_right="medium"
    >
        <Box>I am the first Box!</Box>
        <Box>And I am a sibling!</Box>
    </Overlay.Section>
</Overlay.Container>
```

## Alignment

You can align `<Overlay.Section>` child content via the `alignment`, `alignment_x`, and `alignment_y` properties.

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

<Overlay.Container>
    <Overlay.Section
        alignment_x="right"
        alignment_y="bottom"
        padding_bottom="medium"
        padding_right="medium"
    >
        <Tile.Container
            elevation="medium"
            width="content-max"
            max_width="75"
        >
            <Tile.Section>
                <Tile.Header>File Deleted</Tile.Header>

                <Text>
                    <Code>important_file.docx</Code> was
                    deleted from cloud storage.
                </Text>
            </Tile.Section>

            <Tile.Footer>
                <Button
                    palette="negative"
                    variation="clear"
                    sizing="small"
                >
                    x
                </Button>
            </Tile.Footer>
        </Tile.Container>

        <Tile.Container
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
                    variation="clear"
                    sizing="small"
                >
                    x
                </Button>
            </Tile.Footer>
        </Tile.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Spacing

You can adjust the spacing between `<Overlay.Section>` child content via the `spacing`, `spacing_x`, and `spacing_y` properties.

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

<Overlay.Container>
    <Overlay.Section
        alignment_x="right"
        alignment_y="bottom"
        spacing="medium"
        padding_bottom="medium"
        padding_right="medium"
    >
        <Tile.Container
            elevation="medium"
            width="content-max"
            max_width="75"
        >
            <Tile.Section>
                <Tile.Header>File Deleted</Tile.Header>

                <Text>
                    <Code>important_file.docx</Code> was
                    deleted from cloud storage.
                </Text>
            </Tile.Section>

            <Tile.Footer>
                <Button
                    palette="negative"
                    variation="clear"
                    sizing="small"
                >
                    x
                </Button>
            </Tile.Footer>
        </Tile.Container>

        <Tile.Container
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
                    variation="clear"
                    sizing="small"
                >
                    x
                </Button>
            </Tile.Footer>
        </Tile.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Transition

You can change which built-in [`Transition`](../utilities/transition.md) is animated using `clip`, `fade`, `scale`, or `slide` via the `animation` property.

```svelte {title="Overlay Transition" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-transition-clip">
    Open CLIP Overlay
</Button>

<Button for="overlay-transition-fade">
    Open FADE Overlay
</Button>

<Button for="overlay-transition-scale">
    Open SCALE Overlay
</Button>

<Button for="overlay-transition-slide">
    Open SLIDE Overlay
</Button>

<Overlay.Container logic_id="overlay-transition-clip">
    <Overlay.Section animation="clip">
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>CLIP Overlay</Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>

<Overlay.Container logic_id="overlay-transition-fade">
    <Overlay.Section animation="fade">
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>FADE Overlay</Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>

<Overlay.Container logic_id="overlay-transition-scale">
    <Overlay.Section animation="scale">
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>SCALE Overlay</Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>

<Overlay.Container logic_id="overlay-transition-slide">
    <Overlay.Section animation="slide" direction="top">
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>SLIDE Overlay</Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```

## Direction

You can change which direction the entrance animation comes from via the `direction` property.

```svelte {title="Overlay Transition" mode="repl"}
<script>
    import {
        Button,
        Card,
        Overlay,
    } from "@kahi-ui/framework";
</script>

<Button for="overlay-direction">
    Open SLIDE Overlay
</Button>

<Overlay.Container logic_id="overlay-direction">
    <Overlay.Section
        animation="slide"
        direction="left"
    >
        <Card.Container
            palette="inverse"
            max_width="75"
        >
            <Card.Header>SLIDE Overlay</Card.Header>

            <Card.Footer>
                <Overlay.Button
                    palette="auto"
                    variation="clear"
                >
                    Dismiss
                </Overlay.Button>
            </Card.Footer>
        </Card.Container>
    </Overlay.Section>
</Overlay.Container>
```
