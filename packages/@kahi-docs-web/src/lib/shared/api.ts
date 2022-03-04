import type {INavigationMenu} from "@kahi-docs/config";
import type {IPageRender} from "@kahi-docs/markdown";

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
    // HACK: well uh, we can't bail out of build errors when a route fetches
    // during preload... So we gotta just return this instead
    data: INavigationMenu[] | null;
}
