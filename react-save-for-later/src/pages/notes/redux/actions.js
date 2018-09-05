import * as constants from './constants';

export const fetchNotes = () => ({
    type : constants.FETCH_ALL_NOTES
});

export const fetchNotesSuccess = notes => ({
    type : constants.FETCH_ALL_NOTES_SUCCESS,
    payload : notes
});

export const fetchNotesError = error => ({
    type : constants.FETCH_ALL_NOTES_ERROR,
    error
});