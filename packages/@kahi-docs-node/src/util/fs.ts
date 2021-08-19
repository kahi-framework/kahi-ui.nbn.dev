import * as fs from "fs";

import {exec_git_timestamp} from "./git";

// HACK: Couldn't import `constants` from the module...
const {constants, promises} = fs;
const {access, lstat} = promises;

export async function can_read(path: string): Promise<boolean> {
    try {
        await access(path, constants.R_OK);

        return true;
    } catch (err) {
        return false;
    }
}

export async function read_timestamps(
    file_path: string
): Promise<{birthtime: number; mtime: number}> {
    try {
        // TODO: It probably makes sense to have these fail individually, and
        // fallback to the file stats individually
        const [birthtime, mtime] = await Promise.all([
            exec_git_timestamp(file_path, true),
            exec_git_timestamp(file_path, false),
        ]);

        return {
            birthtime,
            mtime,
        };
    } catch (err) {
        const {birthtimeMs, mtimeMs} = await lstat(file_path);

        return {
            birthtime: birthtimeMs,
            mtime: mtimeMs,
        };
    }
}
