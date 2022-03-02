// SOURCE: https://github.com/lucide-icons/lucide/tree/master/packages/lucide-svelte

/// <reference types="svelte" />
/// <reference types="svelte2tsx/svelte-jsx" />

declare module "lucide-svelte" {
    import {SvelteComponentTyped} from "svelte";

    interface IconProps extends Partial<svelte.JSX.SVGProps<SVGSVGElement>> {
        color?: string;
        size?: number | string;
        strokeWidth?: number;
        class?: string;
    }

    interface IconEvents {
        [evt: string]: CustomEvent<any>;
    }

    export type Icon = SvelteComponentTyped<IconProps, IconEvents, {}>;

    // NOTE: Only put icons here being used by the Application

    export declare class ArrowRight extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Book extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Code extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Clock extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Copy extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Edit extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class ExternalLink extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class LayoutTemplate extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Image extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Megaphone extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Menu extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Moon extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Package extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Pencil extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class MessageCircle extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class MoreVertical extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class RotateCw extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Search extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Share2 extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Sidebar extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Slash extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Sun extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class UserPlus extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class X extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
    export declare class Zap extends SvelteComponentTyped<IconProps, IconEvents, {}> {}
}
