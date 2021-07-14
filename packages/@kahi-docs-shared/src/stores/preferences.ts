import type {Writable} from "svelte/store";
import {readable} from "svelte/store";
import {writable} from "svelte-local-storage-store";

export type IPreferenceThemeValues = "dark" | "light" | "";

export type IPreferenceThemeStore = Writable<IPreferenceThemeValues>;

export function preferencetheme(): IPreferenceThemeStore {
    // @ts-expect-error - HACK: Readable allows for optional callback
    if (typeof window === "undefined") return readable<IPreferenceThemeValues>("");

    return writable<IPreferenceThemeValues>("kahi-docs.preferences.theme", "");
}
