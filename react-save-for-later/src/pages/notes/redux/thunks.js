import { fetchAllNotes, saveNote } from '../../../api/note-api';
import * as actions from './actions';

export const fetchAllNotesThunk = () => {
    return dispatch => {
        dispatch(actions.fetchNotes());
        return fetchAllNotes()
            .then(result => dispatch(actions.fetchNotesSuccess(result.data)))
            .catch(error => dispatch(actions.fetchNotesError(error)));
    };
};

export const saveNoteThunk = (note) => {
    return dispatch => {
        dispatch(actions.saveNote());
        return saveNote(note.description, note.category)
            .then(result => dispatch(actions.saveNoteSuccess()))
            .catch(error => dispatch(actions.saveNoteError(error)))
    };
};