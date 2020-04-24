// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware, combinerReducers } from '../Jredux/';
// import { isFSA } from 'flux-standard-action';
// import isPromise from 'is-promise';
import logger from '../Jredux/logger';
import thunk from '../Jredux/thunk';
import rdPromise from '../Jredux/rdPromise'

const countReducer = (state = 0, action) => {
    const {type, payload} = action
    switch(type) {
        case 'ADD':
            return state + payload;
        case 'MINUS':
            return state - payload;
        default:
            return state
    }
}

const store = createStore(
    combinerReducers({
        count: countReducer
    }),
    applyMiddleware(thunk, logger, rdPromise)
)

 
export default store;
