import React,{Component} from "react";
import {connect} from "react-redux";
import * as createActions  from "../store/createAction";
import { Link} from "react-router-dom";
import {
    ListDiv,
    ListItem,
    ItemIfo,
    Meta,
    Ahrf,
    Ahrfa,
    ListMore,
    
} from "../style.js" 
class List extends Component{
    render(){
        const {list,getMoreList,page} = this.props;
        return(
            <ListDiv>
               {
                   list.map((item,index)=>{
                       return(
                        
                            <ListItem key= { index } >
                                <ItemIfo>
                                    <Link  to={"/detail/" + item.get("id")}>
                                        <h3 className="title">{item.get("title")}</h3>
                                    </Link>
                                    <p className="info">{item.get("info")}</p>
                                    <Meta>
                                        <Ahrf>{item.get("author")}</Ahrf>
                                        <Ahrfa>
                                        <i className="iconfont">&#xe60c;</i>
                                            {item.get('comment')}
                                        </Ahrfa>
                                        <span>
                                        <i className="iconfont">&#xe611;</i>
                                            {item.get("head")}
                                        </span>
                                    </Meta>
                                </ItemIfo>
                                <img className="listImge"  src = {item.get("imgUrls")} alt="120"/>
                            </ListItem>
                        
                       )
                   
                   })
               }
                <ListMore onClick={()=>getMoreList(page)}>获取更多</ListMore>
            </ListDiv>
        )
    }
}
const mapStateToProps = (state) =>({
    
    list:state.get('home').get('articleList'),
    page:state.get('home').get('articlPage')
      

})
const mapDispatchToProps = (dispatch)=>({
    getMoreList(page){
        // console.log(99090)
        const action = createActions.getMoreInfo(page);
        dispatch(action)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);