import type {Stats} from "fs";
import {isAbsolute, join, relative} from "path";

import {dev} from "$app/env";
import CheapWatch from "cheap-watch";

import type {IPageRender} from "@kahi-docs/markdown";
import {read_page} from "@kahi-docs/markdown";
import {memoize, normalize_pathname} from "@kahi-docs/shared";

import {PATH_CONTENT} from "./constants";

const [_read_page, _invalidate_render] = memoize(read_page);

export function read_content(file_path: string): Promise<IPageRender> {
    let identifier = file_path;

    if (isAbsolute(file_path)) identifier = relative(PATH_CONTENT, file_path);
    else file_path = join(PATH_CONTENT, file_path);

    return _read_page(file_path, {
        identifier: normalize_pathname(identifier.replace(".md", "")),
    });
}

if (dev) {
    const watcher = new CheapWatch({dir: PATH_CONTENT});

    watcher.init();
    watcher.on("+", ({path, stats}: {path: string; stats: Stats}) => {
        if (!path.endsWith(".md") || !stats.isFile) return;

        _invalidate_render(join(PATH_CONTENT, path));
    });
}
