import axios from "axios"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { actionFetchCategory, actionLoadingCategory } from "../redux/actions/actionCategoryCreator"

export default function CategoryRow (props) {
    let history= useHistory()
    let dispatch = useDispatch()
    let loading = useSelector(state=> state.category.loading)
    
    function deleteCategory(e, id) {
        dispatch(actionLoadingCategory(true))
        axios({
            url: `https://newsapp-phase3.herokuapp.com/Categories/${id}`,
            method: "DELETE",
            headers:{
                access_token: localStorage.getItem("access_token")
            }
        })
        .then(({data}) => {
            // props.setSubPage("CategoryList")
            dispatch(actionFetchCategory())
            history.push("/category")
        })
        .catch(err => console.log(err))
        .finally(_ => dispatch(actionLoadingCategory(false)))
    }
    function toEditCategoryForm (e, id) {
        // console.log(id)
        history.push(`/category/category-edit/${id}`)
        // console.log(props.getOneCategory(id)) //id yg akan dilempar di getOneCategory
        
    }
    return (
        <>
        {
            loading ?
            <div id="loader-wrapper">
                <h2>Loading...</h2>
                <div id="loader"></div>
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
            :
            <tr>
                <td>{props.no+1}</td>
                <td>{props.category.name}</td>
                <td span ="2">
                    <button type="button" className="btn btn-success" onClick={(e)=>toEditCategoryForm(e, props.category.id)} >Edit</button>
                    <button type="button" className="btn btn-light" onClick={(e)=>deleteCategory(e, props.category.id)}>Delete</button>
                </td>
            </tr>
        }
        </>
    )
}