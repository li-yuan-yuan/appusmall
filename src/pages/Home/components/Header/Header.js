import React from 'react'
import logo from "../../../../assets/img/img/home/logo.jpg"
import "./Header.css"
export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <input type="text" placeholder="寻找商品"/>
        </div>
    )
}
