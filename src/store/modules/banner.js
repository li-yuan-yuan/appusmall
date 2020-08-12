import {reqBanner} from "../../util/request"
const initState={
    banners: []
}

//修改user的action
export const changeBannerAction=(arr)=>{
    return {type:"changeBanner",list:arr}
}
//banner
export const requestBannerAction=()=>{
    //如果在一个action creator中，要处理异步操作，需要return 一个函数
    return (dispatch,getState)=>{
        //缓存层，有数据 不发请求
        const {banners}=getState().banners
        if(banners.length>0){
            return;
        }
        //发请求
        reqBanner().then(res=>{
            dispatch(changeBannerAction(res.data.list))
        })
    }
}
const reducer =(state=initState,action)=>{
    switch (action.type){
        //修改banner列表
        case "changeBanner":
            return {
                ...state,
                banners:action.list
            }
        default:
            return state;
    }
}
export default reducer
//导出数据
export const banners=(state)=>state.banners.banners;
