import React ,{Component} from "react";
import { connect } from "react-redux"
import { CSSTransition } from 'react-transition-group';
import * as createAction from "./store/createAction.js";
import  {changeLogins} from "../../pages/login/store/createAction"
import {Link} from "react-router-dom"
import {
    Eav,
    HeaderWrapper,
    Logo,
    Ahref,
    Nav,
    NavItem,
    InputBox,
    Input,
    HostSearch,
    HostTop,
    TopLeft,
    TopRight,
    HostBody,
    HostItem,
    ItemSmall,
    Addtion,
    Button
    
}from './style.js';

class Header extends Component{
    getHostSearch = ()=>{
        const {focused,mouseIn,page,totalPage,list,handelMouseEnter,handelMouseLeave,changeItems} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = (page-1) * 10; i < page * 10 ; i++){
                pageList.push(
                    <HostItem key={newList[i]}>
                        <ItemSmall>{newList[i]}</ItemSmall>
                    </HostItem>
                )
            }
        }
        
        if(focused || mouseIn){
            return(
                <HostSearch
                    onMouseEnter = {handelMouseEnter}
                    onMouseLeave = {handelMouseLeave}
                >
                    <HostTop>
                        <TopLeft>热门搜索</TopLeft>
                        <TopRight onClick = {()=>changeItems( page,totalPage,this.spinIn ) }>
                            <i ref = { (icon) => {this.spinIn = icon } } className="iconfont spin">&#xe80d;</i>
                            换一批
                        </TopRight>
                    </HostTop>
                <HostBody>
                    { pageList }    
                </HostBody>
            </HostSearch>
            )
        }else{
            return null
        }
    };
    render() {
        const {focused,list,handleFocus,handleBlur,login,logout}  = this.props
        return (
            <Eav>
                <HeaderWrapper>
                    <Logo>
                        <Link to="/">
                            <Ahref></Ahref>
                        </Link>
                       
                    </Logo>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left downapp">下载App</NavItem>
                        <InputBox>
                            <CSSTransition
                                in = {focused}
                                timeout = {500}
                                classNames = "slide"
                            >
                            <Input 
                                className = {focused ? "focused" :""}
                                onFocus = {()=>handleFocus(list)}
                                onBlur = {handleBlur}
                            >
                            </Input>
                            </CSSTransition>
                            <i className = { focused ? "focused iconfont zoom" :"iconfont zoom"}>&#xe651;</i>
                            {this.getHostSearch() }
                        </InputBox>
                     
                            {
                                login ? 
                                    <Link to="/login"><NavItem className="right" onClick = {logout}>退出</NavItem></Link>
                                :  <Link to="/login"><NavItem className="right">登录</NavItem> </Link>
                            }
                            
                      
                       
                        <NavItem className="right">
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                    </Nav>
                    <Addtion>
                        <Button className="reg">注册</Button>
                        <Button className="write">
                            <i className="iconfont">&#xe61c;</i>
                            写文章
                        </Button>
                       
                    </Addtion>
                </HeaderWrapper>
            </Eav>
            
        )
    }

   
}
const mapStateToProps = (state)=>{
    return {
        focused:state.getIn(['header','focused']),
        mouseIn:state.getIn(['header','mouseIn']),
        // focused:state.get('header').get('focused')
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','loginState'])
       
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        //获取焦点事件
        handleFocus(list){
            // console.log("list",list)
            if(list.size === 0){
                //获取axios请求的数据 在saga中
                const action = createAction.hostSearchs()
                dispatch(action)
            }
            // const action =  createAction.seachFocus()
            dispatch(createAction.seachFocus());
            
            
        },
        //失去焦点事件
        handleBlur(){
            const action =  createAction.seachBlur()
            dispatch(action)
        },
        //当鼠标移入事件
        handelMouseEnter(){
            console.log("触发了")
            const action = createAction.onMouserEenters();
            dispatch(action)
        },
        //鼠标移出事件
        handelMouseLeave(){
            const action = createAction.onMouserLeave();
            dispatch(action)
        },

        changeItems( page,totalPage,spin){
            console.log(page,totalPage,spin)

            spin.style.transform = 'rotate(300deg)';

            if( page < totalPage){
                const action = createAction.onChangeItems( page + 1);
                dispatch(action)
            }else{
                const action = createAction.onChangeItems(1);
                dispatch(action)
            }
            
           
        },

        //退出
        logout(){
          console.log(99090);
          const action = changeLogins();
          dispatch(action)
          
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);