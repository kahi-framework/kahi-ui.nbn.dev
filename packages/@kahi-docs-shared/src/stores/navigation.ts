import type {Readable} from "svelte/store";
import {readable} from "svelte/store";

import type {INavigationBar, INavigationMenu} from "@kahi-docs/config";

import {get_context_hack} from "../util/svelte";

const CONTEXT_NAVIGATION_APPLICATION = Symbol.for("kahi-docs-navigation-application");

const CONTEXT_NAVIGATION_DOCUMENTATION = Symbol.for("kahi-docs-navigation-documentation");

export type INavigationStore<T extends INavigationBar | INavigationMenu> = Readable<T[]>;

function navigation<T extends INavigationBar | INavigationMenu>(
    context: Symbol
): INavigationStore<T> {
    // @ts-expect-error - HACK: the `null` should never be reachable
    return readable<T[]>(null, (set) => {
        const {getContext} = get_context_hack();
        const configuration = getContext<T[]>(context);

        set(configuration);
    });
}

function set_navigation<T extends INavigationBar | INavigationMenu>(
    context: Symbol,
    configuration: T[]
): void {
    const {setContext} = get_context_hack();

    setContext<T[]>(context, configuration);
}

export const appnavigation = navigation<INavigationBar>(CONTEXT_NAVIGATION_APPLICATION);

export const docsnavigation = navigation<INavigationMenu>(CONTEXT_NAVIGATION_DOCUMENTATION);

export const set_app_navigation = (configuration: INavigationBar[]) =>
    set_navigation<INavigationBar>(CONTEXT_NAVIGATION_APPLICATION, configuration);

export const set_docs_navigation = (configuration: INavigationMenu[]) =>
    set_navigation<INavigationMenu>(CONTEXT_NAVIGATION_DOCUMENTATION, configuration);
