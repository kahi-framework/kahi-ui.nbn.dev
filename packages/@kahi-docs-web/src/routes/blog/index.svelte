<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    export const INITIAL_BLOG = `2022-03/snippet-search-support`;

    export const load: Load = () => {
        return {
            status: 302,
            redirect: `/blog/${INITIAL_BLOG}`,
        };
    };
</script>
