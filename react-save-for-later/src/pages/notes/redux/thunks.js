import { fetchAllNotes } from '../../../api/note-api';
import * as actions from './actions';

export const fetchAllNotesThunk = () => {
    return dispatch => {
        dispatch(actions.fetchNotes());
        return fetchAllNotes()
            .then(result => actions.fetchNotesSuccess(result.data))
            .catch(error => actions.fetchNotesError(error));
    };
};