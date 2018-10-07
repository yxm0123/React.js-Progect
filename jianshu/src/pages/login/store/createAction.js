import * as actionType from "./actionType"
// import axios from "axios"


export const getToLogin = (user,pass)=>({
   type:actionType.GETLOFINS,
   user:user,
   pass:pass,
})


//改变login状态

export const changeLogin = ()=>({
    type:actionType.CHANGELOGIN,
    value:true,
   
})


export const changeLogins = ()=>({
    type:actionType.CHANGELOGINS,
    value:false
})