import styled from "styled-components";

export const DetailDiv = styled.div`
    width:620px;
    // height:600px;
    // background:pink;
    margin:100px auto;
    .bigImg{
        width:100%;
        margin:30px;
       
    }
    .bbbImg{
        display:block;
        max-width: 100%;
        height: auto;
        vertical-align: middle;
    }
`

export const Title = styled.div`
    margin-bottom:40px;

`
export const AthourInfo = styled.div`
    overflow:hidden;
    width:100%;
    height:48px;
    .imgs{
        float:left;
        width: 48px;
        height: 48px;
        vertical-align: middle;
        display: inline-block;
        border-radius:50%
    }

`
export const  InfoDiv = styled.div`
    float:left;
    margin-left:20px;
    .kong{
        margin-right: 3px;
        font-size: 14px;
        vertical-align: middle;
    }
    .gaunzhu{

        padding: 0 7px 0 5px;
        font-size: 12px;
        background:#42c02e
        border-radius:10px;
        color:#fff;
        border-color: #42c02e;
    }

`
export const Deatils = styled.div`
    margin-top:10px;
    font-size:12px;
    font-size: 12px;
    color: #969696;

`
export const Article = styled.div`
    p{
        margin: 0 0 25px;
        line-height:30px;
        color: #2f2f2f;
        font-size: 16px;
        font-weight: 400;
        // line-height: 1.7;
    }
`

export const Fixed = styled.div`
    position: fixed;
    top: 80px;
    right: 50%;
    width:180px;
    height:260px;
    margin-right: -560px;
    width: 180px;
    height: 260px;

    img{
        width:100%;
        height:100%;
    }
`