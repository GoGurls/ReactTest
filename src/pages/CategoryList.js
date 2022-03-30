import React,{ useEffect} from 'react'
// import axios from 'axios'
import CategoryRow from '../components/CategoryRow'
import { useHistory } from 'react-router-dom'
// import useFetchData from '../customHooks/useFetchData'
import { useSelector,useDispatch } from 'react-redux'
import { actionFetchCategory } from '../redux/actions/actionCategoryCreator'

export default function CategoryList () {
    console.log("masuk")
    // let [editCategory, setEditCategory] = useState({})
    // let [category, setCategory] = useState([])
    // let [category,loading,error,setCategory] = useFetchData('Categories')
    // let [subPage, setSubPage] = useState("CategoryList")
    let history = useHistory()
    const category = useSelector(state=>state.category.category)
    const loading = useSelector(state=>state.category.loading)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(actionFetchCategory())
    }, [])

    // function fetchCategory() {
    //     // console.log('masuk category')
    //     axios({
    //         url: "http://localhost:3000/Categories",
    //         method: "GET",
    //         headers:{
    //             access_token: localStorage.getItem("access_token")
    //         }
    //     })
    //     .then(({data}) => {
    //         console.log(data)
    //         // setCategory(data)
    //        dispatch(actionFetchCategory(data))
    //     })
        
    // }

    // function getOneCategory (id) {
    //     console.log(id, "===")
    //     axios({
    //         url: `http://localhost:3000/Categories/${id}`,
    //         method: "GET"
    //     })
    //     .then(({data}) => {
    //         // console.log(data)
    //         setCategory(data)
    //     })
    //     .catch(err => console.log(err))
    // }
    // function handleOnclick() {
    //     history.push('/category/add-category')
    // }
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
                <div className="container" style={{"marginTop": "20px"}}>
                    <h1>Category Data</h1>
                    <button type="button" className="btn btn-primary" style={{"float":"right", "margin": "20px"}} onClick={()=>history.push('/category/category-add')}>Add Category</button>
                    <table className="table table-secondary table-hover">
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                category.map((category, i=0) => (
                                    <CategoryRow key={category.id} category={category} no={i} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            }
            {/* {
                subPage === "CategoryList" || props.setPage==='Category' ?
                <div className="container" style={{"marginTop": "20px"}}>
                    <h1>Category Data</h1>
                    <button type="button" className="btn btn-primary" style={{"float":"right", "margin": "20px"}} onClick={handleOnclick}>Add Category</button>
                    <table className="table table-secondary table-hover">
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                category.map(category => (
                                    <CategoryRow key={category.id} category={category} setSubPage={setSubPage} getOneCategory={getOneCategory} fetchCategory={fetchCategory} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                : subPage === "AddCategoryForm" ?
                <AddCategoryForm setSubPage={setSubPage}/>
                : subPage === "EditCategoryForm" ?
                <EditCategoryForm setSubPage={setSubPage} />
                :
                null
            } */}
            
        </>
    )
}