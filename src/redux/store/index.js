import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loginReducer, registerReducer, clientsReducer } from '../reducers';

const rootReducers = combineReducers({loginReducer, registerReducer, clientsReducer});

const store = createStore(rootReducers, composeWithDevTools());

export default store;