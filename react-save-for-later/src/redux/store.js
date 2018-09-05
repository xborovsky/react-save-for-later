import { createStore, applyMiddleware, combineReducers } from 'redux';

import { categoriesReducer }  from '../pages/category-management/redux/reducers';
import { notesReducer } from '../pages/notes/redux/reducers';
import { thunkMiddleware } from './thunk-middleware';

const store = createStore(
    combineReducers({
        categories : categoriesReducer,
        notes : notesReducer
    }),
    applyMiddleware(thunkMiddleware)
);

export default store;