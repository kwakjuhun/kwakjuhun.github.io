import React, { useEffect } from 'react';
import styled  from 'styled-components';
import SEO from '../components/seo';
import Motto from '../components/mainComponents/motto';

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
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -o-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -o-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 1rem;
    height: 60vh;
`
const SiteTitle = styled.div`
    color: #113800;
    font-size: 3em;
    font-weight: 900;
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
const Body = styled.div`
`


const Main = ({ data }) => {
    // const categoriesPosts = data.allMdx.group
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
                    <h1>엎는 중</h1>
                <Body>
                    <Inner>

                    </Inner>
                </Body>
            </MainPage>
        </> 
    )
};

export default Main;