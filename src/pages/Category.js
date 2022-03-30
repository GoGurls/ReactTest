import React from "react"
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom'
// import axios from 'axios'
import AddCategoryForm from "./AddCategoryForm"
import EditCategoryForm from "./EditCategoryForm"
import CategoryList from "./CategoryList"
import PrivateRoute from '../PrivateRoute'

export default function Category (props) {
    let {url, path} = useRouteMatch()
    return (
        <Switch>
            <PrivateRoute exact path={`${url}`}>
                <CategoryList/>
            </PrivateRoute>
            <PrivateRoute path={`${url}/category-add`}>
                <AddCategoryForm/>
            </PrivateRoute>
            <PrivateRoute path={`${url}/category-edit/:id`}>
                <EditCategoryForm/>
            </PrivateRoute>
        </Switch>
    )
}