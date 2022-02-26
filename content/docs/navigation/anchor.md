+++
[[properties.Anchor]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "off", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.Anchor]]
name="current"
description="Changes the [`aria-current`](https://www.digitala11y.com/aria-current-state) attribute, telling screen readers how to handle the link."
types=["date", "location", "page", "step", "time", "true"]

[[properties.Anchor]]
name="disabled"
description="Changes the [`aria-disabled`](https://www.digitala11y.com/aria-disabled-state) attribute, telling screen readers how to handle the link and altering it to be greyed-out."
types=["boolean"]

[[properties.Anchor]]
name="href"
description="Changes the URL that `Anchor` navigates end-users to when clicked."
types=["string"]

[[properties.Anchor]]
name="download"
description="If linking to a downloadable file, this property will be used as the suggested file name."
types=["string"]

[[properties.Anchor]]
name="rel"
description="Sets how the `Anchor` relates to the current page, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-rel) for more information."
types=["string"]

[[properties.Anchor]]
name="target"
description="Sets the target of the `Anchor` being navigated, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) for more information."
types=["string"]

[[slots.Anchor]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Anchor]]
name="--anchor-text-decoration"
description="Controls the `text-decoration` value for when the link is not hovered."
types=["<text-decoration>"]

[[custom_properties.Anchor]]
name="--anchor-hover-text-decoration"
description="Controls the `text-decoration` value for when the link is hovered."
types=["<text-decoration>"]
+++

# Anchor

> **NOTE**: Introduced feature in `v0.2.0`.

`Anchor` are used for navigating from page to page, or to external websites.

```svelte {title="Anchor Preview" mode="repl"}
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Goto google.com
</Anchor>
```

## Imports

```svelte {title="Anchor Imports"}
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>
```

## Internal Navigation

When navigating only to an internal Web Application route, you can just set `href` property with no other properties.

```svelte {title="Anchor Internal Navigation" mode="repl"}
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor href="#">Kahi UI</Anchor>
```

## External Navigation

When navigating to external links, for **security purposes** it's recommended to set [`rel="noopener"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener) to prevent [`Window.opener`](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener) from being set on the newly opened page. And also to set [`rel="noreferrer"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer) for **privacy purposes**, to prevent the Browser from sending the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) header to the new page.

```svelte {title="Anchor External Navigation" mode="repl"}
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Goto google.com
</Anchor>
```

## States

You can control the state of the `Anchor` via the `disabled` property.

```svelte {title="Anchor States" mode="repl"}
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Goto google.com DEFAULT
</Anchor>

<Anchor
    href="https://google.com"
    target="_blank"
    rel="noopener noreferrer"
    disabled
>
    Goto google.com DISABLED
</Anchor>
```

## Palette

> **NOTE**: Introduced feature in `v0.4.3`.

You can change the color palette of the `Anchor` via the `palette` property.

```svelte {title="Anchor Palette" mode="repl"}
<script>
    import {Anchor, Stack} from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <Anchor
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
    >
        Goto google.com DEFAULT
    </Anchor>

    <Anchor
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        palette="accent"
    >
        Goto google.com ACCENT
    </Anchor>

    <Anchor
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        palette="neutral"
    >
        Goto google.com NEUTRAL
    </Anchor>

    <Anchor
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        palette="dark"
    >
        Goto google.com DARK
    </Anchor>

    <Anchor
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        palette="light"
    >
        Goto google.com LIGHT
    </Anchor>

    <Anchor
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        palette="alert"
    >
        Goto google.com ALERT
    </Anchor>

    <Anchor
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        palette="affirmative"
    >
        Goto google.com AFFIRMATIVE
    </Anchor>

    <Anchor
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        palette="informative"
    >
        Goto google.com INFORMATIVE
    </Anchor>

    <Anchor
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        palette="negative"
    >
        Goto google.com NEGATIVE
    </Anchor>
</Stack.Container>
```
