import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { registerReducer, clientsReducer } from '../reducers';

const rootReducers = combineReducers({ registerReducer, clientsReducer});

const store = createStore(rootReducers, composeWithDevTools());

export default store;