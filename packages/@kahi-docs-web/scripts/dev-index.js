import {execSync} from "child_process";
import {existsSync, readFileSync} from "fs";
import {arch, platform} from "os";

const PACKAGE_FRAMEWORK = JSON.parse(
    readFileSync("./node_modules/@kahi-ui/framework/package.json").toString()
);

const TEMPLATE_BIN_PATH = ({arch, platform, extension}) =>
    `./bin/stork.${platform}.${arch}${extension}`;

const TEMPLATE_COMMAND_BIN = ({bin, input}) => `${bin} test --input ${input}`;

const TEMPLATE_INPUT_PATH = ({version}) => `./static/assets/stork/kahi-ui_docs_v${version}.st`;

function get_platform_extension() {
    switch (platform()) {
        case "windows":
            return ".exe";

        default:
            return "";
    }
}

const binary_path = TEMPLATE_BIN_PATH({
    arch: arch(),
    platform: platform(),
    extension: get_platform_extension(),
});

if (!existsSync(binary_path)) {
    throw new Error("bad platform to 'dev-index' (platform is not currently supported)");
}

const input_path = TEMPLATE_INPUT_PATH({
    version: PACKAGE_FRAMEWORK.version,
});

const command = TEMPLATE_COMMAND_BIN({
    bin: binary_path,
    input: input_path,
});

execSync(command);
