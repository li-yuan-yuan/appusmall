import {reqGoods} from "../../util/request"
const initState={
    goods:[]
}

//分类商品chageGoods
export const changeGoodsAction=(arr)=>{
    return {type:"chageGoods",list:arr}
}

//分类商品
// changeGoodsAction
export const reqGoodsAction=(fid)=>{
    return(dispatch,getState)=>{
        //缓存层，有数据 不发请求  这个做的不对o(╥﹏╥)o
        // const {goods}=getState()
        // console.log(getState())
        // if(goods){
        //     if(fid===goods.fid+''){
        //         return;
        //     }
        // }
        //发请求
        reqGoods({fid:fid}).then(res=>{
            dispatch(changeGoodsAction(res.data.list))
        })
    }
}

const reducer =(state=initState,action)=>{
    switch (action.type){
         //修改分类商品
         case "chageGoods":
            return {
                ...state,
                goods:action.list
            }
        default:
            return state;
    }
}
export default reducer
//导出数据
export const catetree=(state)=>state.catetree.catetree;
export const goods=(state)=>state.goods.goods;
