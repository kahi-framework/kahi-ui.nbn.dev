# Browser Support

Modern Browsers listed below and generally their derivatives. Primary testing happens on Chrome / Firefox, both mobile and desktop. With occasional testing on Gnome Web which is based on WebKit.

|                       | Chrome             | Edge               | Firefox             | Safari             | Edge _(Pre Chromium)_ | Internet Explorer |
| --------------------- | ------------------ | ------------------ | ------------------- | ------------------ | --------------------- | ----------------- |
| **Estimated Minimum** | 88+ _January 2021_ | 88+ _January 2021_ | 84+ _December 2020_ | 14.1+ _April 2021_ | **NOT SUPPORTED**     | **NOT SUPPORTED** |
| **Tested Minimum**    | 89+                | ?                  | 87+                 | ?                  | **NOT SUPPORTED**     | **NOT SUPPORTED** |

## Features Used

The features listed below are used within Kahi UI, and are newer features. So they raise the minimum Browser versions needed.

### CSS

-   [`clip-path`](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path) w/ Shapes
-   [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
-   [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/display#display_flex) w/ [Gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
-   [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/display#display_grid)
-   [`inset`](https://developer.mozilla.org/en-US/docs/Web/CSS/inset)
-   [`:is`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)
-   [`:not w/ Selector List`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not#browser_compatibility)
-   [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

### Javascript

> **TODO**: Run through the codebase and look for newer JS features used
