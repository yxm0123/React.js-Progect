
import * as actionType  from "./actionType" ;
import { fromJS } from "immutable";


export const changHomeData=()=>({
    type:actionType.CHANGEHOMEDATA,
   
})

export const changBackData = (info)=>({
    type:actionType.CHANGEBACKDATA,
    info
    

})

//加载更多
export const getMoreInfo = (page)=>({
    // console.log("ssss")
    type:actionType.GETMORELIST,
    page
})

export const toMoreInfo = (info,pages)=>({
    type:actionType.TOMOREINFO,
    info:fromJS(info),
    pages
})

//返回顶部
export const backScrollTop = (shows) =>({
    type:actionType.BACKSCEOLLTOP,
    shows
})
//获取轮播图图片
// export const getImgs = () =>({
//     type:actionType.GETIMGLIST
// })

// export const toGetImgList = (data)=>({
//     type:actionType.TOGETIMGLIST,
//     data
// })
