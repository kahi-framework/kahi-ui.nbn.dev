+++
[[properties."Breadcrumb.Container"]]
name="separator"
description="Alters the separator rendered between each breadcrumb item."
types=["string"]

[[properties."Breadcrumb.Item"]]
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

[[events."Breadcrumb.Anchor"]]
name="click"
description="Fires whenever the `Breadcrumb.Anchor` is clicked."
types=["MouseEvent"]

[[slots."Breadcrumb.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Breadcrumb.Anchor"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Breadcrumb.Item"]]
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

`Breadcrumb` is typically used to render a series of links with separators. With the each link left of the right-most a state in the end-user's navigation history. Or, a route hierarchy of the Web Application. e.g. directory paths

```svelte repl Breadcrumb Preview
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

```html default Breadcrumb Imports
<script>
    import {Breadcrumb} from "@kahi-ui/framework";

    const {Container, Anchor, Item} = Breadcrumb;
</script>
```

## Separator

You can alter the separator between items rendered via the `separator` property.

```svelte repl Breadcrumb Separator
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
