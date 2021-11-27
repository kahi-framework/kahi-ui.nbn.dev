+++
[[properties."Hero.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[slots."Hero.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Hero.Footer"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Hero.Header"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Hero.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties."Hero.Container"]]
name="--hero-palette-background-normal"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties."Hero.Container"]]
name="--hero-palette-foreground-normal"
description="Controls the default RGB color value used for `color`."
types=["<r,g,b>"]

[[custom_properties."Hero.Container"]]
name="--hero-padding-x"
description="Controls the X Axis padding used."
types=["<length>"]

[[custom_properties."Hero.Container"]]
name="--hero-padding-y"
description="Controls the Y Axis padding used."
types=["<length>"]

[[custom_properties."Hero.Footer"]]
name="--hero-footer-gap"
description="Controls the spacing between each child element."
types=["<length>"]

[[custom_properties."Hero.Footer"]]
name="--hero-footer-max-width"
description="Controls how large the `Hero.Footer` can expand."
types=["<length>"]

[[custom_properties."Hero.Footer"]]
name="--hero-footer-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties."Hero.Footer"]]
name="--hero-footer-line-height"
description="Controls the `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties."Hero.Footer"]]
name="--hero-footer-margin-top"
description="Controls the spacing used when not the first child."
types=["<length>"]

[[custom_properties."Hero.Header"]]
name="--hero-header-max-width"
description="Controls how large the `Hero.Header` can expand."
types=["<length>"]

[[custom_properties."Hero.Header"]]
name="--hero-header-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties."Hero.Header"]]
name="--hero-header-font-weight"
description="Controls the `font-weight` used."
types=["<normal>", "<bold>", "<bolder>", "<lighter>", "<number>"]

[[custom_properties."Hero.Header"]]
name="--hero-header-line-height"
description="Controls the `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties."Hero.Header"]]
name="--hero-header-margin-top"
description="Controls the spacing used when not the first child."
types=["<length>"]

[[custom_properties."Hero.Section"]]
name="--hero-section-max-width"
description="Controls how large the `Hero.Section` can expand."
types=["<length>"]

[[custom_properties."Hero.Section"]]
name="--hero-section-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties."Hero.Section"]]
name="--hero-section-line-height"
description="Controls the `line-height` used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties."Hero.Section"]]
name="--hero-section-margin-top"
description="Controls the spacing used when not the first child."
types=["<length>"]
+++

# Hero

`Hero` is a multi-part surface pattern for displaying banner text with subtitling and actions, typically used for landing pages, error messages, and loading placeholders.

```svelte {title="Hero Preview" mode="repl"}
<script>
    import {Button, Hero} from "@kahi-ui/framework";
</script>

<Hero.Container
    palette="negative"
    height="viewport-100"
>
    <Hero.Header>404</Hero.Header>
    <Hero.Section>
        The page you tried to access is missing or no
        longer available.
    </Hero.Section>

    <Hero.Footer>
        <Button palette="light" variation="clear">
            Go Back
        </Button>
        <Button palette="accent">Submit Ticket</Button>
    </Hero.Footer>
</Hero.Container>
```

## Imports

```svelte {title="Hero Imports"}
<script>
    import {Hero} from "@kahi-ui/framework";

    const {Container, Footer, Header, Section} = Hero;
</script>
```

## Palette

You can change the color palette of the `Hero` via the `palette` property.

```svelte {title="Hero Palette" mode="repl"}
<script>
    import {
        Button,
        Hero,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <Hero.Container>
        <Hero.Header>404 (DEFAULT)</Hero.Header>
        <Hero.Section>
            The page you tried to access is missing or
            no longer available.
        </Hero.Section>

        <Hero.Footer>
            <Button palette="accent" variation="clear">
                Go Back
            </Button>
            <Button palette="negative"
                >Submit Ticket
            </Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="accent">
        <Hero.Header>404 (ACCENT)</Hero.Header>
        <Hero.Section>
            The page you tried to access is missing or
            no longer available.
        </Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">
                Go Back
            </Button>
            <Button palette="negative"
                >Submit Ticket
            </Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="dark">
        <Hero.Header>404 (DARK)</Hero.Header>
        <Hero.Section>
            The page you tried to access is missing or
            no longer available.
        </Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">
                Go Back
            </Button>
            <Button palette="negative"
                >Submit Ticket
            </Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="light">
        <Hero.Header>404 (LIGHT)</Hero.Header>
        <Hero.Section>
            The page you tried to access is missing or
            no longer available.
        </Hero.Section>

        <Hero.Footer>
            <Button palette="dark" variation="clear">
                Go Back
            </Button>
            <Button palette="negative"
                >Submit Ticket
            </Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="alert">
        <Hero.Header>404 (ALERT)</Hero.Header>
        <Hero.Section>
            The page you tried to access is missing or
            no longer available.
        </Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">
                Go Back
            </Button>
            <Button palette="negative"
                >Submit Ticket
            </Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="affirmative">
        <Hero.Header>404 (AFFIRMATIVE)</Hero.Header>
        <Hero.Section>
            The page you tried to access is missing or
            no longer available.
        </Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">
                Go Back
            </Button>
            <Button palette="negative"
                >Submit Ticket
            </Button>
        </Hero.Footer>
    </Hero.Container>

    <Hero.Container palette="negative">
        <Hero.Header>404 (NEGATIVE)</Hero.Header>
        <Hero.Section>
            The page you tried to access is missing or
            no longer available.
        </Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">
                Go Back
            </Button>
            <Button palette="accent"
                >Submit Ticket
            </Button>
        </Hero.Footer>
    </Hero.Container>
</Stack>
```
