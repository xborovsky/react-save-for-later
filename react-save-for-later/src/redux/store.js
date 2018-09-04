import { createStore, applyMiddleware, combineReducers } from 'redux';

import { categoriesReducer, createCategoryReducer, deleteCategoryReducer }  from '../pages/category-management/redux/reducers';
import { thunkMiddleware } from './thunk-middleware';

const store = createStore(
    combineReducers({
        categoriesReducer,
        createCategoryReducer//,
        //deleteCategoryReducer
    }),
    applyMiddleware(thunkMiddleware)
);

export default store;