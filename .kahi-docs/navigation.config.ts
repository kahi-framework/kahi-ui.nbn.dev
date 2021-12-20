import {define_navigation} from "@kahi-docs/config";

export default define_navigation({
    docs: [
        {
            text: "Resources",
            items: [{href: "/docs/resources/official"}, {href: "/docs/resources/community"}],
        },

        {
            text: "Framework",
            items: [
                {href: "/docs/framework/getting-started"},
                {href: "/docs/framework/faq"},
                {href: "/docs/framework/browser-support"},
                {href: "/docs/framework/responsitivity"},
                {href: "/docs/framework/custom-properties"},
                {href: "/docs/framework/actions"},
                {href: "/docs/framework/elements"},
                {href: "/docs/framework/events"},
            ],
        },

        {
            text: "Globals",
            items: [
                {href: "/docs/globals/html5"},
                {href: "/docs/globals/hidden"},
                {href: "/docs/globals/sizings"},
                {href: "/docs/globals/spacings"},
            ],
        },

        {
            text: "Typography",
            items: [
                {href: "/docs/typography/blockquote"},
                {href: "/docs/typography/code"},
                {href: "/docs/typography/heading"},
                {href: "/docs/typography/text"},
            ],
        },

        {
            text: "Embedded",
            items: [{href: "/docs/embedded/figure"}],
        },

        {
            text: "Display",
            items: [
                {href: "/docs/display/badge"},
                {href: "/docs/display/datestamp"},
                {href: "/docs/display/datetimestamp"},
                {href: "/docs/display/list"},
                {href: "/docs/display/table"},
                {href: "/docs/display/timestamp"},
            ],
        },

        {
            text: "Disclosure",
            items: [
                {href: "/docs/disclosure/accordion"},
                {href: "/docs/disclosure/carousel"},
                {href: "/docs/disclosure/tab"},
            ],
        },

        {
            text: "Feedback",
            items: [
                {href: "/docs/feedback/dot"},
                {href: "/docs/feedback/ellipsis"},
                {href: "/docs/feedback/progress"},
                {href: "/docs/feedback/spinner"},
                {href: "/docs/feedback/wave"},
            ],
        },

        {
            text: "Interactables",
            items: [
                {href: "/docs/interactables/button"},
                {href: "/docs/interactables/check"},
                {href: "/docs/interactables/filedropinput"},
                {href: "/docs/interactables/form"},
                {href: "/docs/interactables/hiddeninput"},
                {href: "/docs/interactables/numberinput", badge: "NEW"},
                {href: "/docs/interactables/radio"},
                {href: "/docs/interactables/switch"},
                {href: "/docs/interactables/textinput", badge: "UPDATED"},
            ],
        },

        {
            text: "Widgets",
            items: [
                {href: "/docs/widgets/daypicker"},
                {href: "/docs/widgets/daystepper"},
                {href: "/docs/widgets/monthpicker"},
                {href: "/docs/widgets/monthstepper"},
                {href: "/docs/widgets/timepicker"},
                {href: "/docs/widgets/yearpicker"},
                {href: "/docs/widgets/yearstepper"},
            ],
        },

        {
            text: "Layouts",
            items: [
                {href: "/docs/layouts/center"},
                {href: "/docs/layouts/container"},
                {href: "/docs/layouts/divider"},
                {href: "/docs/layouts/grid"},
                {href: "/docs/layouts/group"},
                {href: "/docs/layouts/mosaic"},
                {href: "/docs/layouts/position"},
                {href: "/docs/layouts/scrollable"},
                {href: "/docs/layouts/spacer"},
                {href: "/docs/layouts/stack"},
            ],
        },

        {
            text: "Surfaces",
            items: [
                {href: "/docs/surfaces/box"},
                {href: "/docs/surfaces/card"},
                {href: "/docs/surfaces/hero"},
                {href: "/docs/surfaces/tile"},
            ],
        },

        {
            text: "Navigation",
            items: [
                {href: "/docs/navigation/anchor"},
                {href: "/docs/navigation/aside"},
                {href: "/docs/navigation/breadcrumb"},
                {href: "/docs/navigation/menu"},
                {href: "/docs/navigation/omni"},
            ],
        },

        {
            text: "Overlays",
            items: [
                {href: "/docs/overlays/clickable"},
                {href: "/docs/overlays/offscreen"},
                {href: "/docs/overlays/overlay"},
                {href: "/docs/overlays/popover"},
            ],
        },

        {
            text: "Utilities",
            items: [
                {href: "/docs/utilities/browserrender"},
                {href: "/docs/utilities/contextbackdrop"},
                {href: "/docs/utilities/contextbutton"},
                {href: "/docs/utilities/intersectionrender"},
                {href: "/docs/utilities/portal"},
                {href: "/docs/utilities/serverrender"},
                {href: "/docs/utilities/transition"},
            ],
        },

        {
            text: "Actions",
            items: [
                {href: "/docs/actions/auto_focus"},
                {href: "/docs/actions/click_inside"},
                {href: "/docs/actions/click_outside"},
                {href: "/docs/actions/intersection_observer"},
                {href: "/docs/actions/keybind"},
                {href: "/docs/actions/mutation_observer"},
                {href: "/docs/actions/overflow_clipping"},
                {href: "/docs/actions/trap_focus"},
            ],
        },

        {
            text: "Stores",
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
