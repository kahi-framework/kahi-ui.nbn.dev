<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    export const INITIAL_DOCS = "guides/getting-started";

    export const load: Load = () => {
        return {
            status: 302,
            redirect: `/docs/${INITIAL_DOCS}`,
        };
    };
</script>
