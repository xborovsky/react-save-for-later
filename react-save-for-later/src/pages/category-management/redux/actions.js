import * as constants from './constants';

export const fetchAllCategories = () => ({
    type : constants.FETCH_ALL_CATEGORIES
});

export const fetchAllCategoriesSuccess = categories => ({
    type : constants.FETCH_ALL_CATEGORIES_SUCCESS,
    payload : categories
});

export const fetchAllCategoriesError = err => ({
    type : constants.FETCH_ALL_CATEGORIES_SUCCESS,
    payload : err
});

export const createCategory = category => ({
    type : constants.CREATE_CATEGORY,
    payload : category
});

export const createCategorySuccess = () => ({
    type : constants.CREATE_CATEGORY_SUCCESS
});

export const createCategoryError = err => ({
    type : constants.CREATE_CATEGORY_ERROR,
    payload : err
});

export const deleteCategory = id => ({
    type : constants.DELETE_CATEGORY,
    payload : id
});

export const deleteCategorySuccess = () => ({
    type : constants.DELETE_CATEGORY_SUCCESS
});

export const deleteCategoryError = (err) => ({
    type : constants.DELETE_CATEGORY_ERROR,
    payload : err
});