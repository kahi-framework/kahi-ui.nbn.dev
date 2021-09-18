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
                {href: "/docs/framework/events", badge: "NEW"},
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
                {href: "/docs/display/badge"},
                {href: "/docs/display/list"},
                {href: "/docs/display/table"},
            ],
        },

        {
            separator: "Disclosure",
            items: [{href: "/docs/disclosure/tab"}],
        },

        {
            separator: "Feedback",
            items: [
                {href: "/docs/feedback/dot"},
                {href: "/docs/feedback/ellipsis"},
                {href: "/docs/feedback/progress"},
                {href: "/docs/feedback/spinner"},
                {href: "/docs/feedback/wave"},
            ],
        },

        {
            separator: "Interactables",
            items: [
                {href: "/docs/interactables/button"},
                {href: "/docs/interactables/check"},
                {href: "/docs/interactables/form", badge: "UPDATED"},
                {href: "/docs/interactables/radio"},
                {href: "/docs/interactables/switch"},
                {href: "/docs/interactables/textinput"},
            ],
        },

        {
            separator: "Layouts",
            items: [
                {href: "/docs/layouts/container"},
                {href: "/docs/layouts/divider"},
                {href: "/docs/layouts/grid"},
                {href: "/docs/layouts/group"},
                {href: "/docs/layouts/mosaic"},
                {href: "/docs/layouts/scrollable"},
                {href: "/docs/layouts/spacer"},
                {href: "/docs/layouts/stack"},
            ],
        },

        {
            separator: "Surfaces",
            items: [
                {href: "/docs/surfaces/box"},
                {href: "/docs/surfaces/card"},
                {href: "/docs/surfaces/hero"},
                {href: "/docs/surfaces/tile"},
            ],
        },

        {
            separator: "Navigation",
            items: [
                {href: "/docs/navigation/anchor"},
                {href: "/docs/navigation/aside"},
                {href: "/docs/navigation/breadcrumb"},
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
                {href: "/docs/utilities/contextbackdrop"},
                {href: "/docs/utilities/contextbutton"},
                {href: "/docs/utilities/portal", badge: "UPDATED"},
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
            items: [{href: "/docs/actions/click_outside"}, {href: "/docs/actions/keybind"}],
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
