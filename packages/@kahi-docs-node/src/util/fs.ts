import * as fs from "fs";

// HACK: Couldn't import `constants` from the module...

const {constants, promises} = fs;
const {access} = promises;

export async function can_read(path: string): Promise<boolean> {
    try {
        await access(path, constants.R_OK);

        return true;
    } catch (err) {
        return false;
    }
}
