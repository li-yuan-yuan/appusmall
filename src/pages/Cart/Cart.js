import React, { Component } from 'react'
import "./Cart.css"
export default class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <h3>购物车列表</h3>
                <ul>
                    <li>
                        <div className="cline1">
                            <img src="" alt=""/>
                            杭州分工会尽快
                        </div>
                        <div className="cline2">
                            <div className="circle">
                                <img src="" alt=""/>
                            </div>
                            <div className="cimg">
                                <img src="" alt=""/>
                            </div>
                            <div className="clist">
                                <h4>是对方过后就</h4>
                                <div>
                                    <span>-</span>
                                    <em>2</em>
                                    <span>+</span>
                                </div>
                                <p>总价：2345</p>
                            </div>
                            <div className="sumPrice">
                                ￥234
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
