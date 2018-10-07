import { fromJS } from "immutable";
import * as actionType from "./actionType"

const defaultState  = fromJS({
   list:[]
})
export default (state = defaultState,action) =>{
    switch(action.type){
        case actionType.CHANGDETAILDATA:
            console.log("55555",action.data);
            return state.set("list",action.data)
        default:
            return state
    }
    

}