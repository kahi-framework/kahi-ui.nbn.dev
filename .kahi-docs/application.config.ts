import {readFileSync} from "fs";

import {define_application} from "@kahi-docs/config";

const PACKAGE_FRAMEWORK = JSON.parse(
    readFileSync("./node_modules/@kahi-ui/framework/package.json").toString()
) as {version: string};

export default define_application({
    application: {
        description: "Straight-forward Svelte UI for the Web",
        sub_href: `https://github.com/novacbn/kahi-ui/releases/${PACKAGE_FRAMEWORK.version}`,
        sub_title: `v${PACKAGE_FRAMEWORK.version}`,
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
        // NOTE: This needs to be kept inline with any changes to `svelte.config.js`
        base: "/",
    },

    metadata: {
        version: PACKAGE_FRAMEWORK.version,
    },
});
