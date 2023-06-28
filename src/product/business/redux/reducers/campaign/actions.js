import {LOADING_HIDE, LOADING_SHOW} from '../loading/types';
import {GET_CAMPAIGNS_SUCCESS} from "./types";
import {fetchApi} from '../../../../services/api';
import * as configs from '../../../../configs';

export const getAllCampaigns = () => async dispatch => {
    dispatch({
        type: LOADING_SHOW
    })

    const response = await fetchApi({
        url: configs.api.baseUrl + configs.api.campaign.index,
        method: "GET",
        // mockData: {...leadsMock}
    });

    dispatch({
        type: LOADING_HIDE
    })

    dispatch({
        type: GET_CAMPAIGNS_SUCCESS,
        campaigns: response
    });
}

export const startCampaign = async (id) => {
    const response = await fetchApi({
        url: configs.api.baseUrl + configs.api.campaign.start + id,
        method: "GET",
        // mockData: {...leadsMock}
    });
}