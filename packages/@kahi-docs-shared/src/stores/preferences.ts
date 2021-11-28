import {localstorage} from "./storage";

export type IPreferenceThemeValues = "dark" | "light" | "";

export const preferencetheme = localstorage<IPreferenceThemeValues>("preferences.theme", "");
