+++
[[properties.DataSelect]]
name="items"
description="Sets the options displayed to the user."
types=["{disabled?: boolean, id: string, palette?: string, text: string, value?: string}"]

[[properties.DataSelect]]
name="max"
description="Controls how many multiple choices a user can select when enabled."
types=["number"]

[[properties.DataSelect]]
name="multiple"
description="Controls whether multiple options can be selected by the user."
types=["boolean"]

[[properties.DataSelect]]
name="logic_name"
description="Controls the form name that prefixes all option values."
types=["string"]

[[properties.DataSelect]]
name="logic_state"
description="Controls which options are selected by their `T.value`, or `T.id` if `T.value` is not specified."
types=["string", "string[]"]

[[properties.DataSelect]]
name="placeholder"
description="Alters displayed text while closed or if no options are selected."
types=["string"]

[[properties.DataSelect]]
name="searching"
description="Controls the current searching filter in the inner `TextInput` value."
types=["string"]

[[properties.DataSelect]]
name="searching_algorithm"
description="Allows implementing of custom search filtering."
types=["(item: IDataSelectItem, searching?: string) => boolean"]

[[properties.DataSelect]]
name="palette"
description="Alters the color palette of the inner `TextInput` Component."
types=["auto", "inverse", "inherit", "accent", "neutral", "off", "dark", "light", "alert", "affirmative", "informative", "negative"]

[[properties.DataSelect]]
name="sizing"
description="Alters the sizing of the inner`TextInput` Component."
types=["nano", "tiny", "small", "medium", "large", "huge", "massive", "{VIEWPORT}:{SIZING}"]

[[slots.DataSelect]]
name="default"
description="Used for customizing how each item's text is rendered."
types=["{index: number, item: T}"]
+++

# DataSelect

> **NOTE**: Introduced feature in `v0.6.2`.

`DataSelect` uses various built-in Components to render a list of selectable options into a hovering box that is highly customizable, while supporting working in normal HTML forms.
