import {readFileSync} from "fs";

import {define_application} from "@kahi-docs/config";

const PACKAGE_FRAMEWORK = JSON.parse(
    readFileSync("./node_modules/@kahi-ui/framework/package.json").toString()
) as {version: string};

export default define_application({
    application: {
        description: "Straight-forward Svelte UI for the Web",
        title: "Kahi UI",
    },

    edit: {
        enabled: true,
        url: "https://github.com/novacbn/kahi-ui/blob/main/docs/%s",
    },

    paths: {
        // TODO: When blog posts are added, change to work with
        changelog: "./node_modules/@kahi-ui/framework/CHANGELOG.md",
    },

    urls: {
        // TODO: When "Kahi Docs" is converted into a documentation
        // platform, remove this setting
        base: import.meta.env.BASE_URL,
    },

    metadata: {
        version: PACKAGE_FRAMEWORK.version,
    },
});
