import type {getContext, setContext} from "svelte";

// HACK: I would imagine this is because each subpackage has its own dependencies,
// and Svelte Contexts are package-scoped. Not attached to Window / Global. So
// main package / subpackage dependencies miss-align on the server runtime
//
// Need to look into fixing this, maybe `pnpm` would help here

let $hack_getContext: typeof getContext;

let $hack_setContext: typeof setContext;

export function get_context_hack(): {
    getContext: typeof getContext;
    setContext: typeof setContext;
} {
    return {
        getContext: $hack_getContext,
        setContext: $hack_setContext,
    };
}

export function set_context_hack(
    _getContext: typeof getContext,
    _setContext: typeof setContext
): void {
    $hack_getContext = _getContext;
    $hack_setContext = _setContext;
}
