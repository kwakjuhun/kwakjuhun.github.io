import React from 'react';
import styled  from 'styled-components';
import SEO from '../components/seo';
import Motto from '../components/mainComponents/motto';
import MainContents from '../components/mainComponents/mainContents';

const MainPage = styled.div`
    background-color: #9AC95F;
    height: 330vh;
`

const Info = styled.div`
    position: fixed;
    left: 0;
    width: 100%;
    background-color: #9AC95F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 0 1rem;
    height: 100vh;
`
const SiteTitle = styled.div`
    color: #113800;
    font-size: 3em;
    font-weight: 900;
    @media screen and ${props => props.theme.size.mobile}{
        font-size: 2em;   
        font-weight: 600;
    }
`

const SocialWrapper = styled.div`
    position: relative;
    margin-top: 10px;
`


const Main = ({ data }) => {    
    return (
        <>
            <SEO
                title={"main Page"}
                keywords={[`blog`, `gatsby`, `javascript`, `react`,`github pages`,`css`, `portfolio`, `포트폴리오`, `블로그`]}
            />
            <MainPage>
                <Info>
                    <SiteTitle>Kwak - Blog</SiteTitle>
                    <Motto/>
                    <SocialWrapper>
                        <a href="https://github.com/kwakjuhun">
                            <img src={`GitHub.png`}></img>
                        </a>
                    </SocialWrapper>
                </Info>
                <MainContents/>
            </MainPage>
        </> 
    )
};

export default Main;