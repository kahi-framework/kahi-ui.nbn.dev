import type {Writable} from "svelte/store";
import {readable} from "svelte/store";
import {writable} from "svelte-local-storage-store";

import {compress_storage, decompress_storage} from "../util/compression";

export function storage<T extends string = string>(key: string, initial_value: T): Writable<T> {
    // @ts-expect-error - HACK: `readable` allows for optional callback, just not typed as such
    if (typeof window === "undefined") return readable<T>("");

    return writable<T>(`kahi-docs.${key}`, initial_value);
}

export function compressedstorage<T extends string = string>(
    key: string,
    initial_value: T
): Writable<T> {
    // @ts-expect-error - HACK: `readable` allows for optional callback, just not typed as such
    if (typeof window === "undefined") return readable<T>("");

    const {set, subscribe, update} = storage<T>(key, initial_value);

    return {
        set(value) {
            const compressed = (value ? compress_storage(value) : "") as T;

            set(compressed);
        },

        subscribe(callback) {
            return subscribe((value) => {
                const decompressed = (value ? decompress_storage(value) : "") as T;

                callback(decompressed);
            });
        },

        update(updater) {
            update((value) => {
                const decompressed = (value ? decompress_storage(value) : "") as T;
                const payload = updater(decompressed);

                return (payload ? compress_storage(payload) : "") as T;
            });
        },
    };
}
