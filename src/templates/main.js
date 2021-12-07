import React from 'react';
import { Link, graphql } from 'gatsby'
import Index from './index'
import Content from '../components/content'
import styled  from 'styled-components';
import SEO from '../components/seo';
const MainPage = styled.div`
    height: 100%
    background:${(props)=>props.theme.colors.second}};
    color:${(props)=>props.theme.colors.secondaryText}};
`


const Main = () => {
    return (
        <Index>
            <SEO
                title={"main Page"}
                keywords={[`blog`, `gatsby`, `javascript`, `react`,`github pages`]}
            />
            <Content>
                <MainPage>
                    <h1>main Page</h1>
                </MainPage>
            </Content>
        </Index>
    )
};

export default Main;


