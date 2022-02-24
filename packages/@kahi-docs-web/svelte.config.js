import {env} from "process";

import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";

const {NODE_ENV} = env;

/** @type {import('@sveltejs/kit').Config} */
export default {
    preprocess: sveltePreprocess(),

    kit: {
        adapter: adapter(),

        // Consult https://vitejs.dev/config/ to learn about these options
        /** @type {import('vite').UserConfig} */
        vite: {
            define: {
                // HACK: Really /shouldn't/ be needed at all. Especially since I dynamically
                // import `svelte-codejar`. But SvelteKit or Vite kept picking it up anyway
                ...(NODE_ENV === "development"
                    ? {}
                    : {
                          "const globalWindow = window":
                              "const globalWindow = typeof window !== 'undefined' ? window : undefined",
                      }),
            },
        },
    },
};
