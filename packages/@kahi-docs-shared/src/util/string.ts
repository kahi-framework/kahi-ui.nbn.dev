const AFFIRMATIVE_VALUES = new Set(["yes", "y", "true"]);

const EXPRESSION_SUBSTITUTE = /%s/;

export function is_affirmative(text: string): boolean {
    return AFFIRMATIVE_VALUES.has(text.toLowerCase());
}

export function hash_string(str: string): string {
    // SOURCE: https://github.com/darkskyapp/string-hash/blob/master/index.js

    str = str.replace(/\r/g, "");
    let hash = 5381;
    let i = str.length;

    while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return (hash >>> 0).toString(36);
}

export function substitute_value(text: string, value: any): string {
    return text.replace(EXPRESSION_SUBSTITUTE, value.toString());
}

export function split_list(text: string): string[] {
    return text.split(",").map((value) => value.trim());
}
