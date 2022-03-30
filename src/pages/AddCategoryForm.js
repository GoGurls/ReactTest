import axios from 'axios'
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { actionAddCategory, actionLoadingCategory } from '../redux/actions/actionCategoryCreator'
import Swal from 'sweetalert2'
export default function AddCategoryForm (props) {
    let [categoryInput, setCategoryInput] = useState({name:''})
    let history = useHistory()
    let dispatch= useDispatch()
    let loading = useSelector(state =>state.category.loading)

    function handleOnChange (e) {
        let {name, value} = e.target
        setCategoryInput({...categoryInput, [name]: value})
    }
    function handleOnSubmit (e) {
        dispatch(actionLoadingCategory(true))
        e.preventDefault()
        axios({
            url:"https://newsapp-phase3.herokuapp.com/Categories",
            method: "POST",
            data: categoryInput,
            headers:{
                access_token: localStorage.getItem("access_token")
            }
        })
        .then(({data})=>{
            // props.fetchCategory()
            // dispatch(actionAddCategory(categoryInput))
            history.push('/category')
        })
        .catch(err =>Swal.fire(err.response.data.message))
        .finally(_ => dispatch(actionLoadingCategory(false)))
    }
    return (
        <>
        {
            loading ?
            <div id="loader-wrapper">
                <h3>Loading...</h3>
                <div id="loader"></div>
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
            :
            <div className="container" style={{"marginTop": "40px", "width": "57%"}}>
                <h1 style={{"marginBottom": "40px", "textAlign": "center"}}>Form Category Add</h1>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Category Name</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={(e) => handleOnChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        }
        </>
    )
}