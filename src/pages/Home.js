// import React,{useEffect} from "react"
// // import TableRow from "../components/TableRow"
// // import axios from 'axios'
// import AddNewsForm from "./AddNewsForm"
// import EditNewsForm from "./EditNewsForm"
// // import useFetchData from "../customHooks/useFetchData"
// import { Route, useRouteMatch, Switch } from "react-router-dom"
// import NewsList from "./NewsList"
// import PrivateRoute from '../PrivateRoute'
// import {useDispatch, useSelector} from 'react-redux'
// import { getStatusLogin } from "../redux/actions/actionUserCreator"

// export default function Home (props) {
//     // let [news, setNews] = useState([])
//     // let [subPage, setSubPage] = useState('NewsList')
//     // let [editNews, setEditNews] = useState({})
//     // let [news, loadingNews, errorNews, setNews] = useFetchData()
//     let {path, url} = useRouteMatch()
    
//     let dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getStatusLogin(true))
//     },[])
    
//     // useEffect(() =>{
//     //     fetchNews()
//     // }, [])

//     // function fetchNews () {
//     //     axios ({
//     //         url: "http://localhost:3000/Posts",
//     //         method: "GET"
//     //     })
//     //     .then(({data}) =>{
//     //         setNews(data)
//     //     })
//     //     .catch(err => console.log(err))
//     // }

//     // function getOne(id) {
        
//     //     axios ({
//     //         url: `http://localhost:3000/Posts/${id}`,
//     //         method: "GET"
//     //     })
//     //     .then(({data}) =>{
//     //         setEditNews(data)
//     //     })
//     //     .catch(err => console.log(err))
//     // }

//     // function handleOnClick(e) {
//     //     setSubPage('AddNewsForm')
//     // }
//     return (
//         <>
//             <Switch>
//                 <Route exact path={`${url}`}>
//                     <NewsList/>
//                 </Route>
//                 <PrivateRoute path={`${url}/add-news`}>
//                     <AddNewsForm/>
//                 </PrivateRoute>
//                 <PrivateRoute path={`${url}/edit-news/:id`}>
//                     <EditNewsForm/>
//                 </PrivateRoute>
//             </Switch>
//             {/* {
//                 subPage === 'NewsList' ?  
//                 <div className="container" style={{"marginTop": "20px"}}>
//                 <h1>News Data</h1>
//                 <button type="button" className="btn btn-primary" style={{"float":"right", "margin": "20px"}} onClick={(e) => handleOnClick(e)}>Add News</button>
//                 <table className="table table-secondary table-hover">
//                     <thead>
//                         <tr>
//                         <th scope="col">No</th>
//                         <th scope="col">Title</th>
//                         <th scope="col">Slug</th>
//                         <th scope="col">Content</th>
//                         <th scope="col">Image</th>
//                         <th scope="col">Category</th>
//                         <th scope="col">Author</th>
//                         <th scope="col">Created Date</th>
//                         <th scope="col">Updated Date</th>
//                         <th scope="col">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             news.map(news => (
//                                 <TableRow key={news.id} news={news} fetchNews={fetchNews.bind(this)} setSubPage={setSubPage} getOne={getOne}/>                   
//                             ))
//                         }
//                     </tbody>
//                 </table>
//                 </div>
//                 :
//                 subPage === "AddNewsForm" ?
//                 <div>
//                     <AddNewsForm editNews={editNews} fetchNews={fetchNews.bind(this)} setSubPage={setSubPage} />
//                 </div>
//                 :
//                 <EditNewsForm editNews={editNews} fetchNews={fetchNews.bind(this)} setSubPage={setSubPage} />
//             } */}
            
//         </>
//     )
// }