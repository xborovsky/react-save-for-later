import * as constants from './constants';

export const fetchNextNotes = () => ({
    type : constants.FETCH_NEXT_NOTES
});

export const fetchNotesSuccess = (offset, notes) => ({
    type : constants.FETCH_NOTES_SUCCESS,
    payload : notes,
    offset
});

export const fetchNotesError = error => ({
    type : constants.FETCH_NOTES_ERROR,
    error
});

export const saveNote = note => ({
    type : constants.CREATE_NOTE,
    payload : note
});

export const saveNoteSuccess = () => ({
    type : constants.CREATE_NOTE_SUCCESS
});

export const saveNoteError = error => ({
    type : constants.CREATE_NOTE_ERROR,
    error
});

export const deleteNote = id => ({
    type : constants.DELETE_NOTE,
    payload : id
});

export const deleteNoteSuccess = id => ({
    type : constants.DELETE_NOTE_SUCCESS,
    id
});

export const deleteNoteError = error => ({
    type : constants.DELETE_NOTE_ERROR,
    error
});