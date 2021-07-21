import type {Readable} from "svelte/store";
import {readable} from "svelte/store";

import type {IPartialsConfig} from "@kahi-docs/config";

import {get_context_hack} from "../util/svelte";

const CONTEXT_PARTIALS_CONFIG = Symbol.for("kahi-docs-partials-config");

export type IPartialsConfigStore = Readable<IPartialsConfig>;

function _partialsconfig(): IPartialsConfigStore {
    // @ts-expect-error - HACK: the `null` should never be reachable
    return readable<IPartialsConfig>(null, (set) => {
        const {getContext} = get_context_hack();
        const configuration = getContext<IPartialsConfig>(CONTEXT_PARTIALS_CONFIG);

        set(configuration);
    });
}

export function set_partials_config(configuration: IPartialsConfig): void {
    const {setContext} = get_context_hack();

    setContext<IPartialsConfig>(CONTEXT_PARTIALS_CONFIG, configuration);
}

export let partialsconfig: IPartialsConfigStore = _partialsconfig();
