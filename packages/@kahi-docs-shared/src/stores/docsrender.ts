import type {Readable} from "svelte/store";
import {writable} from "svelte/store";

import type {IDocumentationRender} from "@kahi-docs/markdown";

import {get_context_hack} from "../util/svelte";

const CONTEXT_DOCS_RENDER = Symbol.for("kahi-docs-docs-render");

export interface IDocsRenderStore extends Readable<IDocumentationRender> {
    refresh(): void;
}

function _docsrender(): IDocsRenderStore {
    // @ts-expect-error - HACK: the `null` should never be reachable
    const {set, subscribe} = writable<IDocumentationRender>(null, (set) => {
        refresh();
    });

    const refresh = () => {
        const {getContext} = get_context_hack();
        const render = getContext<IDocumentationRender>(CONTEXT_DOCS_RENDER);

        set(render);
    };

    return {
        refresh,
        subscribe,
    };
}

export function set_docs_render(render: IDocumentationRender): void {
    const {setContext} = get_context_hack();

    setContext<IDocumentationRender>(CONTEXT_DOCS_RENDER, render);
    docsrender.refresh();
}

export let docsrender: IDocsRenderStore = _docsrender();
