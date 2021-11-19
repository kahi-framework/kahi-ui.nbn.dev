import type {IKeybindCallback} from "@kahi-ui/framework";
import {keybind} from "@kahi-ui/framework";

export const next_keybind = (element: HTMLElement, on_bind: IKeybindCallback) =>
    keybind(element, {on_bind, binds: "arrowdown", repeat: true, repeat_throttle: 250});

export const previous_keybind = (element: HTMLElement, on_bind: IKeybindCallback) =>
    keybind(element, {on_bind, binds: "arrowup", repeat: true, repeat_throttle: 250});

export const search_keybind = (element: HTMLElement, on_bind: IKeybindCallback) =>
    keybind(element, {on_bind, binds: "control+/", repeat: true});
