import styled from "styled-components";

export const HomeDive = styled.div`
    display:flex;
    flex-direction:row;
    width:960px;
    // height:200px;
    // background:pink;
    margin:100px auto;
`

export const HomeLeft = styled.div`
    flex:8;
    margin-right:40px;
    .carousel{
        width:625px;
        height:270px;
    } 
    .luobo{
        width:625px;
        height:270px;
    } 
    .images{
        display:block;
        width:625px;
        height:270px;
    }
    .index-container {
        height: 0px;
        position: relative;
        ul {
            width: 500px;
            height: 25px;
            text-align: center;
            position: absolute;
            top:-40px;
        }
        li {
            display: inline-block;
            height: 3px;
            width: 25px;
            border-radius: 10px;
            background-color:hsla(0,0%,47%,.4);
            margin: 0 5px;
        }
        li.selected {
            // background-color: #009de4;
            background-color: #ffff;
        }
    }
    
   
`
export const HomeRight = styled.div`
    flex:4
  
   
`
//Topic组件中的内容
export const TopicDiv  = styled.div`
    overflow: hidden;
    // padding:20px 0 10px 0;
    overflow:hidden;
    margin-top:30px;
    border-bottom:1px solid #dcdc;
`
export const TopicItem = styled.div`
   
    float:left;
    height:32px;
    line-height:32px;
    margin: 0 18px 18px 0;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    .smallimg{
        display:block;
        float:left; 
        width: 32px;
        height: 32px;
    }
`
export const Items = styled.div`

    float:left;
    padding: 0 11px 0 6px;
    font-size: 14px;
`

//List组件的样式
export const ListDiv = styled.ul`
    padding:0 0;
`

export const ListItem = styled.li`
    display:flex;
    flex-direction:row;
    min-height: 140px;
    border-bottom: 1px solid #f0f0f0;
    padding: 0 20px 20px 20px;
    word-wrap: break-word; 
    overflow: hidden;
    .listImge{
        flex:1
        width: 120px;
        height: 100px;
        display:block;
        margin-top:20px;
        border-radius:10px;
    }
    a{
        text-decoration : none 
    }
`

export const ItemIfo = styled.div`
    box-sizing: border-box;
    // width:500px;
    flex:5;
    // background:pink;
    .title{
        line-height:27px;
        font-size: 18px;
        font-weight: 700;
        color:#000
    }
    .info{
        font-size: 13px;
        height:45px;
       
        // background:red;
        line-height: 24px;
        color: #999;
        // margin: 0 0 8px;
        overflow:hidden; 
        text-overflow:ellipsis;       
        display:-webkit-box;        
        -webkit-box-orient:vertical;        
        -webkit-line-clamp:2; 
      
    }

`
export const Meta = styled.div`
    height:24px;
    color:#b4b4b4;
    font-size: 13px;
    .iconfont{
        font-size: 13px;
        margin-right:10px;
    }
    
`
export const Ahrf = styled.span`
   
   margin-right:10px;
  
`
export const Ahrfa = styled.span`
    
    margin-right:10px;
   
   
`
export const ListMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    color:#fff;
    cursor:pointer;
    background:#a5a5a5;
    border-radius:20px;
`

//reacomend模块
export const ReacDiv = styled.div`
    margin-bottom:20px;
    padding-bottom: 4px;
`
export const ReacArf = styled.a`
    display:block;
    .reacImg{
        // width:280px;
        width:100%;
        height:50px;
        margin-bottom: 2px;
        border-radius: 4px;
    }
`
// Write模块
export const WriteDiv = styled.div`
    overflow:hidden;
    width:100%;
`
export const  WriteErwei = styled.div`
    
    width:100%;
    height:82px;
    padding: 10px 22px;
    box-sizing:border-box;
    border:1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
   
    .erImge{
        display:block;
        float:left;
        width:60px;
        height:60px;
       margin-right:20px;
    }
`
export const RightBox = styled.div`
    float:left;
   
`
export const TopDown = styled.div`
    font-size: 16px;
    color: #333;
    .iconfont{
        font-size: 16px;
        font-weight: 400!important;
    }
`
export const BottomInfo = styled.div`
    margin-top: 20px;
    font-size: 15px;
    color: #999;
`

export const  BottomBox = styled.div`
    margin-top:30px;
    // height:20px;
    overflow:hidden;
    font-size: 14px;
    color: #969696;
    .autor{
        float:left;
    }
    .changes{
        float:right;
    }
    .iconfont{
        margin-right:10px;
        font-size: 14px;
    }
`
export const WriteUl = styled.ul`
    // margin-top:20px;
    padding:0;
    width:100%;
`
export const UlItem = styled.li`
    padding:5px;
    overflow:hidden;
    box-sizing:border-box;
    width:100%


`
export const Autorimg = styled.div`
    display:block;
    float:left;
    width:48px;
    height:48px;
    margin-right: 10px;
    .autorimg{
        width:48px;
        height:48px;
        border-radius:50%;
    }
`
export const Autordiv = styled.div`
    float:left;
    padding-top: 5px;
    // margin-right: 60px;
    font-size: 14px;
    // display: block;
    a{
        text-decoration:none; 
        color:#000;
    }
    .num{
        width:170px;
        font-size: 12px;
        color:#969696;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
    }
`
export const Autorjia = styled.div`
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    .iconfont{
        font-size: 13px;
    }
    
`
export const WriteList = styled.div`
    width:100%;
    height:40px;
    line-height:26px;
    text-align:center;
    cursor:pointer;
    padding: 7px 7px 7px 12px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    box-sizing:border-box;

`
//返回顶部
export  const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:50px;
    height:50px;
    line-height:50px;
    text-align:center;
    font-size:12px;
    background:#fff;
    border:1px solid #dcdcdc;

`