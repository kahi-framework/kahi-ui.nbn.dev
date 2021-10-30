<script context="module" lang="ts">
    import type {Load} from "@sveltejs/kit";

    import type {INavigationGet, IRouteError} from "../../lib/shared/api";

    export const load: Load = async ({fetch}) => {
        const response = await fetch(`/api/v3/navigation/docs.json`);
        if (!response.ok) {
            const data = (await response.json()) as IRouteError;

            return {
                status: response.status,
                error: data.code,
            };
        }

        const data = (await response.json()) as INavigationGet;

        return {
            props: {
                navigation: data.data,
            },
        };
    };
</script>

<script lang="ts">
    import type {INavigationMenu} from "@kahi-docs/config";
    import {navigation as navigation_store} from "@kahi-docs/shared";

    import AsideLayout from "../../lib/components/AsideLayout.svelte";
    import ContentArticle from "../../lib/components/ContentArticle.svelte";

    export let navigation: INavigationMenu[];

    navigation_store.init(navigation);
</script>

<AsideLayout>
    <ContentArticle>
        <slot />
    </ContentArticle>
</AsideLayout>
