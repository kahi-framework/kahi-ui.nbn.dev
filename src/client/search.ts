import {base} from "$app/paths";
import type {initialize, register, search} from "@novacbn/svelte-stork";
import {get} from "svelte/store";

import {applicationconfig, memoize} from "@kahi-docs/shared";

export interface IImportedSearch {
    // TODO: Need to investigate better subpackage typing
    // support for `@novacbn/svelte-stork/components`

    initialize: typeof initialize;

    register: typeof register;

    search: typeof search;

    Stork: any;
}

export const import_search = memoize<Promise<IImportedSearch>>(async () => {
    const [search_lib, search_components] = await Promise.all([
        import("@novacbn/svelte-stork"),
        // @ts-expect-error - HACK: Need to investigate better subpackage typing support
        import("@novacbn/svelte-stork/components"),
    ]);

    return {
        initialize: search_lib.initialize,
        register: search_lib.register,
        search: search_lib.search,
        Stork: search_components,
    };
});

export const initialize_search = memoize<Promise<IImportedSearch>>(async () => {
    const imports = await import_search();

    // HACK: Using the `applicationconfig` Svelte Store is kind of a meh
    // way of getting the version information we need. Since it then relies on
    // `initialize_search` being called inside a Component's script.
    //
    // Ideally `memoize` should be modified to accept functions with arguments,
    // so a version tag can be passed in
    const {initialize, register} = imports;
    const {version} = get(applicationconfig).metadata;

    await initialize({
        script_url: `${base}/assets/stork/stork-v1.2.1.js`,
        wasm_url: `${base}/assets/stork/stork-v1.2.1.wasm`,
    });

    await register({
        index_name: `kahi-ui_docs_v${version}`,
        index_url: `${base}/assets/stork/kahi-ui_docs_v${version}.st`,
    });

    return imports;
});
