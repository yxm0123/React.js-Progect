import styled from "styled-components";

export const LoginDiv = styled.div`
    width:400px;
    height:400px;
    padding:30px;
    box-sizing:border-box;
    margin:100px auto;
    // background:pink;
    border:1px solid #ccc;

`
export const Main = styled.div`
    overflow:hidden;
    margin:10px auto;
    // background:pink;
    text-align:center;
    .tops{
        margin-bottom:50px;
        span{
            font-size:20px;
            font-weight: 700;  
           
        }
    }
    
    b{
        margin:0 10px;
    }
    .inputs{
        width:100%;
        margin-bottom:30px;
        
    }
    .userps{
        width:100%;
        height:50px;
        box-sizing:border-box;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
        margin-top:10px;
        border-radius:5px;      
    }
    
   .infos{
       overflow:hidden;
       margin-bottom:30px;
   }
    .lefts{
        float:left;

    }
    .rights{
        float:right;
    }
    button{
        width: 100%;
        padding: 9px 18px;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        color: #fff;
        background: #42c02e;
        cursor: pointer;
        outline: none;
        display: block;
       
    }

`