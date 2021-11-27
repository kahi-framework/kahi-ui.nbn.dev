import {compressedstorage} from "./storage";

export const session = compressedstorage<string>("playground.session", "");
