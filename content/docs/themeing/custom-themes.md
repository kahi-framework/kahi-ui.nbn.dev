# Custom Themes

> **WARNING**: When using manual builds of Kahi UI, you'll need to rebuild the distributables every time you upgrade Kahi UI.

If you want a more compreshensive customization of Kahi UI's look and feel, you can use the Framework's [Custom Builds](../framework/custom-builds.md) system to produce your own distributables.

## Prerequisites

Make sure to familiarize yourself with Framework's [Custom Builds](../framework/custom-builds.md) system before starting. It's also recommended to learn [SASS](https://sass-lang.com) as-well.

## Global Theme

After having Kahi UI's source code downloaded and installed, view the `src/themes/default/_theme.scss`. This file contains all the non-Component specific definitions that apply every where in the Framework. Which is broken up into the headers as seen below.

### Palettes

> **IMPORTANT**: You must **ALWAYS** include `accent`, `dark`, `light`, and `neutral` color palettes when modifying the theme.

These definitions relate to the Framework's overall color design. By default, we use the Framework's palette generation system, which mixes the base color into the `dark` and `light` colors to produce the various shades that Kahi UI uses in its color design.

> **USAGE**: When using the generative color system, the `dark` and `light` palettes **ALWAYS** needs to come first.

> **USAGE**: When using the generative color system, the foreground color will be automatically selected from the `dark` and `light` palettes.

<!-- prettier-ignore -->
```scss
@include constants.define-constants(
    palettes.generate-darklight-palette(
        $dark: (
            // Base color used to generate shades, can be in any color space
            "base": <COLOR>,
            // How much of the `light` palette should be mixed into the base color per shade
            "stepping": <PERCENTAGE>,
        ),
        $light: (
            // Base color used to generate shades, can be in any color space
            "base": <COLOR>,
            // How much of the `dark` palette should be mixed into the base color per shade
            "stepping": <PERCENTAGE>,
        )
    )
);

@include constants.define-constants(
    (
        "palettes": (
            "<PALETTE>": palettes.generate-color-palette(
                    $dark: (
                        // Base darkmode color used to generate shades, can be in any color
                        "base": <COLOR>,
                        // How much of the `dark` palette should be mixed into the base color per shade
                        "stepping": <PERCENTAGE>,
                    ),
                    $light: (
                        // Base lightmode color used to generate shades, can be in any color
                        "base": <COLOR>,
                        // How much of the `light` palette should be mixed into the base color per shade
                        "stepping": <PERCENTAGE>,
                    )
                ),
        ),
    )
);
```

Alternatively, you can opt-out of the generative color system and manually specify each palette individually.

> **USAGE**: Keep in mind that the shading scale used in Kahi UI is `lightest` blends in the most with the background color and `boldest` is the least.

<!-- prettier-ignore -->
```scss
@include constants.define-constants(
    (
        "palettes": (
            "<PALETTE>": (
                "dark": (
                    "base": <COLOR>,
                    // Which palette color is used to contrast with this definition, e.g. for
                    "foreground": "<PALETTE>",
                    "lightest": <COLOR>,
                    "lighter": <COLOR>,
                    "light": <COLOR>,
                    "normal": <COLOR>,
                    "bold": <COLOR>,
                    "bolder": <COLOR>,
                    "boldest": <COLOR>,
                ),
                "light": (
                    "base": <COLOR>,
                    // Which palette color is used to contrast with this definition, e.g. for
                    "foreground": "<PALETTE>",
                    "lightest": <COLOR>,
                    "lighter": <COLOR>,
                    "light": <COLOR>,
                    "normal": <COLOR>,
                    "bold": <COLOR>,
                    "bolder": <COLOR>,
                    "boldest": <COLOR>,
                ),
            ),
        ),
    )
);
```

As an example `accent` palette based on the `default` theme that ships with Kahi UI.

```scss
@include constants.define-constants(
    (
        "palettes": (
            "accent": (
                "dark": (
                    "base": hsl(200deg, 25%, 47.5%),
                    "foreground": "light",
                    "lightest": hsl(201deg, 24%, 40%),
                    "lighter": hsl(200deg, 24%, 42%),
                    "light": hsl(200deg, 24%, 43%),
                    "normal": hsl(200deg, 24%, 44%),
                    "bold": hsl(200deg, 24%, 46%),
                    "bolder": hsl(200deg, 25%, 47.5%),
                    "boldest": hsl(199deg, 23%, 49%),
                ),
                "light": (
                    "base": hsl(200deg, 30%, 47.5%),
                    "foreground": "light",
                    "lightest": hsl(199deg, 26%, 57%),
                    "lighter": hsl(200deg, 26%, 55%),
                    "light": hsl(200deg, 26%, 53%),
                    "normal": hsl(199deg, 27%, 51%),
                    "bold": hsl(200deg, 27%, 49%),
                    "bolder": hsl(200deg, 30%, 47.5%),
                    "boldest": hsl(200deg, 29%, 46%),
                ),
            ),
        ),
    )
);
```

### Viewports

> **IMPORTANT**: Viewports are **NOT** to be modified **AT ALL**. Due to [Custom Media Queries](https://drafts.csswg.org/mediaqueries-5/#custom-mq) not being supported at the moment by Browsers.

These definitions relate to the Framework's Viewport breakpoints.

### Font Families

> **IMPORTANT**: You must **ALWAYS** include `block`, `inline`, and `monospace` font families when modifying the theme.

These definitions relate to the font family stacks used across the Framework.

```scss
@include variables.define-variables(
    (
        "fonts.families": (
            "<FAMILY>": <FONT-STACK>,
        ),
    )
);
```

### Font Letter Spacings

> **IMPORTANT**: These definitions must remain unitless! Components typically define their own unit depending on context.

These definitions relate to the spacing between letter spacings, typically used in categorization legends. By default we use [Modular Scale](https://www.modularscale.com/) to generate spacings.

<!-- prettier-ignore -->
```scss
@include variables.define-variables(
    (
        "fonts": (
            "letter-spacings": sizes.generate-scaling(
                $base: <BASE-MULTIPLIER>,
                $ratio: <RATIO>
            ),
        ),
    )
);
```

Alternatively, you can opt-out of the generative spacing system and manually specify each spacing individually.

> **USAGE**: Keep in mind that the spacing scale used in Kahi UI is `nano` is the smallest spacing and `massive` is the biggest.

```scss
@include variables.define-variables(
    (
        "fonts": (
            "letter-spacings": (
                "nano": <MULTIPLIER>,
                "tiny": <MULTIPLIER>,
                "small": <MULTIPLIER>,
                "medium": <MULTIPLIER>,
                "large": <MULTIPLIER>,
                "huge": <MULTIPLIER>,
                "massive": <MULTIPLIER>,
            ),
        ),
    )
);
```

As an example based on the `default` theme that ships with Kahi UI.

```scss
@include variables.define-variables(
    (
        "fonts": (
            "letter-spacings": (
                "nano": 0.025,
                "tiny": 0.05,
                "small": 0.1,
                "medium": 0.2,
                "large": 0.4,
                "huge": 0.8,
                "massive": 1.6,
            ),
        ),
    )
);
```

### Font Line Heights

> **IMPORTANT**: These definitions must remain unitless! Components typically define their own unit depending on context.

These definitions relate to the spacing between each line of text. By default we use [Modular Scale](https://www.modularscale.com/) to generate spacings.

<!-- prettier-ignore -->
```scss
@include variables.define-variables(
    (
        "fonts": (
            "line-heights": sizes.generate-scaling(
                $base: <BASE-MULTIPLIER>,
                $ratio: <RATIO>
            ),
        ),
    )
);
```

Alternatively, you can opt-out of the generative spacing system and manually specify each spacing individually.

> **USAGE**: Keep in mind that the spacing scale used in Kahi UI is `nano` is the smallest spacing and `massive` is the biggest.

```scss
@include variables.define-variables(
    (
        "fonts": (
            "line-heights": (
                "nano": <MULTIPLIER>,
                "tiny": <MULTIPLIER>,
                "small": <MULTIPLIER>,
                "medium": <MULTIPLIER>,
                "large": <MULTIPLIER>,
                "huge": <MULTIPLIER>,
                "massive": <MULTIPLIER>,
            ),
        ),
    )
);
```

As an example based on the `default` theme that ships with Kahi UI.

```scss
@include variables.define-variables(
    (
        "fonts": (
            "line-heights": (
                "nano": 1,
                "tiny": 1.075,
                "small": 1.155,
                "medium": 1.242,
                "large": 1.335,
                "huge": 1.435,
                "massive": 1.543,
            ),
        ),
    )
);
```

### Font Sizings

> **IMPORTANT**: These definitions must remain unitless! Components typically define their own unit depending on context.

> **IMPORTANT**: You must **ALWAYS** include `block` and `inline` font sizings when modifying the theme.

These definitions relate to the , typically used in . By default we use [Modular Scale](https://www.modularscale.com/) to generate sizings.

<!-- prettier-ignore -->
```scss
@include variables.define-variables(
    (
        "fonts": (
            "sizes": (
                "<TIER>": sizes.generate-scaling(
                    $base: <BASE-MULTIPLIER>,
                    $ratio: <RATIO>
                ),
            ),
        ),
    )
);
```

Alternatively, you can opt-out of the generative sizing system and manually specify each sizing individually.

> **USAGE**: Keep in mind that the sizing scale used in Kahi UI is `nano` is the smallest and `massive` is the biggest.

```scss
@include variables.define-variables(
    (
        "fonts": (
            "sizes": (
                "<TIER>": (
                    "nano": <MULTIPLIER>,
                    "tiny": <MULTIPLIER>,
                    "small": <MULTIPLIER>,
                    "medium": <MULTIPLIER>,
                    "large": <MULTIPLIER>,
                    "huge": <MULTIPLIER>,
                    "massive": <MULTIPLIER>,
                ),
            ),
        ),
    )
);
```

As an example based on the `inline` tier that the `default` theme that ships with Kahi UI.

```scss
@include variables.define-variables(
    (
        "fonts": (
            "sizes": (
                "inline": (
                    "nano": 0.75,
                    "tiny": 0.866,
                    "small": 1,
                    "medium": 1.155,
                    "large": 1.334,
                    "huge": 1.541,
                    "massive": 1.78,
                ),
            ),
        ),
    )
);
```

### Spacing Tiers

> **IMPORTANT**: These definitions must remain unitless! Components typically define their own unit depending on context.

> **IMPORTANT**: You must **ALWAYS** include `block` and `inline` spacings when modifying the theme.

These definitions relate to spacing modifiers, typically used in Layouts Components or global intrinsics properties like `margin`. By default we use [Modular Scale](https://www.modularscale.com/) to generate spacings.

<!-- prettier-ignore -->
```scss
@include variables.define-variables(
    (
        "spacings": (
            "<TIER>": sizes.generate-scaling(
                $base: <BASE-MULTIPLIER>,
                $ratio: <RATIO>
            ),
        ),
    )
);
```

Alternatively, you can opt-out of the generative spacing system and manually specify each spacing individually.

> **USAGE**: Keep in mind that the spacing scale used in Kahi UI `massive` is the biggest and `nano` is the smallest.

```scss
@include variables.define-variables(
    (
        "spacings": (
            "<TIER>": (
                "nano": <MULTIPLIER>,
                "tiny": <MULTIPLIER>,
                "small": <MULTIPLIER>,
                "medium": <MULTIPLIER>,
                "large": <MULTIPLIER>,
                "huge": <MULTIPLIER>,
                "massive": <MULTIPLIER>,
            ),
        ),
    )
);
```

As an example based on the `block` tier that the `default` theme that ships with Kahi UI.

```scss
@include variables.define-variables(
    (
        "spacings": (
            "block": (
                "nano": 0.125,
                "tiny": 0.25,
                "small": 0.5,
                "medium": 1,
                "large": 2,
                "huge": 4,
                "massive": 8,
            ),
        ),
    )
);
```

### Spacing Constants

These definitions relate to spacing modifiers, used for global intrinsics properties like `margin`.

```scss
@include constants.define-constants(
    (
        "spacings": (
            "<CONSTANT>": <SPACING>,
        ),
    )
);
```

### Size Tiers

> **IMPORTANT**: These definitions must remain unitless! Components typically define their own unit depending on context.

> **IMPORTANT**: You must **ALWAYS** include `block` sizings when modifying the theme.

These definitions relate to size modifiers, used for global intrinsics properties like `width`. By default we use [Modular Scale](https://www.modularscale.com/) to generate sizes.

<!-- prettier-ignore -->
```scss
@include variables.define-variables(
    (
        "sizes": (
            "<TIER>": sizes.generate-scaling(
                $base: <BASE-MULTIPLIER>,
                $ratio: <RATIO>
            ),
        ),
    )
);
```

Alternatively, you can opt-out of the generative size system and manually specify each size individually.

> **USAGE**: Keep in mind that the size scale used in Kahi UI is `nano` is the smallest and `massive` is the biggest.

```scss
@include variables.define-variables(
    (
        "sizes": (
            "": (
                "nano": <MULTIPLIER>,
                "tiny": <MULTIPLIER>,
                "small": <MULTIPLIER>,
                "medium": <MULTIPLIER>,
                "large": <MULTIPLIER>,
                "huge": <MULTIPLIER>,
                "massive": <MULTIPLIER>,
            ),
        ),
    )
);
```

As an example based on the `block` tier that the `default` theme that ships with Kahi UI.

```scss
@include variables.define-variables(
    (
        "sizes": (
            "block": (
                "nano": 9.5,
                "tiny": 11.4,
                "small": 13.68,
                "medium": 16.416,
                "large": 19.699,
                "huge": 23.639,
                "massive": 28.366,
            ),
        ),
    )
);
```

### Size Constants

These definitions relate to size modifiers, used for global intrinsics properties like `width`.

```scss
@include constants.define-constants(
    (
        "sizes": (
            "<CONSTANT>": <SPACING>,
        ),
    )
);
```

### Radius Sizes

> **IMPORTANT**: These definitions must remain unitless! Components typically define their own unit depending on context.

These definitions relate to sizing modifiers, typically used for Component radii and global radius properties. By default we use [Modular Scale](https://www.modularscale.com/) to generate sizes.

<!-- prettier-ignore -->
```scss
@include variables.define-variables(
    (
        "radius": sizes.generate-scaling(
                $base: <BASE-MULTIPLIER>,
                $ratio: <RATIO>
            )
        ),
    )
);
```

Alternatively, you can opt-out of the generative size system and manually specify each individually.

> **USAGE**: Keep in mind that the size scale used in Kahi UI is `nano` is the smallest and `massive` is the biggest.

```scss
@include variables.define-variables(
    (
        "radius": (
            "nano": <MULTIPLIER>,
            "tiny": <MULTIPLIER>,
            "small": <MULTIPLIER>,
            "medium": <MULTIPLIER>,
            "large": <MULTIPLIER>,
            "huge": <MULTIPLIER>,
            "massive": <MULTIPLIER>,
        ),
    )
);
```

As an example based on the `default` theme that ships with Kahi UI.

```scss
@include variables.define-variables(
    (
        "radius": (
            "nano": 0.125,
            "tiny": 0.25,
            "small": 0.5,
            "medium": 1,
            "large": 2,
            "huge": 4,
            "massive": 8,
        ),
    )
);
```

### Radius Constants

These definitions relate to border radius modifiers, used for global intrinsics properties like `shape`.

```scss
@include constants.define-constants(
    (
        "radius": (
            "<CONSTANT>": <SPACING>,
        ),
    )
);
```

### Easings

...

### Animations

...

### Z-Index

...

### Elevations

...
