// import logo from './logo.svg';
import React, { useEffect, useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Category from './pages/Category';
import Home from './pages/Home';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './pages/Register';
import PrivateRoute from './PrivateRoute'
import { useDispatch, useSelector } from 'react-redux';
import { getStatusLogin } from './redux/actions/actionUserCreator';

function App() {
  // let [navbar, setNavbar] = useState(true)
  // let [statusLogin, setStatusLogin] = useState(false)
  let dispatch = useDispatch()
  let status_login = useSelector(state => state.user.statusLogin)
  console.log(status_login, "ini status")

  // console.log(statusLogin,"awal")

  
  return (
    <>
      {/* <Navbar setPage={setPage}/> */}
      {
        status_login ===true ?
        <Navbar /> 
        :
        null

      }

      
      {/* <Navbar/>  */}
      <Switch>
        {/* <Route path="/news">
          <Home />
        </Route> */}
        <PrivateRoute path="/category">
          <Category/>
        </PrivateRoute>
     
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      {/* {
        page === "Home" ? 
        <Home/>
        : page ==="Login" ?
        <Login/>
        : page === "Category" ? 
        <Category/>
        :
        <User/>
      } */}
    </>
  );
}

export default App;
