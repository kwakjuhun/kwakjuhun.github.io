import React from 'react';
import styled from 'styled-components';

const AlgorithmElement = styled.div`
    width: 1000px;
    height: 70vh;
    margin: auto;
    background-color: rgba(255,255,255,1);
    border-radius: 20px;
    @media screen and ${props => props.theme.size.tablet}{
        width: 90%;
    }

`
const Title = styled.h1`
    display: block;
    margin-top: 3vh;
    text-align: center;
    text-shadow: 1px 1px #FFFFFF;
`
const Imgs = styled.div`
    display: grid;
    margin: 0 auto;
    margin-top: 3wh;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
`
const PaizaImg = styled.img`
    margin: auto;
`
const ProgrammersImg = styled.img`
    margin: auto;
`
const Contents = styled.div`
    margin: auto;
`

const Algorithm = () => {
    return(
        <>
            <Title>Algorithm</Title>
            <AlgorithmElement>
                <Imgs>
                    <PaizaImg src={'AlgorithmPaiza.png'}></PaizaImg>
                    <ProgrammersImg src={'AlgorithmProgrammers.png'}></ProgrammersImg>
                </Imgs>
                <h4> 2022.02.08 기준 (Paiza, Programmers) </h4>
                <Contents>
                    개발을 하기 전부터 스도쿠와 같은 퍼즐 게임을 좋아했다.<br/>
                    그래서 인지 개발을 배우면서 논리적으로 구현하는 것에 재미를 느꼈고,<br/>
                    알고리즘을 퍼즐 게임 푸는 것처럼 즐기게 되었다.             <br/>
                </Contents>
            </AlgorithmElement>
        </>
    )
}  

export default Algorithm;