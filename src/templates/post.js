import React from 'react';
import Index from './index'
import Content from '../components/content'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import SEO from '../components/seo';
import Info from '../components/info';

const Css = styled.div`
    color:${(props)=>props.theme.colors.primaryText};
    margin-top: 550px;
`;

const Post = ({ data }) => {
    const post = data.mdx
    const title = post.frontmatter.title
    const date = post.frontmatter.date
    console.log(data)
    return (
        <>
            <SEO
                title={title}
                keywords={[`blog`, `gatsby`, `javascript`, `react`,`github pages`,`${post.frontmatter.category}`]}
            />
            <Info title={title} date={date}></Info>
            {/* <Content> */}
            <Css>
                <MDXRenderer>{post.body}</MDXRenderer>
            </Css>
            {/* </Content> */}
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
            img {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: [AUTO, AVIF, WEBP])
                }
            }
        }
    }
}
`