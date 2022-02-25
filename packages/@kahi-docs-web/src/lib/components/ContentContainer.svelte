<script lang="ts">
    import {Container} from "@kahi-ui/framework";
</script>

<Container is="main" class="content-container" width="100" padding_y="large">
    <slot />
</Container>

<style>
    :global(.content-container) {
        max-width: calc(var(--sizes-prose) + calc(var(--spacings-block-large) * 1rem));
    }
</style>
