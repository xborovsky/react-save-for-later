import * as constants from './constants';

const categoriesInitialState = {
    categories : [],
    error : false,
    loading : false
};

export const categoriesReducer = (state = categoriesInitialState, action) => {
    switch (action.type) {
        case constants.FETCH_ALL_CATEGORIES:
            return {...state, categories : [], error : false, loading : true};
        case constants.FETCH_ALL_CATEGORIES_SUCCESS:
            return {...state, categories : action.payload, error : false, loading : false};
        case constants.FETCH_ALL_CATEGORIES_ERROR:
            return {...state, categories : [], error : true, loading: false};
        default:
            return state;
    }
};

const createCategoryInitialState = {
    loading : false,
    error : false
};

export const createCategoryReducer = (state = createCategoryInitialState, action) => {
    switch (action.type) {
        case constants.CREATE_CATEGORY:
            return {...state, loading : true, error : false};
        case constants.CREATE_CATEGORY_SUCCESS:
            return {...state, loading : false, error : false};
        case constants.CREATE_CATEGORY_ERROR:
            return {...state, loading : false, error : true};
        default:
            return state;
    }
};

const deleteCategoryInitialState = {
    error : false,
    loading : false
};

export const deleteCategoryReducer = (state = deleteCategoryInitialState, action) => {
    switch (action.type) {
        case constants.DELETE_CATEGORY:
            return {...state, loading : true, error : false};
        case constants.DELETE_CATEGORY_SUCCESS:
            return {...state, loading : false, error : false};
        case constants.DELETE_CATEGORY_ERROR:
            return {...state, loading : false, error : true};
        default:
            return state;
    }
};