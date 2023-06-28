import {CLEAN_CAMPAIGNS, GET_CAMPAIGNS_FAILURE, GET_CAMPAIGNS_SUCCESS, CAMPAIGNS_INIT_STATE} from "./types";

export const campaignReducer = (state = CAMPAIGNS_INIT_STATE, action) => {
    switch (action.type) {
        case GET_CAMPAIGNS_SUCCESS:
            return action.campaigns;
        case GET_CAMPAIGNS_FAILURE:
            return action.campaigns;
        case CLEAN_CAMPAIGNS:
            return CAMPAIGNS_INIT_STATE;
        default:
            return state
    }
}