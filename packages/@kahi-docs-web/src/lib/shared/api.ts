import type {INavigationMenu} from "@kahi-docs/config";
import type {IDocumentationRender} from "@kahi-docs/markdown";
import type {ISearchIndex} from "@kahi-docs/shared";

export interface IRouteError {
    code: string;

    message: string;
}

export interface IRouteSuccess {
    // TODO: `JSONValue` doesn't like my purely JSON data?
    data: any;
}

export interface IContentGet extends IRouteSuccess {
    data: IDocumentationRender;
}

export interface INavigationGet extends IRouteSuccess {
    data: INavigationMenu[];
}

export interface ISearchGet extends IRouteSuccess {
    data: ISearchIndex;
}
