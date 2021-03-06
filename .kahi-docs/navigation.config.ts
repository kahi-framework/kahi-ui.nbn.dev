import {define_navigation} from "@kahi-docs/config";

export default define_navigation({
    blog: [
        {
            text: "2022 March",
            items: [
                {href: "/blog/2022-03/snippet-search-support", badge: "NEW"},
                {href: "/blog/2022-03/0.6.2-introducing-dataselect"},
            ],
        },
        {
            text: "2022 Feburary",
            items: [{href: "/blog/2022-02/0.6.0-alpha-1"}],
        },
    ],

    docs: [
        {
            text: "Resources",
            items: [
                {href: "/docs/resources/official", badge: "UPDATED"},
                {href: "/docs/resources/community"},
                {href: "/docs/resources/faq"},
            ],
        },

        {
            text: "Migrations",
            items: [
                {href: "/docs/migrations/0.5.x-to-0.6.x", badge: "NEW"},
                {href: "/docs/migrations/0.4.x-to-0.5.x"},
            ],
        },

        {
            text: "Guides",
            items: [{href: "/docs/guides/getting-started", badge: "UPDATED"}],
        },

        {
            text: "Framework",
            items: [
                {href: "/docs/framework/browser-support"},
                {href: "/docs/framework/responsitivity"},
                {href: "/docs/framework/custom-builds", badge: "NEW"},
            ],
        },

        {
            text: "Themeing",
            items: [
                {href: "/docs/themeing/manual-mode", badge: "NEW"},
                {href: "/docs/themeing/custom-properties"},
                {href: "/docs/themeing/custom-themes", badge: "NEW"},
                {href: "/docs/themeing/elevations", badge: "NEW"},
                {href: "/docs/themeing/fonts", badge: "NEW"},
                {href: "/docs/themeing/palettes", badge: "NEW"},
                {href: "/docs/themeing/sizes", badge: "NEW"},
                {href: "/docs/themeing/spacings", badge: "NEW"},
            ],
        },

        {
            text: "Globals",
            items: [
                {href: "/docs/globals/actions"},
                {href: "/docs/globals/elements"},
                {href: "/docs/globals/events"},
                {href: "/docs/globals/contents"},
                {href: "/docs/globals/html5"},
                {href: "/docs/globals/hidden"},
                {href: "/docs/globals/sizes", badge: "UPDATED"},
                {href: "/docs/globals/spacings"},
                {href: "/docs/globals/sveltekit"},
            ],
        },

        {
            text: "Typography",
            items: [
                {href: "/docs/typography/blockquote"},
                {href: "/docs/typography/code"},
                {href: "/docs/typography/heading"},
                {href: "/docs/typography/text", badge: "UPDATED"},
            ],
        },

        {
            text: "Embedded",
            items: [{href: "/docs/embedded/figure", badge: "UPDATED"}],
        },

        {
            text: "Display",
            items: [
                {href: "/docs/display/badge"},
                {href: "/docs/display/datestamp"},
                {href: "/docs/display/datetimestamp"},
                {href: "/docs/display/kbd", badge: "NEW"},
                {href: "/docs/display/list"},
                {href: "/docs/display/table", badge: "UPDATED"},
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
                {href: "/docs/feedback/dot", badge: "UPDATED"},
                {href: "/docs/feedback/ellipsis", badge: "UPDATED"},
                {href: "/docs/feedback/progress", badge: "UPDATED"},
            ],
        },

        {
            text: "Interactables",
            items: [
                {href: "/docs/interactables/button", badge: "UPDATED"},
                {href: "/docs/interactables/check"},
                {href: "/docs/interactables/filedropinput"},
                {href: "/docs/interactables/form", badge: "UPDATED"},
                {href: "/docs/interactables/hiddeninput"},
                {href: "/docs/interactables/numberinput", badge: "UPDATED"},
                {href: "/docs/interactables/radio"},
                {href: "/docs/interactables/switch"},
                {href: "/docs/interactables/textinput", badge: "UPDATED"},
            ],
        },

        {
            text: "Widgets",
            items: [
                {href: "/docs/widgets/dataselect", badge: "NEW"},
                {href: "/docs/widgets/datatable"},
                {href: "/docs/widgets/daypicker", badge: "UPDATED"},
                {href: "/docs/widgets/daystepper", badge: "UPDATED"},
                {href: "/docs/widgets/pagination"},
                {href: "/docs/widgets/monthpicker", badge: "UPDATED"},
                {href: "/docs/widgets/monthstepper", badge: "UPDATED"},
                {href: "/docs/widgets/timepicker", badge: "UPDATED"},
                {href: "/docs/widgets/yearpicker", badge: "UPDATED"},
                {href: "/docs/widgets/yearstepper", badge: "UPDATED"},
            ],
        },

        {
            text: "Layouts",
            items: [
                {href: "/docs/layouts/article", badge: "NEW"},
                {href: "/docs/layouts/center"},
                {href: "/docs/layouts/container"},
                {href: "/docs/layouts/divider"},
                {href: "/docs/layouts/grid"},
                {href: "/docs/layouts/group", badge: "UPDATED"},
                {href: "/docs/layouts/mosaic", badge: "UPDATED"},
                {href: "/docs/layouts/position"},
                {href: "/docs/layouts/scrollable"},
                {href: "/docs/layouts/spacer"},
                {href: "/docs/layouts/stack", badge: "UPDATED"},
            ],
        },

        {
            text: "Surfaces",
            items: [
                {href: "/docs/surfaces/box", badge: "UPDATED"},
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
                {href: "/docs/navigation/menu", badge: "UPDATED"},
                {href: "/docs/navigation/omni"},
            ],
        },

        {
            text: "Overlays",
            items: [
                {href: "/docs/overlays/backdrop"},
                {href: "/docs/overlays/clickable"},
                {href: "/docs/overlays/overlay", badge: "UPDATED"},
                {href: "/docs/overlays/popover", badge: "UPDATED"},
            ],
        },

        {
            text: "Utilities",
            items: [
                {href: "/docs/utilities/animation", badge: "NEW"},
                {href: "/docs/utilities/browserrender"},
                {href: "/docs/utilities/intersectionrender"},
                {href: "/docs/utilities/mediaqueryrender"},
                {href: "/docs/utilities/portal"},
                {href: "/docs/utilities/serverrender"},
                {href: "/docs/utilities/transition", badge: "UPDATED"},
                {href: "/docs/utilities/viewportrender"},
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
                {href: "/docs/actions/lost_focus"},
                {href: "/docs/actions/mutation_observer"},
                {href: "/docs/actions/overflow_clipping"},
                {href: "/docs/actions/trap_focus"},
            ],
        },

        {
            text: "Stores",
            items: [
                {href: "/docs/stores/darkmode", badge: "UPDATED"},
                {href: "/docs/stores/htmlmode", badge: "UPDATED"},
                {href: "/docs/stores/mediaquery"},
                {href: "/docs/stores/prefersscheme"},
                {href: "/docs/stores/scrolllock"},
                {href: "/docs/stores/viewport"},
            ],
        },
    ],
});
