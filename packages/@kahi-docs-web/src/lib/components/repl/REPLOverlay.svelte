<script lang="ts">
    import {Card, Menu, Overlay} from "@kahi-ui/framework";
    import {createEventDispatcher} from "svelte";

    import Code from "../icons/Code.svelte";
    import Copy from "../icons/Copy.svelte";
    import ExternalLink from "../icons/ExternalLink.svelte";
    import Image from "../icons/Image.svelte";
    import Sidebar from "../icons/Sidebar.svelte";

    interface $$Events {
        copy_click: MouseEvent;
    }

    const dispatch = createEventDispatcher<$$Events>();

    export let view: "editor" | "render" | "split" = "split";
</script>

<Overlay
    class="repl-overlay"
    alignment_x={["right", "mobile:left"]}
    alignment_y="bottom"
    padding="medium"
>
    <Card.Container palette="dark">
        <Card.Section margin="small">
            <Menu.Container
                orientation={["tablet:horizontal", "desktop:horizontal", "widescreen:horizontal"]}
                sizing="tiny"
            >
                <Menu.Anchor
                    href={location.href}
                    target="_blank"
                    palette="accent"
                    variation="clear"
                >
                    <ExternalLink />
                    Link
                </Menu.Anchor>

                <Menu.Button
                    palette="affirmative"
                    variation="clear"
                    on:click={(event) => dispatch("copy_click", event)}
                >
                    <Copy />
                    Copy
                </Menu.Button>

                <Menu.Button
                    active={view === "split"}
                    palette="light"
                    variation="clear"
                    on:click={() => (view = "split")}
                >
                    <Sidebar />
                    Split
                </Menu.Button>

                <Menu.Button
                    active={view === "editor"}
                    palette="light"
                    variation="clear"
                    on:click={() => (view = "editor")}
                >
                    <Code />
                    Editor
                </Menu.Button>

                <Menu.Button
                    active={view === "render"}
                    palette="light"
                    variation="clear"
                    on:click={() => (view = "render")}
                >
                    <Image />
                    Render
                </Menu.Button>
            </Menu.Container>
        </Card.Section>
    </Card.Container>
</Overlay>

<style>
    :global(.repl-overlay) :global(.card:hover) {
        transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    :global(.repl-overlay) :global(.card:not(:hover)) {
        opacity: 0.2;
    }
</style>
