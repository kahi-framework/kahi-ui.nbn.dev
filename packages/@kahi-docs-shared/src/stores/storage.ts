import type {Writable} from "svelte/store";
import {readable, writable} from "svelte/store";

import {compress_storage, decompress_storage} from "../util/compression";

export type IStorageStore<T> = Writable<T | null>;

function storage<T extends string = string>(
    key: string,
    initial_value: T | null = null,
    web_storage?: Storage
): IStorageStore<T> {
    // @ts-ignore - HACK: This is fine, calling the `Writable` methods on server would error anyway
    if (typeof window === "undefined") return readable<T | null>(initial_value);
    if (!web_storage) return writable<T | null>(initial_value);

    const _key = `kahi-docs.${key}`;

    const {set, subscribe, update} = writable<T | null>(
        (web_storage.getItem(_key) as T | null) ?? initial_value,
        (set) => {
            function on_storage(event: StorageEvent): void {
                if (event.key !== _key || event.storageArea !== web_storage) return;
                set((event.newValue as T | null) ?? initial_value);
            }

            window.addEventListener("storage", on_storage);
            return () => window.removeEventListener("storage", on_storage);
        }
    );

    return {
        set(value) {
            if (value === null) web_storage.removeItem(_key);
            else web_storage.setItem(_key, value);

            set(value ?? initial_value);
        },

        subscribe,

        update(callback) {
            update((previous) => {
                const value = callback(previous);

                if (value === null) web_storage.removeItem(_key);
                else web_storage.setItem(_key, value);

                return value ?? initial_value;
            });
        },
    };
}

export function compressedstorage<T extends string = string>(
    key: string,
    initial_value: T | null,
    web_storage?: Storage
): IStorageStore<T> {
    // @ts-expect-error - HACK: `readable` allows for optional callback, just not typed as such
    if (typeof window === "undefined") return readable<T>("");

    const {set, subscribe, update} = storage<T>(key, initial_value, web_storage);

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

export const localstorage = <T extends string = string>(
    key: string,
    initial_value: T | null = null
) => storage<T>(key, initial_value, typeof localStorage !== "undefined" ? localStorage : undefined);

export const localcompressedstorage = <T extends string = string>(
    key: string,
    initial_value: T | null = null
) =>
    compressedstorage<T>(
        key,
        initial_value,
        typeof localStorage !== "undefined" ? localStorage : undefined
    );

export const sessionstorage = <T extends string = string>(
    key: string,
    initial_value: T | null = null
) =>
    storage<T>(
        key,
        initial_value,
        typeof sessionStorage !== "undefined" ? sessionStorage : undefined
    );

export const sessioncompressedstorage = <T extends string = string>(
    key: string,
    initial_value: T | null = null
) =>
    compressedstorage<T>(
        key,
        initial_value,
        typeof sessionStorage !== "undefined" ? sessionStorage : undefined
    );
