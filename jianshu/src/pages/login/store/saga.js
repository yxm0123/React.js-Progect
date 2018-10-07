import {  takeEvery,put} from 'redux-saga/effects';
import * as actionType from "./actionType.js";
import * as createAction from "./createAction"
import axios from "axios"




function * getLogin(usercenter){
    const user = usercenter.user;
    const pass = usercenter.pass;
   
    try{
        
       const result = yield axios.get('/api/login.json?user='+ user + '&pass=' + pass);
       console.log("result",result.data)
       const info = result.data;
       //console.log("info",info.username);
        console.log(info.username === user)
        console.log(info.password === pass)
       if(info.username === user && info.password === pass){
            const action = createAction.changeLogin(info.username,info.password)
            yield put(action)
       }else{
           alert('登录失败')
       }
       
    }catch(e){
        console.log("list.json 网络请求失败")
    }
    
}




function * loginSaga(){
    yield takeEvery(actionType.GETLOFINS,getLogin);
    
   
}

export default loginSaga;