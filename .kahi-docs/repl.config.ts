import * as KahiUI from "@kahi-ui/framework";

import {define_repl} from "@kahi-docs/config";

export default define_repl({
    context: {
        IMAGE_AVATAR: "/assets/images/avatar.webp",
        IMAGE_BACKGROUND: "/assets/images/background.webp",
    },

    imports: {
        "@kahi-ui/framework": KahiUI,
    },
});
