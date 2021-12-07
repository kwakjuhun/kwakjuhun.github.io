import React from 'react';
import styled from "styled-components";
const PostInfo = styled.div`
    display: list-item;
    // width: 900px;
    width:98%;
    margin:1%;
    height: 250px;
    // border: 1px solid black;
    display: flex;
    background: ${(props) => props.theme.colors.third};
    // margin:10px;

`;

const ImgBox = styled.img`
    height: 230px;
    width: 230px;
    margin:10px;
    border: 1px solid black;
`;

const Info = styled.div`  
    margin-left : 20px;
    width : 650px;
`;

const Title = styled.h1`
    display: inline-block; 
    width: 590px; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    color: ${(props) => props.theme.colors.primaryText};

    white-space: normal; 
    line-height: 1; 
    height: 1em; 
    text-align: left; 
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;

    margin-top:30px;
`

const Content = styled.div`
    display: inline-block; 
    width: 590px; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    color: ${(props) => props.theme.colors.secondaryText};

    white-space: normal; 
    line-height: 1.5; 
    height: 4.5em; 
    text-align: left; 
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;

    margin-top:30px;
`;

const Date = styled.div`
    color: gray;
    margin-left: 10px;
`;
const postInfo = ({ title, date, content, imgPath }) => {
    return(
        <PostInfo>
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