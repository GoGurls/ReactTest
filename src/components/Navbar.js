import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'

export default function Navbar (props) {
    // let [statusLogin, setStatusLogin] = useState(false)
    let history= useHistory()
    let dispatch = useDispatch()
    let access_token = useSelector(state=>state.user.access_token)
    console.log(access_token, "ini access")
    function prosesLogout(e){
        e.preventDefault()
        localStorage.removeItem("access_token")
        history.push('/login')
        // props.setStatusLogin(false)
    }
//    useEffect(()=>{
//        props.setStatusLogin()
//    },[props.setStatusLogin()])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="text-white navbar-brand">News Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav " >
                        {/* <li className="nav-item ">
                        <a className="text-white nav-link active" aria-current="page" href="#">Home</a>
                        </li> */}
                        {/* <li className="nav-item">
                        <Link to="/news" className="text-white nav-link" >News</Link>
                        </li> */}
                        <li className="nav-item">
                        <Link to="/category" className="text-white nav-link" >Category</Link>
                        </li>
                       
                        {
                            !access_token ? 
                            <li className="nav-item"  >
                            <Link to="/login" className="text-white nav-link" style={{"textAlign": "right"}}>Login</Link>
                            </li>
                            :null
                        }
                        {
                            access_token ?
                            <li className="nav-item" >
                            <a className="text-white nav-link" href="#" onClick={(e)=>prosesLogout(e)}>Logout</a>
                            </li>
                            :null
                        }
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}