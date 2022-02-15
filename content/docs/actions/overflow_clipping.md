# overflow_clipping

> **NOTE**: Introduced feature in `v0.4.13`.

> **IMPORTANT**: `overflow_clipping` only detects if the attached element has is clipping on a given axis, not if the scrollbar is visible.

> **WARNING**: This feature can cause performance degradation while enabled.

`overflow_clipping` is a [Svelte Action](https://svelte.dev/docs#use_action), which when `IOverflowClippingOptions.enabled: boolean` is `true`, runs the `IOverflowClippingOptions.on_clip: (entry: {horizontal: boolean, vertical: boolean}) => void` callback. Whenever content is clipping the bounding box of the attached element.

```svelte {title="overflow_clipping Preview" mode="repl"}
<script>
    import {
        Box,
        Check,
        Heading,
        Scrollable,
        overflow_clipping,
    } from "@kahi-ui/framework";

    let additional_content = false;

    let horizontal_clipping = false;
    let vertical_clipping = false;
</script>

<Check
    id="overflow-clipping-preview-content"
    bind:state={additional_content}
>
    Toggle on additional content
</Check>

<Scrollable
    actions={[
        [
            overflow_clipping,
            {
                enabled: true,
                on_clip: (entry) =>
                    (horizontal_clipping =
                        entry.horizontal),
            },
        ],
    ]}
    style="width:15rem;"
>
    <Box
        palette={horizontal_clipping
            ? "affirmative"
            : "negative"}
    >
        <Heading style="white-space:nowrap;">
            Hello World!
            {#if additional_content}
                And again!
            {/if}
        </Heading>
    </Box>
</Scrollable>

<Scrollable
    margin_top="medium"
    actions={[
        [
            overflow_clipping,
            {
                enabled: true,
                on_clip: (entry) =>
                    (vertical_clipping =
                        entry.vertical),
            },
        ],
    ]}
    style="height:3rem;"
>
    <Box
        palette={vertical_clipping
            ? "affirmative"
            : "negative"}
    >
        <Heading>Hello World!</Heading>

        {#if additional_content}
            <Heading>And again!</Heading>
        {/if}
    </Box>
</Scrollable>
```

## Imports

```javascript {title="overflow_clipping Imports"}
import {overflow_clipping} from "@kahi-ui/framework";
```

## Compatibility

Svelte Actions are always ran on Javascript-enabled Browser. So should not be used for critical end-user functionality, only progressive enhancement.
