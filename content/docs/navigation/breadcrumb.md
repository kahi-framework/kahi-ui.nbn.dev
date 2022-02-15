+++
[[properties."Breadcrumb.Container"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Breadcrumb.Container"]]
name="separator"
description="Alters the separator rendered between each breadcrumb item."
types=["string"]

[[properties."Breadcrumb.Anchor"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Breadcrumb.Anchor"]]
name="active"
description="Alters the breadcrumb item to render bolder when active. Sets [`aria-current=\"page\"`](https://www.digitala11y.com/aria-current-state) on `Breadcrumb.Anchor`."
types=["boolean"]

[[properties."Breadcrumb.Anchor"]]
name="href"
description="Changes the URL that `Breadcrumb.Anchor` navigates end-users to when clicked."
types=["string"]

[[properties."Breadcrumb.Anchor"]]
name="download"
description="If linking to a downloadable file, this property will be used as the suggested file name."
types=["string"]

[[properties."Breadcrumb.Anchor"]]
name="rel"
description="Sets how the `Breadcrumb.Anchor` relates to the current page, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) for more information."
types=["string"]

[[properties."Breadcrumb.Anchor"]]
name="target"
description="Sets the target of the `Breadcrumb.Anchor` being navigated, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) for more information."
types=["string"]

[[properties."Breadcrumb.Button"]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties."Breadcrumb.Button"]]
name="active"
description="Alters the breadcrumb item to render bolder when active. Sets `aria-pressed=\"true\"` on `Breadcrumb.Button`."
types=["boolean"]

[[slots."Breadcrumb.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Breadcrumb.Anchor"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Breadcrumb.Button"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Breadcrumb.Group"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties."Breadcrumb.Container"]]
name="--breadcrumb-button-inactive-opacity"
description="Controls the opacity for when a `Breadcrumb` button is inactive."
types=["<alpha-value>"]

[[custom_properties."Breadcrumb.Container"]]
name="--breadcrumb-separator-margin-x"
description="Controls the X-Axis margin for `Breadcrumb` separators."
types=["<length>"]

[[custom_properties."Breadcrumb.Container"]]
name="--breadcrumb-separator-opacity"
description="Controls the opacity for `Breadcrumb` separators."
types=["<alpha-value>"]
+++

# Breadcrumb

> **NOTE**: Introduced feature in `v0.2.0`.

`Breadcrumb` is typically used to render a series of links with separators. With the each link left of the right-most a state in the end-user's navigation history. Or, a route hierarchy of the Web Application. e.g. directory paths

```svelte {title="Breadcrumb Preview" mode="repl"}
<script>
    import {Breadcrumb} from "@kahi-ui/framework";
</script>

<Breadcrumb.Container>
    <Breadcrumb.Anchor href="#">
        home
    </Breadcrumb.Anchor>

    <Breadcrumb.Anchor href="#">
        pictures
    </Breadcrumb.Anchor>

    <Breadcrumb.Anchor href="#" active>
        IMG_20191123_121131.jpg
    </Breadcrumb.Anchor>
</Breadcrumb.Container>
```

## Imports

```svelte {title="Breadcrumb Imports"}
<script>
    import {Breadcrumb} from "@kahi-ui/framework";

    const {
        Container,
        Anchor,
        Button,
        Group,
        Separator,
    } = Breadcrumb;
</script>
```

## Separator

You can alter the separator between items rendered via the `separator` property.

```svelte {title="Breadcrumb Separator" mode="repl"}
<script>
    import {Breadcrumb} from "@kahi-ui/framework";
</script>

<Breadcrumb.Container separator=">">
    <Breadcrumb.Anchor href="#">
        Home
    </Breadcrumb.Anchor>

    <Breadcrumb.Anchor href="#">
        Contacts
    </Breadcrumb.Anchor>

    <Breadcrumb.Anchor href="#" active>
        John Doe
    </Breadcrumb.Anchor>
</Breadcrumb.Container>
```

## Palette

> **NOTE**: Introduced feature in `v0.6.0`.

You can change the color palette of the `Breadcrumb.Anchor` / `Breadcrumb.Button` Components via the `palette` property.

```svelte {title="Breadcrumb Palette" mode="repl"}
<script>
    import {
        Breadcrumb,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Breadcrumb.Container>
        <Breadcrumb.Anchor href="#">
            Home
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#">
            Contacts
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#" active>
            DEFAULT
        </Breadcrumb.Anchor>
    </Breadcrumb.Container>

    <Breadcrumb.Container palette="accent">
        <Breadcrumb.Anchor href="#">
            Home
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#">
            Contacts
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#" active>
            ACCENT
        </Breadcrumb.Anchor>
    </Breadcrumb.Container>

    <Breadcrumb.Container palette="neutral">
        <Breadcrumb.Anchor href="#">
            Home
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#">
            Contacts
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#" active>
            NEUTRAL
        </Breadcrumb.Anchor>
    </Breadcrumb.Container>

    <Breadcrumb.Container palette="dark">
        <Breadcrumb.Anchor href="#">
            Home
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#">
            Contacts
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#" active>
            DARK
        </Breadcrumb.Anchor>
    </Breadcrumb.Container>

    <Breadcrumb.Container palette="light">
        <Breadcrumb.Anchor href="#">
            Home
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#">
            Contacts
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#" active>
            LIGHT
        </Breadcrumb.Anchor>
    </Breadcrumb.Container>

    <Breadcrumb.Container palette="affirmative">
        <Breadcrumb.Anchor href="#">
            Home
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#">
            Contacts
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#" active>
            AFFIRMATIVE
        </Breadcrumb.Anchor>
    </Breadcrumb.Container>

    <Breadcrumb.Container palette="informative">
        <Breadcrumb.Anchor href="#">
            Home
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#">
            Contacts
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#" active>
            INFORMATIVE
        </Breadcrumb.Anchor>
    </Breadcrumb.Container>

    <Breadcrumb.Container palette="negative">
        <Breadcrumb.Anchor href="#">
            Home
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#">
            Contacts
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#" active>
            NEGATIVE
        </Breadcrumb.Anchor>
    </Breadcrumb.Container>
</Stack.Container>
```

## Elements

> **NOTE**: Introduced feature in `v0.6.0`.

You can render `Breadcrumb` items as `<button>` HTML tags by using `<Breadcrumb.Button>`, which is useful if your navigation doesn't work via URLs.

```svelte {title="Breadcrumb Elements" mode="repl"}
<script>
    import {
        Breadcrumb,
        Stack,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Breadcrumb.Container>
        <Breadcrumb.Anchor href="#">
            Home
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#">
            Contacts
        </Breadcrumb.Anchor>

        <Breadcrumb.Anchor href="#" active>
            Anchor
        </Breadcrumb.Anchor>
    </Breadcrumb.Container>

    <Breadcrumb.Container>
        <Breadcrumb.Button>Home</Breadcrumb.Button>
        <Breadcrumb.Button>Contacts</Breadcrumb.Button>

        <Breadcrumb.Button active>
            Button
        </Breadcrumb.Button>
    </Breadcrumb.Container>
</Stack.Container>
```
