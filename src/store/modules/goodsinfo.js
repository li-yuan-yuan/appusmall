import {reqGoodInfo} from "../../util/request"
const initState={
    goodsinfo:{}
}

//一个商品详情
export const changeGoodsInfoAction=(obj)=>{
    return {type:"changeGoodsInfo",obj:obj}
}
//一个商品详情
export const reqGoodsInfoAction=(id)=>{
    return(dispatch,getState)=>{
        //缓存层，有数据 不发请求
        let ginfo=getState().goodsinfo.goodsinfo
        if(Object.getOwnPropertyNames(ginfo).length!==0){
            // console.log(ginfo);
            if(id===ginfo[0].id+''){
                return;
            }
        }
        
        
        //发请求
        reqGoodInfo({id:id}).then(res=>{
            dispatch(changeGoodsInfoAction(res.data.list))
        })
       
    }
}
const reducer =(state=initState,action)=>{
    switch (action.type){
        //修改一个商品详情
        case "changeGoodsInfo":
            // console.log(action.obj);
            return {
                ...state,
                goodsinfo:action.obj
            }
        default:
            return state;
    }
}
export default reducer
//导出数据
export const goodsinfo=(state)=>state.goodsinfo.goodsinfo;
