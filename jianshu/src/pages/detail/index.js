import React,{Component} from "react";
import Header from '../../common/header/index';
import { connect } from "react-redux"
import * as createAction from "./store/createAction"
import {
    DetailDiv,
    Title,
    AthourInfo,
    InfoDiv,
    Deatils,
    Article,
    Fixed
} from "./style"

class Detail extends Component{
    render(){
        const {list} = this.props
        // console.log("detail",list)
        console.log(this.props.match.params.id)
        
        return(
            <div>
                <Header/> 
                <DetailDiv>
                    {
                        list.map((item,index) =>{
                            return(
                            <div key={index}>
                                <Title>
                                    <h1>{item.get("title")}</h1>
                                </Title>
                                <AthourInfo>
                                    <img className="imgs"  src={item.get("smallimgUrl")} alt=""/>
                                    <InfoDiv>
                                        <span className="kong">自由心空</span>
                                        <span className="gaunzhu">+关注</span>
                                        <Deatils>
                                            <span>2018.08.27 16:17*</span>
                                            <span>字数 4583 </span>
                                            <span>阅读 1420 </span>
                                            <span>评论 11 </span>
                                            <span> 喜欢 28 </span>
                                            <span>赞赏 2 </span>
                                        
                                        </Deatils>
                                    </InfoDiv>
                                </AthourInfo>
                                <div className="bigImg">
                                    <img  className="bbbImg" src={item.get("bigImgUrl")} alt=""/>
                                </div>

                                <Article>
                                    
                                    {item.get("content").map((item,indexs)=>{
                                        return(
                                            <p key={indexs}>{item.get("info")}</p>
                                        )
                                    })}
                                </Article>
                            </div>     
                            )
                        })
                    }
                
                    <Fixed>
                        <img src="//cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png" alt=""/>
                    </Fixed>
                </DetailDiv>
            
            </div>
        )
    }

    componentDidMount(){
        this.props.getDeatils(this.props.match.params.id)
    }
}
const mapState =(state)=>({
    list:state.getIn(["detail","list"])

})
const mapDispatch = (dispatch) =>({
    getDeatils(id){
        console.log("id",id)
        const action = createAction.getDeatilsLst(id);
        dispatch(action)
    }
})
export default connect(mapState,mapDispatch)(Detail);