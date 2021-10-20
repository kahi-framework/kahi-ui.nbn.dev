+++
[[properties."Table.Container"]]
name="sizing"
description="Sets the size of children / spacing relative to the font size of the `Table.Container`."
types=["tiny", "small", "medium", "large", "huge"]

[[properties."Table.Container"]]
name="variation"
description="Alters how the `Table.Container` renders with various additions."
types=["borders", "stripes"]

[[properties."Table.Column"]]
name="colspan"
description="Adjusts the column table span of the `Table.Column` via [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan)."
types=["number", "string"]

[[properties."Table.Column"]]
name="rowspan"
description="Adjusts the column table span of the `Table.Column` via [`rowspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-rowspan)."
types=["number", "string"]

[[properties."Table.Heading"]]
name="colspan"
description="Adjusts the column table span of the `Table.Heading` via [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan)."
types=["number", "string"]

[[properties."Table.Heading"]]
name="rowspan"
description="Adjusts the column table span of the `Table.Heading` via [`rowspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-rowspan)."
types=["number", "string"]

[[slots."Table.Container"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Table.Column"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Table.Footer"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Table.Header"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Table.Heading"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Table.Row"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Table.Section"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties."Table.Container"]]
name="--table-palette-background-lightest"
description="Controls the default RGB color value used for borders / stripes variations."
types=["<r,g,b>"]

[[custom_properties."Table.Container"]]
name="--table-sizing-text-size"
description="Controls the default font size used for text, and the relative base for padding."
types=["<length>", "<percentage>"]

[[custom_properties."Table.Container"]]
name="--table-sizing-line-height"
description="Controls the default line height used."
types=["<normal>", "<number>", "<length>", "<percentage>"]

[[custom_properties."Table.Container"]]
name="--table-borders-border-radius"
description="Controls the `border-radius` used for borders variation."
types=["<length>", "<percentage>"]

[[custom_properties."Table.Container"]]
name="--table-borders-opacity"
description="Controls the `opacity` used for borders variation."
types=["<alpha-value>"]

[[custom_properties."Table.Container"]]
name="--table-borders-width"
description="Controls the `width` / `height` (depending on border orientation) used for borders variation."
types=["<length>"]

[[custom_properties."Table.Container"]]
name="--table-stripes-opacity"
description="Controls the `opacity` used for stripes variation."
types=["<alpha-value>"]

[[custom_properties."Table.Container"]]
name="--table-column-padding-x"
description="Controls the X-Axis padding used for table columns."
types=["<length>"]

[[custom_properties."Table.Container"]]
name="--table-column-padding-y"
description="Controls the Y-Axis padding used for table columns."
types=["<length>"]
+++

# Table

`Table` is typically used to render tabular data in a structured row -> columns format, for end-users to easily read the contents.

```svelte repl Table Preview
<script>
    import {
        Code,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Table.Container>
    <Table.Header>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Header>

    <Table.Section>
        <Table.Row>
            <Table.Column>
                <Text is="strong">mobile</Text>
            </Table.Column>

            <Table.Column>
                <Code>0px</Code>
            </Table.Column>

            <Table.Column>
                <Code>640px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">tablet</Text>
            </Table.Column>

            <Table.Column>
                <Code>641px</Code>
            </Table.Column>

            <Table.Column>
                <Code>768px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">desktop</Text>
            </Table.Column>

            <Table.Column>
                <Code>769px</Code>
            </Table.Column>

            <Table.Column>
                <Code>1024px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">widescreen</Text>
            </Table.Column>

            <Table.Column>
                <Code>1025px</Code>
            </Table.Column>

            <Table.Column>
                <Code>∞</Code>
            </Table.Column>
        </Table.Row>
    </Table.Section>

    <Table.Footer>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Footer>
</Table.Container>
```

## Table Imports

```html default Table Imports
<script>
    import {Table} from "@kahi-ui/framework";

    const {
        Container,
        Column,
        Footer,
        Header,
        Heading,
        Row,
        Section,
    } = Table;
</script>
```

## Spans

You can use the `colspan` / `rowspan` properties on `<Table.Column>` / `<Table.Heading>` to adjust the size of table items they take up.

```svelte repl Table Spans
<script>
    import {Table} from "@kahi-ui/framework";
</script>

<Table.Container>
    <Table.Header>
        <Table.Row>
            <Table.Heading colspan={2}>
                colspan 2 x rowspan 1
            </Table.Heading>

            <Table.Heading>
                colspan 1 x rowspan 1
            </Table.Heading>
        </Table.Row>
    </Table.Header>

    <Table.Section>
        <Table.Row>
            <Table.Column>
                colspan 1 x rowspan 1
            </Table.Column>

            <Table.Column rowspan={2}>
                colspan 1 x rowspan 2
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                colspan 1 x rowspan 1
            </Table.Column>
        </Table.Row>
    </Table.Section>

    <Table.Footer>
        <Table.Row>
            <Table.Heading colspan={3}>
                colspan 3 x rowspan 1
            </Table.Heading>
        </Table.Row>
    </Table.Footer>
</Table.Container>
```

## Borders

You can make a `Table` have borders via the `variation` property.

```svelte repl Table Borders
<script>
    import {
        Code,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Table.Container variation="borders">
    <Table.Header>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Header>

    <Table.Section>
        <Table.Row>
            <Table.Column>
                <Text is="strong">mobile</Text>
            </Table.Column>

            <Table.Column>
                <Code>0px</Code>
            </Table.Column>

            <Table.Column>
                <Code>640px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">tablet</Text>
            </Table.Column>

            <Table.Column>
                <Code>641px</Code>
            </Table.Column>

            <Table.Column>
                <Code>768px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">desktop</Text>
            </Table.Column>

            <Table.Column>
                <Code>769px</Code>
            </Table.Column>

            <Table.Column>
                <Code>1024px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">widescreen</Text>
            </Table.Column>

            <Table.Column>
                <Code>1025px</Code>
            </Table.Column>

            <Table.Column>
                <Code>∞</Code>
            </Table.Column>
        </Table.Row>
    </Table.Section>

    <Table.Footer>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Footer>
</Table.Container>
```

## Stripes

You can make a `Table` have stripes via the `variation` property.

```svelte repl Table Stripes
<script>
    import {
        Code,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Table.Container variation="stripes">
    <Table.Header>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Header>

    <Table.Section>
        <Table.Row>
            <Table.Column>
                <Text is="strong">mobile</Text>
            </Table.Column>

            <Table.Column>
                <Code>0px</Code>
            </Table.Column>

            <Table.Column>
                <Code>640px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">tablet</Text>
            </Table.Column>

            <Table.Column>
                <Code>641px</Code>
            </Table.Column>

            <Table.Column>
                <Code>768px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">desktop</Text>
            </Table.Column>

            <Table.Column>
                <Code>769px</Code>
            </Table.Column>

            <Table.Column>
                <Code>1024px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">widescreen</Text>
            </Table.Column>

            <Table.Column>
                <Code>1025px</Code>
            </Table.Column>

            <Table.Column>
                <Code>∞</Code>
            </Table.Column>
        </Table.Row>
    </Table.Section>

    <Table.Footer>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Footer>
</Table.Container>
```

## Borders + Stripes

You can make a `Table` have both borders **AND** stripes via the `variation` property.

```svelte repl Table Borders + Stripes
<script>
    import {
        Code,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Table.Container variation={["borders", "stripes"]}>
    <Table.Header>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Header>

    <Table.Section>
        <Table.Row>
            <Table.Column>
                <Text is="strong">mobile</Text>
            </Table.Column>

            <Table.Column>
                <Code>0px</Code>
            </Table.Column>

            <Table.Column>
                <Code>640px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">tablet</Text>
            </Table.Column>

            <Table.Column>
                <Code>641px</Code>
            </Table.Column>

            <Table.Column>
                <Code>768px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">desktop</Text>
            </Table.Column>

            <Table.Column>
                <Code>769px</Code>
            </Table.Column>

            <Table.Column>
                <Code>1024px</Code>
            </Table.Column>
        </Table.Row>

        <Table.Row>
            <Table.Column>
                <Text is="strong">widescreen</Text>
            </Table.Column>

            <Table.Column>
                <Code>1025px</Code>
            </Table.Column>

            <Table.Column>
                <Code>∞</Code>
            </Table.Column>
        </Table.Row>
    </Table.Section>

    <Table.Footer>
        <Table.Row>
            <Table.Heading />
            <Table.Heading>Minimum</Table.Heading>
            <Table.Heading>Maximum</Table.Heading>
        </Table.Row>
    </Table.Footer>
</Table.Container>
```

## Sizing

You can change the sizes / spacings of the child elements via the `sizing` property.

```svelte repl Table Sizing
<script>
    import {
        Code,
        Stack,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>

        <Table.Container variation="borders">
            <Table.Header>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Header>

            <Table.Section>
                <Table.Row>
                    <Table.Column>
                        <Text is="strong">mobile</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>0px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>640px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">tablet</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>641px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>768px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            desktop
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>769px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>1024px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            widescreen
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>1025px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>∞</Code>
                    </Table.Column>
                </Table.Row>
            </Table.Section>

            <Table.Footer>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Footer>
        </Table.Container>
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <Table.Container
            variation="borders"
            sizing="tiny"
        >
            <Table.Header>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Header>

            <Table.Section>
                <Table.Row>
                    <Table.Column>
                        <Text is="strong">mobile</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>0px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>640px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">tablet</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>641px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>768px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            desktop
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>769px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>1024px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            widescreen
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>1025px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>∞</Code>
                    </Table.Column>
                </Table.Row>
            </Table.Section>

            <Table.Footer>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Footer>
        </Table.Container>
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <Table.Container
            variation="borders"
            sizing="small"
        >
            <Table.Header>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Header>

            <Table.Section>
                <Table.Row>
                    <Table.Column>
                        <Text is="strong">mobile</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>0px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>640px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">tablet</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>641px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>768px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            desktop
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>769px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>1024px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            widescreen
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>1025px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>∞</Code>
                    </Table.Column>
                </Table.Row>
            </Table.Section>

            <Table.Footer>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Footer>
        </Table.Container>
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <Table.Container
            variation="borders"
            sizing="medium"
        >
            <Table.Header>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Header>

            <Table.Section>
                <Table.Row>
                    <Table.Column>
                        <Text is="strong">mobile</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>0px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>640px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">tablet</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>641px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>768px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            desktop
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>769px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>1024px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            widescreen
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>1025px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>∞</Code>
                    </Table.Column>
                </Table.Row>
            </Table.Section>

            <Table.Footer>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Footer>
        </Table.Container>
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <Table.Container
            variation="borders"
            sizing="large"
        >
            <Table.Header>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Header>

            <Table.Section>
                <Table.Row>
                    <Table.Column>
                        <Text is="strong">mobile</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>0px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>640px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">tablet</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>641px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>768px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            desktop
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>769px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>1024px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            widescreen
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>1025px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>∞</Code>
                    </Table.Column>
                </Table.Row>
            </Table.Section>

            <Table.Footer>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Footer>
        </Table.Container>
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <Table.Container
            variation="borders"
            sizing="huge"
        >
            <Table.Header>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Header>

            <Table.Section>
                <Table.Row>
                    <Table.Column>
                        <Text is="strong">mobile</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>0px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>640px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">tablet</Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>641px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>768px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            desktop
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>769px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>1024px</Code>
                    </Table.Column>
                </Table.Row>

                <Table.Row>
                    <Table.Column>
                        <Text is="strong">
                            widescreen
                        </Text>
                    </Table.Column>

                    <Table.Column>
                        <Code>1025px</Code>
                    </Table.Column>

                    <Table.Column>
                        <Code>∞</Code>
                    </Table.Column>
                </Table.Row>
            </Table.Section>

            <Table.Footer>
                <Table.Row>
                    <Table.Heading />
                    <Table.Heading>
                        Minimum
                    </Table.Heading>

                    <Table.Heading>
                        Maximum
                    </Table.Heading>
                </Table.Row>
            </Table.Footer>
        </Table.Container>
    </div>
</Stack>
```

## Scrollable Tables

You can make a `Table` scrollable by wrapping it with a [`Scrollable`](../layouts/scrollable.md).

```svelte repl Table Scrollable
<script>
    import {
        Code,
        Scrollable,
        Table,
        Text,
    } from "@kahi-ui/framework";
</script>

<Scrollable>
    <Table.Container>
        <Table.Header>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Header>

        <Table.Section>
            <Table.Row>
                <Table.Column>
                    <Text is="strong">mobile</Text>
                </Table.Column>

                <Table.Column>
                    <Code>0px</Code>
                </Table.Column>

                <Table.Column>
                    <Code>640px</Code>
                </Table.Column>
            </Table.Row>

            <Table.Row>
                <Table.Column>
                    <Text is="strong">tablet</Text>
                </Table.Column>

                <Table.Column>
                    <Code>641px</Code>
                </Table.Column>

                <Table.Column>
                    <Code>768px</Code>
                </Table.Column>
            </Table.Row>

            <Table.Row>
                <Table.Column>
                    <Text is="strong">desktop</Text>
                </Table.Column>

                <Table.Column>
                    <Code>769px</Code>
                </Table.Column>

                <Table.Column>
                    <Code>1024px</Code>
                </Table.Column>
            </Table.Row>

            <Table.Row>
                <Table.Column>
                    <Text is="strong">widescreen</Text>
                </Table.Column>

                <Table.Column>
                    <Code>1025px</Code>
                </Table.Column>

                <Table.Column>
                    <Code>∞</Code>
                </Table.Column>
            </Table.Row>
        </Table.Section>

        <Table.Footer>
            <Table.Row>
                <Table.Heading />
                <Table.Heading>Minimum</Table.Heading>
                <Table.Heading>Maximum</Table.Heading>
            </Table.Row>
        </Table.Footer>
    </Table.Container>
</Scrollable>
```
