# Custom Properties

> **WARNING**: All CSS Custom Properties are considered unstable and subject to change before `v1.0`.

In [supporting Components](../interactables/button#api-reference) and for the global theme, you can use [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to alter the look and feel of the Framework.

## Via Style

You can customize the Custom Properties via inline styles as shown below.

```svelte {title="Custom Properties Style" mode="repl"}
<script>
    import {Button} from "@kahi-ui/framework";
</script>

<Button style="--button-padding-y:5;">
    I was customized via style!
</Button>
```

## Via Classes

You can also use CSS classes to customize them as well.

```svelte {title="Custom Properties CSS" mode="repl"}
<script>
    import {Button} from "@kahi-ui/framework";
</script>

<Button class="custom-properties-class">
    I was customized via a class!
</Button>

<style>
    :global(.custom-properties-class) {
        --button-padding-y: 5;
    }
</style>
```

## Via Global Stylesheet

> **IMPORTANT**: Make sure to declare your customized Custom Properties after you have loaded the Framework + Theme stylesheets. Otherwise they will be ignored.

You can finally use global stylesheets to keep all your customizations in one spot.

<!-- prettier-ignore -->
```svelte {title="Custom Properties Global Stylesheet"}
<html>
    <head>
        <link
            rel="stylesheet"
            href="/path/to/kahi-ui.framework.css"
        />

        <link
            rel="stylesheet"
            href="/path/to/kahi-ui.theme.default.css"
        />

        <style>
            :root {
                --button-padding-y: 5;
            }
        </style>
    </head>

    <body>
        ...
    </body>
</html>
```
