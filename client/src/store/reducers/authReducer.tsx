import { AUTH_REGISTER, AUTH_REQUEST, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK_ERROR, AUTH_CHECK_SUCCESS } from "../types/types";

const initialState = {
    user: null,
    authErrors: {
        message: null,
        status: null,
        statusText: null,
        errors: {}
    },
    isAuth: false
}

export default function authReducer(state=initialState, action) {    
    switch (action.type) {
        case AUTH_CHECK_SUCCESS:
        case AUTH_REQUEST:
        case AUTH_REGISTER:
            return {
                ...state,
                user: action.payload.user,
                isAuth: true
            }
        case AUTH_LOGOUT:
        case AUTH_CHECK_ERROR:
            return {
                ...state,
                user: null,
                isAuth: false
            }
        case AUTH_ERROR:
            return {
                ...state,
                authErrors: {
                    ...action.payload
                }
            }
        default:
            return state
    }
}