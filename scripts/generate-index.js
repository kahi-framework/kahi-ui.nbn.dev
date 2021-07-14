import fs from "fs";
const {mkdir, writeFile} = fs.promises;

import fetch from "node-fetch";
import {stringify} from "@iarna/toml";

// TODO: Should be updated to index blog posts and updates (changelog) entries. And
// should ideally rank relevant content higher. E.g. when browsing documentation, it
// blog / updates should either not be present or futher down the list.
//
// However routes like the landing page should contain all entries at equal rank. Have to
// investigate if Stork Search allows this to even be a thing

async function fetch_index() {
    const response = await fetch("http://localhost:3000/api/v1/meta/stork.json");
    const index = (await response.json()).data;

    return stringify(index);
}

await mkdir("./build/stork", {recursive: true});

const index = await fetch_index();
writeFile("./build/stork/index.toml", index);
