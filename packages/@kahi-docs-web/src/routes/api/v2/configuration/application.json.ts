import type {RequestHandler} from "@sveltejs/kit";

import type {IApplicationConfigGet} from "../../../../shared/api";

import APPLICATION_CONFIG from "../../../../../../../.kahi-docs/application.config";

export const get: RequestHandler = (request) => {
    return {
        status: 200,
        headers: {
            "content-type": "application/json",
        },

        // HACK: Apparently `JSONValue` doesn't like my purely JSON data?
        body: {
            data: APPLICATION_CONFIG,
        } as IApplicationConfigGet as any,
    };
};
