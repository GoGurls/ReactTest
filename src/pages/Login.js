import React, {useEffect,useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getStatusLogin } from '../redux/actions/actionUserCreator'
import Swal from 'sweetalert2'

export default function Login () {
    let dispatch = useDispatch()
    let loading = useSelector(state=>state.user.loading)
    // let status_login = useSelector(state=> state.user.statusLogin)
    // console.log(props.statusLogin)
    let history = useHistory()
    let [input, setInput] = useState(
        {
            email: "",
            password:""
        }
    )

    useEffect(() => {
        dispatch(getStatusLogin(false))
    },[])
    // useEffect(() => {
    //     props.setStatusLogin(true)
    // },[])
    // useEffect(() =>{
    //     props.setStatusLogin(true)
    //     console.log(props.setStatusLogin(true))
    // })

    function handleOnChange(e){
        let{name,value} = e.target
        setInput({...input, [name]:value})
    }

    function prosesLogin(e){
        e.preventDefault(e)
        axios({
            url:"https://newsapp-phase3.herokuapp.com/login",
            method:"POST",
            data:input
        })
        .then(({data})=>{
            localStorage.setItem("access_token", data.access_token)
            history.push('/category')
            dispatch(getStatusLogin(true))
            // props.setStatusLogin(true)
            // console.log(props.setStatusLogin,"disini")
            // console.log(props.statusLogin,"disini")
        })
        .catch(err=>Swal.fire(err.response.data.message))
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
            <div className="login-box">
            <h2>Desert Login</h2>
            <form onSubmit={(e)=>prosesLogin(e)}>
                <div className="login-form">
                    <label htmlFor="email">Email</label><br/>
                    <input  type="text" id="email" name="email" onChange={(e)=>handleOnChange(e)}/><br/><br/>
                    <label htmlFor="password">Password</label><br/>
                    <input  type="password" id="password" name="password" onChange={(e)=>handleOnChange(e)}/><br/><br/>
                    <p className="not-registered">Not Registered ? <Link to="/register">Create an account</Link></p>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </div>
            </form>
            
            </div>
        }
        </>
    )
}