# Contributing to `kahi-ui.nbn.dev`

> **NOTE**: This Application is built with [SvelteKit](https://kit.svelte.dev), please familiarize yourself with it before contributing to the non-Markdown (`.md`) files.

> **IMPORTANT**: Before creating Pull Requests, search both the existing [issues](https://github.com/novacbn/kahi-ui/issues) and [Pull Requests](https://github.com/kahi-framework/kahi-ui.nbn.dev/pulls). Otherwise your contributions might be declined.

> **IMPORTANT**: Before creating Pull Requests, it's recommended to [file a new issue](https://github.com/novacbn/kahi-ui/issues/new/choose) to discuss your changes. Especially if it's something bigger than a quick fix change.

## Prerequisites

-   Node.js — `>= 16.0.0`

## Installation

This is a monorepo that used [`pnpm`](https://pnpm.js.org/en/) to handle workspacing. Start by installing `pnpm` via `npm` globally:

```bash
npm install pnpm -g
```

Then clone the repository:

```bash
git clone https://github.com/kahi-framework/kahi-ui.nbn.dev.git
cd kahi-ui.nbn.dev
```

Finally install the dependencies of all the subpackages via `pnpm`:

```bash
pnpm install
```

## Development

> **NOTE**: Currently the development server does not support hot-reload of Markdown (`.md`) files. You will need to either reload or switch pages to see any changes.

To start working with the Application, start the `dev:application` script:

```bash
npm run dev:application
```

Which should open a webserver at [`localhost:3000`](http://localhost:3000), which will allow you to see your changes hot-reloaded.

## Building

Whenever you're ready to deploy the Application, simply use the `build:application` script:

```bash
npm run build:application
```

It should take a few minutes, and if successfully built, you should get the output in `packages/@kahi-docs-web/build/`. You can test out the build with the `preview:application` script:

```bash
npm run preview:application
```

## Submitting Changes

After you finish making / testing out your changes, [file a new Pull Request](https://github.com/kahi-framework/kahi-ui.nbn.dev/compare). Check the following checklist of stuff you need:

-   Include a properly formatted changelog in the body of your PR.

Once your PR is passing tests, the CI will post a comment with a preview link of your build.

## Code Formatting

Both projects are using [Prettier](https://prettier.io/) for formatting code, which you can [`see the .prettierrc here`](./.prettierrc). It is recommended to configure your IDE to run formatting on file save.

The Markdown (`.md`) content files have a [`slightly different .prettierrc here`](./content/.prettierrc) so that code snippets are more readable in the Application.

## Code Style

When editing the codebase keep these guidelines in mind:

-   Identation: 4 Spaces
-   Constants: `UPPER_SNAKE_CASE`
-   Classes: `PascalCase`
-   Class Members: `snake_case`
-   Functions: `snake_case`
-   HTML Attributes / Elements: `kebab-case`
-   Functions: `snake_case`
-   Svelte Actions: `snake_case`
-   Svelte Components: `PascalCase`
-   Svelte Component Properties: `snake_case`
-   Svelte Stores: `flatcase`
