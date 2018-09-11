import * as constants from './constants';

export const loginSuccess = user => ({
    type : constants.LOGIN_SUCCESS,
    user
});

export const loginError = error => ({
    type : constants.LOGIN_ERROR,
    error
});