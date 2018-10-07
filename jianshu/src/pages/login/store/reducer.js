import { fromJS } from "immutable"
import * as actionType from "./actionType";

const defaultState = fromJS({
   loginState:false

})



export default (state = defaultState,action)=>{
    switch (action.type){
       case actionType.CHANGELOGIN:
            return state.set("loginState",action.value);
        case actionType.CHANGELOGINS:
        return state.set("loginState",action.value);
        default:
            return state
    }
      
}