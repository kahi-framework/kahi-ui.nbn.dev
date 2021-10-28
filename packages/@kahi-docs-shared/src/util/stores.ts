import {getContext, setContext} from "svelte";
import type {Readable} from "svelte/store";
import {readable} from "svelte/store";

export interface IContextStore<T> extends Readable<T> {
    init(value: T): void;
}

export function make_context_store<T>(symbol: Symbol): IContextStore<T> {
    const set_store = (value: T) => setContext(symbol, readable(value));
    const get_store = () => getContext<IContextStore<T>>(symbol);

    return {
        init(value) {
            set_store(value);
        },

        subscribe(run, invalidate) {
            const store = get_store();
            if (!store) {
                throw ReferenceError(
                    `bad dispatch to 'subscribe' (failed to lookup context '${symbol.toString()}')`
                );
            }

            return store.subscribe(run, invalidate);
        },
    };
}
