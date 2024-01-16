import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk'
import { cashReducer } from './reducers/cashReducer';
import { todosReducer } from './reducers/todoReducer';

const rootReducer = combineReducers({
    cash: cashReducer,
    tasks: todosReducer
})

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));