import { createStore, applyMiddleware, combineReducers } from 'redux';

import { categoriesReducer }  from '../pages/category-management/redux/reducers';
import { thunkMiddleware } from './thunk-middleware';

const store = createStore(
    combineReducers({
        categoriesReducer
    }),
    applyMiddleware(thunkMiddleware)
);

export default store;