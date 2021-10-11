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
description="Sets the [`for`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for) attribute that is targetted."
types=["string"]

[[events."Form.Group"]]
name="change"
description="Fires whenever the `logic_state` has its value changed via the [Svelte Context](https://svelte.dev/docs#setContext)."
types=["CustomEvent<void>"]

[[events."Form.Label"]]
name="click"
description="Fires whenever clicked."
types=["MouseEvent"]

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

...
