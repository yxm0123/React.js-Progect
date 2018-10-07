import { fromJS } from "immutable"
import * as actionType from "./actionType";

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    writeList:[],
    articlPage:1,
    imgList:[],
    showTop:false

})

const changData = (state,action) =>{
    const data = action.info
    //  console.log(data);
    return  state.merge({
        topicList:fromJS(data.topicList),
        articleList:fromJS(data.articleList),
        recommendList:fromJS(data.recommendList),
        writeList:fromJS(data.writeList),
        imgList:fromJS(data.imgList)
    });
}

const toMoreInfo =(state,action)=>{
    
    // return state.set("articleList",state.get('articleList').concat(action.info));
    return state.merge({
        "articleList":state.get('articleList').concat(action.info),
        "articlPage":state.get("articlPage",action.pages)
       
        
    })
}
export default (state = defaultState,action)=>{
    switch (action.type){
        case actionType.CHANGEBACKDATA:
            
            return changData(state,action)
        case actionType.TOMOREINFO:
            return toMoreInfo(state,action)
          
        case actionType.BACKSCEOLLTOP:
            return state.set("showTop",action.shows)
        // case actionType.TOGETIMGLIST:
        //     return state.set("imgList",action.data)
        default:
            return state
    }
      
}