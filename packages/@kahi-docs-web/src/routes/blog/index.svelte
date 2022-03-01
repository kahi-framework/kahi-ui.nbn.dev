<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    export const load: Load = () => {
        return {
            status: 302,
            redirect: "/blog/2022-03/0.6.2-introducing-dataselect",
        };
    };
</script>
