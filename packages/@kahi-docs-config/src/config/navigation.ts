import type {INavigationBar, INavigationMenu} from "../types/navigation";

export interface INavigationConfig {
    application: INavigationBar[];

    documentation: INavigationMenu[];
}

export function define_navigation(config: Partial<INavigationConfig> = {}): INavigationConfig {
    // TODO: validation... JSON schema? recursive function?
    const {application = [], documentation = []} = config;

    return {
        application,
        documentation,
    };
}
