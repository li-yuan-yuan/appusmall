import { createStore ,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import banners from "./modules/banner"
import catetree from "./modules/catetree"
import goods from "./modules/goods"
import goodsinfo from "./modules/goodsinfo"
import indexgoods from "./modules/indexgoods"
import user from "./modules/user"
import shop from "./modules/shop"
//
const reducer = combineReducers({
    banners,
    indexgoods,
    goodsinfo,
    catetree,
    goods,
    user,
    shop
})
const store = createStore(reducer,applyMiddleware(thunk))
export default store