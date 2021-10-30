import {join} from "path";
import {cwd} from "process";

export const PATH_CWD = join(cwd(), "../../");

export const PATH_CONTENT = join(PATH_CWD, "content");

export const GLOB_CONTENT = join(PATH_CONTENT, "**/*.md");
