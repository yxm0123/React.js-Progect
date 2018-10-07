import * as actionType  from "./actionType" ;
import { fromJS } from "immutable";

export const getDeatilsLst=(id)=>({
    type:actionType.DETAILSlIST,
    id
})


export  const changDetailData = (data) =>({
    type:actionType.CHANGDETAILDATA,
    data:fromJS(data)
})