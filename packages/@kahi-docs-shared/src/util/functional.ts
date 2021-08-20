type Function<T extends any[], R> = (...args: T) => R;

export function memoize<T extends any[], R>(func: Function<T, R>): Function<T, R> {
    let cache: Map<string, R> = new Map();

    return (...args) => {
        const identifier = args.join(",");
        if (!cache.has(identifier)) cache.set(identifier, func(...args));

        return cache.get(identifier) as R;
    };
}

export function noop(...args: any[]): void {}
