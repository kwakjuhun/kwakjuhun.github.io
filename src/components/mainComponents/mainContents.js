import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const ContentsElement = styled.div`
`

const First = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    background: red;
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

// 파일철 형태 디자인으로 
const MainContents = () => {
    const [isSection, setIsSection] = useState(0);

    useEffect(() => {
        const innerHeight = window.innerHeight;
        function changeSection(){
            let thisLoc = window.pageYOffset;
            setIsSection(parseInt((thisLoc+(innerHeight-10))/innerHeight))
        }
        window.addEventListener("scroll", changeSection);
        return () => {
            window.removeEventListener("scroll", changeSection);
        }
    }, [])
    return (
        <ContentsElement next={setIsSection >= 0}>
            <First next={isSection >= 1}></First>
            <Second next={isSection >= 2}></Second>
            <Third next={isSection >= 3}></Third>
        </ContentsElement>
    )
}

export default MainContents;