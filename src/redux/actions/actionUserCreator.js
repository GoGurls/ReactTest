import { ACCESS_TOKEN_CHANGED, STATUS_LOGIN_CHANGED, USER_CHANGED,LOADING_USER_CHANGED, ERROR_USER_CHANGED } from "./actionKeys";
import axios from "axios";
import Swal from 'sweetalert2'

export function getAccessToken (access_token){
    return {type: ACCESS_TOKEN_CHANGED, access_token}
}

export function getStatusLogin (statusLogin){
    return {type: STATUS_LOGIN_CHANGED, statusLogin}
}

export function actionFetchUser(){
    // return {type:TAG_CHANGED, tag}
    return (dispatch, previousState) =>{
        dispatch(actionLoadingUser(true))
        axios ({
            url: `https://newsapp-phase3.herokuapp.com/`,
            method: "GET"
        })
        .then(({data}) =>{
            console.log(data, "di action")
            // console.log(loading, "ini loading")
            // dispatch(actionFetchTag(data))
            dispatch({
                type:USER_CHANGED,
                user: data
            })

        })
        .catch(err => {
            Swal.fire(err.response.data.message)
        })
        .finally(_ => {
            dispatch(actionLoadingUser(false))
        })
    }
}

export function actionLoadingUser(loading){
    return {type: LOADING_USER_CHANGED, loading}
}

export function actionErrorUser(error){
    return {type:ERROR_USER_CHANGED, error}
}

