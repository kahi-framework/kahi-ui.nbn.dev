import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

import type {IDocumentationRender} from "@kahi-docs/markdown";

export type IContentStore = Writable<IDocumentationRender>;

export const content: IContentStore = writable();
