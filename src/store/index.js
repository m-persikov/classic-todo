import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'
import { todosReducer } from './reducers/todoReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    tasks: todosReducer
});

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));