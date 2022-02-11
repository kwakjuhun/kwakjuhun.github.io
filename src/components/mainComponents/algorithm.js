import React from 'react';
import styled from 'styled-components';

const AlgorithmElement = styled.div`
    position: relative;
    width: 1000px;
    height: 70vh;
    margin: 0 auto;
    background-color: rgba(255,255,255,1);
    border-radius: 20px;
    @media screen and ${props => props.theme.size.tablet}{
        width: 90vw;
    }

`
const Title = styled.h1`
    display: block;
    margin-top: 3vh;
    text-align: center;
    text-shadow: 1px 1px #FFFFFF;
`


const RankImg = styled.img`
    position: relative;
    top: 10px;
    display: block;
    width: 300px;
    margin: 0 auto;
    @media screen and ${props => props.theme.size.tablet}{
        width: 40%;
    }
`

const ImgDate = styled.h4`
    color: gray;
    text-align: center;
`

const Contents = styled.div`
    margin-left: 3vw;
    line-height: 2em;
`

const Algorithm = () => {
    return(
        <>
            <Title>Algorithm</Title>
            <AlgorithmElement>
                <RankImg src={'AlgorithmRank.png'}/>
                <ImgDate> 2022.02.08 기준 (Paiza, Programmers) </ImgDate>
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