+++
[[properties."Aside.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Aside.Container"]]
name="placement"
description="Adjusts which side the content divider border is placed, and which side the `Aside.Container` appears when `variation` is set to `sticky`."
default="left"
types=["left", "right"]

[[properties."Aside.Container"]]
name="variation"
description="Adjusts the `Aside.Container` to remain at the horizontal sides of the viewport, even when the parent element is scrolled."
types=["sticky"]

[[slots."Aside.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Aside.Footer"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Aside.Header"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Aside.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Aside

> **NOTE**: Introduced feature in `v0.2.0`.

`Aside` is used to vertically present the end-user with actions and links that can be accessed anytime on the Web Application.

```svelte {title="Aside Preview" mode="repl"}
<script>
    import {
        Anchor,
        Aside,
        Divider,
        Menu,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Aside.Container
    palette="dark"
    max_width="content-max"
    height="100"
>
    <Aside.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider />
    </Aside.Header>

    <Aside.Section>
        <Menu.Container>
            <Menu.Heading>DISPLAY</Menu.Heading>

            <Menu.Button>
                Badge
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Heading>FEEDBACK</Menu.Heading>

            <Menu.Button>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button active>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Container>
    </Aside.Section>

    <Aside.Footer>
        <Anchor href="#">
            <Text is="small">v0.6.0</Text>
        </Anchor>
    </Aside.Footer>
</Aside.Container>
```

## Imports

```svelte {title="Aside Imports"}
<script>
    import {Aside} from "@kahi-ui/framework";

    const {Container, Footer, Header, Section} = Aside;
</script>
```

## Palette

You can change the color palette of the `Aside` via the `palette` property.

```svelte {title="Aside Palette" mode="repl"}
<script>
    import {
        Anchor,
        Aside,
        Divider,
        Menu,
        Mosaic,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="medium">
    <Aside.Container>
        <Aside.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button active>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>DEFAULT</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="accent">
        <Aside.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button active>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>ACCENT</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="neutral">
        <Aside.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button active>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>NEUTRAL</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="dark">
        <Aside.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button active>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>DARK</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="light">
        <Aside.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button active>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>LIGHT</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="alert">
        <Aside.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button active>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>ALERT</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="affirmative">
        <Aside.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button active>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>AFFIRMATIVE</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="informative">
        <Aside.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button active>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>INFORMATIVE</Aside.Footer>
    </Aside.Container>

    <Aside.Container palette="negative">
        <Aside.Header>
            <Anchor href="#">Kahi UI</Anchor>
            <Divider />
        </Aside.Header>

        <Aside.Section>
            <Menu.Container>
                <Menu.Heading>FEEDBACK</Menu.Heading>

                <Menu.Button>
                    Dot
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>

                <Menu.Button active>
                    Spinner
                    <Spacer />
                    <span>ICON</span>
                </Menu.Button>
            </Menu.Container>
        </Aside.Section>

        <Aside.Footer>NEGATIVE</Aside.Footer>
    </Aside.Container>
</Mosaic.Container>
```

## Placement

> **IMPORTANT**: The `placement` property does **NOT** affect how it will appear in your layout. You need to manually handle that.

You can adjust which side the content divider border will appear via the `placement` property.

```svelte {title="Aside Placement" mode="repl"}
<script>
    import {
        Anchor,
        Aside,
        Divider,
        Menu,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Aside.Container
    placement="right"
    palette="inverse"
    max_width="content-max"
    height="100"
>
    <Aside.Header>
        <Anchor href="#">Kahi UI</Anchor>
        <Divider />
    </Aside.Header>

    <Aside.Section>
        <Menu.Container>
            <Menu.Heading>FEEDBACK</Menu.Heading>

            <Menu.Button>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button active>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Container>
    </Aside.Section>

    <Aside.Footer>
        <Anchor href="#">
            <Text is="small">v0.6.0</Text>
        </Anchor>
    </Aside.Footer>
</Aside.Container>
```

## Collapsing

> **USAGE**: REPL does not support viewport values, resize your Browser to observe this feature.

While `Aside` does not have built-in collapsing, the Framework provides the primitives for you to build collapsable interfaces. Via Components like [`Overlay`](../overlays/overlay.md) and features like [`contents`](../globals/contents.md).

```svelte {title="Aside Collapsing" mode="repl"}
<script>
    import {
        Anchor,
        Aside,
        Button,
        Divider,
        Menu,
        Position,
        Overlay,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Position
    variation="action"
    alignment_x="left"
    hidden={["desktop", "widescreen"]}
>
    <Button for="aside-collapsing">+</Button>
</Position>

<Overlay.Container
    logic_id="aside-collapsing"
    dismissible
>
    <Overlay.Backdrop
        hidden={["desktop", "widescreen"]}
    />

    <Overlay.Section
        contents={["desktop", "widescreen"]}
        animation="slide"
        direction="left"
        alignment_x="left"
    >
        <Aside.Container
            palette="inverse"
            max_width="content-max"
            height="100"
        >
            <Aside.Header>
                <Anchor href="#">Kahi UI</Anchor>
                <Divider />
            </Aside.Header>

            <Aside.Section>
                <Menu.Container>
                    <Menu.Heading>
                        DISPLAY
                    </Menu.Heading>

                    <Menu.Button>
                        Badge
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Heading>
                        FEEDBACK
                    </Menu.Heading>

                    <Menu.Button>
                        Dot
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>

                    <Menu.Button active>
                        Spinner
                        <Spacer />
                        <span>ICON</span>
                    </Menu.Button>
                </Menu.Container>
            </Aside.Section>

            <Aside.Footer>
                <Anchor href="#">
                    <Text is="small">v0.6.0</Text>
                </Anchor>
            </Aside.Footer>

            <Position
                variation={["container", "action"]}
                hidden={["desktop", "widescreen"]}
            >
                <Overlay.Button variation="clear">
                    -
                </Overlay.Button>
            </Position>
        </Aside.Container>
    </Overlay.Section>
</Overlay.Container>
```
