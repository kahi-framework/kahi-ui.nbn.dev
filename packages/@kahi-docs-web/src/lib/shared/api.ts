import type {INavigationMenu} from "@kahi-docs/config";
import type {IPageRender, ISnippet} from "@kahi-docs/markdown";

import type {ISearchIndex} from "../shared/search";

export interface IRouteError {
    code: string;

    message: string;
}

export interface IRouteSuccess {
    // TODO: `JSONValue` doesn't like my purely JSON data?
    data: any;
}

export interface IContentGet extends IRouteSuccess {
    data: IPageRender;
}

export interface INavigationGet extends IRouteSuccess {
    data: INavigationMenu[];
}

export interface ISearchGet extends IRouteSuccess {
    data: ISearchIndex;
}

export interface ISnippetGet extends IRouteSuccess {
    data: ISnippet;
}
