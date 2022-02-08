import React from 'react';
import styled from 'styled-components';

const AlgorithmElement = styled.div`
    // display: grid;
    width: 1000px;
    height: 70%;
    margin: 0 auto;
    background-color: rgba(255,255,255,1);
    border-radius: 20px;
    // grid-template-columns: repeat(2, 1fr);
    @media screen and ${props => props.theme.size.tablet}{
        width: 90%;
    }
    @media screen and ${props => props.theme.size.mobile}{
        width: 600px;
        // grid-template-columns: repeat(2, 1fr);
    }
`
const Title = styled.h1`
    display: block;
    margin-top: 100px;
    text-align: center;
    text-shadow: 1px 1px #FFFFFF;
`
const Imgs = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    height: 100px;
`
const PaizaImg = styled.img`
`
const ProgrammersImg = styled.img`
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
                <>
                    개발이란 것을 처음 배울 때부터 구현 자체를 좋아했다.
                    
                </>
            </AlgorithmElement>
        </>
    )
}  

export default Algorithm;