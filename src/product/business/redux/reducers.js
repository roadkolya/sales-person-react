import {combineReducers} from 'redux';
import {modalReducer} from "./reducers/modal";
import {loadingReducer} from "./reducers/loading";
import {leadsReducer} from './reducers/leads';
import {campaignReducer} from './reducers/campaign';

export default combineReducers({
    modalData: modalReducer,
    loading: loadingReducer,
    leads: leadsReducer,
    campaigns: campaignReducer,
})