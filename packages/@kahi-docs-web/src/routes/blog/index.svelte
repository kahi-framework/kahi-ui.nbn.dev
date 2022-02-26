<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    export const load: Load = () => {
        return {
            status: 302,
            redirect: "/blog/2022-02/0.6.0-alpha-1",
        };
    };
</script>
