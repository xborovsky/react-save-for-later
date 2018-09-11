import * as constants from './constants';

const initialState = {
    isAuthenticated : false,
    user : null,
    provider : null,
    token : null,
    error : null
};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LOGIN_SUCCESS:
            return {...state,
                isAuthenticated : true,
                error : null,
                user : action.user.profile,
                provider : action.user.provider,
                token : action.user.token
            };
        case constants.LOGIN_ERROR:
            return {...state,
                isAuthenticated : false,
                error : action.error,
                user : null,
                provider : null,
                token : null
            };
        case constants.LOGOUT:
            return {...state,
                isAuthenticated : false,
                user : null,
                provider : null,
                token : null
            };
        case constants.LOGOUT_SUCCESS:
            return {...state,
                error : null
            };
        case constants.LOGOUT_ERROR:
            return {...state,
                error : action.error,
            };
        default:
            return state;
    }
};