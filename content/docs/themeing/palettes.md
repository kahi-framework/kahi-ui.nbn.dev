# Palettes

> **IMPORTANT**: Palette CSS Custom Properties are defined as a `hue, saturation, lightness` tuple, so Components can customize opacity based on context.

Kahi UI in its `default` theme uses a simplistic generative palette generator, which mixes the `dark` and `light` colors in steps to produce shading.

When producing palette shades, the "lightest" shade blends in the background the most and "darkest" shade stands out of the background the most. With the background color depends on if the theme is in light or dark mode. In light mode using `light` as the background, and in dark mode using `dark` as the background.

```svelte {title="Palettes Preview" mode="repl"}
<script>
    import {Stack, Text} from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium">
    <div>
        <Text is="strong">ACCENT</Text>

        <Stack.Container
            orientation="horizontal"
            alignment_x="stretch"
        >
            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-accent-background-lightest));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-accent-background-lighter));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-accent-background-light));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-accent-background-normal));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-accent-background-bold));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-accent-background-bolder));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-accent-background-boldest));"
            />
        </Stack.Container>
    </div>

    <div>
        <Text is="strong">NEUTRAL</Text>

        <Stack.Container
            orientation="horizontal"
            alignment_x="stretch"
        >
            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-neutral-background-lightest));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-neutral-background-lighter));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-neutral-background-light));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-neutral-background-normal));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-neutral-background-bold));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-neutral-background-bolder));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-neutral-background-boldest));"
            />
        </Stack.Container>
    </div>

    <div>
        <Text is="strong">OFF</Text>

        <Stack.Container
            orientation="horizontal"
            alignment_x="stretch"
        >
            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-off-background-lightest));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-off-background-lighter));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-off-background-light));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-off-background-normal));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-off-background-bold));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-off-background-bolder));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-off-background-boldest));"
            />
        </Stack.Container>
    </div>

    <div>
        <Text is="strong">DARK</Text>

        <Stack.Container
            orientation="horizontal"
            alignment_x="stretch"
        >
            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-dark-background-lightest));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-dark-background-lighter));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-dark-background-light));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-dark-background-normal));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-dark-background-bold));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-dark-background-bolder));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-dark-background-boldest));"
            />
        </Stack.Container>
    </div>

    <div>
        <Text is="strong">LIGHT</Text>

        <Stack.Container
            orientation="horizontal"
            alignment_x="stretch"
        >
            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-light-background-lightest));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-light-background-lighter));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-light-background-light));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-light-background-normal));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-light-background-bold));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-light-background-bolder));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-light-background-boldest));"
            />
        </Stack.Container>
    </div>

    <div>
        <Text is="strong">ALERT</Text>

        <Stack.Container
            orientation="horizontal"
            alignment_x="stretch"
        >
            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-alert-background-lightest));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-alert-background-lighter));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-alert-background-light));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-alert-background-normal));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-alert-background-bold));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-alert-background-bolder));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-alert-background-boldest));"
            />
        </Stack.Container>
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>

        <Stack.Container
            orientation="horizontal"
            alignment_x="stretch"
        >
            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-affirmative-background-lightest));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-affirmative-background-lighter));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-affirmative-background-light));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-affirmative-background-normal));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-affirmative-background-bold));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-affirmative-background-bolder));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-affirmative-background-boldest));"
            />
        </Stack.Container>
    </div>

    <div>
        <Text is="strong">INFORMATIVE</Text>

        <Stack.Container
            orientation="horizontal"
            alignment_x="stretch"
        >
            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-informative-background-lightest));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-informative-background-lighter));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-informative-background-light));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-informative-background-normal));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-informative-background-bold));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-informative-background-bolder));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-informative-background-boldest));"
            />
        </Stack.Container>
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>

        <Stack.Container
            orientation="horizontal"
            alignment_x="stretch"
        >
            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-negative-background-lightest));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-negative-background-lighter));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-negative-background-light));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-negative-background-normal));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-negative-background-bold));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-negative-background-bolder));"
            />

            <div
                data-height="icon-massive"
                style="background: hsl(var(--palettes-negative-background-boldest));"
            />
        </Stack.Container>
    </div>
</Stack.Container>
```
