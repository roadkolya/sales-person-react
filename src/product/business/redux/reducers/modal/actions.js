import {CLOSE_MODAL, MODAL_INIT_STATE, OPEN_MODAL} from "./types";

export const openModal = (modalData = MODAL_INIT_STATE) => async dispatch => {
    dispatch({
        type: OPEN_MODAL,
        modalData: {...modalData, isOpen: true}
    })
}

export const closeModal = (modalData = MODAL_INIT_STATE) => async dispatch => {
    dispatch({
        type: CLOSE_MODAL,
        modalData: {...modalData, isOpen: false}
    })
}