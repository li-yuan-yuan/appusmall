import {reqGoods} from "../../util/request"
const initState={
    goods:[],
    gid:0
}

//分类商品chageGoods
export const changeGoodsAction=(arr)=>{
    return {type:"chageGoods",list:arr}
}

// 修改当前分类id
const changeGid = (id) => {
    return{
        type:'changeGid',
        id
    }
}

//分类商品
// changeGoodsAction
export const reqGoodsAction=(fid)=>{
    return(dispatch,getState)=>{
        //缓存层，有数据 不发请求  
        // console.log(fid,getState().goods.gid);
        if(fid === getState().goods.gid){
            return;
        }

        //发请求
        reqGoods({fid:fid}).then(res=>{
            dispatch(changeGid(fid));
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
        case 'changeGid':
            return{
                ...state,
                gid: action.id
            }

        default:
            return state;
    }
}
export default reducer
//导出数据
export const catetree=(state)=>state.catetree.catetree;
export const goods=(state)=>state.goods.goods;
