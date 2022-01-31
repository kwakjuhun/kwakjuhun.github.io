import React, { useState, useEffect } from 'react';
import styled  from 'styled-components';
import SEO from '../components/seo';
import Motto from '../components/mainComponents/motto';
import MainContents from '../components/mainComponents/mainContents';

const MainPage = styled.div`
    // height: 100%;
    // background-color: #9AC95F;
    // background:${(props)=>props.theme.colors.second}};
    // color:${(props)=>props.theme.colors.secondaryText}};
    // background:var(--second);
    // color:var(--secondaryText);
`

const Info = styled.div`
    background-color: #9AC95F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
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
const Inner = styled.div`
    position: relative;
    width: 1160px;
    margin: 0 auto;
    padding: 0 32px;
    background-color: #2A9BD5;
    height: 1000px;
`

const Main = ({ data }) => {    
    return (
        <>
            <SEO
                title={"main Page"}
                keywords={[`blog`, `gatsby`, `javascript`, `react`,`github pages`,`css`]}
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
                    {/* <Inner></Inner> */}
            </MainPage>
        </> 
    )
};

export default Main;