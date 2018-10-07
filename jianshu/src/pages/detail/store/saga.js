import {  takeEvery,put} from 'redux-saga/effects';
import * as actionType from "./actionType.js";
import * as createAction from "./createAction"
import axios from "axios"

function * getDetailList(id){
    console.log("ios",id)
    try{ 
        const result = yield axios.get('/api/detail.json?id='+id);
        console.log("result",result.data)
        const data = result.data;
        const action = createAction.changDetailData(data.data)
        yield put(action)
         
     }catch(e){
         console.log("detail.json 网络请求失败")
     }
}


function * detailSaga(){
    yield takeEvery(actionType.DETAILSlIST,getDetailList);
    
}

export default detailSaga;