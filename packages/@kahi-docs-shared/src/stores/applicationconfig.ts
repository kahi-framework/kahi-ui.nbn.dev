import type {Readable} from "svelte/store";
import {readable} from "svelte/store";

import type {IApplicationConfig} from "@kahi-docs/config";

import {get_context_hack} from "../util/svelte";

const CONTEXT_APPLICATION_CONFIG = Symbol.for("kahi-docs-application-config");

export type IApplicationConfigStore = Readable<IApplicationConfig>;

function _applicationconfig(): IApplicationConfigStore {
    // @ts-expect-error - HACK: the `null` should never be reachable
    return readable<IApplicationConfig>(null, (set) => {
        const {getContext} = get_context_hack();
        const configuration = getContext<IApplicationConfig>(CONTEXT_APPLICATION_CONFIG);

        set(configuration);
    });
}

export function set_application_config(configuration: IApplicationConfig): void {
    const {setContext} = get_context_hack();

    setContext<IApplicationConfig>(CONTEXT_APPLICATION_CONFIG, configuration);
}

export let applicationconfig: IApplicationConfigStore = _applicationconfig();
