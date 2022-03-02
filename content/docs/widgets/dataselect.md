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

```svelte {title="DataSelect Preview" mode="repl"}
<script>
    import {DataSelect} from "@kahi-ui/framework";

    const ITEMS = [
        {
            text: "Alabama",
            id: "alabama",
            palette: "accent",
        },
        {
            text: "Alaska",
            id: "alaska",
            palette: "accent",
        },
        {
            text: "Arizona",
            id: "arizona",
            palette: "accent",
        },
        {
            text: "Arkansas",
            id: "arkansas",
            palette: "accent",
        },
        {
            text: "California",
            id: "california",
            palette: "accent",
        },
        {
            text: "Colorado",
            id: "colorado",
            palette: "accent",
        },
        {
            text: "Connecticut",
            id: "connecticut",
            palette: "accent",
        },
        {
            text: "Delaware",
            id: "delaware",
            palette: "accent",
        },
        {
            text: "Florida",
            id: "florida",
            palette: "accent",
        },
        {
            text: "Georgia",
            id: "georgia",
            palette: "accent",
        },
        {
            text: "Hawaii",
            id: "hawaii",
            palette: "accent",
        },
        {
            text: "Idaho",
            id: "idaho",
            palette: "accent",
        },
        {
            text: "Illinois",
            id: "illinois",
            palette: "accent",
        },
        {
            text: "Indiana",
            id: "Indiana",
            palette: "accent",
        },
        {text: "Iowa", id: "iowa", palette: "accent"},
        {
            text: "Kansas",
            id: "kansas",
            palette: "accent",
        },
        {
            text: "Kentucky",
            id: "kentucky",
            palette: "accent",
        },
        {
            text: "Louisiana",
            id: "louisiana",
            palette: "accent",
        },
        {
            text: "Maine",
            id: "maine",
            palette: "accent",
        },
        {
            text: "Maryland",
            id: "maryland",
            palette: "accent",
        },
        {
            text: "Massachusetts",
            id: "massachusetts",
            palette: "accent",
        },
        {
            text: "Michigan",
            id: "michigan",
            palette: "accent",
        },
        {
            text: "Minnesota",
            id: "minnesota",
            palette: "accent",
        },
        {
            text: "Mississippi",
            id: "mississippi",
            palette: "accent",
        },
        {
            text: "Missouri",
            id: "missouri",
            palette: "accent",
        },
        {
            text: "Montana",
            id: "montana",
            palette: "accent",
        },
        {
            text: "Nebraska",
            id: "nebraska",
            palette: "accent",
        },
        {
            text: "Nevada",
            id: "nevada",
            palette: "accent",
        },
        {
            text: "New Hampshire",
            id: "new-hampshire",
            palette: "accent",
        },
        {
            text: "New Jersey",
            id: "new-jersey",
            palette: "accent",
        },
        {
            text: "New Mexico",
            id: "new-mexico",
            palette: "accent",
        },
        {
            text: "New York",
            id: "new-york",
            palette: "accent",
        },
        {
            text: "North Carolina",
            id: "north-carolina",
            palette: "accent",
        },
        {
            text: "North Dakota",
            id: "north-dakota",
            palette: "accent",
        },
        {text: "Ohio", id: "ohio", palette: "accent"},
        {
            text: "Oklahoma",
            id: "oklahoma",
            palette: "accent",
        },
        {
            text: "Oregon",
            id: "oregon",
            palette: "accent",
        },
        {
            text: "Pennsylvania",
            id: "pennsylvania",
            palette: "accent",
        },
        {
            text: "Rhode Island",
            id: "rhode-island",
            palette: "accent",
        },
        {
            text: "South Carolina",
            id: "south-carolina",
            palette: "accent",
        },
        {
            text: "South Dakota",
            id: "south-dakota",
            palette: "accent",
        },
        {
            text: "Tennessee",
            id: "tennessee",
            palette: "accent",
        },
        {
            text: "Texas",
            id: "texas",
            palette: "accent",
        },
        {text: "Utah", id: "utah", palette: "accent"},
        {
            text: "Vermont",
            id: "vermont",
            palette: "accent",
        },
        {
            text: "Virginia",
            id: "virginia",
            palette: "accent",
        },
        {
            text: "Washington",
            id: "washington",
            palette: "accent",
        },
        {
            text: "West Virginia",
            id: "west-virginia",
            palette: "accent",
        },
        {
            text: "Wisconsin",
            id: "wisconsin",
            palette: "accent",
        },
        {
            text: "Wyoming",
            id: "wyoming",
            palette: "accent",
        },
    ];
</script>

<DataSelect
    items={ITEMS}
    logic_name="dataselect-preview"
    placeholder="Select a US State..."
    palette="accent"
/>
```

## Imports

```svelte {title="DataSelect Imports"}
<script>
    import {DataSelect} from "@kahi-ui/framework";
</script>
```

## Multiple

You can allow the user to select multiple items via the `multiple` property.

```svelte {title="DataSelect Multiple" mode="repl"}
<script>
    import {DataSelect} from "@kahi-ui/framework";

    const ITEMS = [
        {
            text: "Alabama",
            id: "alabama",
            palette: "accent",
        },
        {
            text: "Alaska",
            id: "alaska",
            palette: "accent",
        },
        {
            text: "Arizona",
            id: "arizona",
            palette: "accent",
        },
        {
            text: "Arkansas",
            id: "arkansas",
            palette: "accent",
        },
        {
            text: "California",
            id: "california",
            palette: "accent",
        },
        {
            text: "Colorado",
            id: "colorado",
            palette: "accent",
        },
        {
            text: "Connecticut",
            id: "connecticut",
            palette: "accent",
        },
        {
            text: "Delaware",
            id: "delaware",
            palette: "accent",
        },
        {
            text: "Florida",
            id: "florida",
            palette: "accent",
        },
        {
            text: "Georgia",
            id: "georgia",
            palette: "accent",
        },
        {
            text: "Hawaii",
            id: "hawaii",
            palette: "accent",
        },
        {
            text: "Idaho",
            id: "idaho",
            palette: "accent",
        },
        {
            text: "Illinois",
            id: "illinois",
            palette: "accent",
        },
        {
            text: "Indiana",
            id: "Indiana",
            palette: "accent",
        },
        {text: "Iowa", id: "iowa", palette: "accent"},
        {
            text: "Kansas",
            id: "kansas",
            palette: "accent",
        },
        {
            text: "Kentucky",
            id: "kentucky",
            palette: "accent",
        },
        {
            text: "Louisiana",
            id: "louisiana",
            palette: "accent",
        },
        {
            text: "Maine",
            id: "maine",
            palette: "accent",
        },
        {
            text: "Maryland",
            id: "maryland",
            palette: "accent",
        },
        {
            text: "Massachusetts",
            id: "massachusetts",
            palette: "accent",
        },
        {
            text: "Michigan",
            id: "michigan",
            palette: "accent",
        },
        {
            text: "Minnesota",
            id: "minnesota",
            palette: "accent",
        },
        {
            text: "Mississippi",
            id: "mississippi",
            palette: "accent",
        },
        {
            text: "Missouri",
            id: "missouri",
            palette: "accent",
        },
        {
            text: "Montana",
            id: "montana",
            palette: "accent",
        },
        {
            text: "Nebraska",
            id: "nebraska",
            palette: "accent",
        },
        {
            text: "Nevada",
            id: "nevada",
            palette: "accent",
        },
        {
            text: "New Hampshire",
            id: "new-hampshire",
            palette: "accent",
        },
        {
            text: "New Jersey",
            id: "new-jersey",
            palette: "accent",
        },
        {
            text: "New Mexico",
            id: "new-mexico",
            palette: "accent",
        },
        {
            text: "New York",
            id: "new-york",
            palette: "accent",
        },
        {
            text: "North Carolina",
            id: "north-carolina",
            palette: "accent",
        },
        {
            text: "North Dakota",
            id: "north-dakota",
            palette: "accent",
        },
        {text: "Ohio", id: "ohio", palette: "accent"},
        {
            text: "Oklahoma",
            id: "oklahoma",
            palette: "accent",
        },
        {
            text: "Oregon",
            id: "oregon",
            palette: "accent",
        },
        {
            text: "Pennsylvania",
            id: "pennsylvania",
            palette: "accent",
        },
        {
            text: "Rhode Island",
            id: "rhode-island",
            palette: "accent",
        },
        {
            text: "South Carolina",
            id: "south-carolina",
            palette: "accent",
        },
        {
            text: "South Dakota",
            id: "south-dakota",
            palette: "accent",
        },
        {
            text: "Tennessee",
            id: "tennessee",
            palette: "accent",
        },
        {
            text: "Texas",
            id: "texas",
            palette: "accent",
        },
        {text: "Utah", id: "utah", palette: "accent"},
        {
            text: "Vermont",
            id: "vermont",
            palette: "accent",
        },
        {
            text: "Virginia",
            id: "virginia",
            palette: "accent",
        },
        {
            text: "Washington",
            id: "washington",
            palette: "accent",
        },
        {
            text: "West Virginia",
            id: "west-virginia",
            palette: "accent",
        },
        {
            text: "Wisconsin",
            id: "wisconsin",
            palette: "accent",
        },
        {
            text: "Wyoming",
            id: "wyoming",
            palette: "accent",
        },
    ];
</script>

<DataSelect
    items={ITEMS}
    logic_name="dataselect-multiple"
    placeholder="Select multiple US States..."
    palette="accent"
    multiple
/>
```

## Logic State

You can control which items are already selected via the `logic_state` property.

```svelte {title="DataSelect Logic State" mode="repl"}
<script>
    import {DataSelect} from "@kahi-ui/framework";

    const ITEMS = [
        {text: "Alabama", id: "alabama"},
        {text: "Alaska", id: "alaska"},
        {text: "Arizona", id: "arizona"},
        {text: "Arkansas", id: "arkansas"},
        {text: "California", id: "california"},
        {text: "Colorado", id: "colorado"},
        {text: "Connecticut", id: "connecticut"},
        {text: "Delaware", id: "delaware"},
        {text: "Florida", id: "florida"},
        {text: "Georgia", id: "georgia"},
        {text: "Hawaii", id: "hawaii"},
        {text: "Idaho", id: "idaho"},
        {text: "Illinois", id: "illinois"},
        {text: "Indiana", id: "Indiana"},
        {text: "Iowa", id: "iowa", palette: "accent"},
        {text: "Kansas", id: "kansas"},
        {text: "Kentucky", id: "kentucky"},
        {text: "Louisiana", id: "louisiana"},
        {text: "Maine", id: "maine"},
        {text: "Maryland", id: "maryland"},
        {text: "Massachusetts", id: "massachusetts"},
        {text: "Michigan", id: "michigan"},
        {text: "Minnesota", id: "minnesota"},
        {text: "Mississippi", id: "mississippi"},
        {text: "Missouri", id: "missouri"},
        {text: "Montana", id: "montana"},
        {text: "Nebraska", id: "nebraska"},
        {text: "Nevada", id: "nevada"},
        {text: "New Hampshire", id: "new-hampshire"},
        {text: "New Jersey", id: "new-jersey"},
        {text: "New Mexico", id: "new-mexico"},
        {text: "New York", id: "new-york"},
        {text: "North Carolina", id: "north-carolina"},
        {text: "North Dakota", id: "north-dakota"},
        {text: "Ohio", id: "ohio"},
        {text: "Oklahoma", id: "oklahoma"},
        {text: "Oregon", id: "oregon"},
        {text: "Pennsylvania", id: "pennsylvania"},
        {text: "Rhode Island", id: "rhode-island"},
        {text: "South Carolina", id: "south-carolina"},
        {text: "South Dakota", id: "south-dakota"},
        {text: "Tennessee", id: "tennessee"},
        {text: "Texas", id: "texas"},
        {text: "Utah", id: "utah"},
        {text: "Vermont", id: "vermont"},
        {text: "Virginia", id: "virginia"},
        {text: "Washington", id: "washington"},
        {text: "West Virginia", id: "west-virginia"},
        {text: "Wisconsin", id: "wisconsin"},
        {text: "Wyoming", id: "wyoming"},
    ];
</script>

<DataSelect
    items={ITEMS}
    logic_name="dataselect-logic-state"
    logic_state={["oregon", "delaware"]}
    placeholder="Select multiple US States..."
    multiple
/>
```

## Searching

> **WARNING**: This feature is only available in Javascript-enabled clients.

`DataTable` includes a bottom left search box which allows users to filter rows based on the input. You can customize the default via the `searching` property.

```svelte {title="DataSelect Searching" mode="repl"}
<script>
    import {DataSelect} from "@kahi-ui/framework";

    const ITEMS = [
        {text: "Alabama", id: "alabama"},
        {text: "Alaska", id: "alaska"},
        {text: "Arizona", id: "arizona"},
        {text: "Arkansas", id: "arkansas"},
        {text: "California", id: "california"},
        {text: "Colorado", id: "colorado"},
        {text: "Connecticut", id: "connecticut"},
        {text: "Delaware", id: "delaware"},
        {text: "Florida", id: "florida"},
        {text: "Georgia", id: "georgia"},
        {text: "Hawaii", id: "hawaii"},
        {text: "Idaho", id: "idaho"},
        {text: "Illinois", id: "illinois"},
        {text: "Indiana", id: "Indiana"},
        {text: "Iowa", id: "iowa", palette: "accent"},
        {text: "Kansas", id: "kansas"},
        {text: "Kentucky", id: "kentucky"},
        {text: "Louisiana", id: "louisiana"},
        {text: "Maine", id: "maine"},
        {text: "Maryland", id: "maryland"},
        {text: "Massachusetts", id: "massachusetts"},
        {text: "Michigan", id: "michigan"},
        {text: "Minnesota", id: "minnesota"},
        {text: "Mississippi", id: "mississippi"},
        {text: "Missouri", id: "missouri"},
        {text: "Montana", id: "montana"},
        {text: "Nebraska", id: "nebraska"},
        {text: "Nevada", id: "nevada"},
        {text: "New Hampshire", id: "new-hampshire"},
        {text: "New Jersey", id: "new-jersey"},
        {text: "New Mexico", id: "new-mexico"},
        {text: "New York", id: "new-york"},
        {text: "North Carolina", id: "north-carolina"},
        {text: "North Dakota", id: "north-dakota"},
        {text: "Ohio", id: "ohio"},
        {text: "Oklahoma", id: "oklahoma"},
        {text: "Oregon", id: "oregon"},
        {text: "Pennsylvania", id: "pennsylvania"},
        {text: "Rhode Island", id: "rhode-island"},
        {text: "South Carolina", id: "south-carolina"},
        {text: "South Dakota", id: "south-dakota"},
        {text: "Tennessee", id: "tennessee"},
        {text: "Texas", id: "texas"},
        {text: "Utah", id: "utah"},
        {text: "Vermont", id: "vermont"},
        {text: "Virginia", id: "virginia"},
        {text: "Washington", id: "washington"},
        {text: "West Virginia", id: "west-virginia"},
        {text: "Wisconsin", id: "wisconsin"},
        {text: "Wyoming", id: "wyoming"},
    ];
</script>

<DataSelect
    items={ITEMS}
    logic_name="dataselect-searching"
    placeholder="Select a US State..."
    searching="ma"
/>
```

## Maximum

You can control the maximum amount of items selectable by the user via the `max` property.

```svelte {title="DataSelect Maximum" mode="repl"}
<script>
    import {DataSelect} from "@kahi-ui/framework";

    const ITEMS = [
        {text: "Alabama", id: "alabama"},
        {text: "Alaska", id: "alaska"},
        {text: "Arizona", id: "arizona"},
        {text: "Arkansas", id: "arkansas"},
        {text: "California", id: "california"},
        {text: "Colorado", id: "colorado"},
        {text: "Connecticut", id: "connecticut"},
        {text: "Delaware", id: "delaware"},
        {text: "Florida", id: "florida"},
        {text: "Georgia", id: "georgia"},
        {text: "Hawaii", id: "hawaii"},
        {text: "Idaho", id: "idaho"},
        {text: "Illinois", id: "illinois"},
        {text: "Indiana", id: "Indiana"},
        {text: "Iowa", id: "iowa", palette: "accent"},
        {text: "Kansas", id: "kansas"},
        {text: "Kentucky", id: "kentucky"},
        {text: "Louisiana", id: "louisiana"},
        {text: "Maine", id: "maine"},
        {text: "Maryland", id: "maryland"},
        {text: "Massachusetts", id: "massachusetts"},
        {text: "Michigan", id: "michigan"},
        {text: "Minnesota", id: "minnesota"},
        {text: "Mississippi", id: "mississippi"},
        {text: "Missouri", id: "missouri"},
        {text: "Montana", id: "montana"},
        {text: "Nebraska", id: "nebraska"},
        {text: "Nevada", id: "nevada"},
        {text: "New Hampshire", id: "new-hampshire"},
        {text: "New Jersey", id: "new-jersey"},
        {text: "New Mexico", id: "new-mexico"},
        {text: "New York", id: "new-york"},
        {text: "North Carolina", id: "north-carolina"},
        {text: "North Dakota", id: "north-dakota"},
        {text: "Ohio", id: "ohio"},
        {text: "Oklahoma", id: "oklahoma"},
        {text: "Oregon", id: "oregon"},
        {text: "Pennsylvania", id: "pennsylvania"},
        {text: "Rhode Island", id: "rhode-island"},
        {text: "South Carolina", id: "south-carolina"},
        {text: "South Dakota", id: "south-dakota"},
        {text: "Tennessee", id: "tennessee"},
        {text: "Texas", id: "texas"},
        {text: "Utah", id: "utah"},
        {text: "Vermont", id: "vermont"},
        {text: "Virginia", id: "virginia"},
        {text: "Washington", id: "washington"},
        {text: "West Virginia", id: "west-virginia"},
        {text: "Wisconsin", id: "wisconsin"},
        {text: "Wyoming", id: "wyoming"},
    ];
</script>

<DataSelect
    items={ITEMS}
    logic_name="dataselect-max-one"
    placeholder="Select one (1) US State..."
    max={1}
    multiple
/>

<DataSelect
    items={ITEMS}
    logic_name="dataselect-max-five"
    placeholder="Select five (5) US States..."
    max={5}
    multiple
/>
```

## Palette

You can change the color palette of the inner `TextInput` via the `palette` property.

```svelte {title="DataSelect Palette" mode="repl"}
<script>
    import {
        DataSelect,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const ITEMS = [
        {text: "Alabama", id: "alabama"},
        {text: "Alaska", id: "alaska"},
        {text: "Arizona", id: "arizona"},
        {text: "Arkansas", id: "arkansas"},
        {text: "California", id: "california"},
        {text: "Colorado", id: "colorado"},
        {text: "Connecticut", id: "connecticut"},
        {text: "Delaware", id: "delaware"},
        {text: "Florida", id: "florida"},
        {text: "Georgia", id: "georgia"},
        {text: "Hawaii", id: "hawaii"},
        {text: "Idaho", id: "idaho"},
        {text: "Illinois", id: "illinois"},
        {text: "Indiana", id: "Indiana"},
        {text: "Iowa", id: "iowa", palette: "accent"},
        {text: "Kansas", id: "kansas"},
        {text: "Kentucky", id: "kentucky"},
        {text: "Louisiana", id: "louisiana"},
        {text: "Maine", id: "maine"},
        {text: "Maryland", id: "maryland"},
        {text: "Massachusetts", id: "massachusetts"},
        {text: "Michigan", id: "michigan"},
        {text: "Minnesota", id: "minnesota"},
        {text: "Mississippi", id: "mississippi"},
        {text: "Missouri", id: "missouri"},
        {text: "Montana", id: "montana"},
        {text: "Nebraska", id: "nebraska"},
        {text: "Nevada", id: "nevada"},
        {text: "New Hampshire", id: "new-hampshire"},
        {text: "New Jersey", id: "new-jersey"},
        {text: "New Mexico", id: "new-mexico"},
        {text: "New York", id: "new-york"},
        {text: "North Carolina", id: "north-carolina"},
        {text: "North Dakota", id: "north-dakota"},
        {text: "Ohio", id: "ohio"},
        {text: "Oklahoma", id: "oklahoma"},
        {text: "Oregon", id: "oregon"},
        {text: "Pennsylvania", id: "pennsylvania"},
        {text: "Rhode Island", id: "rhode-island"},
        {text: "South Carolina", id: "south-carolina"},
        {text: "South Dakota", id: "south-dakota"},
        {text: "Tennessee", id: "tennessee"},
        {text: "Texas", id: "texas"},
        {text: "Utah", id: "utah"},
        {text: "Vermont", id: "vermont"},
        {text: "Virginia", id: "virginia"},
        {text: "Washington", id: "washington"},
        {text: "West Virginia", id: "west-virginia"},
        {text: "Wisconsin", id: "wisconsin"},
        {text: "Wyoming", id: "wyoming"},
    ];
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-palette-default"
            placeholder="Select a US State..."
        />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-palette-accent"
            placeholder="Select a US State..."
            palette="accent"
        />
    </div>

    <div>
        <Text is="strong">NEUTRAL</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-palette-neutral"
            placeholder="Select a US State..."
            palette="neutral"
        />
    </div>

    <div>
        <Text is="strong">DARK</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-palette-dark"
            placeholder="Select a US State..."
            palette="dark"
        />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-palette-light"
            placeholder="Select a US State..."
            palette="light"
        />
    </div>

    <div>
        <Text is="strong">ALERT</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-palette-alert"
            placeholder="Select a US State..."
            palette="alert"
        />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-palette-affirmative"
            placeholder="Select a US State..."
            palette="affirmative"
        />
    </div>

    <div>
        <Text is="strong">INFORMATIVE</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-palette-informative"
            placeholder="Select a US State..."
            palette="informative"
        />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-palette-negative"
            placeholder="Select a US State..."
            palette="negative"
        />
    </div>
</Stack.Container>
```

## Sizing

You can change the sizing of the inner `TextInput` via the `sizing` property.

```svelte {title="DataSelect Sizing" mode="repl"}
<script>
    import {
        DataSelect,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const ITEMS = [
        {text: "Alabama", id: "alabama"},
        {text: "Alaska", id: "alaska"},
        {text: "Arizona", id: "arizona"},
        {text: "Arkansas", id: "arkansas"},
        {text: "California", id: "california"},
        {text: "Colorado", id: "colorado"},
        {text: "Connecticut", id: "connecticut"},
        {text: "Delaware", id: "delaware"},
        {text: "Florida", id: "florida"},
        {text: "Georgia", id: "georgia"},
        {text: "Hawaii", id: "hawaii"},
        {text: "Idaho", id: "idaho"},
        {text: "Illinois", id: "illinois"},
        {text: "Indiana", id: "Indiana"},
        {text: "Iowa", id: "iowa", palette: "accent"},
        {text: "Kansas", id: "kansas"},
        {text: "Kentucky", id: "kentucky"},
        {text: "Louisiana", id: "louisiana"},
        {text: "Maine", id: "maine"},
        {text: "Maryland", id: "maryland"},
        {text: "Massachusetts", id: "massachusetts"},
        {text: "Michigan", id: "michigan"},
        {text: "Minnesota", id: "minnesota"},
        {text: "Mississippi", id: "mississippi"},
        {text: "Missouri", id: "missouri"},
        {text: "Montana", id: "montana"},
        {text: "Nebraska", id: "nebraska"},
        {text: "Nevada", id: "nevada"},
        {text: "New Hampshire", id: "new-hampshire"},
        {text: "New Jersey", id: "new-jersey"},
        {text: "New Mexico", id: "new-mexico"},
        {text: "New York", id: "new-york"},
        {text: "North Carolina", id: "north-carolina"},
        {text: "North Dakota", id: "north-dakota"},
        {text: "Ohio", id: "ohio"},
        {text: "Oklahoma", id: "oklahoma"},
        {text: "Oregon", id: "oregon"},
        {text: "Pennsylvania", id: "pennsylvania"},
        {text: "Rhode Island", id: "rhode-island"},
        {text: "South Carolina", id: "south-carolina"},
        {text: "South Dakota", id: "south-dakota"},
        {text: "Tennessee", id: "tennessee"},
        {text: "Texas", id: "texas"},
        {text: "Utah", id: "utah"},
        {text: "Vermont", id: "vermont"},
        {text: "Virginia", id: "virginia"},
        {text: "Washington", id: "washington"},
        {text: "West Virginia", id: "west-virginia"},
        {text: "Wisconsin", id: "wisconsin"},
        {text: "Wyoming", id: "wyoming"},
    ];
</script>

<Stack.Container
    orientation="horizontal"
    spacing="medium"
    variation="wrap"
>
    <div>
        <Text is="strong">DEFAULT</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-sizing-default"
            placeholder="Select a US State..."
        />
    </div>

    <div>
        <Text is="strong">NANO</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-sizing-nano"
            placeholder="Select a US State..."
            sizing="nano"
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-sizing-tiny"
            placeholder="Select a US State..."
            sizing="tiny"
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-sizing-small"
            placeholder="Select a US State..."
            sizing="small"
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-sizing-medium"
            placeholder="Select a US State..."
            sizing="medium"
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-sizing-large"
            placeholder="Select a US State..."
            sizing="large"
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-sizing-huge"
            placeholder="Select a US State..."
            sizing="huge"
        />
    </div>

    <div>
        <Text is="strong">MASSIVE</Text>

        <br />
        <DataSelect
            items={ITEMS}
            logic_name="dataselect-sizing-massive"
            placeholder="Select a US State..."
            sizing="massive"
        />
    </div>
</Stack.Container>
```

## Item Disabled

You can disable individual inner `Check` / `Radio` Components via the `items.T[].disabled` property member.

```svelte {title="DataSelect Item Disabled" mode="repl"}
<script>
    import {DataSelect} from "@kahi-ui/framework";

    const ITEMS = [
        {text: "Alabama", id: "alabama"},
        {text: "Alaska", id: "alaska"},
        {text: "Arizona", id: "arizona"},
        {text: "Arkansas", id: "arkansas"},
        {text: "California", id: "california"},
        {text: "Colorado", id: "colorado"},
        {text: "Connecticut", id: "connecticut"},
        {text: "Delaware", id: "delaware"},
        {text: "Florida", id: "florida"},
        {text: "Georgia", id: "georgia"},
        {text: "Hawaii", id: "hawaii"},
        {text: "Idaho", id: "idaho"},
        {text: "Illinois", id: "illinois"},
        {text: "Indiana", id: "Indiana"},
        {text: "Iowa", id: "iowa", palette: "accent"},
        {text: "Kansas", id: "kansas"},
        {text: "Kentucky", id: "kentucky"},
        {text: "Louisiana", id: "louisiana"},
        {text: "Maine", id: "maine"},
        {text: "Maryland", id: "maryland"},
        {text: "Massachusetts", id: "massachusetts"},
        {text: "Michigan", id: "michigan"},
        {text: "Minnesota", id: "minnesota"},
        {text: "Mississippi", id: "mississippi"},
        {text: "Missouri", id: "missouri"},
        {text: "Montana", id: "montana"},
        {text: "Nebraska", id: "nebraska"},
        {text: "Nevada", id: "nevada"},
        {text: "New Hampshire", id: "new-hampshire"},
        {text: "New Jersey", id: "new-jersey"},
        {text: "New Mexico", id: "new-mexico"},
        {text: "New York", id: "new-york"},
        {text: "North Carolina", id: "north-carolina"},
        {text: "North Dakota", id: "north-dakota"},
        {text: "Ohio", id: "ohio"},
        {text: "Oklahoma", id: "oklahoma"},
        {text: "Oregon", id: "oregon"},
        {text: "Pennsylvania", id: "pennsylvania"},
        {text: "Rhode Island", id: "rhode-island"},
        {text: "South Carolina", id: "south-carolina"},
        {text: "South Dakota", id: "south-dakota"},
        {text: "Tennessee", id: "tennessee"},
        {text: "Texas", id: "texas"},
        {text: "Utah", id: "utah"},
        {text: "Vermont", id: "vermont"},
        {text: "Virginia", id: "virginia"},
        {text: "Washington", id: "washington"},
        {text: "West Virginia", id: "west-virginia"},
        {text: "Wisconsin", id: "wisconsin"},
        {text: "Wyoming", id: "wyoming"},
    ];
</script>

<DataSelect
    items={ITEMS.map((item, index) => {
        return {...item, disabled: index % 5 === 0};
    })}
    logic_name="dataselect-item-disabled"
    placeholder="Select a US State..."
/>
```

## Item Palette

You can change the color palette of individual inner `Check` / `Radio` Components via the `items.T[].palette` property member.

```svelte {title="DataSelect Item Palette" mode="repl"}
<script>
    import {DataSelect} from "@kahi-ui/framework";

    const ITEMS = [
        {text: "Alabama", id: "alabama"},
        {text: "Alaska", id: "alaska"},
        {text: "Arizona", id: "arizona"},
        {text: "Arkansas", id: "arkansas"},
        {text: "California", id: "california"},
        {text: "Colorado", id: "colorado"},
        {text: "Connecticut", id: "connecticut"},
        {text: "Delaware", id: "delaware"},
        {text: "Florida", id: "florida"},
        {text: "Georgia", id: "georgia"},
        {text: "Hawaii", id: "hawaii"},
        {text: "Idaho", id: "idaho"},
        {text: "Illinois", id: "illinois"},
        {text: "Indiana", id: "Indiana"},
        {text: "Iowa", id: "iowa", palette: "accent"},
        {text: "Kansas", id: "kansas"},
        {text: "Kentucky", id: "kentucky"},
        {text: "Louisiana", id: "louisiana"},
        {text: "Maine", id: "maine"},
        {text: "Maryland", id: "maryland"},
        {text: "Massachusetts", id: "massachusetts"},
        {text: "Michigan", id: "michigan"},
        {text: "Minnesota", id: "minnesota"},
        {text: "Mississippi", id: "mississippi"},
        {text: "Missouri", id: "missouri"},
        {text: "Montana", id: "montana"},
        {text: "Nebraska", id: "nebraska"},
        {text: "Nevada", id: "nevada"},
        {text: "New Hampshire", id: "new-hampshire"},
        {text: "New Jersey", id: "new-jersey"},
        {text: "New Mexico", id: "new-mexico"},
        {text: "New York", id: "new-york"},
        {text: "North Carolina", id: "north-carolina"},
        {text: "North Dakota", id: "north-dakota"},
        {text: "Ohio", id: "ohio"},
        {text: "Oklahoma", id: "oklahoma"},
        {text: "Oregon", id: "oregon"},
        {text: "Pennsylvania", id: "pennsylvania"},
        {text: "Rhode Island", id: "rhode-island"},
        {text: "South Carolina", id: "south-carolina"},
        {text: "South Dakota", id: "south-dakota"},
        {text: "Tennessee", id: "tennessee"},
        {text: "Texas", id: "texas"},
        {text: "Utah", id: "utah"},
        {text: "Vermont", id: "vermont"},
        {text: "Virginia", id: "virginia"},
        {text: "Washington", id: "washington"},
        {text: "West Virginia", id: "west-virginia"},
        {text: "Wisconsin", id: "wisconsin"},
        {text: "Wyoming", id: "wyoming"},
    ];
</script>

<DataSelect
    items={ITEMS.map((item, index) => {
        return {
            ...item,
            palette:
                index % 5 === 0
                    ? "negative"
                    : item.palette,
        };
    })}
    logic_name="dataselect-item-palette"
    logic_state="alabama"
    placeholder="Select a US State..."
/>
```
