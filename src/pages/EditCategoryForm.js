import axios from "axios";
import react, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import  {useDispatch, useSelector} from "react-redux"
import { actionGetOneCategory, actionLoadingCategory } from "../redux/actions/actionCategoryCreator";
import Swal from "sweetalert2";

export default function EditCategoryForm () {
    let {id} = useParams()
    console.log(id, "id")
    let [category, setCategory] = useState({name:""})
    let history = useHistory()
    let loading = useSelector(state=>state.category.loading)
    let dispatch = useDispatch()
    let categoryById = useSelector(state => state.category.categoryById)

    useEffect(()=>{
        dispatch(actionGetOneCategory(id))
    },[])

    useEffect(() =>{
        if(Object.keys(categoryById)!==0){
            setCategory({name:categoryById.name})
        }
    },[categoryById])

    // function getOneCategory() {
    //     axios({
    //         url: `http://localhost:3000/Categories/${id}`,
    //         method: "GET",
    //         headers:{
    //             access_token: localStorage.getItem("access_token")
    //         }
    //     })
    //     .then(({data}) => {
    //         setCategory(data)
    //     })
    //     .catch(err => console.log())
    // }

    function handleOnChange (e) {
        const{name,value} = e.target
        setCategory({...category, [name]: value})
    }
    function editCategory(e) {
        dispatch(actionLoadingCategory(true))
        e.preventDefault()
        axios({
            url:`https://newsapp-phase3.herokuapp.com/Categories/${id}`,
            method:"PUT",
            data: category,
            headers:{
                access_token: localStorage.getItem("access_token")
            }
        })
        .then(({data}) =>{
            history.push('/category')
        })
        .catch(err => Swal.fire(err.response.data.message))
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
                    <h1 style={{"marginBottom": "40px", "textAlign": "center"}}>Form News Edit</h1>
                    <form onSubmit={(e) => editCategory(e)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Category Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={category.name} onChange={(e)=> handleOnChange(e)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            }
        </>
    )
}