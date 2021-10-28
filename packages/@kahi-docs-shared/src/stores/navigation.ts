import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

import type {INavigationMenu} from "@kahi-docs/config";

export type INavigationStore = Writable<INavigationMenu[]>;

export const navigation: INavigationStore = writable();
