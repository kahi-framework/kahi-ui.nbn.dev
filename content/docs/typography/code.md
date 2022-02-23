+++
[[properties.Code]]
name="is"
description="Changes the HTML tag used for rendering the text, and the text formatting."
default="code"
types=["code", "pre"]

[[properties.Code]]
name="palette"
description="Alters the displayed color scheme."
types=["auto", "inverse", "inherit", "accent", "neutral", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[slots.Code]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Code]]
name="--code-palette-background-lightest"
description="Controls the default RGB color value used for `background`."
types=["<r,g,b>"]

[[custom_properties.Code]]
name="--code-background-opacity"
description="Controls the `background` opacity."
types=["<alpha-value>"]

[[custom_properties.Code]]
name="--code-border-radius"
description="Controls the `border-radius` used."
types=["<length>", "<percentage>"]

[[custom_properties.Code]]
name="--code-font-family"
description="Controls the `font-family` used."
types=["<font-family>", "<generic-name>"]

[[custom_properties.Code]]
name="--code-font-size"
description="Controls the `font-size` used."
types=["<length>", "<percentage>"]

[[custom_properties.Code]]
name="--code-padding-x"
description="Controls the X-Axis `padding-left` / `padding-right` used."
types=["<length>"]

[[custom_properties.Code]]
name="--code-padding-y"
description="Controls the Y-Axis `padding-bottom` / `padding-top` used."
types=["<length>"]
+++

# Code

> **NOTE**: Introduced feature in `v0.2.0`.

`Code` is used to render inline monospaced text, typically for showing programming code / application configuration to an user.

```svelte {title="Code Preview" mode="repl"}
<script>
    import {Code} from "@kahi-ui/framework";
</script>

<Code>
    import * as Kahi from "@kahi-ui/framework";
</Code>
```

## Imports

```svelte {title="Code Imports"}
<script>
    import {Code} from "@kahi-ui/framework";
</script>
```

## Palette

You can change the color palette of `Code` via the `palette` property.

```svelte {title="Code Palette" mode="repl"}
<script>
    import {
        Code,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container alignment_x="left" spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>

        <br />
        <Code>
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">ACCENT</Text>

        <br />
        <Code palette="accent">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">NEUTRAL</Text>

        <br />
        <Code palette="neutral">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">DARK</Text>

        <br />
        <Code palette="dark">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">LIGHT</Text>

        <br />
        <Code palette="light">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">ALERT</Text>

        <br />
        <Code palette="alert">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>

        <br />
        <Code palette="affirmative">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">INFORMATIVE</Text>

        <br />
        <Code palette="informative">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>

        <br />
        <Code palette="negative">
            import * as Kahi from "@kahi-ui/framework";
        </Code>
    </div>
</Stack.Container>
```

## Code Block

You can display blocks of code via a `<pre>` HTML tag by passing `is="pre"`.

<!-- prettier-ignore -->
```svelte {title="Code Block" mode="repl"}
<script>
    import {Code} from "@kahi-ui/framework";
</script>

<Code is="pre">
import math from "a-math-library";

const result = math.add(1, 1);
console.log("Our value is:", result);
</Code>
```
