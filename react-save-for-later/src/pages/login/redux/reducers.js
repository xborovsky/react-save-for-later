import * as constants from './constants';

const initialState = {
    user : null,
    error : null
};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOGIN_SUCCESS:
            return {...state,
                error : null,
                user : action.user.profile
            };
        case constants.LOGIN_ERROR:
            return {...state,
                error : action.error,
                user : null
            };
        default:
            return state;
    }
};