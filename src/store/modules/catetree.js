import {reqCatetree} from "../../util/request"
const initState={
    catetree:[]
}
//分类树形结构
export const changeCatetreeAction=(arr)=>{
    return {type:"changeCatetree",list:arr}
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

const reducer =(state=initState,action)=>{
    switch (action.type){
        //修改分类树形结构
        case "changeCatetree":
            return {
                ...state,
                catetree:action.list
            }
        default:
            return state;
    }
}
export default reducer
//导出数据
export const catetree=(state)=>state.catetree.catetree;
