import {OPEN_MODAL, CLOSE_MODAL, MODAL_INIT_STATE} from "./types";

export const modalReducer = (state = MODAL_INIT_STATE, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {...action.modalData, isOpen: true};
        case CLOSE_MODAL:
            return {...MODAL_INIT_STATE, isOpen: false};
        default:
            return state
    }
}