+++
[[properties."*"]]
name="class"
description="Sets a class name(s) on the Component."
types=["string"]

[[properties."*"]]
name="style"
description="Sets inline CSS properties on the Component."
types=["string"]

[[properties."*"]]
name="id"
description="Sets an identifier that other Components can target or useful for querying DOM by association."
types=["string"]

[[properties."*"]]
name="name"
description="Sets an identifier that will be used in form submissions or targettable by specific Components like `Anchor`."
types=["string"]

[[properties."*"]]
name="title"
description="Sets text for a tooltip whenever an end-user hovers the Component, and useful for assistive technologies."
types=["string"]

[[properties."*"]]
name="tabindex"
description="Alters how the Browser will cycle through the elements within the Component's current stacking context."
types=["number", "string"]

[[events."*"]]
name="click"
description="Forwards the [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) event whenever the Component or inner content left clicked."
types=["MouseEvent"]

[[events."*"]]
name="contextmenu"
description="Forwards the [`contextmenu`](https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event) event whenever the Component or inner content is right clicked."
types=["MouseEvent"]

[[events."*"]]
name="dblclick"
description="Forwards the [`dblclick`](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event) event whenever the Component or inner content is double clicked."
types=["MouseEvent"]

[[events."*"]]
name="focusin"
description="Forwards the [`focusin`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event) event whenever focus is obtained by the Component or inner content."
types=["FocusEvent"]

[[events."*"]]
name="focusout"
description="Forwards the [`focusout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event) event whenever focus is lost by the Component or inner content."
types=["FocusEvent"]

[[events."*"]]
name="keydown"
description="Forwards the [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) event whenever a keyboard button is pressed down while the Component or inner content has focus."
types=["KeyboardEvent"]

[[events."*"]]
name="keyup"
description="Forwards the [`keyup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) event whenever a keyboard button is released while the Component or inner content has focus."
types=["KeyboardEvent"]

[[events."*"]]
name="pointercancel"
description="Forwards the [`pointercancel`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event) event whenever the Component or inner content has interuptions like palm rejection or screen orientation rotated."
types=["PointerEvent"]

[[events."*"]]
name="pointerdown"
description="Forwards the [`pointerdown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerdown_event) event whenever the Component or inner content has buttons (mouse) pressed or physical contact (pen, touch) made."
types=["PointerEvent"]

[[events."*"]]
name="pointerenter"
description="Forwards the [`pointerenter`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event) event whenever the pointer (mouse, pen, touch) enters the bounding box of the Component or inner content."
types=["PointerEvent"]

[[events."*"]]
name="pointerleave"
description="Forwards the [`pointerleave`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerleave_event) event whenever the pointer (mouse, pen, touch) leaves the bounding box of the Component or inner content."
types=["PointerEvent"]

[[events."*"]]
name="pointermove"
description="Forwards the [`pointermove`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event) event whenever the pointer (mouse, pen, touch) is moving within the bounding box of the Component or inner content."
types=["PointerEvent"]

[[events."*"]]
name="pointerout"
description="Forwards the [`pointerout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerout_event) event, which is similar to `pointerleave` but also includes interuptions like pointing device leaving digitizer."
types=["PointerEvent"]

[[events."*"]]
name="pointerup"
description="Forwards the [`pointerup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerup_event) event whenever the Component or inner content has buttons (mouse) released or physical contact (pen, touch) lifted."
types=["PointerEvent"]
+++

# HTML5

All Components have access to common HTML5 global attributes and events.

## class

> **NOTE**: Introduced feature in `v0.2.0`.

[`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) allows you to apply CSS classes that you've defined to Components. However, you will have to use `:global` on your class names to bypass Svelte's local scoping.

```svelte {title="HTML5 class" mode="repl"}
<script>
    import {Text} from "@kahi-ui/framework";
</script>

<Text class="my-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit.
</Text>

<style>
    :global(.my-text) {
        color: red;
    }
</style>
```

## style

> **NOTE**: Introduced feature in `v0.2.0`.

[`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style) allows you to apply inline CSS properties to Components.

```svelte {title="HTML5 style" mode="repl"}
<script>
    import {Text} from "@kahi-ui/framework";
</script>

<Text style="color:red;">
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit.
</Text>
```

## id

> **NOTE**: Introduced feature in `v0.2.0`.

[`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) allows you to set an identifier that other elements can target or targettable for scrolling by a [URL fragment](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash).

```svelte {title="HTML5 id" mode="repl"}
<script>
    import {
        Anchor,
        Heading,
        Spacer,
    } from "@kahi-ui/framework";
</script>

<Anchor href="#target-heading">
    Scroll to Heading!
</Anchor>

<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />
<Spacer spacing="huge" />

<Heading id="target-heading">Hello World!</Heading>
```

## name

> **NOTE**: Introduced feature in `v0.2.0`.

[`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/name) allows you to set an identifier for the Component to set its value to in a form, or, can targettable by an [`Anchor`](../navigation/anchor.md).

```svelte {title="HTML5 name" mode="repl"}
<script>
    import {Anchor} from "@kahi-ui/framework";
</script>

<Anchor target="target-iframe" href="/">
    Open Landing Page
</Anchor>

<iframe
    name="target-iframe"
    width="100%"
    height="256"
/>
```

## title

> **NOTE**: Introduced feature in `v0.2.0`.

[`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) allows you to set a timed effect to show a text tooltip whenever an end-user hovers for long enough. Typically you don't want to rely on this attribute for the UI. Rather use it for semantic and assistive purposes.

```svelte {title="HTML5 title" mode="repl"}
<script>
    import {Text} from "@kahi-ui/framework";
</script>

<Text title="I am some additional text!">
    Hover me!
</Text>
```

## tabindex

> **NOTE**: Introduced feature in `v0.2.0`.

[`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) allows you to configure how the Browser cycles through elements in the current stacking context when they press their tab keyboard button, or similar.

```svelte {title="HTML5 tabindex" mode="repl"}
<script>
    import {Button} from "@kahi-ui/framework";
</script>

<Button tabindex="3">Index #3</Button>
<Button tabindex="1">Index #1</Button>
<Button tabindex="-1">Unselectable</Button>
<Button tabindex="4">Index #4</Button>
<Button tabindex="2">Index #2</Button>
```

> **TODO**: Event samples
