import React, { Component } from 'react'
import {Route,Redirect} from "react-router-dom"
export default class MyRoute extends Component {
    render() {
        const isLogin =sessionStorage.getItem("user")
        return (
            <div>
                {isLogin?<Route {...this.props}></Route>:<Redirect to="/login"></Redirect>}
            </div>
        )
    }
}