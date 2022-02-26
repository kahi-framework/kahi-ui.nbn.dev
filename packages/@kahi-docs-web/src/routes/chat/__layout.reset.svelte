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
    import "@kahi-ui/framework/dist/kahi-ui.framework.css";
    import "@kahi-ui/framework/dist/kahi-ui.theme.default.css";

    import PageHeader from "../../lib/components/PageHeader.svelte";
</script>

<PageHeader />

<slot />
