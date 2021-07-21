import type {Readable} from "svelte/store";
import {readable} from "svelte/store";

import type {ISnippet} from "@kahi-docs/markdown";

import {get_context_hack} from "../util/svelte";

const CONTEXT_DOCS_RENDER = Symbol.for("kahi-docs-snippet");

export type ISnippetStore = Readable<ISnippet>;

function _snippet(): ISnippetStore {
    // @ts-expect-error - HACK: the `null` should never be reachable
    return readable<ISnippet>(null, (set) => {
        const {getContext} = get_context_hack();
        const render = getContext<ISnippet>(CONTEXT_DOCS_RENDER);

        set(render);
    });
}

export function set_snippet(render: ISnippet): void {
    const {setContext} = get_context_hack();

    setContext<ISnippet>(CONTEXT_DOCS_RENDER, render);
}

export let snippet: ISnippetStore = _snippet();
