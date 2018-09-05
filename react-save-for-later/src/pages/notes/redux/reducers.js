import * as constants from './constants';

const initialState = {
    notes : [],
    loading : false,
    error : false
};

export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.FETCH_ALL_NOTES:
            return {...state, notes : [], loading : true, error : false};
        case constants.FETCH_ALL_NOTES_SUCCESS:
            return {...state, notes : action.payload, loading : false, error : false};
        case constants.FETCH_ALL_NOTES_ERROR:
            return {...state, notes : [], loading : false, error : true};
        default:
            return state;
    }
};