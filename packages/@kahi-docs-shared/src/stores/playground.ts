import {sessioncompressedstorage} from "./storage";

export const session = sessioncompressedstorage<string>("playground.session", "");
