import React,{Component} from "react";
import { connect } from "react-redux"
import {
    TopicDiv,
    TopicItem,
    Items,
   

} from "../style.js"
class Topic extends Component{
  
    render(){
        const {list} = this.props;
        console.log("返回数据1",list)
        return(
           
            <TopicDiv>
                
                {
                     list.map( (item) => {
                        
                         return (
                            
                            <TopicItem key={item.get('id')}>
                                <img className="smallimg" 
                                 src={item.get('imgUrl')}
                                 alt="64"
                                />
                                <Items>{item.get('title')}</Items>
                            </TopicItem>
                         )
                        
                    })
                }
            </TopicDiv>
        )
    }
}

const mapStateToProps = (state) =>({
        
        list:state.get('home').get('topicList'),
          
    
})


export default connect(mapStateToProps)(Topic);