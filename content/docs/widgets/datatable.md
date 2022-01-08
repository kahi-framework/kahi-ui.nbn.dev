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
    palette="accent"
    page={3}
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
    palette="accent"
    paging={8}
    paginate
/>
```

## Searching

...

```svelte {title="DataTable Searching" mode="repl"}

```

## Sorting

...

```svelte {title="DataTable Sorting" mode="repl"}

```

...

```svelte {title="DataTable Sorting Mode" mode="repl"}

```

...

```svelte {title="DataTable Sorting Algorithm" mode="repl"}

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

...

```svelte {title="DataTable Variation" mode="repl"}

```

## Palette

...

```svelte {title="DataTable Palette" mode="repl"}

```

## Sizing

...

```svelte {title="DataTable Sizing" mode="repl"}

```
