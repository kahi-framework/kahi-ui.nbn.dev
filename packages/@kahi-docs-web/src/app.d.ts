/// <reference types="@sveltejs/kit" />

declare namespace App {
    interface Stuff {
        content?: import("@kahi-docs/markdown").IPageRender;

        metadata?: {
            description?: string;

            image?: string;
        };

        navigation?: import("@kahi-docs/config").INavigationMenu[];

        prerender?: string[];
    }
}
