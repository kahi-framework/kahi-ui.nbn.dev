import type {IActionHandle} from "./actions";

export type IMouseSliderHandle = Required<IActionHandle<IMouseSliderOptions>>;

export interface IMouseSliderOptions {
    horizontal?: boolean;

    on_move: (percentage: number) => void;

    on_state?: (grabbing: boolean) => void;

    target?: HTMLElement;
}

export function mouse_slider(element: HTMLElement, options: IMouseSliderOptions) {
    let {horizontal = false, on_move, on_state, target = element} = options;
    let grabbing = false;

    function on_pointer_down(event: PointerEvent): void {
        if (event.isPrimary && event.button === 0) {
            grabbing = true;
            if (on_state) on_state(true);
        }
    }

    function on_pointer_up(event: PointerEvent): void {
        if (grabbing) {
            grabbing = false;
            if (on_state) on_state(false);
        }
    }

    function on_pointer_move(event: PointerEvent): void {
        if (!grabbing) return;

        event.preventDefault();

        const rect = element.getBoundingClientRect();
        const {clientX: client_x, clientY: client_y} = event;
        const cursor = horizontal ? client_x : client_y;

        const minimum = horizontal ? rect.left : rect.top;
        const maximum = horizontal ? rect.right : rect.bottom;

        const size = maximum - minimum;
        const position = cursor - minimum;

        on_move(position / size);
    }

    element.addEventListener("pointerup", on_pointer_up);
    element.addEventListener("pointermove", on_pointer_move);
    target.addEventListener("pointerdown", on_pointer_down);

    return {
        update(options: IMouseSliderOptions) {
            target.removeEventListener("pointerdown", on_pointer_down);

            ({horizontal = false, on_move, on_state, target = element} = options);

            target.addEventListener("pointerdown", on_pointer_down);
        },

        destroy() {
            element.removeEventListener("pointerup", on_pointer_up);
            element.removeEventListener("pointermove", on_pointer_move);
            target.removeEventListener("pointerdown", on_pointer_down);
        },
    };
}
