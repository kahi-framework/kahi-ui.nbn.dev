+++
[[properties."Card.Container"]]
name="elevation"
description="Alters how \"high\" the `Card` appears to be off the page."
default="lower"
types=["none", "lowest", "lower", "low", "medium", "high", "higher", "highest", "{VIEWPORT}:{ELEVATION}"]

[[properties."Card.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Card.Container"]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `Card`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties."Card.Container"]]
name="variation"
description="Alters the appearance of the `Card`."
types=["flush"]

[[properties."Card.Footer"]]
name="orientation"
description="Renders the `Card.Footer` vertically."
types=["vertical", "{VIEWPORT}:vertical"]

[[properties."Card.Footer"]]
name="alignment"
description="Adjusts where the child items will be placed within the `Card.Footer` along both axis."
types=["center", "stretch", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Card.Footer"]]
name="alignment_x"
description="Adjusts where the child items will be placed within the `Card.Footer` along the horizontal axis."
types=["center", "stretch", "left", "right", "{VIEWPORT}:{ALIGNMENT}"]

[[properties."Card.Footer"]]
name="alignment_y"
description="Adjusts where the child items will be placed within the `Card.Footer` along the vertical axis."
types=["center", "stretch", "bottom", "top", "{VIEWPORT}:{ALIGNMENT}"]

[[slots."Card.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Card.Figure"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Card.Footer"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Card.Header"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Card.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties."Card.Container"]]
name="--card-elevation"
description="Controls the default `box-shadow` used."
types=["<offset-x> <offset-y> <blur-radius> <spread-radius> <color>"]

[[custom_properties."Card.Container"]]
name="--card-palette-background-normal"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties."Card.Container"]]
name="--card-palette-foreground-normal"
description="Controls the default RGB color value used for `color`."
types=["<r,g,b>"]

[[custom_properties."Card.Container"]]
name="--card-sizing-text-size"
description="Controls the default font size used for text, and the relative base for padding."
types=["<length>", "<percentage>"]

[[custom_properties."Card.Container"]]
name="--card-sizing-text-line-height"
description="Controls the default line height used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties."Card.Container"]]
name="--card-border-color"
description="Controls the `border-color` used."
types=["<r,g,b>"]

[[custom_properties."Card.Container"]]
name="--card-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties."Card.Container"]]
name="--card-border-opacity"
description="Controls the opacity of the border used."
types=["<alpha-value>"]

[[custom_properties."Card.Container"]]
name="--card-border-width"
description="Controls the `border-width` used."
types=["<length>"]

[[custom_properties."Card.Container"]]
name="--card-padding-x"
description="Controls the X Axis padding used."
types=["<length>"]

[[custom_properties."Card.Container"]]
name="--card-padding-y"
description="Controls the Y Axis padding used."
types=["<length>"]

[[custom_properties."Card.Figure"]]
name="--card-figure-margin-top"
description="Controls the spacing used when not the first child."
types=["<length>"]

[[custom_properties."Card.Footer"]]
name="--card-footer-flex-alignment-x"
description="Controls the default flex alignment for the orientation-adjusted X Axis."
types=["<positional>"]

[[custom_properties."Card.Footer"]]
name="--card-footer-flex-alignment-y"
description="Controls the default flex alignment for the orientation-adjusted Y Axis."
types=["<positional>"]

[[custom_properties."Card.Footer"]]
name="--card-footer-gap"
description="Controls the spacing between each child element."
types=["<length>"]

[[custom_properties."Card.Footer"]]
name="--card-footer-orientation-direction"
description="Controls the default flex direction used."
types=["<direction>"]

[[custom_properties."Card.Footer"]]
name="--card-footer-orientation-align"
description="Controls which flex alignment value to pull from for default `align-items`."
types=["var(--flex-alignment-x)", "var(--flex-alignment-y)"]

[[custom_properties."Card.Footer"]]
name="--card-footer-orientation-justify"
description="Controls which flex alignment value to pull from for default `justify-content`."
types=["var(--flex-alignment-x)", "var(--flex-alignment-y)"]

[[custom_properties."Card.Footer"]]
name="--card-footer-margin-top"
description="Controls the spacing used when not the first child."
types=["<length>"]

[[custom_properties."Card.Header"]]
name="--card-header-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties."Card.Header"]]
name="--card-header-font-weight"
description="Controls the `font-weight` used."
types=["<normal>", "<bold>", "<bolder>", "<lighter>", "<number>"]

[[custom_properties."Card.Header"]]
name="--card-header-gap"
description="Controls the spacing between each child element."
types=["<length>"]

[[custom_properties."Card.Header"]]
name="--card-header-line-height"
description="Controls the `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties."Card.Header"]]
name="--card-header-margin-top"
description="Controls the spacing used when not the first child."
types=["<length>"]

[[custom_properties."Card.Section"]]
name="--card-section-margin-top"
description="Controls the spacing used when not the first child."
types=["<length>"]
+++

# Card

> **NOTE**: Introduced feature in `v0.2.0`.

`Card` is a multi-part surface pattern for displaying a section of content in a long-form vertical format.

```svelte {title="Card Preview" mode="repl"}
<script>
    import {
        Badge,
        Button,
        Card,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Card.Container class="card-preview">
    <Card.Figure>
        <img src={IMAGE_BACKGROUND} />
    </Card.Figure>

    <Card.Header>
        Ocean Rockies
        <Spacer />
        <Badge palette="affirmative">AVAILABLE</Badge>
    </Card.Header>

    <Card.Section>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Card.Section>

    <Card.Footer>
        <Button palette="accent">Book Flight</Button>
    </Card.Footer>
</Card.Container>

<style>
    :global(.card-preview) {
        max-width: 35ch;
    }
</style>
```

## Imports

```svelte {title="Card Imports"}
<script>
    import {Card} from "@kahi-ui/framework";

    const {
        Container,
        Figure,
        Footer,
        Header,
        Section,
    } = Card;
</script>
```

## Palette

You can change the color palette of the `Card` via the `palette` property.

```svelte {title="Card Palette" mode="repl"}
<script>
    import {
        Badge,
        Button,
        Card,
        Mosaic,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="medium">
    <Card.Container>
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>DEFAULT</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="accent">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>ACCENT</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="neutral">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>NEUTRAL</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="dark">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>DARK</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="light">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>LIGHT</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="alert">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>ALERT</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="affirmative">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>AFFIRMATIVE</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="informative">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>INFORMATIVE</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container palette="negative">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>NEGATIVE</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>
</Mosaic.Container>
```

## Elevation

> **NOTE**: Introduced feature in `v0.3.5`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `elevation={["low", "tablet:lowest", "mobile:lowest"]}`

You can set how "high" your `Card` will appear to be over top the page via the `elevation` property.

```svelte {title="Card Elevation" mode="repl"}
<script>
    import {
        Badge,
        Button,
        Card,
        Mosaic,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="large">
    <Card.Container elevation="lowest">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>DEFAULT</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="none">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>NONE</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="lowest">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>LOWEST</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="lower">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>LOWER</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="low">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>LOW</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="medium">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>MEDIUM</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="high">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>HIGH</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="higher">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>HIGHER</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container elevation="highest">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>HIGHEST</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>
</Mosaic.Container>
```

## Orientation

> **NOTE**: Introduced feature in `v0.3.5`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `orientation={["desktop:vertical", "widescreen:vertical"]}`

You can set the `Card.Footer` to render vertically via the `orientation` property.

```svelte {title="Card Orientation" mode="repl"}
<script>
    import {
        Badge,
        Button,
        Card,
        Mosaic,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="large">
    <Card.Container>
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>HORIZONTAL / DEFAULT</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>

        <Card.Footer>
            <Button variation="clear">Cancel</Button>
            <Button palette="accent">
                Book Flight
            </Button>
        </Card.Footer>
    </Card.Container>

    <Card.Container>
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>VERTICAL</Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>

        <Card.Footer
            orientation="vertical"
            alignment_x="stretch"
        >
            <Button palette="accent">
                Book Flight
            </Button>

            <Button variation="clear">Cancel</Button>
        </Card.Footer>
    </Card.Container>
</Mosaic.Container>
```

## Sizing

> **NOTE**: Introduced feature in `v0.3.3`.

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `sizing={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the sizes / spacings of the child elements via the `sizing` property.

```svelte {title="Card Sizing" mode="repl"}
<script>
    import {
        Card,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    class="card-sizing"
    orientation="horizontal"
    spacing="medium"
    alignment_y="top"
    variation="wrap"
>
    <Card.Container>
        <Card.Header>DEFAULT</Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container sizing="nano">
        <Card.Header>NANO</Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container sizing="tiny">
        <Card.Header>TINY</Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container sizing="small">
        <Card.Header>SMALL</Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container sizing="medium">
        <Card.Header>MEDIUM</Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container sizing="large">
        <Card.Header>LARGE</Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container sizing="huge">
        <Card.Header>HUGE</Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>

    <Card.Container sizing="massive">
        <Card.Header>MASSIVE</Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non.
            </Text>
        </Card.Section>
    </Card.Container>
</Stack.Container>

<style>
    :global(.card-sizing > .card) {
        max-width: 35ch;
    }
</style>
```

## Flush

> **NOTE**: Introduced feature in `v0.2.13`.

You can change the appearance of the `Card` to be flush with the rest of the Application content via the `variation` property.

```svelte {title="Card Flush" mode="repl"}
<script>
    import {
        Badge,
        Button,
        Card,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Card.Container class="card-flush" variation="flush">
    <Card.Figure>
        <img src={IMAGE_BACKGROUND} />
    </Card.Figure>

    <Card.Header>
        Ocean Rockies
        <Spacer />
        <Badge palette="affirmative">AVAILABLE</Badge>
    </Card.Header>

    <Card.Section>
        <Text>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et consectetur orci.
            Curabitur a egestas turpis, vitae convallis
            sapien. Sed pellentesque rutrum tellus, in
            iaculis dolor tincidunt non. Orci varius
            natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
        </Text>
    </Card.Section>

    <Card.Footer>
        <Button palette="accent">Book Flight</Button>
    </Card.Footer>
</Card.Container>

<style>
    :global(.card-flush) {
        max-width: 35ch;
    }
</style>
```
