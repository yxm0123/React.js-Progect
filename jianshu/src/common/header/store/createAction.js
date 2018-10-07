import * as actionType from "./actionType.js"
import {fromJS} from "immutable"
export const seachFocus = () =>({
    type:actionType.ONINPUTFOCUS
})

export const seachBlur = () =>({
    type:actionType.ONINPUTBLUR
})

export const hostSearchs = ()=>({
    type:actionType.HOSTSEARCH
})



export const onMouserEenters = ()=>({
   
    type:actionType.ONMOUSERENTER
})
export const onMouserLeave = ()=>({
   
    type:actionType.ONMOUSERLEAVE
})

//鼠标点击事件
export const onChangeItems =(page)=>({
    type:actionType.ONCHANGEITEMS,
    page
})
//处理axios请求数据
export const getHostItem =(data)=>({
    type:actionType.SEACHHOSTS,
    data:fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
