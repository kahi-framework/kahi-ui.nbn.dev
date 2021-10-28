import type {INavigationMenu} from "@kahi-docs/config";

import {make_context_store} from "../util/stores";

export const CONTEXT_NAVIGATION = Symbol.for("kahi-docs-navigation");

export const navigation = make_context_store<INavigationMenu[]>(CONTEXT_NAVIGATION);
