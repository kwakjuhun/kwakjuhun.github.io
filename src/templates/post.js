import React from 'react';
import Index from './index'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import SEO from '../components/seo';
import Info from '../components/info';
import { Disqus } from 'gatsby-plugin-disqus';

const Main = styled.div`
    color:${(props)=>props.theme.colors.primaryText};
    margin-top: 550px;
`

const Content = styled.div`
    width: 1000px;
    padding: 0 10px;
    margin: 0 auto;
`

const Post = ({ data }) => {
    const post = data.mdx
    const title = post.frontmatter.title
    const date = post.frontmatter.date
    let disqueConfig = {
        // url: '/',
        identifier: data.mdx.id,
        // title: `${title}`,

    }
    return (
        <>
            <SEO
                title={title}
                keywords={[`blog`, `gatsby`, `javascript`, `react`,`github pages`,`${post.frontmatter.category}`]}
            />
            <Info title={title} date={date}></Info>
            <Main>
                <Content>
                    <MDXRenderer>{post.body}</MDXRenderer>
                </Content>
                <Disqus
                    config={disqueConfig}
                />
            </Main>
        </>
    )
};

export default Post

export const postQuery = graphql`
query postBySlug($id: String!) {
    mdx(id: {eq: $id}) {
        id
        body
        excerpt(pruneLength: 160)
        frontmatter {
            category
            date(formatString: "YYYY, MMM DD")
            title
        }
    }
}
`