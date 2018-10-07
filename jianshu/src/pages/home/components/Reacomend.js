import React,{Component} from "react";
import {connect} from "react-redux"
import {
  ReacDiv,
  ReacArf
    
} from "../style.js" 
class Reacomend extends Component{
    render(){
        const {recList}  = this.props
        return(
            <ReacDiv>
                {
                    recList.map( (item) => {
                        return (
                            <ReacArf key={ item.get("id") }>
                                <img className="reacImg" src={item.get("imgUrl")} alt=""/>
                            </ReacArf>
                        )
                    })
                }
               
            </ReacDiv>
        )
    }
}
const mapState = (stata)=>({
    recList:stata.getIn(["home","recommendList"])
})
export default connect(mapState) (Reacomend);