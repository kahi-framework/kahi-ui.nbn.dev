type Function<Arguments extends any[], Results> = (...args: Arguments) => Results;

export function memoize<Arguments extends any[], Results>(
    func: Function<Arguments, Results>
): [Function<Arguments, Results>, (...args: Arguments) => void] {
    let cache: Map<string, Results> = new Map();

    return [
        (...args) => {
            const identifier = args.join(",");

            if (!cache.has(identifier)) cache.set(identifier, func(...args));
            return cache.get(identifier) as Results;
        },

        (...args) => {
            const identifier = args.join(",");

            cache.delete(identifier);
        },
    ];
}

export function noop(...args: any[]): void {}
