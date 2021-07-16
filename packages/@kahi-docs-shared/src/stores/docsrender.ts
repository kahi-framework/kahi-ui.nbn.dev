import type {Readable} from "svelte/store";
import {readable} from "svelte/store";

import type {IDocumentationRender} from "@kahi-docs/markdown";

import {get_context_hack} from "../util/svelte";

const CONTEXT_DOCS_RENDER = Symbol.for("kahi-docs-docs-render");

export type IDocsRenderStore = Readable<IDocumentationRender>;

function _docsrender(): IDocsRenderStore {
    // @ts-expect-error - HACK: the `null` should never be reachable
    return readable<IDocumentationRender>(null, (set) => {
        const {getContext} = get_context_hack();
        const render = getContext<IDocumentationRender>(CONTEXT_DOCS_RENDER);

        set(render);
    });
}

export function set_docs_render(render: IDocumentationRender): void {
    const {setContext} = get_context_hack();

    setContext<IDocumentationRender>(CONTEXT_DOCS_RENDER, render);
}

export let docsrender: IDocsRenderStore = _docsrender();
