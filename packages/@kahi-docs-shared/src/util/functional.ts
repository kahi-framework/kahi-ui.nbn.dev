type Function<Arguments extends any[], Results> = (...args: Arguments) => Results;

function get_argument_identifier(...args: any[]): string {
    return JSON.stringify(args);
}

export function memoize<Arguments extends any[], Results>(
    func: Function<Arguments, Results>
): [Function<Arguments, Results>, (...args: Arguments) => void] {
    let cache: Map<string, Results> = new Map();

    return [
        (...args) => {
            const identifier = get_argument_identifier(...args);

            if (!cache.has(identifier)) cache.set(identifier, func(...args));
            return cache.get(identifier) as Results;
        },

        (...args) => {
            const identifier = get_argument_identifier(...args);

            cache.delete(identifier);
        },
    ];
}

export function noop(...args: any[]): void {}
