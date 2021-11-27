import type {IPageRender} from "@kahi-docs/markdown";

import {make_context_store} from "../util/stores";

export const CONTEXT_CONTENT = Symbol.for("kahi-docs-content");

export const content = make_context_store<IPageRender>(CONTEXT_CONTENT);
