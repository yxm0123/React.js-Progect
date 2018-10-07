import {  takeEvery,put} from 'redux-saga/effects';
import * as actionType from "./actionType.js";

import * as createAction from "./createAction.js";
import axios from "axios"

function * searchInfo(){
    // console.log(1111)
    try{
        const  res = yield axios.get('/api/headerList.json');
        console.log("数据",res.data)
        const data = res.data
        const action  = createAction.getHostItem(data.data);
        // console.log(data.data)
        yield put(action);
        
    }catch(e){
        console.log("list.json 网络请求失败")
    }
}
function * mySaga(){
    yield takeEvery(actionType.HOSTSEARCH,searchInfo)
}

export default mySaga