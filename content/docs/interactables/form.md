+++
[[properties."Form.Control"]]
name="logic_id"
description="Sets the form [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-id) attribute in a [Svelte Context](https://svelte.dev/docs#setContext) for child Form Components to target / assign as."
types=["string"]

[[properties."Form.Control"]]
name="logic_name"
description="Sets the form [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name) attribute in a [Svelte Context](https://svelte.dev/docs#setContext) for child Form Components to group as."
types=["string"]

[[properties."Form.Group"]]
name="logic_name"
description="Sets the form [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name) attribute in a [Svelte Context](https://svelte.dev/docs#setContext) for child Form Components to group as."
types=["string"]

[[properties."Form.Group"]]
name="logic_id"
description="Sets the form [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-id) attribute in a [Svelte Context](https://svelte.dev/docs#setContext) for child Form Components to target / assign as."
types=["string"]

[[properties."Form.Group"]]
name="logic_state"
description="Controls the currently active Form Component via a [Svelte Context](https://svelte.dev/docs#setContext)."
types=["string"]

[[properties."Form.Label"]]
name="for"
description="Sets the [`for`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for) attribute of the element that is targetted."
types=["string"]

[[properties."Form.Legend"]]
name="is"
description="Alters the HTML tag rendered to the DOM."
default="legend"
types=["legend", "span"]

[[events."Form.Group"]]
name="change"
description="Fires whenever the `logic_state` has its value changed via the [Svelte Context](https://svelte.dev/docs#setContext)."
types=["CustomEvent<void>"]

[[slots."Form.Control"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Form.FieldSet"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Form.Group"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Form.HelpText"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Form.Label"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[slots."Form.Legend"]]
name="default"
description="Default unnamed slot."
types=["{}"]

[[custom_properties."Form.Control"]]
name="--form-control-gap"
description="Controls the spacing gap between child elements, e.g. icons."
types=["<length>"]

[[custom_properties."Form.Label"]]
name="--form-label-gap"
description="Controls the spacing gap between child elements, e.g. icons."
types=["<length>"]
+++

# Form

Form Components are helpers to supplement input Components that are meant for form Components like [TextInput](./textinput.md).

## HelpText

> **NOTE**: Introduced feature in `v0.2.7`.

`Form.HelpText` is typically used for displaying information about how to input information into a form properly.

```svelte {title="Form HelpText" mode="repl"}
<script>
    import {Form, TextInput} from "@kahi-ui/framework";
</script>

<TextInput type="password" />
<Form.HelpText>
    passwords must be 8+ characters at minimum
</Form.HelpText>
```

## Label

> **NOTE**: Introduced feature in `v0.2.7`.

> **NOTE**: This Component sets a [Svelte Context](https://svelte.dev/docs#setContext) for Form IDs / Names that child input Components consume.

`Form.Label` focuses the target input Component whenever its child content is clicked.

```svelte {title="Form Label" mode="repl"}
<script>
    import {Check, Form} from "@kahi-ui/framework";
</script>

<Form.Label for="form-label-group">
    <Check />
    Click me!
</Form.Label>
```

## Control

> **NOTE**: Introduced feature in `v0.2.7`.

> **NOTE**: This Component sets a [Svelte Context](https://svelte.dev/docs#setContext) for Form IDs / Names that child input Components consume.

`Form.Control` is typically used to display form and input Components in a preformatted stack.

```svelte {title="Form Control" mode="repl"}
<script>
    import {
        Code,
        Form,
        TextInput,
    } from "@kahi-ui/framework";

    let value = "sample@sample.org";
</script>

<Form.Control logic_id="form-control">
    <Form.Label>
        Register E-Mail for Newsletter
    </Form.Label>

    <TextInput bind:value />
    <Form.HelpText>
        Make sure to enter a valid E-Mail Address, e.g.
        <Code>sample@sample.org</Code>
    </Form.HelpText>
</Form.Control>
```

## Group

> **NOTE**: Introduced feature in `v0.2.7`.

> **NOTE**: This Component is renderless, it does not render its own DOM nodes.

`Form.Group` lets you directly set the relevant form-related [Svelte Contexts](https://svelte.dev/docs#setContext) via its properties without using any preformatted shown above.

```svelte {title="Form Group" mode="repl"}
<script>
    import {
        Form,
        Radio,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    let logic_state = "vanilla";
</script>

<Text is="strong">
    Select an Ice Cream Flavor
    <Text is="sup">{logic_state}</Text>
</Text>

<Stack.Container spacing="small" margin_top="small">
    <Form.Group
        logic_name="form-group"
        bind:logic_state
    >
        <Radio
            id="form-group-bubblegum"
            palette="accent"
            size="tiny"
            value="bubblegum"
        >
            Bubblegum
        </Radio>

        <Radio
            id="form-group-chocolate"
            palette="accent"
            size="tiny"
            value="chocolate"
        >
            Chocolate
        </Radio>

        <Radio
            id="form-group-vanilla"
            palette="accent"
            size="tiny"
            value="vanilla"
        >
            Vanilla
        </Radio>
    </Form.Group>
</Stack.Container>
```

## Legend

> **NOTE**: Introduced feature in `v0.6.0`.

> **IMPORTANT**: When using outside of a `Form.FieldSet`, use `<Form.Legend is="span">` for semantically correct HTML tags.

`Form.Legend` is typically used for categorization headings, rendering text as smaller bold text with letter spacing.

```svelte {title="Form Legend" mode="repl"}
<script>
    import {Form} from "@kahi-ui/framework";
</script>

<Form.Legend>VEGETABLES</Form.Legend>
```

## FieldSet

> **NOTE**: Introduced feature in `v0.6.0`.

`Form.FieldSet` is typically used for grouping together related form Components into a visually distinct box.

```svelte {title="Form Legend" mode="repl"}
<script>
    import {
        Form,
        Stack,
        TextInput,
    } from "@kahi-ui/framework";
</script>

<Form.FieldSet>
    <Form.Legend>Personal Details</Form.Legend>

    <Stack.Container spacing="medium">
        <Form.Control
            logic_id="form-fieldset-first-name"
            logic_name="form-fieldset-first-name"
        >
            <Form.Label>First Name</Form.Label>
            <TextInput value="John" />
        </Form.Control>

        <Form.Control
            logic_id="form-fieldset-first-name"
            logic_name="form-fieldset-first-name"
        >
            <Form.Label>Last Name</Form.Label>
            <TextInput value="Smith" />
        </Form.Control>
    </Stack.Container>
</Form.FieldSet>
```
