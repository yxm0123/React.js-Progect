import React ,{Component} from "react";
import * as createAction from "./store/createAction";
import { Redirect } from "react-router-dom"
import {connect} from "react-redux";
import {
    LoginDiv,
    Main
} from "./style"

class Login extends Component{
    render(){
        const {  loginStetas } = this.props;
        if(! loginStetas){
            return (
                <LoginDiv>
                    <Main>
                        <div className = "tops">
                            <span>登录</span>
                            <b>.</b>
                            <span>注册</span>
                        </div>
                        <div className="inputs">
                            <input placeholder="用户名" type="username" className="userps" ref={(input)=>{this.username = input}}/>
                            <input placeholder="密码" type="passdword" className="userps"  ref={(input)=>{this.password = input}}/>
                        </div>
                        <div className="infos">
                            <span className="lefts">
                                <input type="checkbox" />记住我
                            </span>
                            <span className="rights">登录遇到问题？</span>
                        </div>
                        <div>
                            <button type="button" onClick= {()=>this.props.logins(this.username,this.password)  }>登录</button>
                        </div>
                       
                    </Main>
                </LoginDiv>
            )
        }else{
            return <Redirect to="/"/>
        }
        
    }
}

const mapStateToProps = (state)=>({
    loginStetas:state.getIn(['login','loginState'])

})
const mapDispatchToProps = (dispatch) => ({
    logins(user,pass){
        console.log(user.value,pass.value)
        const action = createAction.getToLogin(user.value,pass.value);
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
