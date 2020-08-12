import React from 'react';
import asyncComponent from "./util/asyncComponent"
import {Switch,Route,Redirect} from "react-router-dom"
//路由拦截
import MyRoute from "./components/MyRoute"
//懒加载
const Index =asyncComponent(()=>import("./pages/Index/Index"))
const Lodin =asyncComponent(()=>import("./pages/Login/Login"))
const Register =asyncComponent(()=>import("./pages/Register/Register"))
const GoodsDetail =asyncComponent(()=>import("./pages/GoodsDetail/GoodsDetail"))
const GoodsList =asyncComponent(()=>import("./pages/GoodsList/GoodsList"))

function App() {
  return (
    <div >
     <Switch>
       <Route path="/login" component={Lodin}></Route>
       <Route path="/register" component={Register}></Route>
       <MyRoute path="/index" component={Index}></MyRoute>
       <MyRoute path="/goodsDetail" component={GoodsDetail}></MyRoute>
       <MyRoute path="/goodsList" component={GoodsList}></MyRoute>
       <Redirect to="/login" component={Lodin}></Redirect>
      
     </Switch>
    </div>
  );
}

export default App;
