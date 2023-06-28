import {LOADING_HIDE, LOADING_INIT_STATE, LOADING_SHOW} from "./types";

export const loadingReducer = (state = LOADING_INIT_STATE, action) => {
    switch (action.type) {
        case LOADING_SHOW:
            return {
                isLoading: true
            };
        case LOADING_HIDE:
            return {
                isLoading: false
            };
        default:
            return state
    }
}