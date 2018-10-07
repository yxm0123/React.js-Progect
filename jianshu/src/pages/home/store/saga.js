import {  takeEvery,put} from 'redux-saga/effects';
import * as actionType from "./actionType.js";
import * as createAction from "./createAction"
import axios from "axios"



function * getHomeData(){
    console.log(1111)
    try{
        
       const result = yield axios.get('/api/home.json');
       console.log("result",result.data)
       const info = result.data;
       console.log("info",info.data)
       const action = createAction.changBackData(info.data)
       yield put(action)
    }catch(e){
        console.log("list.json 网络请求失败")
    }
    
}

//加载更多
function * toGetMore(allpage){
   const page = allpage.page
    try{
        const res = yield axios.get('/api/homeList.json?page='+ page)
        console.log("res",res.data)
        const data = res.data;
        const action = createAction.toMoreInfo(data.data,(page + 1));
        
        yield put(action)
    }catch(e){
        console.log("获取数据失败")
    }
}

// function * toGetImg(){
//     console.log("轮播")
//     try{
//         const res = yield axios.get('/api/img.json');
//         console.log(res.data);
//         const shuju = res.data;
//         const action = createAction.toGetImgList(shuju.data);
//         yield put(action)
//     }catch(e){
//         console.log("img.json 网络请求失败")
//     }
// }
function * homeSaga(){
    yield takeEvery(actionType.CHANGEHOMEDATA,getHomeData);
    yield takeEvery(actionType.GETMORELIST,toGetMore);
    // yield takeEvery(actionType.GETIMGLIST,toGetImg)
}

export default homeSaga;