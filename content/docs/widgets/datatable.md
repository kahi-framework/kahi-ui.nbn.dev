# DataTable

> **WARNING**: While this Widget is available in Javascript-disabled Browsers, it can result in [Cumulative Layout Shift](https://web.dev/cls/).

`DataTable` is a subset of [`Table`](../display/table.md) Widget which automatically handles formatting tabular data into HTML.

```svelte {title="DataTable Preview" mode="repl"}
<script>
    import {DataTable} from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
            sorting: true,
        },

        {
            text: "Last Name",
            key: "last_name",
            sorting: true,
        },

        {
            text: "Occupation",
            key: "occupation",
            sorting: true,
        },

        {
            text: "Species",
            key: "species",
            sorting: true,
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<DataTable
    columns={COLUMNS}
    rows={ROWS}
    palette="accent"
    paginate
/>
```

## Pagination

Via the `paginate` property, you can enable pagination of the input rows.

```svelte {title="DataTable Pagination" mode="repl"}
<script>
    import {DataTable} from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<DataTable
    columns={COLUMNS}
    rows={ROWS}
    palette="accent"
    paginate
/>
```

You can control the current page via the `page` property.

```svelte {title="DataTable Pagination Page" mode="repl"}
<script>
    import {DataTable} from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<DataTable
    columns={COLUMNS}
    rows={ROWS}
    page={3}
    palette="accent"
    paginate
/>
```

Finally, you can also set up how many rows appear per page via the `paging` property.

```svelte {title="DataTable Pagination Paging" mode="repl"}
<script>
    import {DataTable} from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<DataTable
    columns={COLUMNS}
    rows={ROWS}
    paging={8}
    palette="accent"
    paginate
/>
```

## Searching

`DataTable` includes a bottom left search box which allows users to filter rows based on the input. You can customize the default via the `searching` property.

```svelte {title="DataTable Searching" mode="repl"}
<script>
    import {DataTable} from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<DataTable
    columns={COLUMNS}
    rows={ROWS}
    searching="Bounty Hunter"
    palette="accent"
/>
```

By default, `DataTable` fuzzy filters each row's members converted into lower case strings. You can customize this behavior via the `searching_algorithm` property.

```svelte {title="DataTable Searching Algorithm" mode="repl"}
<script>
    import {DataTable} from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];

    let searching = "";

    function searching_algorithm(row) {
        // Instead of fuzzy searching the strings, we're only
        // looking if the first name BEGINS with our search filter

        return row.first_name.startsWith(searching);
    }
</script>

<DataTable
    columns={COLUMNS}
    rows={ROWS}
    palette="accent"
    {searching_algorithm}
    bind:searching
/>
```

## Sorting

By passing in the `sorting` member in your `columns` property metadata, you can enable sorting on individual columns.

```svelte {title="DataTable Sorting" mode="repl"}
<script>
    import {DataTable} from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
            sorting: true,
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<DataTable
    columns={COLUMNS}
    rows={ROWS}
    palette="accent"
/>
```

By passing a column key to the `sorting` property, you can set which is the column actively being sorted by. Then you can set the `sorting_mode` property to choose either `ascending` or `decending` sort.

```svelte {title="DataTable Sorting Mode" mode="repl"}
<script>
    import {DataTable} from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
            sorting: true,
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<DataTable
    columns={COLUMNS}
    rows={ROWS}
    sorting="occupation"
    sorting_mode="decending"
    palette="accent"
/>
```

By default, `DataTable` alphabetizes each row's members converted into lower case strings. You can customize this behavior on a per column-basis via the `sorting_algorithm` member in the column metadata.

```svelte {title="DataTable Sorting Algorithm" mode="repl"}
<script>
    import {DataTable} from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
            sorting: true,
            sorting_algorithm: (a, b) => {
                // Instead of alphabetizing, we're sorting by length of
                // the `occupation` strings

                return a.length >= b.length;
            },
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<DataTable
    columns={COLUMNS}
    rows={ROWS}
    palette="accent"
/>
```

## Slot

...

```svelte {title="DataTable Slot" mode="repl"}

```

...

```svelte {title="DataTable Slot Paging" mode="repl"}

```

...

```svelte {title="DataTable Slot Sorting" mode="repl"}

```

## Variation

Just like the [`Table`](../display/table.md) Component, you can customize the `variation` property.

```svelte {title="DataTable Variation" mode="repl"}
<script>
    import {
        DataTable,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            paginate
        />
    </div>

    <div>
        <Text is="strong">BORDERS</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            variation="borders"
            paginate
        />
    </div>

    <div>
        <Text is="strong">STRIPES</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            variation="stripes"
            paginate
        />
    </div>

    <div>
        <Text is="strong">BORDERS+STRIPES</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            variation={["borders", "stripes"]}
            paginate
        />
    </div>
</Stack>
```

## Palette

You can change the color palette of all the interactables via the `palette` property.

```svelte {title="DataTable Palette" mode="repl"}
<script>
    import {
        DataTable,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">NEUTRAL</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            paginate
        />
    </div>

    <div>
        <Text is="strong">ACCENT</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            palette="accent"
            paginate
        />
    </div>

    <div>
        <Text is="strong">DARK</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            palette="dark"
            paginate
        />
    </div>

    <div>
        <Text is="strong">LIGHT</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            palette="light"
            paginate
        />
    </div>

    <div>
        <Text is="strong">ALERT</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            palette="alert"
            paginate
        />
    </div>

    <div>
        <Text is="strong">AFFIRMATIVE</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            palette="affirmative"
            paginate
        />
    </div>

    <div>
        <Text is="strong">NEGATIVE</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            palette="negative"
            paginate
        />
    </div>
</Stack>
```

## Sizing

You can alter the overall spacing / sizing look and feel via the `sizing` property.

```svelte {title="DataTable Sizing" mode="repl"}
<script>
    import {
        DataTable,
        Stack,
        Text,
    } from "@kahi-ui/framework";

    const COLUMNS = [
        {
            text: "First Name",
            key: "first_name",
        },

        {
            text: "Last Name",
            key: "last_name",
        },

        {
            text: "Occupation",
            key: "occupation",
        },

        {
            text: "Species",
            key: "species",
        },
    ];

    const ROWS = [
        {
            first_name: "Ahsoka",
            last_name: "Tano",
            occupation: "Unknown",
            species: "Togruta",
        },

        {
            first_name: "Cad",
            last_name: "Bane",
            occupation: "Bounty Hunter",
            species: "Duros",
        },

        {
            first_name: "Cobb",
            last_name: "Vanth",
            occupation: "Marshal",
            species: "Human",
        },

        {
            first_name: "Din",
            last_name: "Djarin",
            occupation: "Bounty Hunter",
            species: "Human",
        },

        {
            first_name: "Fennec",
            last_name: "Shand",
            occupation: "Assassin",
            species: "Human",
        },

        {
            first_name: "Gilad",
            last_name: "Pellaeon",
            occupation: "Grand Admiral",
            species: "Human",
        },

        {
            first_name: "Jagged",
            last_name: "Fel",
            occupation: "Emperor",
            species: "Human",
        },

        {
            first_name: "Max",
            last_name: "Rebo",
            occupation: "Musician",
            species: "Ortolan",
        },

        {
            first_name: "Mok",
            last_name: "Shaiz",
            occupation: "Mayor",
            species: "Ithorian",
        },

        {
            first_name: "Natasi",
            last_name: "Daala",
            occupation: "Chief of State",
            species: "Human",
        },

        {
            first_name: "Quinlan",
            last_name: "Vos",
            occupation: "Jedi Master",
            species: "Kiffar",
        },

        {
            first_name: "Tila",
            last_name: "Mong",
            occupation: "Baron Do Sage",
            species: "Kel Dor",
        },
    ];
</script>

<Stack spacing="medium">
    <div>
        <Text is="strong">DEFAULT</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            paginate
        />
    </div>

    <div>
        <Text is="strong">TINY</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            sizing="tiny"
            paginate
        />
    </div>

    <div>
        <Text is="strong">SMALL</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            sizing="small"
            paginate
        />
    </div>

    <div>
        <Text is="strong">MEDIUM</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            sizing="medium"
            paginate
        />
    </div>

    <div>
        <Text is="strong">LARGE</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            sizing="large"
            paginate
        />
    </div>

    <div>
        <Text is="strong">HUGE</Text>

        <DataTable
            columns={COLUMNS}
            rows={ROWS}
            sizing="huge"
            paginate
        />
    </div>
</Stack>
```
