# Custom Builds

> **WARNING**: When using manual builds of Kahi UI, you'll need to rebuild the distributables every time you upgrade Kahi UI.

If you're building a Web Application that's particularly sensitive to latency, page sizes, etc. It's recommended to create custom builds of the Framework's CSS distributables.

## Downloading

First, you'll need to head over to [Releases](https://github.com/novacbn/kahi-ui/releases), download the source code `.zip` / `.tar.gz` archive that matches the version of Kahi UI you're developing against, and decompress the archive onto your file.

## Installation

Once you've got everything downloaded and decompressed, open a terminal in the source code directory and install Kahi UI's dependencies.

```bash
npm ci
```

## Building

Now you can start building the CSS distributables via a NPM script.

```bash
npm run build:framework
```

Which should output in the `package/` directory like so.

```bash
package/
│
└───kahi-ui.framework.css           // Main CSS rules and stylings
└───kahi-ui.framework.css.map       // Source map for the above file
└───kahi-ui.theme.default.css       // Themeing variables that define the look and feel
└───kahi-ui.theme.default.css.map   // Source map for the above file
```

Then just copy the files you require into your Web Application's codebase and import them.

## Minifying

You can also build the minified versions of the CSS distributables with another NPM script.

```bash
npm run build:minify
```

Which would output to `package/` without source maps like so.

```bash
package/
│
└───kahi-ui.framework.min.css       // Main CSS rules and stylings
└───kahi-ui.theme.default.min.css   // Themeing variables that define the look and feel
```

## Filters

Each individual feature of Kahi UI that requires CSS can turned off, removing it from builds. And it's as simple as adding command line parameters. Just run either of the NPM scripts with filter parameter following this format: `--disable-{SCOPE}-{NAME}`.

For instance, if wanting to disable [Grid](../layouts/grid.md) and the responsitivity of [Spacings](../globals/spacings.md) (e.g. `margin={["mobile:medium"]}`), try the following.

> **USAGE**: The double dashes (`--`) after `build:framework` / `build:minify` is required so NPM passes our command line parameters to the script.

```bash
npm run build:framework -- --disable-globals-intrinsics-responsitivity --disable-components-grid
```

### Components

-   Disclosure

    -   `--disable-components-disclosure-accordion` — [`Accordion`](../display/accordion.md)
    -   `--disable-components-disclosure-carousel` — [`Carousel`](../display/carousel.md)
    -   `--disable-components-disclosure-tab` — [`Tab`](../display/tab.md)

-   Display

    -   `--disable-components-display-badge` — [`Badge`](../display/badge.md)
    -   `--disable-components-display-kbd` — [`Kbd`](../display/kbd.md)
    -   `--disable-components-display-list` — [`List`](../display/list.md)

-   Embedded

    -   `--disable-components-embedded-figure` — [`Figure`](../embedded/figure.md)

-   Feedback

    -   `--disable-components-feedback-dot` — [`Dot`](../feedback/dot.md)
    -   `--disable-components-feedback-ellipsis` — [`Ellipsis`](../feedback/ellipsis.md)
    -   `--disable-components-feedback-progress` — [`Progress`](../feedback/progress.md)

-   Interactables

    -   `--disable-components-interactables-button` — [`Button`](../interactables/button.md)
    -   `--disable-components-interactables-check` — [`Check`](../interactables/check.md)
    -   `--disable-components-interactables-file-drop-input` — [`FileDropInput`](../interactables/filedropinput.md)
    -   `--disable-components-interactables-form` — [`Form`](../interactables/form.md)
    -   `--disable-components-interactables-number-input` — [`NumberInput`](../interactables/numberinput.md)
    -   `--disable-components-interactables-radio` — [`Radio`](../interactables/radio.md)
    -   `--disable-components-interactables-switch` — [`Switch`](../interactables/switch.md)
    -   `--disable-components-interactables-text-input` — [`TextInput`](../interactables/textinput.md)

-   Layouts

    -   `--disable-components-layouts-center` — [`Center`](../layouts/center.md)
    -   `--disable-components-layouts-container` — [`Container`](../layouts/container.md)
    -   `--disable-components-layouts-divider` — [`Divider`](../layouts/divider.md)
    -   `--disable-components-layouts-grid` — [`Grid`](../layouts/grid.md)
    -   `--disable-components-layouts-group` — [`Group`](../layouts/group.md)
    -   `--disable-components-layouts-mosaic` — [`Mosaic`](../layouts/mosaic.md)
    -   `--disable-components-layouts-position` — [`Position`](../layouts/position.md)
    -   `--disable-components-layouts-scrollable` — [`Scrollable`](../layouts/scrollaebl.md)
    -   `--disable-components-layouts-spacer` — [`Spacer`](../layouts/spacer.md)
    -   `--disable-components-layouts-stack` — [`Stack`](../layouts/stack.md)

-   Navigation

    -   `--disable-components-navigation-anchor` — [`Anchor`](../navigation/anchor.md)
    -   `--disable-components-navigation-aside` — [`Aside`](../navigation/aside.md)
    -   `--disable-components-navigation-breadcrumb` — [`Breadcrumb`](../navigation/breadcrumb.md)
    -   `--disable-components-navigation-menu` — [`Menu`](../navigation/menu.md)
    -   `--disable-components-navigation-omni` — [`Omni`](../navigation/omni.md)

-   Overlays

    -   `--disable-components-overlays-backdrop` — [`Backdrop`](../overlays/backdrop.md)
    -   `--disable-components-overlays-clickable` — [`Clickable`](../overlays/clickable.md)
    -   `--disable-components-overlays-overlay` — [`Overlay`](../overlays/overlay.md)
    -   `--disable-components-overlays-popover` — [`Popover`](../overlays/popover.md)

-   Surfaces

    -   `--disable-components-surfaces-box` — [`Box`](../surfaces/box.md)
    -   `--disable-components-surfaces-card` — [`Card`](../surfaces/card.md)
    -   `--disable-components-surfaces-hero` — [`Hero`](../surfaces/hero.md)
    -   `--disable-components-surfaces-tile` — [`Tile`](../surfaces/tile.md)

-   Typography

    -   `--disable-components-typography-blockquote` — [`Blockquote`](../typography/blockquote.md)
    -   `--disable-components-typography-code` — [`Code`](../typography/code.md)
    -   `--disable-components-typography-heading` — [`Heading`](../typography/heading.md)
    -   `--disable-components-typography-text` — [`Text`](../typography/text.md)

-   Utilities

    -   `--disable-components-utilities-animation` — [`Animation`](../utilities/animation.md)
    -   `--disable-components-utilities-portal` — [`Portal`](../utilities/portal.md)
    -   `--disable-components-utilities-transition` — [`Transition`](../utilities/transition.md)

### Globals

> **WARNING**: Most non-Component specific properties are implemented as global CSS attributes to reduce redundancy. If you turn off the feature, it turns off for **ALL** Components.

-   `--disable-globals-alignments` — `<* alignment="{ALIGNMENT}" alignment_x="{ALIGNMENT}" alignment_y="{ALIGNMENT}">`
-   `--disable-globals-alignments-responsitivity` — `<* alignment={["{VIEWPORT}:{ALIGNMENT}]} alignment_x={["{VIEWPORT}:{ALIGNMENT}]} alignment_y={["{VIEWPORT}:{ALIGNMENT}]}>`
-   `--disable-globals-elevations` — `<* elevation="{ELEVATION}">`
-   `--disable-globals-elevations-responsitivity` — `<* elevation={["{VIEWPORT}:{ELEVATION}"]}>`
-   `--disable-globals-fit` — `<* fit="{FIT}">`
-   `--disable-globals-fit-responsitivity` — `<* fit={["{VIEWPORT}:{FIT}"]}>`
-   `--disable-globals-grid` — `<* points="{POINTS}" span="{SPAN}" span_x="{SPAN}" span_y="{SPAN}">`
-   `--disable-globals-grid-responsitivity` — `<* points={["{VIEWPORT}:{POINTS}"]} span={["{VIEWPORT}:{SPAN}"]} span_x={["{VIEWPORT}:{SPAN}"]} span_y={["{VIEWPORT}:{SPAN}"]}>`
-   `--disable-globals-intrinsics` — `<* height max_height min_height margin padding size max_size min_size width max_width min_width>`
-   `--disable-globals-intrinsics-responsitivity` — `<* height max_height min_height margin padding size max_size min_size width max_width min_width>`
-   `--disable-globals-orientations` — `<* orientation="{ORIENTATION}">`
-   `--disable-globals-orientations-responsitivity` — `<* orientation={["{VIEWPORT}:{ORIENTATION}"]}>`
-   `--disable-globals-palettes` — `<* palette="{PALETTE}">`
-   `--disable-globals-radius` — `<* radius="{RADIUS}">`
-   `--disable-globals-radius-responsitivity` — `<* radius={["{VIEWPORT}:{RADIUS}"]}>`
-   `--disable-globals-sizings` — `<* sizing="{SIZING}">`
-   `--disable-globals-sizings-responsitivity` — `<* sizing={["{VIEWPORT}:{SIZING}"]}>`
-   `--disable-globals-spacings` — `<* spacing="{SPACING}" spacing_x="{SPACING}" spacing_y="{SPACING}">`
-   `--disable-globals-spacings-responsitivity`— `<* spacing={["{VIEWPORT}:{SPACING}"]} spacing_x={["{VIEWPORT}:{SPACING}"]} spacing_y={["{VIEWPORT}:{SPACING}"]}>`
