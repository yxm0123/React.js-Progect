import styled from "styled-components"
import logoPic from "../../statics/logo.png"

//头部导航
export const Eav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    z-index:666;
    width:100%;
    margin-top:0;
    height:56px;
    border-bottom:1px solid #f0f0f0
    background:#fff;
`
export const HeaderWrapper = styled.div`  
    display:flex;
    flex-direction:row;
    min-width:768px;
    max-width:1440px;
    margin:0 auto;
    height:56px;
`
//首页
export const Logo = styled.div`
    flex:2;
    background-size:contain;
`
export const Ahref = styled.div`
    width:100px;
    height:56px;
    display:block;
    background:url(${logoPic});
    background-size:100%;
    background-repeat:no-repeat;
`
// 中间区域
export const Nav = styled.div`
    flex:8;
    height:100%;
    margin:0 auto;

`

export const NavItem = styled.div`
    
    line-height:56px;
    padding:0 15px;
    color:#969696;
    &.left{
        float:left
    }
    &.right{
        float:right
    }
    &.active{
        color:#ea6f5a;       
    }
    &.downapp{
        color:#333;
    }

    .iconfont{
        font-size: 24px;
        font-weight: 400!important;
    }
`
export const InputBox = styled.div`
    position:relative
    float:left;
    .slide-enter{
        transition:all 0.5s ease-out;
    }
    .slide-enter-active{
        width:240px;
    }
    .slide-exit{
        transition:all 0.2s ease-out;
    }
    .slide-exit-active{
        width:180px;
    }
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        // background:pink;
        font-size:24px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`
export const Input = styled.input.attrs({placeholder:"搜索"})`
    width:160px;
    height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    border:none;
    outline:none;
    background:#eee;
    font-size:15px;
    &::placeholder{
        color:#999;
        
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all 0.5s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all 0.2s ease-out;
    }
    &.slide-exit-active{
        width:180px;
    }
    
`
export const HostSearch = styled.div`
    position:absolute;
    left:20px;
    top:57px;
    width:240px;
    background:#fff;
    padding: 20px 20px 10px;
    // border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const HostTop = styled.div`
    font-size:14px;
    color:#969696;
    height:20px;
    line-height:20px;
`
export const TopLeft = styled.div`
    float:left;  
`
export const TopRight = styled.a`
    float:right;
    display:block;
    cursor:pointer;
    .spin{
        font-size:12px;
        margin-right:10px;
        transition: all .2s ease-in;
        // transform:rotate(0deg)
        transform-origin:center center
    }
`
export const HostBody = styled.ul`
    padding:0px;
`
export const HostItem = styled.li`
    // float:left;
    margin-right: 10px;
    display: inline-block;
    line-height: 28px;
`
export const ItemSmall = styled.a`
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`
export const Addtion = styled.div`
    display:flex;
    flex:2;
    margin-left:20px;
    // position:absolute;
    // top:0;
    // right:0;
    height:56px;
`
export const Button = styled.div`
   
    // float:right;
    margin:9px 0;
    text-align:center;
    margin-right:20px;
    padding:0 10px;
    border:1px solid #ea6f5a;
    border-radius:19px;
    line-height:38px;
    &.write{
        flex:7;
        color:#fff;
        background:#ea6f5a;

    }
    &.reg{
        flex:5;
      color:#ea6f5a;
    }
    .iconfont{
        padding-right:5px;
    }
`