import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class GoBack extends Component {
    goBack(){
        this.props.history.goBack()
    }
    render() {
        return (
            <span onClick={()=>this.goBack()}>&lt;</span>
        )
    }
}
export default  withRouter(GoBack)
