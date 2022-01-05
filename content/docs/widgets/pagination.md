+++
[[properties.Pagination]]
name="href"
description="Alters the paging buttons to be link, using the `${page}` token in link to replace with the paging number."
types=["string"]

[[properties.Pagination]]
name="pages"
description="Sets how many pages are available for the associated content."
types=["number", "string"]

[[properties.Pagination]]
name="steps"
description="Sets how many +/- numerical steps are taken from the current `value` property to display as paging buttons."
default="2"
types=["2", "number", "string"]

[[properties.Pagination]]
name="value"
description="Sets the currently active page for the associated content."
types=["number", "string"]

[[properties.Pagination]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "dark", "light", "alert", "affirmative", "negative"]

[[properties.Pagination]]
name="sizing"
description="Sets the sizing of the paging buttons."
types=["tiny", "small", "medium", "large", "huge"]

[[events.Pagination]]
name="select"
description="Fires whenever a paging button is selected."
types=["CustomEvent<{page: number}>"]

[[slots.Pagination]]
name="next"
description="Used to alter the rendered icon for the next button."
types=["{}"]

[[slots.Pagination]]
name="previous"
description="Used to alter the rendered icon for the previous button."
types=["{}"]
+++

# Pagination

> **NOTE**: New since `v0.5.1`.

`Pagination` is typically used for allowing the user to navigate data or content that is separated into groupings of information, or "pages".

```svelte {title="Pagination Preview" mode="repl"}
<script>
    import {Pagination} from "@kahi-ui/framework";

    let value = 5;
</script>

<Pagination
    pages={10}
    palette="accent"
    {value}
    on:select={(event) => {
        const page = event.detail.page;

        value = page;
    }}
/>
```

## Imports

```svelte {title="Pagination Imports"}
<script>
    import {Pagination} from "@kahi-ui/framework";
</script>
```

## Paging

You can set how many pages there are for the associated content and which page is current via the `pages` / `value` properties respectively.

```svelte {title="Pagination Paging" mode="repl"}
<script>
    import {Pagination} from "@kahi-ui/framework";
</script>

<Pagination pages={42} value={24} palette="accent" />
```

## Anchors

> **IMPORTANT**: The `${page}` token is non-standard, it needs to be set as a Javascript string literal, e.g. `href={"/path/to/list/${href}"}`

You can have the paging buttons be anchors via `href` property. And adding `${page}` in your link where you want the page number to be inserted.

```svelte {title="Pagination Anchors" mode="repl"}
<script>
    import {Pagination} from "@kahi-ui/framework";
</script>

<Pagination
    href={"/path/to/list?page=${page}"}
    pages={42}
    value={24}
    palette="accent"
/>
```

## Steps

You can change how many incremental / decremental steps of paging buttons are displayed via the `steps` property.

```svelte {title="Pagination Steps" mode="repl"}
<script>
    import {Pagination} from "@kahi-ui/framework";
</script>

<Pagination
    pages={10}
    steps={3}
    value={5}
    palette="accent"
/>
```

## Slot

You can alter the icons / text used for the previous / next buttons via the `previous` / `next` slots respectively.

<!-- prettier-ignore -->
```svelte {title="Pagination Slot" mode="repl"}
<script>
    import {Pagination} from "@kahi-ui/framework";
</script>

<Pagination pages={10} value={5} palette="accent">
    <svelte:fragment slot="previous">
        -
    </svelte:fragment>

    <svelte:fragment slot="next">
        +
    </svelte:fragment>
</Pagination>
```

## Palette

You can change the color palette of the `Pagination` via the `palette` property.

```svelte {title="Pagination Palette" mode="repl"}
<script>
    import {
        Pagination,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Pagination pages={10} value={5} />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>

        <Pagination
            pages={10}
            value={5}
            palette="accent"
        />
    </div>

    <div>
        <Text is="strong">DARK</Text>

        <Pagination
            pages={10}
            value={5}
            palette="dark"
        />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>

        <Pagination
            pages={10}
            value={5}
            palette="light"
        />
    </div>

    <div>
        <Text is="strong">ALERT</Text>

        <Pagination
            pages={10}
            value={5}
            palette="alert"
        />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>

        <Pagination
            pages={10}
            value={5}
            palette="affirmative"
        />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>

        <Pagination
            pages={10}
            value={5}
            palette="negative"
        />
    </div>
</Stack>
```

### Sizing

You can alter the overall sizing look and feel via the `sizing` property.

```svelte {title="Pagination Sizing" mode="repl"}
<script>
    import {
        Pagination,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>
        <Pagination pages={10} value={5} />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <Pagination
            pages={10}
            value={5}
            sizing="tiny"
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Pagination
            pages={10}
            value={5}
            sizing="small"
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Pagination
            pages={10}
            value={5}
            sizing="medium"
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Pagination
            pages={10}
            value={5}
            sizing="large"
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Pagination
            pages={10}
            value={5}
            sizing="huge"
        />
    </div>
</Stack>
```
