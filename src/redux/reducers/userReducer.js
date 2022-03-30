import { ACCESS_TOKEN_CHANGED, ERROR_USER_CHANGED, LOADING_USER_CHANGED, STATUS_LOGIN_CHANGED, USER_CHANGED } from "../actions/actionKeys";

let initialState={
    user:[],
    statusLogin: false,
    access_token: localStorage.getItem('access_token'),
    loading: false,
    error: false
}

export default function reducer (state=initialState, action){
    switch (action.type) {
        case ACCESS_TOKEN_CHANGED :
            return {...state, access_token: action.access_token}
        case STATUS_LOGIN_CHANGED :
            return {...state, statusLogin: action.statusLogin}
        case USER_CHANGED :
            return {...state, user:action.user}
        case LOADING_USER_CHANGED:
            return {...state, loading:action.loading}
        case ERROR_USER_CHANGED:
            return {...state, error:action.error}
        default:
            return state
    }
} 