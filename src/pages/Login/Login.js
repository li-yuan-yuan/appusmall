import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { reqLogin } from "../../util/request"
import { Toast } from 'antd-mobile';
import {connect} from "react-redux"
import {changeUserAction} from "../../store/modules/user"
import "./Login.css"
class Login extends Component {
    constructor() {
        super()
        this.state = {
            userL: {
                phone: "",
                password: ""
            }
        }
    }
    successToast(msg) {
        Toast.success(msg, 1);
    }
    failToast(msg) {
        Toast.fail(msg, 1);
    }
    //修改user
    changeUser(ev, key) {
        this.setState({
            userL: {
                ...this.state.userL,
                [key]: ev.target.value
            }
        })
    }
    log() {
        reqLogin(this.state.userL).then(res => {
            if (res.data.code === 200) {
                this.successToast(res.data.msg)
                //要把res.data.list 存进redux/user/user 
                console.log(res.data);
                this.props.changeUser(res.data.list)
                sessionStorage.setItem("user",JSON.stringify(res.data.list))
                this.props.history.push("/index")
            } else {
                this.failToast(res.data.msg)
            }
            console.log(res);
        })
    }
    render() {
        const { userL } = this.state;
        return (
            <div className="login">
                <div className="top">登录
                <Link to="/register" className="reg">注册</Link>
                </div>
                <div className="main">
                    <p>
                        <span>账 号：</span>
                        <input type="text" value={userL.phone} onChange={(ev) => this.changeUser(ev, "phone")} />
                    </p>
                    <p>
                        <span>密 码：</span>
                        <input type="password" value={userL.password} onChange={(ev) => this.changeUser(ev, "password")} />
                    </p>
                    <div className="wpass">忘记密码</div>
                    <div className="logbtn" onClick={() => this.log()}>登录</div>
                </div>
            </div>
        )
    }
}
const mapState=(state)=>{
    console.log(state)
    return {
      
    }
}
const mapDispatch=(dispatch)=>{
    return {
        changeUser:(user)=>dispatch(changeUserAction(user))
    }
}
export default connect(mapState,mapDispatch)(Login)
