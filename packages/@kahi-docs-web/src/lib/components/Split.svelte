<script context="module" lang="ts">
    export enum SPLIT_MODE {
        first = "first",

        last = "last",

        split = "split",
    }

    export enum SPLIT_ORIENTATION {
        horizontal = "horizontal",

        vertical = "vertical",
    }
</script>

<script lang="ts">
    import {mouse_slider} from "../client/mouse_slider";

    let divider_element: HTMLSpanElement;
    let grabbing: boolean = false;

    let _class: string = "";
    export let style: string | undefined = undefined;
    export {_class as class};

    export let mode: keyof typeof SPLIT_MODE = SPLIT_MODE.split;
    export let orientation: keyof typeof SPLIT_ORIENTATION = SPLIT_ORIENTATION.horizontal;
    export let split: number = 0.5;

    function on_slider_move(percentage: number): void {
        split = percentage;
    }

    function on_slider_state(state: boolean): void {
        grabbing = state;
    }
</script>

<div
    class="split {_class}"
    data-mode={mode}
    data-grabbing={grabbing}
    data-orientation={orientation}
    style="--split:{split};{style ?? ''}"
    use:mouse_slider={{
        on_move: on_slider_move,
        on_state: on_slider_state,
        horizontal: orientation === SPLIT_ORIENTATION.horizontal,
        target: divider_element,
    }}
>
    <section style={mode === SPLIT_MODE.last ? "display:none;" : ""}>
        <slot name="first" />
    </section>

    <span bind:this={divider_element} style={mode !== SPLIT_MODE.split ? "display:none;" : ""} />

    <section style={mode === SPLIT_MODE.first ? "display:none;" : ""}>
        <slot name="last" />
    </section>
</div>

<style>
    .split {
        --split: 0;

        display: flex;

        position: relative;

        width: 100%;
        height: 100%;
    }

    .split[data-orientation="horizontal"] {
        flex-direction: row;
    }

    .split[data-orientation="vertical"] {
        flex-direction: column;
    }

    .split > section {
        position: relative;

        flex-grow: 1;
    }

    .split[data-orientation="horizontal"] > section {
        height: 100%;
    }

    .split:not([data-mode="first"])[data-orientation="horizontal"] > section:first-child {
        max-width: calc(100% * clamp(var(--split), 0.15, 0.85));
    }

    .split[data-orientation="vertical"] > section {
        width: 100%;
    }

    .split:not([data-mode="first"])[data-orientation="vertical"] > section:first-child {
        max-height: calc(100% * clamp(var(--split), 0.15, 0.85));
    }

    .split > span {
        display: block;

        border: 4px solid rgba(var(--palette-accent-bold), 0.5);

        user-select: none;
        transition: border-color var(--animation-visual-duration) var(--animation-visual-function);
    }

    .split > span:is(:active, :hover) {
        border-color: rgba(var(--palette-accent-bold), 0.75);
    }

    .split[data-orientation="horizontal"] > span {
        cursor: col-resize;
    }

    .split[data-orientation="vertical"] > span {
        cursor: row-resize;
    }

    .split[data-grabbing="true"],
    .split[data-grabbing="true"] > span {
        cursor: grabbing;
    }
</style>
