<script lang="ts">
    import {page} from "$app/stores";
    import {Text} from "@kahi-ui/framework";
    import {getAllContexts, onDestroy, onMount, tick} from "svelte";

    import REPLEmbed from "./repl/REPLEmbed.svelte";

    const contexts = getAllContexts();

    let container_elements: HTMLElement[] = [];
    let observer: IntersectionObserver;

    async function on_content(): Promise<void> {
        for (const element of container_elements) element.remove();
        container_elements = [];

        await tick();

        const repl_elements = document.querySelectorAll(`[data-mode="repl"]`);
        for (const element of repl_elements) observer.observe(element);
    }

    function on_intersection(intersections: IntersectionObserverEntry[]): void {
        const repl_elements = intersections
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target as HTMLElement);

        for (const element of repl_elements) {
            observer.unobserve(element);

            const identifier = element.getAttribute("data-identifier") as string;
            const value = element.innerText;

            const container = document.createElement("DIV");
            container.setAttribute("class", "repl-snippet");
            container.setAttribute("data-palette", "auto");
            element.after(container);

            // NOTE: We need to hide, rather than remove. Otherwise transitions
            // to other pages will error out due to Svelte not being able to find
            // the codeblock elements
            element.innerHTML = "";
            element.style.display = "none";

            new REPLEmbed({
                target: container,

                context: contexts,
                props: {
                    identifier,
                    value,
                },
            });

            container_elements.push(container);
        }
    }

    onDestroy(() => {
        for (const element of container_elements) element.remove();
    });

    onMount(() => {
        observer = new IntersectionObserver(on_intersection, {
            threshold: 0.1,
        });
    });

    $: if (observer && $page.stuff.content) on_content();
</script>

{#if $page.stuff.content}
    {@html $page.stuff.content.render}
{:else}
    <Text is="strong" palette="negative">Error</Text>: failed to load content render
{/if}
