import * as actionType from "./actionType.js"
import { fromJS } from "immutable"
const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});

export default (state = defaultState,action) =>{

    switch(action.type){

        case actionType.ONINPUTFOCUS:
            return state.set("focused",true);

        case actionType.ONINPUTBLUR:
            return state.set("focused",false);

        case actionType.SEACHHOSTS:
                return state.merge({
                    list:action.data,
                    totalPage:action.totalPage
                })
            // return state.set("list",action.data).set("totalPage",action.totalPage);

        case actionType.ONMOUSERENTER:
            return state.set("mouseIn",true);

        case actionType.ONMOUSERLEAVE:
            return state.set("mouseIn",false);

        case actionType.ONCHANGEITEMS:
            return state.set("page",action.page)
        default:
             return state;
    }

    // if(action.type === actionType.ONINPUTFOCUS){
    //     return state.set("focused",true)
    // }
    // if(action.type ===  actionType.ONINPUTBLUR){
    //     return state.set("focused",false)
    // }   

    // if(action.type === actionType.SEACHHOSTS ){
    //     console.log(action)
    //     return state.set('list',action.data)
    // }
    // return state;
}