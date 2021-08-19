import {exec} from "child_process";
import {promisify} from "util";

const exec_async = promisify(exec);

export async function exec_git_timestamp(file_path: string, is_initial: boolean): Promise<number> {
    const {stdout} = await exec_async(
        `git --no-pager log -1 --format=%ct ${is_initial ? "--diff-filter=A" : ""} ${file_path}`
    );

    const timestamp = parseInt(stdout.trim());
    if (isNaN(timestamp)) {
        throw new Error(
            `bad argument #0 to 'get_git_timestamp' (couldn't read timestamp for file '${file_path}')`
        );
    }

    // `git log` returns seconds, need to convert to milliseconds
    return timestamp * 1000;
}
