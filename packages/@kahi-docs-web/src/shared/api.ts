import type {INavigationMenu} from "@kahi-docs/config";
import type {IDocumentationRender, ISnippet} from "@kahi-docs/markdown";

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
