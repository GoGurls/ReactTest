import axios from "axios"
import React, { useEffect,useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getStatusLogin } from "../redux/actions/actionUserCreator"
import Swal from 'sweetalert2'

export default function Register () {
    let dispatch= useDispatch()
    let loading = useSelector(state=>state.user.loading)
    let history= useHistory()
    let [input, setInput] = useState(
        {
            username:"",
            email:"",
            password:"",
            role:"admin",
            phoneNumber:"",
            address:""
        }
    )
    useEffect(() =>{
        dispatch(getStatusLogin(false))
    },[])

    function handleOnChange(e) {
        let {name,value}=e.target
        setInput({...input, [name]:value})
    }

    function prosesRegister(e){
        e.preventDefault()
        axios({
            url:"https://newsapp-phase3.herokuapp.com/register",
            method:"POST",
            data:input
        })
        .then(({data}) => {
            localStorage.setItem("access_token", data.access_token)
            history.push('/category')
            dispatch(getStatusLogin(true))
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
        <div className="register-box">
        <h2>Desert Register</h2>
        <form onSubmit={(e)=>prosesRegister(e)}>
            <div className="register-form">
                <label htmlFor="username">Username</label><br/>
                <input  type="text" id="username" name="username" onChange={(e)=>handleOnChange(e)}/><br/><br/>
                <label htmlFor="email">Email</label><br/>
                <input  type="text" id="email" name="email"  onChange={(e)=>handleOnChange(e)}/><br/><br/>
                <label htmlFor="password">Password</label><br/>
                <input  type="password" id="password" name="password" onChange={(e)=>handleOnChange(e)}/><br/><br/>
                <label htmlFor="role">Role</label><br/>
                <input  type="text" id="role" name="role" value="admin" onChange={(e)=>handleOnChange(e)}/><br/><br/>
                <label htmlFor="phoneNumber">Phone Number</label><br/>
                <input  type="text" id="phoneNumber" name="phoneNumber" onChange={(e)=>handleOnChange(e)}/><br/><br/>
                <label htmlFor="address">Address</label><br/>
                <input  type="text" id="address" name="address" onChange={(e)=>handleOnChange(e)}/><br/><br/>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </div>
        </form>
    </div>
        }
        </>
    )
}