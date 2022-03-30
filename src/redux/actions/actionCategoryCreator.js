import { CATEGORY_CHANGED, ERROR_CATEGORY_CHANGED, GETONE_CATEGORY_CHANGED, LOADING_CATEGORY_CHANGED } from "./actionKeys";
import axios from "axios";
import Swal from 'sweetalert2'
export function actionFetchCategory(category){
    // return {type:CATEGORY_CHANGED, category}
    return (dispatch, previousState) =>{
        dispatch(actionLoadingCategory(true))
        axios({
            url: "https://newsapp-phase3.herokuapp.com/Categories",
            method: "GET",
            headers:{
                access_token: localStorage.getItem("access_token")
            }
        })
        .then(({data}) => {
            console.log(data)
            // setCategory(data)
           dispatch({
               type: CATEGORY_CHANGED,
               category: data 
           })
        })
        .catch(err => {
            // dispatch({
            //     type: ERROR_CATEGORY_CHANGED,
            //     error: err // langsung pake swall aja gausah dispatchan
            // })
            Swal.fire(err.response.data.message)
        })
        .finally(_ => {
            dispatch(actionLoadingCategory(false))
        })
    }
}

export function actionLoadingCategory(loading){
    return {type:LOADING_CATEGORY_CHANGED, loading}
}

export function actionErrorCategory(error){
    return {type:ERROR_CATEGORY_CHANGED, error}
}

// export function actionAddCategory(categoryInput){
//     return {type:CATEGORY_ADD, payload: categoryInput}
// }
export function actionGetOneCategory(id){
    return function (dispatch, previousState) {
        dispatch(actionLoadingCategory(true))
        axios({
            url: `https://newsapp-phase3.herokuapp.com/Categories/${id}`,
            method: "GET",
            headers:{
                access_token: localStorage.getItem("access_token")
            }
        })
        .then(({data}) => {
            dispatch({
                type: GETONE_CATEGORY_CHANGED,
                categoryById: data
            })
        })
        .catch(err => Swal.fire(err.response.data.message))
        .finally(_ => dispatch(actionLoadingCategory(false)))
    }
}