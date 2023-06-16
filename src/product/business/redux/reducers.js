import {combineReducers} from 'redux';
import {leadsReducer} from './reducers/leads'
import {modalReducer} from "./reducers/modal";
import {loadingReducer} from "./reducers/loading";

export default combineReducers({
    leads: leadsReducer,
    modalData: modalReducer,
    loading: loadingReducer,
})