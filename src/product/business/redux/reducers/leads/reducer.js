import {CLEAN_LEADS, GET_LEADS_FAILURE, GET_LEADS_SUCCESS, LEADS_INIT_STATE} from "./types";

export const leadsReducer = (state = LEADS_INIT_STATE, action) => {
    switch (action.type) {
        case GET_LEADS_SUCCESS:
            return action.leads;
        case GET_LEADS_FAILURE:
            return action.leads;
        case CLEAN_LEADS:
            return LEADS_INIT_STATE;
        default:
            return state
    }
}