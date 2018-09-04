import { getAllCategories, saveNewCategory, deleteCategory } from '../../../api/category-api';
import * as actions from './actions';

export const fetchCategoriesThunk = () => {
    return dispatch => {
        dispatch(actions.fetchAllCategories());
        return getAllCategories()
            .then(result => dispatch(actions.fetchAllCategoriesSuccess(result.data)))
            .catch(err => dispatch(actions.fetchAllCategoriesError(err)));
    };
};

export const createCategoryThunk = category => {
    return dispatch => {
        dispatch(actions.createCategory());
        return saveNewCategory(category.name, category.color)
            .then(result => dispatch(actions.createCategorySuccess()))
            .catch(err => dispatch(actions.createCategoryError(err)));
    };
};

export const deleteCategoryThunk = id => {
    return dispatch => {
        dispatch(actions.deleteCategory());
        return deleteCategory(id)
            .then(result => dispatch(actions.deleteCategorySuccess()))
            .catch(err => dispatch(actions.deleteCategoryError(err)));
    };
};