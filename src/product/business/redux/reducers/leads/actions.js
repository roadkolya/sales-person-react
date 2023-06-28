import {LOADING_HIDE, LOADING_SHOW} from '../loading/types';
import {GET_LEADS_SUCCESS} from "./types";
import {fetchApi} from '../../../../services/api';
import * as configs from '../../../../configs';
import * as leadsMock from '../../../mocks/leads.json';

export const getAllLeads = () => async dispatch => {
    dispatch({
        type: LOADING_SHOW
    })

    const response = await fetchApi({
        url: configs.api.baseUrl + configs.api.leads,
        method: "GET",
        // mockData: {...leadsMock}
    });

    dispatch({
        type: LOADING_HIDE
    })

    dispatch({
        type: GET_LEADS_SUCCESS,
        leads: response
    });
}