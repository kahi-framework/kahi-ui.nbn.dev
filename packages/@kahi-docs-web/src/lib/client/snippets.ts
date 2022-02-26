import type {IPageRender} from "@kahi-docs/markdown";
import {getAllContexts} from "svelte";

import REPLEmbed from "../components/repl/REPLEmbed.svelte";

export const snippets = (element: HTMLElement, content?: IPageRender) => {
    function cleanup_repls(): void {
        observer.disconnect();

        const snippet_elements = get_repl_elements();
        for (const element of snippet_elements) element.remove();
    }

    function get_repl_elements(): HTMLElement[] {
        if (content!.metadata.snippets.length === 0) return [];

        const selectors = content!.metadata.snippets
            .map((snippet) => `.repl-snippet[data-identifier="${snippet.identifier}"]`)
            .join(",");

        return Array.from(element.querySelectorAll<HTMLElement>(selectors));
    }

    function get_snippet_elements(): HTMLElement[] {
        if (content!.metadata.snippets.length === 0) return [];

        const selectors = content!.metadata.snippets
            .map(
                (snippet) =>
                    `.highlight[data-identifier="${snippet.identifier}"][data-mode="repl"]:not([data-observing])`
            )
            .join(",");

        return Array.from(element.querySelectorAll<HTMLElement>(selectors));
    }

    function observe_snippets(): void {
        const codeblock_elements = get_snippet_elements();
        for (const element of codeblock_elements) {
            element.setAttribute("data-observing", "true");
            observer.observe(element);
        }
    }

    function on_intersection(intersections: IntersectionObserverEntry[]): void {
        const snippet_elements = intersections
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target as HTMLElement);

        for (const element of snippet_elements) {
            observer.unobserve(element);

            const identifier = element.getAttribute("data-identifier") as string;
            const script = element.innerText;

            const container = document.createElement("DIV");
            container.setAttribute("class", "repl-snippet");
            container.setAttribute("data-identifier", identifier);
            // HACK: We're using the `auto` palette here as a reset since this isn't an `iframe`
            container.setAttribute("data-palette", "auto");
            element.after(container);

            // HACK: We need to hide, rather than remove. Otherwise navigations to other pages
            // will error out due to Svelte not being able to find the codeblock elements
            element.innerHTML = "";
            element.style.display = "none";

            new REPLEmbed({
                target: container,

                context: contexts,
                props: {
                    identifier,
                    value: script,
                },
            });
        }
    }

    const contexts = getAllContexts();
    const observer = new IntersectionObserver(on_intersection, {
        threshold: 0.1,
    });

    if (content) observe_snippets();

    return {
        destroy() {
            cleanup_repls();
        },
        update(_content: IPageRender) {
            cleanup_repls();

            content = _content;
            if (content) observe_snippets();
        },
    };
};
