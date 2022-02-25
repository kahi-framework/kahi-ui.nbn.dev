+++
[[properties.Article]]
name="is"
description="Alters the HTML tag rendered to the DOM."
default="article"
types=["article", "div", "main"]

[[slots.Article]]
name="default"
description="Default unnamed slot."
types=["{}"]
+++

# Article

> **NOTE**: Introduced feature in `v0.6.0`.

`Article` is typically used to wrap Markdown and other plaintext format outputs to support styling semantic elements as their Kahi UI Component counterparts, with standardized spacing.

## Imports

```svelte {title="Article Imports"}
<script>
    import {Article} from "@kahi-ui/framework";
</script>
```

## Anchor

Via the `<a>` HTML tag, you can render links with hover effects and emphasis coloring.

```svelte {title="Article Anchor" mode="repl"}
<script>
    import {Article} from "@kahi-ui/framework";
</script>

<Article>
    <a href="https://google.com">Goto google.com</a>

    <p>
        This has nested <a href="#">anchor tags</a>!
    </p>

    <blockquote>
        <p>
            This has nested <a href="#">anchor tags</a
            >!
        </p>
    </blockquote>

    <ul>
        <li>
            This has nested <a href="#">anchor tags</a
            >!
        </li>
    </ul>
</Article>
```

## Blockquote

Via the `<blockquote>` and `<cite>` HTML tags, you can present formatted quotes.

```svelte {title="Article Blockquote" mode="repl"}
<script>
    import {Article} from "@kahi-ui/framework";
</script>

<Article
    max_width="prose"
    margin_x="auto"
    margin_y="medium"
>
    <blockquote>
        <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris porta, urna vel
            tristique varius, ipsum erat auctor odio,
            id imperdiet mauris velit eget quam. Donec
            viverra urna eu ligula eleifend, sed
            molestie lectus convallis. Nullam gravida
            placerat ex, sodales porttitor nibh.
            Suspendisse vitae nisi euismod, venenatis
            dui eu, hendrerit risus. Maecenas at
            hendrerit odio, at dictum nulla. Morbi
            tristique, augue vel blandit bibendum,
            mauris nibh finibus justo, ut mollis magna
            neque in lectus. Sed dignissim, enim sit
            amet lobortis tincidunt, nibh risus
            elementum urna, vel tincidunt nisi elit vel
            tortor. Curabitur iaculis nulla nec odio
            efficitur, sit amet auctor odio mattis.
            Aenean quam arcu, feugiat non turpis eget,
            aliquet vestibulum lacus.
        </p>

        <p>
            Praesent lacinia elit et risus molestie
            pretium. Aenean semper mauris ut erat
            ornare lobortis. Integer sollicitudin
            bibendum rhoncus. Nulla nisi orci, maximus
            elementum libero ut, tristique scelerisque
            sapien. Aenean ultricies dui quis finibus
            pretium. Nunc tellus neque, cursus et
            egestas vel, elementum sit amet lacus.
            Aenean ac euismod nunc, id molestie eros.
        </p>

        <cite>— Lorem Ipsum</cite>
    </blockquote>
</Article>
```

## Code

Via the `<code>` HTML tag or `<pre><code>` HTML tag pair, you can wrap chunks of code to be smaller and given a background.

<!-- prettier-ignore -->
```svelte {title="Article Code" mode="repl"}
<script>
    import {Article} from "@kahi-ui/framework";
</script>


<Article>
    <code>import * as Kahi from "@kahi-ui/framework";</code>

    <br />
    <br />

    <pre>import math from "a-math-library";

const result = math.add(1, 1);
console.log("Our value is:", result);</pre>

    <code>import * as Kahi from "@kahi-ui/framework";</code>

            <p>
            This has nested <code>code tags</code>!
        </p>

        <blockquote>
            <p>
                This has nested <code>code tags</code>!
            </p>
        </blockquote>

        <ul>
            <li>
                This has nested <code>code tags</code>!
            </li>
        </ul>
</Article>
```

## Divider

Via the `<hr>` HTML tag, you can break sections of content with a horizontal line.

```svelte {title="Article Divider" mode="repl"}
<script>
    import {Article} from "@kahi-ui/framework";
</script>

<Article>
    <hr />
</Article>
```

## Embedded

> **TODO**: implementation

...

## Heading

Via the `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>` HTML tag, you can wrap text to have header sizing.

```svelte {title="Article Heading" mode="repl"}
<script>
    import {Article} from "@kahi-ui/framework";
</script>

<Article>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</Article>
```

## List

Via the `<ol>`, `<li>`, and `<ul>` HTML tags, you can create formatted lists.

```svelte {title="Article List" mode="repl"}
<script>
    import {Article} from "@kahi-ui/framework";
</script>

<Article>
    <ol>
        <li>List Item #1</li>
        <li>List Item #2</li>
        <li>List Item #3</li>
    </ol>

    <ul>
        <li>List Item #1</li>
        <li>List Item #2</li>
        <li>List Item #3</li>
    </ul>
</Article>
```

## Paragraph

Via the `<p>` HTML tag, you can wrap paragraphs of text with bottom margin for formatting.

```svelte {title="Article Paragraph" mode="repl"}
<script>
    import {Article} from "@kahi-ui/framework";
</script>

<Article>
    <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Mauris porta, urna vel
        tristique varius, ipsum erat auctor odio, id
        imperdiet mauris velit eget quam. Donec viverra
        urna eu ligula eleifend, sed molestie lectus
        convallis. Nullam gravida placerat ex, sodales
        porttitor nibh. Suspendisse vitae nisi euismod,
        venenatis dui eu, hendrerit risus. Maecenas at
        hendrerit odio, at dictum nulla. Morbi
        tristique, augue vel blandit bibendum, mauris
        nibh finibus justo, ut mollis magna neque in
        lectus. Sed dignissim, enim sit amet lobortis
        tincidunt, nibh risus elementum urna, vel
        tincidunt nisi elit vel tortor. Curabitur
        iaculis nulla nec odio efficitur, sit amet
        auctor odio mattis. Aenean quam arcu, feugiat
        non turpis eget, aliquet vestibulum lacus.
    </p>

    <p>
        Praesent lacinia elit et risus molestie
        pretium. Aenean semper mauris ut erat ornare
        lobortis. Integer sollicitudin bibendum
        rhoncus. Nulla nisi orci, maximus elementum
        libero ut, tristique scelerisque sapien. Aenean
        ultricies dui quis finibus pretium. Nunc tellus
        neque, cursus et egestas vel, elementum sit
        amet lacus. Aenean ac euismod nunc, id molestie
        eros.
    </p>
</Article>
```

## Small

Via the `<small>` HTML tag, you can render text smaller than the current font size and have it blend more with the background.

```svelte {title="Article Small" mode="repl"}
<script>
    import {Article} from "@kahi-ui/framework";
</script>

<Article>
    <small>I am small text!</small>
</Article>
```

## Table

...

## Elements

You can change the HTML tag rendered to DOM via the `is` property.

```svelte {title="Article Elements" mode="repl"}
<script>
    import {
        Article,
        Stack,
        Text,
    } from "@kahi-ui/framework";
</script>

<Stack.Container spacing="medium">
    <Article is="article">
        <h1>ARTICLE</h1>
    </Article>

    <Article is="div">
        <h1>DIV</h1>
    </Article>

    <Article is="main">
        <h1>MAIN</h1>
    </Article>
</Stack.Container>
```
