import React from 'react'
import nav from "../../../../assets/img/img/home/1.jpg"
import "./Nav.css"
export default function Nav() {
    return (
        <div className="nav">
            <ul>
                <li><img src={nav} alt="" />
                    <span>限时抢购</span>
                </li>
                <li><img src={nav} alt="" />
                    <span>积分商城</span></li>
                <li><img src={nav} alt="" />
                    <span>联系我们</span></li>
                <li><img src={nav} alt="" />
                    <span>商品分类</span></li>
            </ul>
        </div>
    )
}
