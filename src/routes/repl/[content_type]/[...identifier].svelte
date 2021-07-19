<script lang="ts">
    import REPLOverlay from "../../../components/repl/REPLOverlay.svelte";

    let view: "code" | "render" | "split" = "split";

    function on_copy_click(event: MouseEvent) {}
</script>

hello world?

<REPLOverlay bind:view on:copy_click={on_copy_click} />
