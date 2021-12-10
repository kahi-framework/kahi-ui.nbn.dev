import type {IKeybindCallback, IKeybindHandle} from "@kahi-ui/framework";
import {keybind} from "@kahi-ui/framework";

export const next_keybind = (element: HTMLElement, on_bind: IKeybindCallback): IKeybindHandle =>
    keybind(element, {
        on_bind,
        binds: "arrowdown",
        repeat: true,
        repeat_throttle: 250,
        throttle_cancel: true,
    });

export const previous_keybind = (element: HTMLElement, on_bind: IKeybindCallback): IKeybindHandle =>
    keybind(element, {
        on_bind,
        binds: "arrowup",
        repeat: true,
        repeat_throttle: 250,
        throttle_cancel: true,
    });

export const search_keybind = (element: HTMLElement, on_bind: IKeybindCallback): IKeybindHandle =>
    keybind(element, {on_bind, binds: "control+/", repeat: true});
