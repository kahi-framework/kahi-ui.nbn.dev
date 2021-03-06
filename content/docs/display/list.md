+++
[[properties."List.Container"]]
name="is"
description="Alters the HTML tag rendered to the DOM, changing the list item prefixes."
default="ul"
types=["ol", "ul"]

[[slots."List.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."List.Item"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties."List.Container"]]
name="--list-margin-left"
description="Controls the `margin-left` spacing used."
types=["<length>"]
+++

# List

> **NOTE**: Introduced feature in `v0.2.4`.

`List` is used for rendering simple text lists.

```svelte {title="List Preview" mode="repl"}
<script>
    import {List} from "@kahi-ui/framework";
</script>

<List.Container>
    <List.Item>Lorem ipsum dolor sit amet.</List.Item>
    <List.Item>Consectetur adipiscing elit.</List.Item>
    <List.Item>Proin et consectetur orci.</List.Item>
</List.Container>
```

## Imports

```svelte {title="List Imports"}
<script>
    import {List} from "@kahi-ui/framework";

    const {Container, Item} = List;
</script>
```

## Elements

You can change what type of list is being rendered via the `is` property.

```svelte {title="List Elements" mode="repl"}
<script>
    import {
        List,
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
        <Text>
            <Text is="strong">ORDERED</Text>
            <List.Container is="ol">
                <List.Item>
                    Lorem ipsum dolor sit amet.
                </List.Item>

                <List.Item>
                    Consectetur adipiscing elit.
                </List.Item>

                <List.Item>
                    Proin et consectetur orci.
                </List.Item>
            </List.Container>
        </Text>
    </div>

    <div>
        <Text>
            <Text is="strong">UNORDERED</Text>
            <List.Container>
                <List.Item>
                    Lorem ipsum dolor sit amet.
                </List.Item>

                <List.Item>
                    Consectetur adipiscing elit.
                </List.Item>

                <List.Item>
                    Proin et consectetur orci.
                </List.Item>
            </List.Container>
        </Text>
    </div>
</Stack.Container>
```
