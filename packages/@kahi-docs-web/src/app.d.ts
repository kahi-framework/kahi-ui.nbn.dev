/// <reference types="@sveltejs/kit" />

declare namespace App {
    interface Stuff {
        content?: import("@kahi-docs/markdown").IPageRender;

        navigation?: import("@kahi-docs/config").INavigationMenu[];
    }
}
