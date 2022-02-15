+++
[[properties.Group]]
name="orientation"
description="Sets the `Group` to render its children vertically."
types=["vertical"]

[[properties.Group]]
name="spacing"
description="Adjusts the negative visual spacing between child items in the `Group`, when `variation="stacked"`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties.Group]]
name="spacing_x"
description="Adjusts the negative horizontal visual spacing between child items in the `Group`, when `variation="stacked"`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties.Group]]
name="spacing_y"
description="Adjusts the negative horizontal visual spacing between child items in the `Group`, when `variation="stacked"`."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SPACING}"]

[[properties.Group]]
name="variation"
description="Sets how the `Group` should display the its children relative to the previous item."
types=["stacked"]

[[slots.Group]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties.Group]]
name="--group-stacked-item-margin"
description="Controls the margin used when using `stacked` variation. Typically should use negative values."
types=["<length>"]
+++

# Group

> **NOTE**: Introduced feature in `v0.2.0`.

`Group` is a layout primitive used for grouping together like Components with their inner border radii removed.

```svelte {title="Group Preview" mode="repl"}
<script>
    import {Button, Group} from "@kahi-ui/framework";
</script>

<Group>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
</Group>
```

## Imports

```svelte {title="Group Imports"}
<script>
    import {Group} from "@kahi-ui/framework";
</script>
```

## Orientation

You can set the `Group` to render its children Components vertically, via the `orientation` property.

```svelte {title="Group Orientation" mode="repl"}
<script>
    import {
        Button,
        Box,
        Group,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <Box palette="dark" padding="small">
            <Group>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </Group>
        </Box>
    </div>

    <div>
        <Text is="strong">VERTICAL</Text>
        <Box palette="dark" padding="small">
            <Group orientation="vertical">
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </Group>
        </Box>
    </div>
</Stack.Container>
```

## Stacked

You can set the `variation` property to `stacked` to visually stack children Components, like avatar stacks.

<!--
    TODO: Two more _different_ avatars, would probably look nicer without ones that would blend into each other
-->

```svelte {title="Group Stacked" mode="repl"}
<script>
    import {
        Center,
        Figure,
        Group,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <br />
        <Group variation="stacked">
            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Center padding_left="small">
                <Text is="small">+7</Text>
            </Center>
        </Group>
    </div>

    <div>
        <Text is="strong">VERTICAL</Text>
        <br />
        <Group
            variation="stacked"
            orientation="vertical"
        >
            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Center padding_top="small">
                <Text is="small">+7</Text>
            </Center>
        </Group>
    </div>
</Stack.Container>
```

## Spacing

> **NOTE**: Introduced feature in `v0.6.0`.

When the `variation` property is set to `stacked`, you can control the negative spacing via the `spacing`, `spacing_x`, and `spacing_y` properties.

```svelte {title="Group Spacing" mode="repl"}
<script>
    import {
        Center,
        Figure,
        Group,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>
        <br />
        <Group variation="stacked">
            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Center padding_left="small">
                <Text is="small">+7</Text>
            </Center>
        </Group>
    </div>

    <div>
        <Text is="strong">NANO</Text>
        <br />
        <Group variation="stacked" spacing="nano">
            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Center padding_left="small">
                <Text is="small">+7</Text>
            </Center>
        </Group>
    </div>

    <div>
        <Text is="strong">TINY</Text>
        <br />
        <Group variation="stacked" spacing="tiny">
            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Center padding_left="small">
                <Text is="small">+7</Text>
            </Center>
        </Group>
    </div>

    <div>
        <Text is="strong">SMALL</Text>
        <br />
        <Group variation="stacked" spacing="small">
            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Center padding_left="small">
                <Text is="small">+7</Text>
            </Center>
        </Group>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>
        <br />
        <Group variation="stacked" spacing="medium">
            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Center padding_left="small">
                <Text is="small">+7</Text>
            </Center>
        </Group>
    </div>

    <div>
        <Text is="strong">LARGE</Text>
        <br />
        <Group variation="stacked" spacing="large">
            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Center padding_left="small">
                <Text is="small">+7</Text>
            </Center>
        </Group>
    </div>

    <div>
        <Text is="strong">HUGE</Text>
        <br />
        <Group variation="stacked" spacing="huge">
            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Center padding_left="small">
                <Text is="small">+7</Text>
            </Center>
        </Group>
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>
        <br />
        <Group variation="stacked" spacing="massive">
            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Figure size="icon-medium" shape="circle">
                <img src={IMAGE_AVATAR} />
            </Figure>

            <Center padding_left="small">
                <Text is="small">+7</Text>
            </Center>
        </Group>
    </div>
</Stack.Container>
```
