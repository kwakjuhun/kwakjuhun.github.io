import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Introduce from './introduce';

const ContentsElement = styled.div`
    height: 3000px;
`

const First = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(255,66,63);
    width: 100%;
    height: 100%;
    ${props => props.next ? "": css`
        transform: translateY(830px);
    `}
    transition: .5s;
`;

const Second = styled.div`
    position: fixed;
    background: orange;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    ${props => props.next ? "": css`
        transform: translateY(865px);
    `}
    transition: .5s;
`;

const Third = styled.div`
    position: fixed;
    background: yellow;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    ${props => props.next ? "": css`
        transform: translateY(900px);
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

// 파일철 형태 디자인으로 
const MainContents = () => {
    const [isSection, setIsSection] = useState(0);

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
            <First next={isSection >= 1}><Introduce></Introduce></First>
            <Second next={isSection >= 2}></Second>
            <Third next={isSection >= 3}></Third>
            <TopButton visible={isSection >= 1} href='#'> 위로 </TopButton>
        </ContentsElement>
    )
}

export default MainContents;