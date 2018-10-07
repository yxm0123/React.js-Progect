import React,{Component} from "react";
// import * as createActions  from "../store/createAction";
import {connect} from "react-redux"
import ReactSwipe from 'react-swipe';


class Img extends Component{

    constructor(props){
        super(props);
        this.state = {
            index:0
        }
    }
    render(){
        const options = {
            auto:2000,
            callback:(index)=>{
                this.setState(
                    { index:index }
                )
            }
        }
        const {imgList} = this.props;
        console.log("img",imgList)
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions= { options }>
                   
                    {
                        imgList.map( (item)=>{
                            console.log(11)
                            return(
                                <div key={item.get("id")}>
                                   
                                    <img className="images" src={ item.get("urlImgs") } alt=""/>
                                </div>
                            )
                        })
                    }
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                        <li className={this.state.index === 3 ? "selected" : ''}></li>
                        <li className={this.state.index === 4 ? "selected" : ''}></li>
                        <li className={this.state.index === 5 ? "selected" : ''}></li>
                    </ul>
                </div>


            </div>
        );

    }

    // componentDidMount(){
    //     this.props.getImgList()
    // }
}
const mapStateToProps = (state) =>({
    imgList:state.get('home').get('imgList')

})
const mapDispatchToProps = (dispatch)=>({
//    getImgList(){
//     //    console.log("hahahahahahahahahahh")
//        const action = createActions.getImgs();
//        dispatch(action)
//    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Img);