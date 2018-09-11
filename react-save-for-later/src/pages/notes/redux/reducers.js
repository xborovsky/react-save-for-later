import * as constants from './constants';

const initialState = {
    notes : [],
    offset: 0,
    hasMoreRecords : false,
    loading : false,
    error : false
};

export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.FETCH_NEXT_NOTES:
            return {...state, loading : true, error : false};
        case constants.FETCH_NOTES_SUCCESS:
            return {...state,
                notes : [...state.notes, ...action.payload],
                offset: state.offset + action.payload.length,
                loading : false,
                error : false,
                hasMoreRecords : action.payload.length > 0
            };
        case constants.FETCH_NOTES_ERROR:
            return {...state, loading : false, error : true};

        case constants.CREATE_NOTE:
            return {...state, loading : true, error : false};
        case constants.CREATE_NOTE_SUCCESS:
            return {...state, loading : false, error : false};
        case constants.CREATE_NOTE_ERROR:
            return {...state, loading : false, error : true};

        case constants.DELETE_NOTE:
            return {...state, loading : true, error : false};
        case constants.DELETE_NOTE_SUCCESS:
            return {...state, loading : false, error : false};
        case constants.DELETE_NOTE_ERROR:
            return {...state, loading : false, error : true};

        case constants.RESET_OFFSET:
            return {...state, offset : 0};

        default:
            return state;
    }
};