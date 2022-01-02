<script lang="ts">
    import type {
        PROPERTY_ALIGNMENT_X_BREAKPOINT,
        PROPERTY_ALIGNMENT_Y_BREAKPOINT,
    } from "@kahi-ui/framework";
    import {Overlay} from "@kahi-ui/framework";

    let _class: string = "";
    export let style: string | undefined = undefined;
    export {_class as class};

    export let alignment_x: PROPERTY_ALIGNMENT_X_BREAKPOINT | undefined = undefined;
    export let alignment_y: PROPERTY_ALIGNMENT_Y_BREAKPOINT | undefined = undefined;
</script>

<Overlay.Container class="repl-overlay {_class}" {style}>
    <Overlay.Section {alignment_x} {alignment_y}>
        <slot />
    </Overlay.Section>
</Overlay.Container>

<style>
    :global(.repl-overlay) {
        position: absolute;
    }
</style>
