import {reqIndexGoods} from "../../util/request"
const initState={
    indexgoods:[]
}

//首页商品列表
export const changeIndexGoodsAction=(arr)=>{
    return {type:"changeIndexGoods",list:arr}
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
const reducer =(state=initState,action)=>{
    switch (action.type){
        //修改首页商品列表
        case "changeIndexGoods":
            return {
                ...state,
                indexgoods:action.list
            }
        default:
            return state;
    }
}
export default reducer
//导出数据
export const indexgoods=(state)=>state.indexgoods.indexgoods;
