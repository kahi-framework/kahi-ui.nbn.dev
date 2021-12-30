+++
[[properties."Omni.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties."Omni.Container"]]
name="placement"
description="Adjusts which side the content divider border is placed, and which side the `Omni.Container` appears when `variation` is set to `sticky`."
default="top"
types=["top", "bottom"]

[[properties."Omni.Container"]]
name="variation"
description="Adjusts the `Omni.Container` to remain at the vertical sides of the viewport, even when the parent element is scrolled."
types=["sticky"]

[[slots."Omni.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Omni.Footer"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Omni.Header"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Omni.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Omni

> **NOTE**: New since `v0.2.0`.

> **WARNING**: Received a breaking refactoring in [`v0.5.0`](../migrations/0.4.x-to-0.5.x.md).

`Omni` is used to horizontally present the end-user with actions and links that can be accessed anytime on the Web Application.

```svelte {title="Omni Preview" mode="repl"}
<script>
    import {
        Anchor,
        Divider,
        Menu,
        Omni,
    } from "@kahi-ui/framework";
</script>

<Omni.Container palette="dark" width="100">
    <Omni.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider orientation="vertical" />
        <Anchor href="#">
            <Text is="small">v0.5.0</Text>
        </Anchor>
    </Omni.Header>

    <Omni.Section>
        <Menu.Container>
            <Menu.Button variation="clear" active>
                Docs
            </Menu.Button>

            <Menu.Button variation="clear">
                Playground
            </Menu.Button>

            <Menu.Button variation="clear">
                Storybook
            </Menu.Button>
        </Menu.Container>
    </Omni.Section>

    <Omni.Footer>
        <Menu.Container>
            <Menu.Button variation="clear">
                GitHub
            </Menu.Button>
        </Menu.Container>
    </Omni.Footer>
</Omni.Container>
```

## Imports

```svelte {title="Omni Imports"}
<script>
    import {Omni} from "@kahi-ui/framework";

    const {Container, Footer, Header, Section} = Omni;
</script>
```

## Palette

You can change the color palette of the `Omni` via the `palette` property.

```svelte {title="Omni Palette" mode="repl"}
<script>
    import {
        Divider,
        Menu,
        Omni,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack orientation="horizontal" spacing="medium">
    <Omni.Container width="100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            DEFAULT
        </Omni.Header>

        <Omni.Footer>
            <Menu.Container>
                <Menu.Button variation="clear">
                    GitHub
                </Menu.Button>
            </Menu.Container>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container palette="accent" width="100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            ACCENT
        </Omni.Header>

        <Omni.Footer>
            <Menu.Container>
                <Menu.Button variation="clear">
                    GitHub
                </Menu.Button>
            </Menu.Container>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container palette="dark" width="100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            DARK
        </Omni.Header>

        <Omni.Footer>
            <Menu.Container>
                <Menu.Button variation="clear">
                    GitHub
                </Menu.Button>
            </Menu.Container>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container palette="light" width="100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            LIGHT
        </Omni.Header>

        <Omni.Footer>
            <Menu.Container>
                <Menu.Button variation="clear">
                    GitHub
                </Menu.Button>
            </Menu.Container>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container palette="alert" width="100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            ALERT
        </Omni.Header>

        <Omni.Footer>
            <Menu.Container>
                <Menu.Button variation="clear">
                    GitHub
                </Menu.Button>
            </Menu.Container>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container palette="affirmative" width="100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            AFFIRMATIVE
        </Omni.Header>

        <Omni.Footer>
            <Menu.Container>
                <Menu.Button variation="clear">
                    GitHub
                </Menu.Button>
            </Menu.Container>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container palette="negative" width="100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            NEGATIVE
        </Omni.Header>

        <Omni.Footer>
            <Menu.Container>
                <Menu.Button variation="clear">
                    GitHub
                </Menu.Button>
            </Menu.Container>
        </Omni.Footer>
    </Omni.Container>
</Stack>
```

## Placement

> **IMPORTANT**: The `placement` property does **NOT** affect how it will appear in your layout. You need to manually handle that.

You can adjust which side the content divider border will appear via the `placement` property.

```svelte {title="Omni Placement" mode="repl"}
<script>
    import {
        Anchor,
        Divider,
        Menu,
        Omni,
    } from "@kahi-ui/framework";
</script>

<Omni.Container
    placement="bottom"
    palette="dark"
    width="100"
>
    <Omni.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider orientation="vertical" />
        <Anchor href="#">
            <Text is="small">v0.5.0</Text>
        </Anchor>
    </Omni.Header>

    <Omni.Section>
        <Menu.Container>
            <Menu.Button variation="clear" active>
                Docs
            </Menu.Button>

            <Menu.Button variation="clear">
                Playground
            </Menu.Button>

            <Menu.Button variation="clear">
                Storybook
            </Menu.Button>
        </Menu.Container>
    </Omni.Section>

    <Omni.Footer>
        <Menu.Container>
            <Menu.Button variation="clear">
                GitHub
            </Menu.Button>
        </Menu.Container>
    </Omni.Footer>
</Omni.Container>
```

## Collapsing

> **NOTE**: The REPL currently does not support viewport values. Resize your Browser instead.

While this Component does not have built-in collapsing, the Framework provides the primitives for you to build unopinonated collapsable navigations interfaces. Via Components like [`Overlay`](../overlays/overlay.md) and features like [`contents`](../globals/contents.md).

```svelte {title="Omni Collapsing" mode="repl"}

```
