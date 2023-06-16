import {applyMiddleware, compose, createStore} from 'redux';
import thunk from "redux-thunk";
import appReducer from './reducers';

const MIDDLEWARE = compose(applyMiddleware(thunk))

export default createStore(appReducer, {}, MIDDLEWARE)