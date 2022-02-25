+++
[[properties."Tile.Container"]]
name="elevation"
description="Alters how \"high\" the `Tile` appears to be off the page."
default="lower"
types=["none", "lowest", "lower", "low", "medium", "high", "higher", "highest", "{VIEWPORT}:{ELEVATION}"]

[[properties."Tile.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "off", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Tile.Container"]]
name="variation"
description="Alters the appearance of the `Tile`."
types=["flush"]

[[properties."Tile.Footer"]]
name="orientation"
description="Renders the `Tile.Footer` vertically."
types=["vertical", "{VIEWPORT}:vertical"]

[[properties."Tile.Footer"]]
name="alignment"
description="Adjusts where the child items will be placed within the `Tile.Footer` along both axis."
types=["center", "stretch", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Tile.Footer"]]
name="alignment_x"
description="Adjusts where the child items will be placed within the `Tile.Footer` along the horizontal axis."
types=["center", "stretch", "left", "right", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Tile.Footer"]]
name="alignment_y"
description="Adjusts where the child items will be placed within the `Tile.Footer` along the vertical axis."
types=["center", "stretch", "bottom", "top", "{VIEWPORT}:{ALIGNMENT}"]

[[slots."Tile.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Tile.Figure"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Tile.Footer"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Tile.Header"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Tile.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties."Tile.Container"]]
name="--tile-elevation"
description="Controls the default `box-shadow` used."
types=["<offset-x> <offset-y> <blur-radius> <spread-radius> <color>"]

[[custom_properties."Tile.Container"]]
name="--tile-palette-background-normal"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties."Tile.Container"]]
name="--tile-palette-foreground-normal"
description="Controls the default RGB color value used for `color`."
types=["<r,g,b>"]

[[custom_properties."Tile.Container"]]
name="--tile-sizing-text-size"
description="Controls the default font size used for text, and the relative base for padding."
types=["<length>", "<percentage>"]

[[custom_properties."Tile.Container"]]
name="--tile-sizing-text-line-height"
description="Controls the default line height used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties."Tile.Container"]]
name="--tile-border-color"
description="Controls the `border-color` used."
types=["<r,g,b>"]

[[custom_properties."Tile.Container"]]
name="--tile-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties."Tile.Container"]]
name="--tile-border-opacity"
description="Controls the opacity of the border used."
types=["<alpha-value>"]

[[custom_properties."Tile.Container"]]
name="--tile-border-width"
description="Controls the `border-width` used."
types=["<length>"]

[[custom_properties."Tile.Container"]]
name="--tile-gap"
description="Controls the spacing between each child element."
types=["<length>"]

[[custom_properties."Tile.Container"]]
name="--tile-padding-x"
description="Controls the X Axis padding used."
types=["<length>"]

[[custom_properties."Tile.Container"]]
name="--tile-padding-y"
description="Controls the Y Axis padding used."
types=["<length>"]

[[custom_properties."Tile.Figure"]]
name="--tile-figure-font-size"
description="Controls the `font-size` used, which the `Tile.Figure` respects for `width` / `height`."
types=["<length>", "<percentage>"]

[[custom_properties."Tile.Footer"]]
name="--tile-footer-flex-alignment-x"
description="Controls the default flex alignment for the orientation-adjusted X Axis."
types=["<positional>"]

[[custom_properties."Tile.Footer"]]
name="--tile-footer-flex-alignment-y"
description="Controls the default flex alignment for the orientation-adjusted Y Axis."
types=["<positional>"]

[[custom_properties."Tile.Footer"]]
name="--tile-footer-gap"
description="Controls the spacing between each child element."
types=["<length>"]

[[custom_properties."Tile.Footer"]]
name="--tile-footer-orientation-direction"
description="Controls the default flex direction used."
types=["<direction>"]

[[custom_properties."Tile.Footer"]]
name="--tile-footer-orientation-align"
description="Controls which flex alignment value to pull from for default `align-items`."
types=["var(--flex-alignment-x)", "var(--flex-alignment-y)"]

[[custom_properties."Tile.Footer"]]
name="--tile-footer-orientation-justify"
description="Controls which flex alignment value to pull from for default `justify-content`."
types=["var(--flex-alignment-x)", "var(--flex-alignment-y)"]

[[custom_properties."Tile.Header"]]
name="--tile-header-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties."Tile.Header"]]
name="--tile-header-font-weight"
description="Controls the `font-weight` used."
types=["<normal>", "<bold>", "<bolder>", "<lighter>", "<number>"]

[[custom_properties."Tile.Header"]]
name="--tile-header-gap"
description="Controls the spacing between each child element."
types=["<length>"]

[[custom_properties."Tile.Header"]]
name="--tile-header-line-height"
description="Controls the `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]
+++

# Tile

> **NOTE**: Introduced feature in `v0.2.1`.

`Tile` is a multi-part surface pattern for displaying a section of content in a short-form horizontal format.

```svelte {title="Tile Preview" mode="repl"}
<script>
    import {
        Button,
        Text,
        Tile,
    } from "@kahi-ui/framework";
    import {UserPlus, Slash} from "lucide-svelte";
</script>

<Tile.Container width="content-max">
    <Tile.Figure>
        <img src={IMAGE_AVATAR} />
    </Tile.Figure>

    <Tile.Section>
        <Tile.Header>NovacBN</Tile.Header>

        <Text>
            <Text is="small">
                joined 2018 &bullet; last online
                2021/05/29
            </Text>
        </Text>
    </Tile.Section>

    <Tile.Footer>
        <Button palette="affirmative">
            <UserPlus size="1em" />
        </Button>

        <Button palette="negative">
            <Slash size="1em" />
        </Button>
    </Tile.Footer>
</Tile.Container>
```

## Imports

```svelte {title="Tile Imports"}
<script>
    import {Tile} from "@kahi-ui/framework";

    const {
        Container,
        Figure,
        Footer,
        Header,
        Section,
    } = Tile;
</script>
```

## Palette

You can change the color palette of the `Tile` via the `palette` property.

```svelte {title="Tile Palette" mode="repl"}
<script>
    import {
        Stack,
        Text,
        Tile,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium">
    <Tile.Container width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">DEFAULT</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        palette="accent"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">ACCENT</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        palette="neutral"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">NEUTRAL</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container palette="dark" width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">DARK</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        palette="light"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">LIGHT</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        palette="alert"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">ALERT</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        palette="affirmative"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">AFFIRMATIVE</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        palette="informative"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">INFORMATIVE</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        palette="negative"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">NEGATIVE</Text>
        </Tile.Footer>
    </Tile.Container>
</Stack.Container>
```

## Elevation

> **NOTE**: Introduced feature in `v0.3.5`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `elevation={["low", "tablet:lowest", "mobile:lowest"]}`

You can set how "high" your `Tile` will appear to be over top the page via the `elevation` property.

```svelte {title="Tile Elevation" mode="repl"}
<script>
    import {
        Stack,
        Text,
        Tile,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="large">
    <Tile.Container width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">DEFAULT</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        elevation="none"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">NONE</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        elevation="lowest"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">LOWEST</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        elevation="lower"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">LOWER</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        elevation="low"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">LOW</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        elevation="medium"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">MEDIUM</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        elevation="high"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">HIGH</Text>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container
        elevation="highest"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    joined 2018 &bullet; last online
                    2021/05/29
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Text is="small">HIGHEST</Text>
        </Tile.Footer>
    </Tile.Container>
</Stack.Container>
```

## Orientation

> **NOTE**: Introduced feature in `v0.3.5`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `orientation={["desktop:vertical", "widescreen:vertical"]}`

You can set the `Tile.Footer` to render vertically via the `orientation` property.

```svelte {title="Tile Orientation" mode="repl"}
<script>
    import {
        Button,
        Stack,
        Text,
        Tile,
    } from "@kahi-ui/framework";
    import {UserPlus, Slash} from "lucide-svelte";
</script>

<Stack.Container spacing="medium">
    <Tile.Container width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">
                    HORIZONTAL / DEFAULT
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Button palette="affirmative">
                <UserPlus size="1em" />
            </Button>

            <Button palette="negative">
                <Slash size="1em" />
            </Button>
        </Tile.Footer>
    </Tile.Container>

    <Tile.Container width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NovacBN</Tile.Header>

            <Text>
                <Text is="small">VERTICAL</Text>
            </Text>
        </Tile.Section>

        <Tile.Footer orientation="vertical">
            <Button palette="affirmative">
                <UserPlus size="1em" />
            </Button>

            <Button palette="negative">
                <Slash size="1em" />
            </Button>
        </Tile.Footer>
    </Tile.Container>
</Stack.Container>
```

## Sizing

> **NOTE**: Introduced feature in `v0.3.3`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `sizing={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the sizes / spacings of the child elements via the `sizing` property.

```svelte {title="Tile Sizing" mode="repl"}
<script>
    import {
        Stack,
        Text,
        Tile,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <Tile.Container width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>DEFAULT</Tile.Header>

            <Text>
                <Text is="small">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
            </Text>
        </Tile.Section>
    </Tile.Container>

    <Tile.Container sizing="nano" width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>NANO</Tile.Header>

            <Text>
                <Text is="small">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
            </Text>
        </Tile.Section>
    </Tile.Container>

    <Tile.Container sizing="tiny" width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>TINY</Tile.Header>

            <Text>
                <Text is="small">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
            </Text>
        </Tile.Section>
    </Tile.Container>

    <Tile.Container sizing="small" width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>SMALL</Tile.Header>

            <Text>
                <Text is="small">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
            </Text>
        </Tile.Section>
    </Tile.Container>

    <Tile.Container
        sizing="medium"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>MEDIUM</Tile.Header>

            <Text>
                <Text is="small">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
            </Text>
        </Tile.Section>
    </Tile.Container>

    <Tile.Container sizing="large" width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>LARGE</Tile.Header>

            <Text>
                <Text is="small">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
            </Text>
        </Tile.Section>
    </Tile.Container>

    <Tile.Container sizing="huge" width="content-max">
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>HUGE</Tile.Header>

            <Text>
                <Text is="small">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
            </Text>
        </Tile.Section>
    </Tile.Container>

    <Tile.Container
        sizing="massive"
        width="content-max"
    >
        <Tile.Figure>
            <img src={IMAGE_AVATAR} />
        </Tile.Figure>

        <Tile.Section>
            <Tile.Header>MASSIVE</Tile.Header>

            <Text>
                <Text is="small">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
            </Text>
        </Tile.Section>
    </Tile.Container>
</Stack.Container>
```

## Flush

> **NOTE**: Introduced feature in `v0.2.13`.

You can change the appearance of the `Tile` to be flush with the rest of the Application content via the `variation` property.

```svelte {title="Tile Flush" mode="repl"}
<script>
    import {
        Button,
        Text,
        Tile,
    } from "@kahi-ui/framework";
    import {UserPlus, Slash} from "lucide-svelte";
</script>

<Tile.Container width="content-max" variation="flush">
    <Tile.Figure>
        <img src={IMAGE_AVATAR} />
    </Tile.Figure>

    <Tile.Section>
        <Tile.Header>NovacBN</Tile.Header>

        <Text>
            <Text is="small">
                joined 2018 &bullet; last online
                2021/05/29
            </Text>
        </Text>
    </Tile.Section>

    <Tile.Footer>
        <Button palette="affirmative">
            <UserPlus size="1em" />
        </Button>

        <Button palette="negative">
            <Slash size="1em" />
        </Button>
    </Tile.Footer>
</Tile.Container>
```
