import type {SvelteComponent} from "svelte";

export interface IPartialsConfig {
    Footer?: typeof SvelteComponent;

    Landing?: typeof SvelteComponent;
}

export function define_partials(config: IPartialsConfig = {}): IPartialsConfig {
    const {Footer, Landing} = config;

    // TODO: Validation? Have to fix how subpackage dependencies are handled first

    return {
        Footer,
        Landing,
    };
}
