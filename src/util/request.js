import axios from "axios"
import qs from "qs"

//请求拦截
axios.interceptors.request.use(config=>{
    if(config.url !=="/api/login"){
        config.headers.authorization = JSON.parse(sessionStorage.getItem('user')).token;
    }
    return config
})
//响应拦截
// axios.interceptors.response.use(res=>{
//     console.log(res);
//     return res;
// })
//==============================首页=====================
//banner图
export const reqBanner=()=>{
    return axios({
        url:"/api/getbanner"
    })
}
//获取分类信息
export const reqCate=()=>{
    return axios({
        url:"/api/getcate"
    })
}
//获取限时秒杀信息
export const reqSeckill=()=>{
    return axios({
        url:"/api/getseckill"
    })
}
//获取商品信息首页的
export const reqIndexGoods=()=>{
    return axios({
        url:"/api/getindexgoods"
    })
}
//获取分类树形结构信息
export const reqCatetree=()=>{
    return axios({
        url:"/api/getcatetree"
    })
}
//获取分类商品
export const reqGoods=(params)=>{
    return axios({
        url:"/api/getgoods",
        params
    })
}
//获取一个商品信息
export const reqGoodInfo=(params)=>{
    return axios({
        url:"/api/getgoodsinfo",
        params
    })
}
//==============================注册=====================
export const reqRegister=(data)=>{
    return axios({
        url:"/api/register",
        method:"post",
        data:qs.stringify(data)
    })
}
//==============================登录=====================
export const reqLogin=(data)=>{
    return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(data)
    })
}
//==============================购物车=====================
//获取购物车列表
export const reqCartList=(params)=>{
    return axios({
        url:"/api/cartlist",
        params
    })
}
//购物车添加
export const reqCartAdd=(data)=>{
    return axios({
        url:"/api/cartadd",
        method:"post",
        data:qs.stringify(data)
    })
}
//购物车删除
export const reqCartDel=(data)=>{
    return axios({
        url:"/api/cartdelete",
        method:"post",
        data:qs.stringify(data)
    })
}
//购物车修改
export const reqCartEdit=(data)=>{
    return axios({
        url:"/api/cartedit",
        method:"post",
        data:qs.stringify(data)
    })
}