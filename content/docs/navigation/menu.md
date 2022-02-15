+++
[[properties."Menu.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Menu.Container"]]
name="orientation"
description="Renders the `Menu.Container` horizontally."
types=["horizontal", "{VIEWPORT}:horizontal"]

[[properties."Menu.Container"]]
name="sizing"
description="Changes how big the `Menu` components will be rendered."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[properties."Menu.Anchor"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Menu.Anchor"]]
name="active"
description="Renders the `Menu.Anchor` with `aria-pressed` attribute, and styles the `Menu.Anchor` as if it where being clicked."
types=["boolean"]

[[properties."Menu.Anchor"]]
name="disabled"
description="Renders the `Menu.Anchor` with `aria-disabled` attribute, and styles the `Menu.Anchor` partially transparent."
types=["boolean"]

[[properties."Menu.Anchor"]]
name="href"
description="Renders the `Menu.Anchor` as a `<a role=\"button\">` and links to the specified `href` property."
types=["string"]

[[properties."Menu.Anchor"]]
name="download"
description="If linking to a downloadable file, this property will be used as the suggested file name."
types=["string"]

[[properties."Menu.Anchor"]]
name="rel"
description="Sets how the `Menu.Anchor` relates to the current page, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) for more information."
types=["string"]

[[properties."Menu.Anchor"]]
name="target"
description="Sets the target of the `Menu.Anchor` being navigated, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) for more information."
types=["string"]

[[properties."Menu.Button"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Menu.Button"]]
name="active"
description="Renders the `Menu.Button` with `aria-pressed` attribute, and styles the `Menu.Button` as if it where being clicked."
types=["boolean"]

[[properties."Menu.Button"]]
name="disabled"
description="Renders the `Menu.Button` with `disabled` attribute, and styles the `Menu.Button` partially transparent."
types=["boolean"]

[[properties."Menu.Label"]]
name="active"
description="Renders the `Menu.Label` with `aria-pressed` attribute, and styles the `Menu.Label` as if it where being clicked."
types=["boolean"]

[[properties."Menu.Label"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Menu.Label"]]
name="disabled"
description="Renders the `Menu.Label` with `aria-disabled` attribute, and styles the `Menu.Label` partially transparent."
types=["boolean"]

[[properties."Menu.Label"]]
name="for"
description="Sets the ID used by the `<label>` to target it's child form Component."
types=["string"]

[[slots."Menu.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Anchor"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Button"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Heading"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Label"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Menu.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Menu

> **NOTE**: Introduced feature in `v0.2.2`.

`Menu` renders a nestable list of actionable buttons and links. Typically used in context menus or used as the main content body of [`Aside`](./aside.md).

```svelte {title="Menu Preview" mode="repl"}
<script>
    import {
        Menu,
        Spacer,
        Kbd,
    } from "@kahi-ui/framework";
</script>

<Menu.Container>
    <Menu.Button>
        Copy
        <Spacer />
        <Kbd>CTRL+C</Kbd>
    </Menu.Button>

    <Menu.Button>
        Cut
        <Spacer />
        <Kbd>CTRL+X</Kbd>
    </Menu.Button>

    <Menu.Divider />

    <Menu.Button>
        Delete
        <Spacer />
        <Kbd>DEL</Kbd>
    </Menu.Button>
</Menu.Container>
```

## Imports

```svelte {title="Menu Imports"}
<script>
    import {Menu} from "@kahi-ui/framework";

    const {
        Container,
        Anchor,
        Button,
        Heading,
        Label,
        Section,
    } = Menu;
</script>
```

## Orientation

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `orientation={["tablet:horizontal", "mobile:horizontal"]}`

> **IMPORTANT**: You should never use sub menus whenever using horizontal `Menu.Container` Components.

You can alter the orientation of how the `Menu.Container` lays out the children.

```svelte {title="Menu Orientation" mode="repl"}
<script>
    import {Menu} from "@kahi-ui/framework";
</script>

<Menu.Container orientation="horizontal">
    <Menu.Button>Documentation</Menu.Button>
    <Menu.Button>Github</Menu.Button>
    <Menu.Button>Releases</Menu.Button>
</Menu.Container>
```

## Sections

> **WARNING**: This feature was renamed from `<Menu.SubMenu>` to `<Menu.Section>` in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

> **WARNING**: This feature received a breaking change in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

You can nest more menus via the `<Menu.Section>` Component.

```svelte {title="Menu Section" mode="repl"}
<script>
    import {
        Box,
        Menu,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Box palette="negative" padding="medium">
    <Menu.Container>
        <Menu.Heading>FEEDBACK</Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <Text is="span">ICON</Text>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <Text is="span">ICON</Text>
            </Menu.Button>
        </Menu.Section>

        <Menu.Heading>OVERLAYS</Menu.Heading>

        <Menu.Section>
            <Menu.Button>
                Overlay
                <Spacer />
                <Text is="span">ICON</Text>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>
</Box>
```

## Text Divider

> **WARNING**: This feature was renamed from `<Menu.Divider>...</Menu.Divider>` to `<Menu.Heading variation="divider">...</Menu.Heading>` in [`v0.6.0`](../migrations/0.5.x-to-0.6.x.md).

You can alter `<Menu.Heading>` to render dividers via the `variation` property.

```svelte {title="Menu Text Divider" mode="repl"}
<script>
    import {
        Box,
        Menu,
        Spacer,
        Text,
    } from "@kahi-ui/framework";
</script>

<Box palette="negative" padding="medium">
    <Menu.Container>
        <Menu.Heading variation="divider">
            FEEDBACK
        </Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <Text is="span">ICON</Text>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <Text is="span">ICON</Text>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>
</Box>
```

## Palette

You can change the color palette of the `Menu.Anchor`, `Menu.Button`, and `Menu.Label` Components via the `palette` property.

```svelte {title="Menu Palette" mode="repl"}
<script>
    import {
        Menu,
        Mosaic,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="medium">
    <Menu.Container>
        <Menu.Heading>DEFAULT</Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>ACCENT</Menu.Heading>

        <Menu.Section>
            <Menu.Button palette="accent" active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button palette="accent">
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>NEUTRAL</Menu.Heading>

        <Menu.Section>
            <Menu.Button palette="neutral" active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button palette="neutral">
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>DARK</Menu.Heading>

        <Menu.Section>
            <Menu.Button palette="dark" active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button palette="dark">
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>LIGHT</Menu.Heading>

        <Menu.Section>
            <Menu.Button palette="light" active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button palette="light">
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>ALERT</Menu.Heading>

        <Menu.Section>
            <Menu.Button palette="alert" active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button palette="alert">
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>AFFIRMATIVE</Menu.Heading>

        <Menu.Section>
            <Menu.Button palette="affirmative" active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button palette="affirmative">
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>INFORMATIVE</Menu.Heading>

        <Menu.Section>
            <Menu.Button palette="informative" active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button palette="informative">
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container>
        <Menu.Heading>NEGATIVE</Menu.Heading>

        <Menu.Section>
            <Menu.Button palette="negative" active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button palette="negative">
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>
</Mosaic.Container>
```

## Sizing

> **NOTE**: By passing an array, you can set [responsive values](../framework/responsitivity.md). e.g. `sizing={["tiny", "tablet:medium", "mobile:medium"]}`

You can change the sizing / spacing look and feel of the `Menu.Container` via the `sizing` property.

```svelte {title="Menu Sizing" mode="repl"}
<script>
    import {
        Menu,
        Mosaic,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Mosaic.Container sizing="medium" spacing="medium">
    <Menu.Container>
        <Menu.Heading>DEFAULT</Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container sizing="nano">
        <Menu.Heading>NANO</Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container sizing="tiny">
        <Menu.Heading>TINY</Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container sizing="small">
        <Menu.Heading>SMALL</Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container sizing="medium">
        <Menu.Heading>MEDIUM</Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container sizing="large">
        <Menu.Heading>LARGE</Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container sizing="huge">
        <Menu.Heading>HUGE</Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>

    <Menu.Container sizing="massive">
        <Menu.Heading>MASSIVE</Menu.Heading>

        <Menu.Section>
            <Menu.Button active>
                Dot
                <Spacer />
                <span>ICON</span>
            </Menu.Button>

            <Menu.Button>
                Spinner
                <Spacer />
                <span>ICON</span>
            </Menu.Button>
        </Menu.Section>
    </Menu.Container>
</Mosaic.Container>
```
