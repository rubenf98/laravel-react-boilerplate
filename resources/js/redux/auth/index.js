import { types } from "./types";

export const initialState = {
    isAuthenticated: false,
    isAdministrator: false,
    loading: false,
    currentUser: {}
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.LOGIN}_PENDING`:
        case `${types.REGISTER}_PENDING`:
        case `${types.LOGOUT}_PENDING`:
        case `${types.ME}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.REGISTER}_REJECTED`:
        case `${types.REGISTER}_FULFILLED`:
        case `${types.LOGOUT}_REJECTED`:
            return {
                ...state,
                loading: false
            };

        case `${types.ME}_REJECTED`:
        case `${types.LOGIN}_REJECTED`:
        case `${types.LOGOUT}_FULFILLED`:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                currentUser: {},
                isAdministrator: false,
                userHasFracao: false
            };

        case `${types.LOGIN_SUCCESS}`:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
            };



        case `${types.ME}_FULFILLED`:
        case `${types.LOGIN}_FULFILLED`:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                currentUser: action.payload.data.data,
                isAdministrator: action.payload.data.data.administrador,
                userHasFracao: action.payload.data.data.fracaos.length > 0 && true
            };
        default:
            return state
    }
}