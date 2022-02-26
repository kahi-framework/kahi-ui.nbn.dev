# Calculator

Sample code for a calculator.

```svelte {title="Calculator Preview" mode="repl"}
<script>
    import {
        Button,
        Grid,
        TextInput,
        Stack,
        keybind,
    } from "@kahi-ui/framework";

    const ADD = ["+", (a, b) => a + b];
    const SUBTRACT = ["-", (a, b) => a - b];

    const MULTIPLY = ["*", (a, b) => a * b];
    const DIVIDE = ["/", (a, b) => a / b];

    let operations = [0];

    function on_bind_entry(event, number) {
        event.preventDefault();
        if (event.detail.active) on_entry(number);
    }

    function on_calculate() {
        let buffer = [...operations];

        let next_value, previous_value, operation;
        while (buffer.length > 2) {
            [
                previous_value,
                operation,
                next_value,
                ...buffer
            ] = buffer;

            buffer = [
                Math.trunc(
                    operation[1](
                        previous_value,
                        next_value
                    )
                ),
                ...buffer,
            ];
        }

        operations = buffer;
    }

    function on_clear() {
        operations = [0];
    }

    function on_delete() {
        const current_index = operations.length - 1;
        const current_value =
            operations[current_index];

        if (current_value instanceof Array) {
            operations = operations.slice(0, -1);
        } else {
            operations = [...operations];
            operations[current_index] = parseInt(
                current_value
                    .toString()
                    .slice(0, -1) || "0"
            );
        }
    }

    function on_entry(entry) {
        const current_index = operations.length - 1;

        if (operations[current_index] === 0) {
            operations = [...operations];
            operations[current_index] = entry;
        } else {
            const current_value =
                operations[current_index];

            if (current_value instanceof Array)
                operations = [...operations, entry];
            else {
                operations = [...operations];
                operations[current_index] = parseInt(
                    `${current_value}${entry}`
                );
            }
        }
    }

    function on_operation(operation) {
        const current_index = operations.length - 1;
        const current_value =
            operations[current_index];

        if (current_value instanceof Array) {
            operations = [...operations];
            operations[current_index] = operation;
        } else {
            operations = [...operations, operation];
        }
    }

    $: _can_calculate = operations.length > 2;

    $: _display = operations
        .map((operation) =>
            operation instanceof Array
                ? operation[0]
                : operation
        )
        .join(" ");
</script>

<svelte:window
    use:keybind={{
        binds: "+",
        on_bind: (event) => {
            event.preventDefault();
            if (event.detail.active) on_operation(ADD);
        },
    }}
    use:keybind={{
        binds: "-",
        on_bind: (event) => {
            event.preventDefault();
            if (event.detail.active)
                on_operation(SUBTRACT);
        },
    }}
    use:keybind={{
        binds: "*",
        on_bind: (event) => {
            event.preventDefault();
            if (event.detail.active)
                on_operation(MULTIPLY);
        },
    }}
    use:keybind={{
        binds: "/",
        on_bind: (event) => {
            event.preventDefault();
            if (event.detail.active)
                on_operation(DIVIDE);
        },
    }}
    use:keybind={{
        binds: "0",
        on_bind: (event) => on_bind_entry(event, 0),
    }}
    use:keybind={{
        binds: "1",
        on_bind: (event) => on_bind_entry(event, 1),
    }}
    use:keybind={{
        binds: "2",
        on_bind: (event) => on_bind_entry(event, 2),
    }}
    use:keybind={{
        binds: "3",
        on_bind: (event) => on_bind_entry(event, 3),
    }}
    use:keybind={{
        binds: "4",
        on_bind: (event) => on_bind_entry(event, 4),
    }}
    use:keybind={{
        binds: "5",
        on_bind: (event) => on_bind_entry(event, 5),
    }}
    use:keybind={{
        binds: "6",
        on_bind: (event) => on_bind_entry(event, 6),
    }}
    use:keybind={{
        binds: "7",
        on_bind: (event) => on_bind_entry(event, 7),
    }}
    use:keybind={{
        binds: "8",
        on_bind: (event) => on_bind_entry(event, 8),
    }}
    use:keybind={{
        binds: "9",
        on_bind: (event) => on_bind_entry(event, 9),
    }}
    use:keybind={{
        binds: ["backspace", "delete"],
        on_bind: (event) => {
            event.preventDefault();
            if (event.detail.active) on_delete();
        },
    }}
    use:keybind={{
        binds: ["c"],
        on_bind: (event) => {
            event.preventDefault();
            if (event.detail.active) on_clear();
        },
    }}
    use:keybind={{
        binds: ["enter", "="],
        on_bind: (event) => {
            event.preventDefault();
            if (event.detail.active && _can_calculate)
                on_calculate();
        },
    }}
/>

<Stack.Container
    spacing="small"
    height="viewport-100"
    max_height="100"
>
    <TextInput
        value={_display}
        radius="none"
        sizing="huge"
        readonly
    />

    <Stack.Item variation="stretch">
        <Grid.Container
            points="4"
            spacing="small"
            padding="small"
        >
            <Button
                palette="inverse"
                sizing="large"
                on:click={() => on_operation(ADD)}
            >
                &plus;
            </Button>
            <Button
                palette="inverse"
                sizing="large"
                on:click={() => on_operation(SUBTRACT)}
            >
                &minus;
            </Button>
            <Button
                palette="inverse"
                sizing="large"
                on:click={() => on_operation(MULTIPLY)}
            >
                &times;
            </Button>
            <Button
                palette="inverse"
                sizing="large"
                on:click={() => on_operation(DIVIDE)}
            >
                &divide;
            </Button>

            <Button
                sizing="large"
                shape="pill"
                on:click={() => on_entry(7)}
            >
                7
            </Button>
            <Button
                sizing="large"
                shape="pill"
                on:click={() => on_entry(8)}
            >
                8
            </Button>
            <Button
                sizing="large"
                shape="pill"
                on:click={() => on_entry(9)}
            >
                9
            </Button>
            <Grid.Item span_y="2">
                <Button
                    sizing="large"
                    palette="negative"
                    on:click={() => on_clear()}
                >
                    C
                </Button>
            </Grid.Item>

            <Button
                sizing="large"
                shape="pill"
                on:click={() => on_entry(4)}
            >
                4
            </Button>
            <Button
                sizing="large"
                shape="pill"
                on:click={() => on_entry(5)}
            >
                5
            </Button>
            <Button
                sizing="large"
                shape="pill"
                on:click={() => on_entry(6)}
            >
                6
            </Button>

            <Button
                sizing="large"
                shape="pill"
                on:click={() => on_entry(1)}
            >
                1
            </Button>
            <Button
                sizing="large"
                shape="pill"
                on:click={() => on_entry(2)}
            >
                2
            </Button>
            <Button
                sizing="large"
                shape="pill"
                on:click={() => on_entry(3)}
            >
                3
            </Button>
            <Grid.Item span_y="2">
                <Button
                    disabled={!_can_calculate}
                    sizing="large"
                    palette="accent"
                    on:click={() => on_calculate()}
                >
                    &equals;
                </Button>
            </Grid.Item>

            <Grid.Item span_x="2">
                <Button
                    sizing="large"
                    shape="pill"
                    on:click={() => on_entry(0)}
                >
                    0
                </Button>
            </Grid.Item>

            <Button
                palette="negative"
                sizing="large"
                on:click={() => on_delete()}
            >
                DEL
            </Button>
        </Grid.Container>
    </Stack.Item>
</Stack.Container>
```
