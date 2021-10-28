import type {ISnippet} from "@kahi-docs/markdown";

import {make_context_store} from "../util/stores";

export const CONTEXT_SNIPPET = Symbol.for("kahi-docs-snippet");

export const snippet = make_context_store<ISnippet>(CONTEXT_SNIPPET);
