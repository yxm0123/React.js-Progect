import React,{Component} from "react";
import {connect} from "react-redux"
import {
    WriteDiv,
    WriteErwei,
    RightBox,
    TopDown,
    BottomInfo,
    BottomBox,
    WriteUl,
    UlItem,
    Autorimg,
    Autordiv,
    Autorjia,
    WriteList
      
  } from "../style.js" 

class Write extends Component{
    render(){
        const {writeList}  = this.props
        return(
            <WriteDiv>
                <div>
                    <WriteErwei>
                        <img className="erImge"   src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode"/>
                        <RightBox>
                            <TopDown>
                                下载简书手机App
                                <i className="iconfont">&#xe697;</i>

                            </TopDown>
                            <BottomInfo>随时随地发现和创作内容</BottomInfo>
                        </RightBox>
                    
                    </WriteErwei>
                    <BottomBox>
                            <span className="autor">推荐作者</span>
                            <span className="changes">
                                <i className="iconfont">&#xe80d;</i>
                                换一批
                            </span>
                    </BottomBox>
                </div>
                
                <WriteUl>
                        {
                            writeList.map( (item) => {
                               return(
                                <UlItem key={item.get("id")}> 
                                    <Autorimg>
                                        <img className="autorimg" src={item.get("imgUrl")} alt="000"/>
                                    </Autorimg>
                                    <Autordiv>
                                        <a href="/u/ca5b9d6f94dc?utm_source=desktop&utm_medium=index-users" target="_blank" className="name">
                                        {item.get("author")}
                                        </a>
                                        <p className="num">{item.get("title")}</p>
                                    </Autordiv>
                                    <Autorjia>
                                    <i className="iconfont">&#xe600;</i>
                                        关注
                                    </Autorjia>
                                </UlItem>
                               )
                            })
                        }
                   
                </WriteUl>
               <WriteList>
               
                   查看全部
                   <i className="iconfont">&#xe697;</i>
               </WriteList>
            </WriteDiv>
        )
    }
}
const mapState = (state)=>({
    writeList:state.getIn(["home","writeList"])
})
export default connect(mapState)(Write);