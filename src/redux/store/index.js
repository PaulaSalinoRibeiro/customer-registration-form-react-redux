import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loginReducer, clientsReducer } from '../reducers';

const rootReducers = combineReducers({ clientsReducer, loginReducer });

const store = createStore(rootReducers, composeWithDevTools());

export default store;