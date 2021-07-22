<script lang="ts">
    import {Button, Card, Overlay, Stack} from "@kahi-ui/framework";
    import {createEventDispatcher} from "svelte";
    import {Code} from "svelte-feather/components/Code";
    import {Copy} from "svelte-feather/components/Copy";
    import {ExternalLink} from "svelte-feather/components/ExternalLink";
    import {Image} from "svelte-feather/components/Image";
    import {Sidebar} from "svelte-feather/components/Sidebar";

    interface $$Events {
        copy_click: MouseEvent;
    }

    const dispatch = createEventDispatcher<$$Events>();

    export let view: "editor" | "render" | "split" = "split";
</script>

<Overlay class="repl-overlay" alignment_x="right" alignment_y="bottom" padding="medium">
    <Card.Container palette="dark">
        <Card.Section padding="small">
            <Stack
                orientation={["tablet:horizontal", "desktop:horizontal", "widescreen:horizontal"]}
                spacing="tiny"
            >
                <Button
                    href={location.href}
                    target="_blank"
                    palette="accent"
                    variation="clear"
                    size="tiny"
                >
                    <ExternalLink />
                    Link
                </Button>

                <Button
                    palette="affirmative"
                    variation="clear"
                    size="tiny"
                    on:click={(event) => dispatch("copy_click", event)}
                >
                    <Copy />
                    Copy
                </Button>

                <Button
                    active={view === "split"}
                    palette="light"
                    variation="clear"
                    size="tiny"
                    on:click={() => (view = "split")}
                >
                    <Sidebar />
                    Split
                </Button>

                <Button
                    active={view === "editor"}
                    palette="light"
                    variation="clear"
                    size="tiny"
                    on:click={() => (view = "editor")}
                >
                    <Code />
                    Editor
                </Button>

                <Button
                    active={view === "render"}
                    palette="light"
                    variation="clear"
                    size="tiny"
                    on:click={() => (view = "render")}
                >
                    <Image />
                    Render
                </Button>
            </Stack>
        </Card.Section>
    </Card.Container>
</Overlay>

<style>
    :global(.repl-overlay) :global(.card:not(:hover)) {
        opacity: 0.2;
    }
</style>
