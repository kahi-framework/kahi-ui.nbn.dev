import type {IApplicationConfig} from "@kahi-docs/config";
import type {IDocumentationRender} from "@kahi-docs/markdown";

export interface IRouteError {
    code: string;

    message: string;
}

export interface IRouteSuccess {
    // TODO: `JSONValue` doesn't like my purely JSON data?
    data: any;
}

export interface IApplicationConfigGet extends IRouteSuccess {
    data: IApplicationConfig;
}

export interface IDocumentationGet extends IRouteSuccess {
    data: IDocumentationRender;
}

export interface INavigationTitlesGet extends IRouteSuccess {
    data: Record<string, string | undefined>;
}
