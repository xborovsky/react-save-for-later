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
            const newNotes = action.offset === 0 ? action.payload : [...state.notes, ...action.payload];
            return {...state,
                notes : newNotes,
                offset: (action.offset === 0 ? 0 : state.offset) + action.payload.length,
                loading : false,
                error : false,
                hasMoreRecords : action.totalNotes > newNotes.length
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
            let notesCopy = [...state.notes];
            notesCopy = notesCopy.filter((note) => note.id !== action.id);
            return {...state, loading : false, error : false, notes : notesCopy};
        case constants.DELETE_NOTE_ERROR:
            return {...state, loading : false, error : true};

        default:
            return state;
    }
};