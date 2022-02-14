import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Algorithm from './algorithm';

import Introduce from './introduce';

const ContentsElement = styled.div`
    position: absolute;
    left: 0px;
    // height: 330vh;
`
// #FF6663  #FEB144  #FDFD97  #9EE09E   #9EC1CF   #CC99C9
const First = styled.div`
    position: fixed;
    bottom: -97vh;
    left: 0px;
    background-color: rgba(255,66,63);
    width: 100%;
    height: 100vh;
    ${props => props.next ? "": css`
        transform: translateY(-90vh);
    `}
    transition: transform .5s;
`;

const Second = styled.div`
    position: fixed;
    background: #FEB144;
    bottom: -98vh;
    left: 0px;
    width: 100%;
    height: 100vh;
    ${props => props.next ? "": css`
        transform: translateY(-90vh);
    `}
    transition: transform .5s;
`;

const Third = styled.div`
    position: fixed;
    background: #FDFD97;
    bottom: -99vh;
    left: 0px;
    width: 100%;
    height: 100vh;
    ${props => props.next ? "": css`
        transform: translateY(-90vh);
    `}
    transition: transform .5s;
`;

const TopButton = styled.a`
    display:${props => props.visible? "scroll":"none"};
    position:fixed;
    bottom:20px;
    right:10px;

    border: none;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;    
    background-color: #6aafe6;
    color: #d4dfe6;
`
const FirstButton = styled.div`
    position: absolute;
    width: 100px;
    height: 40px;
    top: -40px;
    background-color: rgba(255,66,63);
    border-radius: 15px 15px 0px 0px;    
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    text-shadow: 1px 1px #AAAAAA;
    &:hover ${First}{
        background-color: red;
        // transform: translateY(830px);
    }
`
const SecondButton = styled.div`
    position: absolute;
    width: 100px;
    height: 40px;
    top: -40px;
    left: 100px;
    background-color: #FEB144;
    border-radius: 15px 15px 0px 0px;    
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    text-shadow: 1px 1px #AAAAAA;
`
const ThirdButton = styled.div`
    position: absolute;
    width: 100px;
    height: 40px;
    top: -40px;
    left: 200px;
    background-color: #FDFD97;
    border-radius: 15px 15px 0px 0px;    
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    text-shadow: 1px 1px #AAAAAA;
`
// 파일철 형태 디자인으로 
const MainContents = () => {
    const [isSection, setIsSection] = useState(-1);

    const MoveScroll = (index) => {
        const innerHeight = window.innerHeight;
        window.scrollTo({top:index*innerHeight+100, behavior:'smooth'})
    }


    useEffect(() => {
        const changeSection = () => {
            const innerHeight = window.innerHeight;
            let thisLoc = window.pageYOffset;
            if(thisLoc < 100)
                setIsSection(-1)
            else
                setIsSection(1+parseInt(thisLoc/innerHeight))
        }
        changeSection()
        window.addEventListener("scroll", changeSection);
        return () => {
            window.removeEventListener("scroll", changeSection);
        }
    }, [])

    return (
        <ContentsElement>
            <First next={isSection <= 0}>
                <FirstButton onClick={()=>MoveScroll(0)}> Introduce </FirstButton>
                <Introduce/>
                </First>
            <Second next={isSection <= 1}>
                <SecondButton onClick={()=>MoveScroll(1)}>Algorithm</SecondButton>
                <Algorithm></Algorithm></Second>
            <Third next={isSection <= 2}>
                <ThirdButton onClick={()=>MoveScroll(2)}> 뭐 넣지 </ThirdButton>
            </Third>
            <TopButton visible={isSection > 0} href='#'> 위로 </TopButton>
        </ContentsElement>
    )
}

export default MainContents;