import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import Index from "./pages/Index/Index"
import Lodin from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import GoodsDetail from "./pages/GoodsDetail/GoodsDetail"
import GoodsList from "./pages/GoodsList/GoodsList"
function App() {
  return (
    <div >
     <Switch>
       <Route path="/login" component={Lodin}></Route>
       <Route path="/register" component={Register}></Route>
       <Route path="/index" component={Index}></Route>
       <Route path="/goodsDetail" component={GoodsDetail}></Route>
       <Route path="/goodsList" component={GoodsList}></Route>
       <Redirect to="/login" component={Lodin}></Redirect>
      
     </Switch>
    </div>
  );
}

export default App;
