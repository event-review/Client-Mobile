import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import user from '../reducers/user'
import promotor from '../reducers/promotor'
import event from '../reducers/event'

const store = createStore(combineReducers({ user, promotor, event }), applyMiddleware(thunk));

export default store;