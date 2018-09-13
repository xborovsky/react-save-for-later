import { fetchAllNotes, saveNote, deleteNote, fetchNotes } from '../../../api/note-api';
import * as actions from './actions';

export const saveNoteThunk = (note) => {
    return dispatch => {
        dispatch(actions.saveNote());
        return saveNote(note.description, note.category)
            .then(result => dispatch(actions.saveNoteSuccess()))
            .catch(error => dispatch(actions.saveNoteError(error)))
    };
};

export const deleteNoteThunk = id => dispatch => {
    dispatch(actions.deleteNote(id));
    return deleteNote(id)
        .then(result => dispatch(actions.deleteNoteSuccess(id)))
        .catch(error => dispatch(actions.deleteNoteError(error)))
};

export const filterNotesThunk = (offset, text, categories) => dispatch => {
    dispatch(actions.fetchNextNotes());
    return fetchNotes(text, categories, offset)
        .then(result => dispatch(actions.fetchNotesSuccess(offset, result.data.notes, result.data.totalNotes)))
        .catch(error => dispatch(actions.fetchNotesError(error)))
};