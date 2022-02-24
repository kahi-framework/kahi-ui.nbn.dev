+++
[[properties."Omni.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

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

> **NOTE**: Introduced feature in `v0.2.0`.

`Omni` is used to horizontally present the end-user with actions and links that can be accessed anytime on the Web Application.

```svelte {title="Omni Preview" mode="repl"}
<script>
    import {
        Anchor,
        Divider,
        Menu,
        Omni,
        Text,
    } from "@kahi-ui/framework";
</script>

<Omni.Container palette="dark" width="100">
    <Omni.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider orientation="vertical" />
        <Anchor href="#">
            <Text is="small">v0.6.0</Text>
        </Anchor>
    </Omni.Header>

    <Omni.Section>
        <Menu.Container orientation="horizontal">
            <Menu.Button active>Docs</Menu.Button>
            <Menu.Button>Playground</Menu.Button>
            <Menu.Button>Storybook</Menu.Button>
        </Menu.Container>
    </Omni.Section>

    <Omni.Footer>
        <Menu.Container orientation="horizontal">
            <Menu.Button>GitHub</Menu.Button>
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
        Anchor,
        Divider,
        Menu,
        Omni,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium">
    <Omni.Container width="100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            DEFAULT
        </Omni.Header>

        <Omni.Footer>
            <Menu.Container orientation="horizontal">
                <Menu.Button>GitHub</Menu.Button>
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
            <Menu.Container orientation="horizontal">
                <Menu.Button>GitHub</Menu.Button>
            </Menu.Container>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container palette="neutral" width="100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            NEUTRAL
        </Omni.Header>

        <Omni.Footer>
            <Menu.Container orientation="horizontal">
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
            <Menu.Container orientation="horizontal">
                <Menu.Button>GitHub</Menu.Button>
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
            <Menu.Container orientation="horizontal">
                <Menu.Button>GitHub</Menu.Button>
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
            <Menu.Container orientation="horizontal">
                <Menu.Button>GitHub</Menu.Button>
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
            <Menu.Container orientation="horizontal">
                <Menu.Button>GitHub</Menu.Button>
            </Menu.Container>
        </Omni.Footer>
    </Omni.Container>

    <Omni.Container palette="informative" width="100">
        <Omni.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider orientation="vertical" />
            INFORMATIVE
        </Omni.Header>

        <Omni.Footer>
            <Menu.Container orientation="horizontal">
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
            <Menu.Container orientation="horizontal">
                <Menu.Button>GitHub</Menu.Button>
            </Menu.Container>
        </Omni.Footer>
    </Omni.Container>
</Stack.Container>
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
        Text,
    } from "@kahi-ui/framework";
</script>

<Omni.Container
    placement="bottom"
    palette="inverse"
    width="100"
>
    <Omni.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider orientation="vertical" />
        <Anchor href="#">
            <Text is="small">v0.6.0</Text>
        </Anchor>
    </Omni.Header>

    <Omni.Section>
        <Menu.Container orientation="horizontal">
            <Menu.Button active>Docs</Menu.Button>
            <Menu.Button>Playground</Menu.Button>
            <Menu.Button>Storybook</Menu.Button>
        </Menu.Container>
    </Omni.Section>

    <Omni.Footer>
        <Menu.Container orientation="horizontal">
            <Menu.Button>GitHub</Menu.Button>
        </Menu.Container>
    </Omni.Footer>
</Omni.Container>
```

## Collapsing

> **USAGE**: REPL does not support viewport values, resize your Browser to observe this feature.

While `Omni` does not have built-in collapsing, the Framework provides the primitives for you to build collapsable interfaces. Via Components like [`Popover`](../overlays/popover.md) and features like [`hidden`](../globals/hidden.md).

```svelte {title="Omni Collapsing" mode="repl"}
<script>
    import {
        Anchor,
        Box,
        Divider,
        Menu,
        Omni,
        Popover,
        Text,
    } from "@kahi-ui/framework";
</script>

<Omni.Container palette="inverse" width="100">
    <Omni.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider orientation="vertical" />
        <Anchor href="#">
            <Text is="small">v0.6.0</Text>
        </Anchor>
    </Omni.Header>

    <Omni.Section hidden={["mobile", "tablet"]}>
        <Menu.Container orientation="horizontal">
            <Menu.Button active>Docs</Menu.Button>
            <Menu.Button>Playground</Menu.Button>
            <Menu.Button>Storybook</Menu.Button>
        </Menu.Container>
    </Omni.Section>

    <Omni.Footer>
        <Menu.Container
            hidden={["mobile", "tablet"]}
            orientation="horizontal"
        >
            <Menu.Button>GitHub</Menu.Button>
        </Menu.Container>

        <Popover.Container
            hidden={["desktop", "widescreen"]}
            logic_id="omni-collapsing"
            dismissible
        >
            <Popover.Button variation="clear">
                +
            </Popover.Button>

            <Popover.Section
                alignment_x="left"
                spacing="small"
            >
                <Box
                    elevation="medium"
                    padding="medium"
                    shape="rounded"
                >
                    <Menu.Container>
                        <Menu.Button active>
                            Docs
                        </Menu.Button>

                        <Menu.Button>
                            Playground
                        </Menu.Button>

                        <Menu.Button>
                            Storybook
                        </Menu.Button>

                        <Menu.Button>
                            GitHub
                        </Menu.Button>
                    </Menu.Container>
                </Box>
            </Popover.Section>
        </Popover.Container>
    </Omni.Footer>
</Omni.Container>
```
