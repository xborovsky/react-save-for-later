import * as constants from './constants';

export const loginSuccess = user => ({
    type : constants.LOGIN_SUCCESS,
    user
});

export const loginError = error => ({
    type : constants.LOGIN_ERROR,
    error
});

export const logout = () => ({
    type : constants.LOGOUT
});

export const logoutSuccess = () => ({
    type : constants.LOGOUT_SUCCESS
});

export const logoutError = error => ({
    type : constants.LOGOUT_ERROR,
    error
});