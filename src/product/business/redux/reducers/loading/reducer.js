import {LOADING_SUCCESS, LOADING_FAILURE, LOADING_INIT_STATE} from "./types";

export const loadingReducer = (state = LOADING_INIT_STATE, action) => {
    switch (action.type) {
        case LOADING_SUCCESS:
            return {
                isLoading: true
            };
        case LOADING_FAILURE:
            return LOADING_INIT_STATE;
        default:
            return state
    }
}