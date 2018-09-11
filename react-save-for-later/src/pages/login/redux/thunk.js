import * as actions from './actions';
import { saveJSON, remove } from '../../../utils/session-storage-manager';

const AUTHENTICATION_KEY = 'authentication';

export const loginSuccessThunk = user => dispatch => {
    saveJSON(AUTHENTICATION_KEY, user);
    dispatch(actions.loginSuccess(user));
};