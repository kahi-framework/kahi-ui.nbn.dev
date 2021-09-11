+++
[[properties."Form.Control"]]
name="logic_id"
description="Sets the form [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-id) attribute in a [Svelte Context](https://svelte.dev/docs#setContext) for child Form Components to target / assign as."
types=["string"]

[[properties."Form.Group"]]
name="logic_name"
description="Sets the form [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name) attribute in a [Svelte Context](https://svelte.dev/docs#setContext) for child Form Components to group as."
types=["string"]

[[properties."Form.Group"]]
name="logic_state"
description="Controls the currently active Form Component via a [Svelte Context](https://svelte.dev/docs#setContext)."
types=["string"]

[[events."Form.Group"]]
name="change"
description="Fires whenever the `logic_state` has its value changed via the [Svelte Context](https://svelte.dev/docs#setContext)."
types=["CustomEvent<void>"]
+++

# Form

...
