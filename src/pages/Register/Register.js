import React, { Component } from 'react'
import GoBack from "../../components/GoBack"
import { Toast } from 'antd-mobile';
import { reqRegister } from "../../util/request"
import "./Register.css"
export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
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
    register() {

        reqRegister(this.state.user).then(res => {
            if (res.data.code === 200) {
                this.successToast(res.data.msg)
                this.props.history.push("/login")
            } else {
                this.failToast(res.data.msg)
            }
            console.log(res);
        })
    }
    changeUser(ev, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: ev.target.value
            }
        })
    }

    render() {
        const { user } = this.state;
        return (
            <div className="reg">
                <div className="top">
                    <GoBack></GoBack>注册
                </div>
                <div className="main">
                    <p>
                        <span>手机号：</span>
                        <input type="text" value={user.phone} onChange={(ev) => this.changeUser(ev, "phone")} />
                    </p>
                    <p>
                        <span>昵 称：</span>
                        <input type="text" value={user.nickname} onChange={(ev) => this.changeUser(ev, "nickname")} />
                    </p>
                    <p>
                        <span>密 码：</span>
                        <input type="text" value={user.password} onChange={(ev) => this.changeUser(ev, "password")} />
                    </p>
                    <div className="logbtn" onClick={() => this.register()}>注册</div>
                </div>
            </div>
        )
    }
}
