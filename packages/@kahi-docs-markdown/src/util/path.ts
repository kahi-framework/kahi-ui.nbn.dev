import {basename, dirname, extname} from "path";

export function resolve_file_identifier(path: string): string {
    return basename(path, extname(path));
}

export function resolve_parent_identifier(path: string): string {
    return basename(dirname(path));
}
