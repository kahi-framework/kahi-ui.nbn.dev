+++
[[properties."Card.Container"]]
name="elevation"
description="Alters how \"high\" the `Card` appears to be off the page."
default="lowest"
types=["none", "lowest", "low", "medium", "high", "highest"]

[[properties."Card.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties."Card.Container"]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `Card`."
types=["tiny", "small", "medium", "large", "huge"]

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
+++

# Card

`Card` is a multi-part surface pattern for displaying a section of content in a long-form vertical format.

```svelte repl Card Preview
<script>
    import {
        Badge,
        Button,
        Card,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Card.Container class="card-preview" palette="auto">
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

```html default Card Imports
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

```svelte repl Card Palette
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

<Mosaic sizing="medium" spacing="medium">
    <Card.Container>
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>NEUTRAL / DEFAULT</Badge>
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
</Mosaic>
```

## Elevation

You can set how "high" your `Card` will appear to be over top the page via the `elevation` property.

```svelte repl Card Elevation
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

<Mosaic sizing="medium" spacing="large">
    <Card.Container elevation="lowest">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            Ocean Rockies
            <Spacer />
            <Badge>LOWEST / DEFAULT</Badge>
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
</Mosaic>
```

## Orientation

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsivity.md). e.g. `orientation={["desktop:vertical", "widescreen:vertical"]}`

You can set the `Card.Footer` to render vertically via the `orientation` property.

```svelte repl Card Orientation
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

<Mosaic sizing="medium" spacing="large">
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
</Mosaic>
```

## Sizing

You can change the sizes / spacings of the child elements via the `sizing` property.

```svelte repl Card Sizing
<script>
    import {
        Card,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack
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
</Stack>

<style>
    :global(.card-sizing > .card) {
        max-width: 35ch;
    }
</style>
```

## Flush

You can change the appearance of the `Card` to be flush with the rest of the Application content via the `variation` property.

```svelte repl Card Flush
<script>
    import {
        Badge,
        Button,
        Card,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Card.Container
    class="card-flush"
    palette="auto"
    variation="flush"
>
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
