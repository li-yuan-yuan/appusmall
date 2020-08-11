import { createStore ,applyMiddleware} from "redux"
import {reqBanner,reqIndexGoods,reqGoodInfo,reqCatetree,reqGoods} from "../util/request"
import thunk from "redux-thunk"
//
const initState = {
    banners: [],
    indexgoods:[],
    goodsinfo:{},
    catetree:[],
    goods:[]
}


//dispatch(changeBannerAction())
//banner
const changeBannerAction=(arr)=>{
    return {type:"changeBanner",list:arr}
}
//首页商品列表
const changeIndexGoodsAction=(arr)=>{
    return {type:"changeIndexGoods",list:arr}
}
//一个商品详情
const changeGoodsInfoAction=(obj)=>{
    return {type:"changeGoodsInfo",obj:obj}
}
//分类树形结构
const changeCatetreeAction=(arr)=>{
    return {type:"changeCatetree",list:arr}
}
//分类商品chageGoods
const changeGoodsAction=(arr)=>{
    return {type:"chageGoods",list:arr}
}
//============================action creators=========================
//页面一进来就要发起一个请求 dispatch(requestBannerAction())
//banner
export const requestBannerAction=()=>{
    //如果在一个action creator中，要处理异步操作，需要return 一个函数
    return (dispatch,getState)=>{
        //缓存层，有数据 不发请求
        const {banners}=getState()
        if(banners.length>0){
            return;
        }
        //发请求
        reqBanner().then(res=>{
            dispatch(changeBannerAction(res.data.list))
        })
    }
}
//首页商品列表
export const reqIndexGoodsAction=()=>{
    return (dispatch,getState)=>{
        //缓存层，有数据 不发请求
        const {indexgoods}=getState()
        if(indexgoods.length>0){
            return;
        }
        //发请求
        reqIndexGoods().then(res=>{
            dispatch(changeIndexGoodsAction(res.data.list))
        })
    }
}
//一个商品详情
export const reqGoodsInfoAction=(id)=>{
    return(dispatch,getState)=>{
        //缓存层，有数据 不发请求
        if(getState().goodsinfo[0]){
            if(id===getState().goodsinfo[0].id+''){
                return;
            }
        }
        
        //发请求
        reqGoodInfo({id:id}).then(res=>{
            dispatch(changeGoodsInfoAction(res.data.list))
        })
       
    }
}
//分类树形结构
 export const reqCatetreeAction=()=>{
    return(dispatch,getState)=>{
         //缓存层，有数据 不发请求
         const {catetree}=getState()
         if(catetree.length>0){
             return;
         }

        //发请求
        reqCatetree().then(res=>{
            dispatch(changeCatetreeAction(res.data.list))
        })
    }
}
//分类商品
// changeGoodsAction
export const reqGoodsAction=(fid)=>{
    return(dispatch,getState)=>{
        //缓存层，有数据 不发请求
        const {goods}=getState()
        if(goods.length>0){
            return;
        }
        //发请求
        reqGoods({fid:fid}).then(res=>{
            dispatch(changeGoodsAction(res.data.list))
        })
    }
}



//reducer 修改state
const reducer = (state = initState, action) => {
    switch (action.type) {
        //修改banner列表
        case "changeBanner":
            return {
                ...state,
                banners:action.list
            }
        //修改首页商品列表
        case "changeIndexGoods":
            return {
                ...state,
                indexgoods:action.list
            }
        //修改一个商品详情
        case "changeGoodsInfo":
            console.log(action.obj);
            return {
                ...state,
                goodsinfo:action.obj
            }
        //修改分类树形结构
        case "changeCatetree":
            return {
                ...state,
                catetree:action.list
            }
        //修改分类商品
        case "chageGoods":
            return {
                ...state,
                goods:action.list
            }
        default:
            return state
    }
}
//导出数据
export const banners=(state)=>state.banners;
export const indexgoods=(state)=>state.indexgoods;
export const goodsinfo=(state)=>state.goodsinfo;
export const catetree=(state)=>state.catetree;
export const goods=(state)=>state.goods;
//创建仓库
const store = createStore(reducer,applyMiddleware(thunk))
export default store