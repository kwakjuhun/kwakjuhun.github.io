import React from 'react';
import styled, { css } from "styled-components";

const PostInfo = styled.div`
    display: grid;
    margin:10px;
    grid-template-columns: 230px 700px;
    grid-template-rows: 50px 20px 150px;
    row-gap: 20px;
    column-gap: 20px;
    background: var(--third);
    grid-template-areas:
        "img title"
        "img date"
        "img content" ;
    @media screen and (max-width: 990px){
        // width: 90%;
        grid-template-columns: 230px calc(100% - 260px);
        grid-template-rows: 50px 20px 150px;
    };
    @media screen and (max-width: 600px){        
        grid-template-columns: 100%;
        grid-template-rows: 250px 50px 20px 150px;
        grid-template-areas:
        "img"
        "title"
        "date"
        "content";
    };
`;


const ImgBox = styled.img`
    grid-area: img;
    height: 230px;
    width: 230px;
    backgroud:blue;
    margin:10px;
    border: 1px solid black;
    @media screen and (max-width: 600px){        
        margin: auto;
    }
    @media screen and (max-width: 290px){        
        width: calc(100% - 20px);
    }
`;

const Info = styled.div`  
    margin-left : 20px;

    width : 650px;
    @container (max-width: 200px){
        width:100%;
    }
`;
const Title = styled.h1`
    grid-area: title;
    display: inline-block; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    color: var(--primaryText);

    white-space: normal; 
    line-height: 1; 
    height: 1em; 
    text-align: left; 
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;

    margin-left: 10px;
    margin-right: 10px;
`
const Content = styled.div` 
    grid-area: content;
    display: inline-block; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    color: var(--secondaryText);

    white-space: normal; 
    line-height: 1.5; 
    height: 6em; 
    text-align: left; 
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;

    margin-left: 10px;
    margin-right: 10px;
`;


const Date = styled.div`
    grid-area: date;
    color: gray;
    margin-left: 20px;
    margin-right: 10px;
`;
const postInfo = ({ title, date, content, imgPath }) => {
    const isMain = content == null ? true : false
    return(
        <PostInfo isMain={isMain}>
            <ImgBox src={imgPath}></ImgBox>
            <Info>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <Content>{content}</Content>
            </Info>
        </PostInfo>
    )
}

export default postInfo;