import {getContext, setContext} from "svelte";
import type {Readable, Writable} from "svelte/store";
import {writable} from "svelte/store";

export interface IContextStore<T> extends Readable<T> {
    init(value: T): Writable<T>;
}

export function make_context_store<T>(symbol: Symbol): IContextStore<T> {
    return {
        init(value) {
            const store = writable<T>(value);

            setContext(symbol, {subscribe: store.subscribe});
            return store;
        },

        subscribe(run, invalidate) {
            const store = getContext<IContextStore<T>>(symbol);

            if (!store) {
                throw ReferenceError(
                    `bad dispatch to 'subscribe' (failed to lookup context '${symbol.toString()}')`
                );
            }

            return store.subscribe(run, invalidate);
        },
    };
}
