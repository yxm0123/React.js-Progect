import React ,{Component} from "react";
import { connect } from 'react-redux';
import Header from '../../common/header/index';
import List from "./components/List";
import Img from "./components/img"
import Topic from "./components/Topic";
import Write from "./components/Write";
import Reacomend from "./components/Reacomend";
import * as createAction from "./store/createAction";
import { BackTop } from "./style";

import {
   HomeDive,
   HomeLeft,
   HomeRight 
} from "./style"
class Home extends Component{

    handleGoTop(){
        console.log("gggg")
        window.scrollTo(0,0)
    }
    render(){
        const {show} = this.props;
        return(
            <div>
                <Header/> 
                <HomeDive >
                    <HomeLeft>   
                        <Img/>
                        <Topic />
                        <List />
                    
                    </HomeLeft>
                    <HomeRight>
                        <Reacomend />
                        <Write />
                    </HomeRight>
                    { show ? <BackTop onClick = {this.handleGoTop}>GoTop</BackTop>:null }
                
                </HomeDive >
            </div>
        )
    }

    componentDidMount(){
        console.log("hhhhh")
        // const action = createAction.changHomeData()
        this.props.changeHomeData();
        this.bindEvents()
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.goSrollTop)
    }
}

const mapStateToProps = (state) =>({
    show:state.getIn(["home","showTop"])
})
const mapDispatchToProps = (dispatch)=>({
    changeHomeData(){
        const action = createAction.changHomeData()
        dispatch(action)
    },

    goSrollTop(){
        const nums = document.documentElement.scrollTop;
        // console.log("num",nums)
       if(nums > 100){
            const action = createAction.backScrollTop(true);
            dispatch(action)
       }else{
            const action = createAction.backScrollTop(false);
            dispatch(action)
       }
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);