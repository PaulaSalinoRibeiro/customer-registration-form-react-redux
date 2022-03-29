import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import clientsReducer from '../reducers';

const rootReducers = combineReducers({ clientsReducer });

const store = createStore(rootReducers, composeWithDevTools());

export default store;