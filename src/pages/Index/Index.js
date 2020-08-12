import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import asyncComponent from "../../util/asyncComponent"
import "./Index.css"

import tabHome from "../../assets/img/tab_home_nor.png"
import tabCate from "../../assets/img/tab_menu_nor.png"
import tabCart from "../../assets/img/tab_shopping_nor.png"
import tabMine from "../../assets/img/tab_me_nor.png"
import tabHomeA from "../../assets/img/tab_home_hig.png"
import tabCateA from "../../assets/img/tab_menu_hig.png"
import tabCartA from "../../assets/img/tab_shopping_hig.png"
import tabMineA from "../../assets/img/tab_me_hig.png"
//路由拦截
import MyRoute from "../../components/MyRoute"
//懒加载
const Home =asyncComponent(()=>import("../Home/Home"))
const Cate =asyncComponent(()=>import("../Cate/Cate"))
const Cart =asyncComponent(()=>import("../Cart/Cart"))
const Mine =asyncComponent(()=>import("../Mine/Mine"))

export default class Index extends Component {

    render() {
        let actionPath = this.props.location.pathname
        return (
            <div>
                <Switch>
                    <MyRoute path="/index/home" component={Home}></MyRoute>
                    <MyRoute path="/index/cate" component={Cate}></MyRoute>
                    <MyRoute path="/index/cart" component={Cart}></MyRoute>
                    <MyRoute path="/index/mine" component={Mine}></MyRoute>
                    <Redirect to="/index/home"></Redirect>
                </Switch>
                <footer>
                    <NavLink to="/index/home" activeClassName="actionFont">
                        <span><img src={actionPath === "/index/home" ? tabHomeA : tabHome} alt="" /></span>
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/index/cate" activeClassName="actionFont">
                        <span><img src={actionPath === "/index/cate" ? tabCateA : tabCate} alt="" /></span>

                        <span>分类</span>
                    </NavLink>
                    <NavLink to="/index/cart" activeClassName="actionFont">
                        <span><img src={actionPath === "/index/cart" ? tabCartA : tabCart} alt="" /></span>
                        <span>购物车</span>
                    </NavLink>
                    <NavLink to="/index/mine" activeClassName="actionFont">
                        <span><img src={actionPath === "/index/mine" ? tabMineA : tabMine} alt="" /></span>
                        <span>我的</span>
                    </NavLink>
                </footer>
            </div>
        )
    }
}
