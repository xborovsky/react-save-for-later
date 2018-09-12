import * as actions from './actions';
import { saveJSON, remove } from '../../../utils/session-storage-manager';
import { createUserIfNotExists } from '../../../api/user-api';

const AUTHENTICATION_KEY = 'authentication';

export const loginSuccessThunk = user => dispatch => {
    return createUserIfNotExists(user._profile.firstName, user._profile.lastName, user._profile.id)
        .then(res => {
            saveJSON(AUTHENTICATION_KEY, user);
            dispatch(actions.loginSuccess(user));
        })
        .catch(error => dispatch(actions.loginError(error)));
};