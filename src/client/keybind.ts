import type {IKeybindCallback} from "@kahi-ui/framework";
import {keybind} from "@kahi-ui/framework";

export const search_keybind = (element: HTMLElement, on_bind: IKeybindCallback) =>
    keybind(element, {on_bind, binds: "control+/"});
