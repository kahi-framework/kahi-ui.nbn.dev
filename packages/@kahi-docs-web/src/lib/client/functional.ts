export function debounce<F extends (...args: any[]) => any | Promise<any>>(
    func: F,
    duration: number = 0
): (...args: Parameters<F>) => void | Promise<void> {
    let identifier: number | undefined;

    return (...args: any[]) => {
        if (identifier !== undefined) {
            clearTimeout(identifier);
            identifier = undefined;
        }

        // @ts-ignore - HACK: NodeJS doesn't follow spec
        identifier = setTimeout(() => func(...args), duration);
    };
}
