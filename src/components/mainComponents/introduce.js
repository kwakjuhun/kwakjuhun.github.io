import React from 'react';
import styled from 'styled-components';

import IntroItem from './introItem';

const IntroduceElement = styled.div`
    display: grid;
    width: 1000px;
    height: 70%;
    margin: 0 auto;
    background-color: rgba(255,255,255,1);
    border-radius: 20px;
    grid-template-columns: repeat(3, 1fr);
    @media screen and ${props => props.theme.size.tablet}{
        width: 90%;
    }
    @media screen and ${props => props.theme.size.mobile}{
        width: 600px;
        grid-template-columns: repeat(2, 1fr);
    }
`


const Title = styled.h1`
    display: block;
    margin-top: 100px;
    text-align: center;
    text-shadow: 1px 1px #FFFFFF;
`

const Introduce = () => {
    return(
        <>
            <Title>Introduce</Title>
            <IntroduceElement>
                <IntroItem
                    img={`introduceName.png`}
                    title="이름"
                    content="곽주훈"
                />
                <IntroItem
                    img={`introduceBirthday.png`}
                    title="생년월일"
                    content="97.11.18"
                />
                <IntroItem
                    img={`introducePhone.png`}
                    title="연락처"
                    content="010-5409-2562"
                />
                <IntroItem
                    img={`introduceEmail.png`}
                    title="이메일"
                    content="hn04193@naver.com"
                />
                <IntroItem
                    img={`introduceLanguage.png`}
                    title="언어"
                    content="한국어 日本語"
                />
                <IntroItem
                    img={`introduceHobby.png`}
                    title="취미"
                    content="힙합 듣기"
                />
                

                {/* <thead>
                    <tr>
                        <th>ㅇㅇ</th><th>ㄴㄴ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name : Kwak Juhun</td> <td>Java Script(react)</td>
                    </tr>
                    <tr>
                        <td>Birthday : 1997. 11. 18</td><td>Python (Django)</td>
                    </tr>
                    <tr>
                        <td>Language : Korean, Japanese</td><td>Php(Laravel)</td>
                    </tr>
                    <tr>
                        <td>Hobby : Rap Listening</td>
                    </tr>
                </tbody> */}
            </IntroduceElement>
        </>
    )
}  

export default Introduce;