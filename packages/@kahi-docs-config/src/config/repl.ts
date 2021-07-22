import type {IPipelineContext, IPipelineImports} from "@novacbn/svelte-pipeline";

export interface IREPLConfig {
    context: IPipelineContext;

    imports: IPipelineImports;
}

export function define_repl(config: Partial<IREPLConfig> = {}): IREPLConfig {
    const {context = {}, imports = {}} = config;

    return {
        context,
        imports,
    };
}
