import { reqCartList, reqCartEdit, reqCartDel } from "../../util/request"
import { getUser } from "./user"
const initState = {
    list: [],//购物车的列表
    isEditor: false,//是否编辑
    isAll: false,//是否全选
}

//action creator 
// 修改list
export const changeListAction = list => {
    return { type: "changeList", list: list }
}

//修改isEdior 
export const changeIsEditorAction = () => ({
    type: "changeIsEditor"
})
//修改isAll
export const changeIsAllAction = () => ({
    type: "changeIsAll"
})
//修改某条数据的checked
export const changeOneAction = (index) => ({
    type: "changeOne",
        index
})
//用户在组件点了+-
export const reqEditAction = data => {
    return (dispatch) => {
        reqCartEdit(data).then(res => {
            dispatch(reqListAction())
        })
    }
}
//删除
export const reqDelAction = id => {
    return (dispatch) => {
        reqCartDel({ id: id }).then(res => {
            dispatch(reqListAction())
        })
    }
}




//页面出发发起获取列表请求
export const reqListAction = () => {
    return (dispatch, getState) => {
        //缓存层，有数据 不发请求
        // if(getState().goodsinfo[0]){
        //     if(id===getState().goodsinfo[0].id+''){
        //         return;
        //     }
        // }

        //发请求
        reqCartList({ uid: getUser(getState()).uid }).then(res => {
            const list = res.data.list ? res.data.list : [];
            list.forEach(item => {
                item.checked = false
            })
            dispatch(changeListAction(list))
        })

    }
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        //修改一个商品详情
        case "changeList":
            return {
                ...state,
                list: action.list
            }
        case "changeIsEditor":
            return {
                ...state,
                isEditor: !state.isEditor
            }
        case "changeIsAll":
            return {
                ...state,
                isAll: !state.isAll,
                list: state.list.map(item => {
                    item.checked = !state.isAll;
                    return item
                })
            }
        case "changeOne":
            const { list } = state
            list[action.index].checked = !list[action.index].checked
            return {
                ...state,
                list: [...list],
                isAll: list.every(item => item.checked)
            }
        default:
            return state;
    }
}

//导出数据
export const shopList = (state) => state.shop.list;
export const isEditor = state => state.shop.isEditor;
export const isAll = state => state.shop.isAll;
export const getAllPrice = state => {
    
    var sum=0;
    const {list}=state.shop
    list.forEach(item=>{
        if(item.checked){
            sum+=item.price*item.num
        }
    })
    return sum
    /*方法二
    const { list } = state.shop
    return list.reduce((val, item) => item.checked ? val + item.price * item.num : val, 0)*/
}
export default reducer
