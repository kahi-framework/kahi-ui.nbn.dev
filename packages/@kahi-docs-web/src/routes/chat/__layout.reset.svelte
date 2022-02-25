<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    export const load: Load = () => {
        return {
            stuff: {
                metadata: {
                    description: "Redirecting to Discord...",
                },
            },
        };
    };
</script>

<script lang="ts">
    import PageMetadata from "../../lib/components/PageMetadata.svelte";
    import PagePrerender from "../../lib/components/PagePrerender.svelte";
</script>

<PageMetadata />
<PagePrerender />

<slot />
