+++
[[properties."Clickable.Anchor"]]
name="current"
description="Changes the [`aria-current`](https://www.digitala11y.com/aria-current-state) attribute, telling screen readers how to handle the link."
types=["date", "location", "page", "step", "time", "true"]

[[properties."Clickable.Anchor"]]
name="disabled"
description="Changes the [`aria-disabled`](https://www.digitala11y.com/aria-disabled-state) attribute, telling screen readers how to handle the link and altering it to be greyed-out."
types=["boolean"]

[[properties."Clickable.Anchor"]]
name="href"
description="Changes the URL that `Anchor` navigates end-users to when clicked."
types=["string"]

[[properties."Clickable.Anchor"]]
name="download"
description="If linking to a downloadable file, this property will be used as the suggested file name."
types=["string"]

[[properties."Clickable.Anchor"]]
name="rel"
description="Sets how the `Anchor` relates to the current page, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) for more information."
types=["string"]

[[properties."Clickable.Anchor"]]
name="target"
description="Sets the target of the `Anchor` being navigated, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) for more information."
types=["string"]

[[properties."Clickable.Label"]]
name="for"
description="Sets the [`for`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for) attribute of the element that is targetted."
types=["string"]

[[slots."Clickable.Anchor"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Clickable.Label"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties."Clickable.Container"]]
name="--clickable-content-z-index"
description="Controls the `z-index` of the surfaced interactive content."
types=["<integer>"]

[[custom_properties."Clickable.Container"]]
name="--clickable-item-z-index"
description="Controls the `z-index` of the stretched anchor / label."
types=["<integer>"]
+++

# Clickable

> **NOTE**: New since `v0.4.3`.

`Clickable` stretches a `<Clickable.Anchor>` / `<Clickable.Label>` across its parent element, while surfacing other interactive elements above the overlay.

## Imports

```svelte {title="Clickable Imports"}
<script>
    import {Clickable} from "@kahi-ui/framework";

    const {Container, Anchor, Label} = Clickable;
</script>
```

## Anchor

Use a `<Clickable.Anchor>` to stretch a clickable `<a>` across the parent container.

```svelte {title="Clickable Anchor" mode="repl"}
<script>
    import {
        Badge,
        Button,
        Card,
        Clickable,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Clickable.Container>
    <Card.Container style="max-width:25rem;">
        <Card.Figure>
            <img src={IMAGE_BACKGROUND} />
        </Card.Figure>

        <Card.Header>
            <Clickable.Anchor href="#">
                Ocean Rockies
            </Clickable.Anchor>

            <Spacer />
            <Badge palette="affirmative">
                AVAILABLE
            </Badge>
        </Card.Header>

        <Card.Section>
            <Text>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin et consectetur
                orci. Curabitur a egestas turpis, vitae
                convallis sapien. Sed pellentesque
                rutrum tellus, in iaculis dolor
                tincidunt non. Orci varius natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
            </Text>
        </Card.Section>

        <Card.Footer>
            <Button palette="accent">
                Book Flight
            </Button>
        </Card.Footer>
    </Card.Container>
</Clickable.Container>
```

## Label

Use a `<Clickable.Label>` to stretch a clickable `<label>` across the parent container.

```svelte {title="Clickable Label" mode="repl"}
<script>
    import {
        Clickable,
        Switch,
        Text,
        Tile,
    } from "@kahi-ui/framework";
</script>

<Clickable.Container>
    <Tile.Container width="content-max">
        <Tile.Section>
            <Tile.Header>Remember Login?</Tile.Header>

            <Text>
                <Text is="small">
                    Your session will be saved to your
                    Browser.
                </Text>
            </Text>
        </Tile.Section>

        <Tile.Footer>
            <Clickable.Label for="clickable-label">
                <Switch palette="affirmative" />
            </Clickable.Label>
        </Tile.Footer>
    </Tile.Container>
</Clickable.Container>
```
