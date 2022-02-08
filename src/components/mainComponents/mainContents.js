import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Algorithm from './algorithm';

import Introduce from './introduce';

const ContentsElement = styled.div`
    height: 3000px;
`

const First = styled.div`
    position: fixed;
    bottom: -97%;
    // top: 50px;
    left: 0px;
    background-color: rgba(255,66,63);
    width: 100%;
    height: 100%;
    ${props => props.next ? "": css`
        transform: translateY(-90%);
    `}
    transition: .5s;
`;

const Second = styled.div`
    position: fixed;
    background: orange;
    // top: 75px;
    bottom: -98%;
    left: 0px;
    width: 100vw;
    height: 100vh;
    ${props => props.next ? "": css`
        transform: translateY(-90%);
    `}
    transition: .5s;
`;

const Third = styled.div`
    position: fixed;
    background: yellow;
    // top: 100px;
    bottom: -99%;
    left: 0px;
    width: 100vw;
    height: 100vh;
    ${props => props.next ? "": css`
        transform: translateY(-90%);
    `}
    transition: .5s;
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
    background-color: orange;
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
    background-color: yellow;
    border-radius: 15px 15px 0px 0px;    
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    text-shadow: 1px 1px #AAAAAA;
`
// 파일철 형태 디자인으로 
const MainContents = () => {
    const [isSection, setIsSection] = useState(0);
    const MoveScroll = (index) => {
        window.scrollTo({top:(index-1)*1000+100, behavior:'smooth'})
    }
    useEffect(() => {
        const innerHeight = window.innerHeight;
        function changeSection(){
            let thisLoc = window.pageYOffset;
            setIsSection(parseInt((thisLoc+(innerHeight-10))/innerHeight))
        }
        changeSection()
        window.addEventListener("scroll", changeSection);
        return () => {
            window.removeEventListener("scroll", changeSection);
        }
    }, [])
    return (
        <ContentsElement>
            <First next={isSection < 1}>
                <FirstButton onClick={()=>MoveScroll(1)}> Introduce </FirstButton>
                <Introduce/>
                </First>
            <Second next={isSection < 2}>
                <SecondButton onClick={()=>MoveScroll(2)}>Algorithm</SecondButton>
                <Algorithm></Algorithm></Second>
            <Third next={isSection < 3}>
                <ThirdButton onClick={()=>MoveScroll(3)}> 뭐 넣지 </ThirdButton>
            </Third>
            <TopButton visible={isSection >= 1} href='#'> 위로 </TopButton>
        </ContentsElement>
    )
}

export default MainContents;