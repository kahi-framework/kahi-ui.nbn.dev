import type {Stats} from "fs";
import {join} from "path";

import {dev} from "$app/env";
import CheapWatch from "cheap-watch";

import {read_documentation} from "@kahi-docs/markdown";
import {memoize} from "@kahi-docs/shared";
import {PATH_CONTENT} from "./constants";

export const [read_content, bust_render] = memoize(read_documentation);

if (dev) {
    const watcher = new CheapWatch({dir: PATH_CONTENT});

    watcher.init();
    watcher.on("+", ({path, stats}: {path: string; stats: Stats}) => {
        if (!path.endsWith(".md") || !stats.isFile) return;

        bust_render(join(PATH_CONTENT, path));
    });
}
