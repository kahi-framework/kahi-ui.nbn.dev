import {Book} from "svelte-feather/components/Book";
import {Code} from "svelte-feather/components/Code";
import {MessageCircle} from "svelte-feather/components/MessageCircle";
import {Package} from "svelte-feather/components/Package";

import {define_navigation} from "@kahi-docs/config";

export default define_navigation({
    application: [
        {href: "/docs/framework/getting-started", text: "Documentation", icon: Book},
        {href: "https://github.com/novacbn/kahi-ui", text: "Source", icon: Code},
        {href: "https://github.com/novacbn/kahi-ui/releases", text: "Releases", icon: Package},
        {href: "/chat", text: "Chat", icon: MessageCircle},
    ],

    documentation: [
        {
            separator: "Resources",
            items: [{href: "/docs/resources/official"}, {href: "/docs/resources/community"}],
        },

        {
            separator: "Framework",
            items: [
                {href: "/docs/framework/getting-started"},
                {href: "/docs/framework/faq"},
                {href: "/docs/framework/browser-support"},
                {href: "/docs/framework/responsivity"},
                {href: "/docs/framework/events"},
            ],
        },

        {
            separator: "Typography",
            items: [
                {href: "/docs/typography/blockquote"},
                {href: "/docs/typography/code"},
                {href: "/docs/typography/heading"},
                {href: "/docs/typography/text"},
            ],
        },

        {
            separator: "Embedded",
            items: [{href: "/docs/embedded/figure"}],
        },

        {
            separator: "Display",
            items: [
                {href: "/docs/display/badge", badge: "UPDATED"},
                {href: "/docs/display/list", badge: "UPDATED"},
                {href: "/docs/display/table", badge: "UPDATED"},
            ],
        },

        {
            separator: "Disclosure",
            items: [{href: "/docs/disclosure/tab"}],
        },

        {
            separator: "Feedback",
            items: [
                {href: "/docs/feedback/dot", badge: "UPDATED"},
                {href: "/docs/feedback/ellipsis", badge: "UPDATED"},
                {href: "/docs/feedback/progress", badge: "UPDATED"},
                {href: "/docs/feedback/spinner", badge: "UPDATED"},
                {href: "/docs/feedback/wave", badge: "UPDATED"},
            ],
        },

        {
            separator: "Interactables",
            items: [
                {href: "/docs/interactables/button"},
                {href: "/docs/interactables/check"},
                {href: "/docs/interactables/form"},
                {href: "/docs/interactables/radio"},
                {href: "/docs/interactables/switch"},
                {href: "/docs/interactables/textinput"},
            ],
        },

        {
            separator: "Layouts",
            items: [
                {href: "/docs/layouts/container", badge: "UPDATED"},
                {href: "/docs/layouts/divider", badge: "UPDATED"},
                {href: "/docs/layouts/grid"},
                {href: "/docs/layouts/group", badge: "UPDATED"},
                {href: "/docs/layouts/mosaic"},
                {href: "/docs/layouts/scrollable"},
                {href: "/docs/layouts/spacer"},
                {href: "/docs/layouts/stack"},
            ],
        },

        {
            separator: "Surfaces",
            items: [
                {href: "/docs/surfaces/box", badge: "UPDATED"},
                {href: "/docs/surfaces/card", badge: "UPDATED"},
                {href: "/docs/surfaces/hero", badge: "UPDATED"},
                {href: "/docs/surfaces/tile", badge: "UPDATED"},
            ],
        },

        {
            separator: "Navigation",
            items: [
                {href: "/docs/navigation/anchor", badge: "UPDATED"},
                {href: "/docs/navigation/aside"},
                {href: "/docs/navigation/breadcrumb", badge: "UPDATED"},
                {href: "/docs/navigation/menu"},
                {href: "/docs/navigation/omni"},
            ],
        },

        {
            separator: "Overlays",
            items: [
                {href: "/docs/overlays/popover"},
                {href: "/docs/overlays/offscreen"},
                {href: "/docs/overlays/overlay"},
            ],
        },

        {
            separator: "Utilities",
            items: [
                {href: "/docs/utilities/browserrender", badge: "NEW"},
                {href: "/docs/utilities/contextbackdrop"},
                {href: "/docs/utilities/contextbutton"},
                {href: "/docs/utilities/intersectionrender", badge: "NEW"},
                {href: "/docs/utilities/portal"},
                {href: "/docs/utilities/serverrender", badge: "NEW"},
                {href: "/docs/utilities/transition", badge: "NEW"},
            ],
        },

        {
            separator: "Modifiers",
            items: [
                {href: "/docs/modifiers/html5"},
                {href: "/docs/modifiers/hidden"},
                {href: "/docs/modifiers/sizings"},
                {href: "/docs/modifiers/spacings"},
            ],
        },

        {
            separator: "Actions",
            items: [
                {href: "/docs/actions/click_outside"},
                {href: "/docs/actions/keybind"},
                {href: "/docs/actions/intersection_observer", badge: "NEW"},
                {href: "/docs/actions/mutation_observer", badge: "NEW"},
            ],
        },

        {
            separator: "Stores",
            items: [
                {href: "/docs/stores/darkmode"},
                {href: "/docs/stores/htmlpalette"},
                {href: "/docs/stores/mediaquery"},
                {href: "/docs/stores/prefersscheme"},
                {href: "/docs/stores/scrolllock"},
                {href: "/docs/stores/viewport"},
            ],
        },
    ],
});
