import {join} from "path";
import {mkdirSync, readFileSync, writeFileSync} from "fs";

import {load} from "cheerio";
import fg from "fast-glob";
import {stringify} from "@iarna/toml";

import {read_documentation} from "@kahi-docs/markdown";

import APPLICATION_CONFIG from "../.kahi-docs/application.config";

// TODO: This needs to be updated to support blog posts when available

// TODO: Preferably we wouldn't need Cheerio, but Stork Search doesn't yet
// have a method of filtering out specific selectors yet

const PACKAGE_FRAMEWORK = JSON.parse(
    readFileSync("./node_modules/@kahi-ui/framework/package.json").toString()
);
const PATH_DOCUMENTATION = join(
    APPLICATION_CONFIG.paths.content,
    APPLICATION_CONFIG.paths.documentation
);

const GLOB_DOCUMENTATION = join(PATH_DOCUMENTATION, "**/*.md");

const TEMPLATE_INDEX_PATH = ({version}) => `./build/stork/index-${version}.toml`;

function StorkIndex(files) {
    return {
        input: {
            url_prefix: `${APPLICATION_CONFIG.urls.base}docs/`,
            files,
        },
    };
}

function StorkFile(render) {
    const $ = load(render.render);

    $("iframe, hr, pre").remove();

    return {
        contents: $.text(),
        filetype: "PlainText",
        url: render.properties.identifier,
        title: render.properties.title,
    };
}

(async () => {
    const files = fg.sync(GLOB_DOCUMENTATION);
    const renders = await Promise.all(files.map((file) => read_documentation(file)));

    const index = StorkIndex(renders.map((render) => StorkFile(render)));
    const build = stringify(index);

    const path = TEMPLATE_INDEX_PATH({version: PACKAGE_FRAMEWORK.version});

    mkdirSync("./build/stork", {recursive: true});
    writeFileSync(path, build);
})();
