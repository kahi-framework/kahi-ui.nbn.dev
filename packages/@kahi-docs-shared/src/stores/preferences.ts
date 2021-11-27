import {storage} from "./storage";

export type IPreferenceThemeValues = "dark" | "light" | "";

export const preferencetheme = storage<"dark" | "light" | "">("preferences.theme", "");
