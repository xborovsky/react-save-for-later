import * as constants from './constants';

const initialState = {
    categories : [],
    error : false,
    loading : false
};

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.FETCH_ALL_CATEGORIES:
            return {...state, categories : [], error : false, loading : true};
        case constants.FETCH_ALL_CATEGORIES_SUCCESS:
            return {...state, categories : action.payload, error : false, loading : false};
        case constants.FETCH_ALL_CATEGORIES_ERROR:
            return {...state, categories : [], error : true, loading: false};

        case constants.CREATE_CATEGORY:
            return {...state, loading : true, error : false};
        case constants.CREATE_CATEGORY_SUCCESS:
            return {...state, loading : false, error : false};
        case constants.CREATE_CATEGORY_ERROR:
            return {...state, loading : false, error : true};

        case constants.DELETE_CATEGORY:
            return {...state, loading : true, error : false};
        case constants.DELETE_CATEGORY_SUCCESS:
            const categoriesFiltered = state.categories.filter(category => category.id !== action.payload);
            return {...state, categories : categoriesFiltered, loading : false, error : false};
        case constants.DELETE_CATEGORY_ERROR:
            return {...state, loading : false, error : true};

        default:
            return state;
    }
};