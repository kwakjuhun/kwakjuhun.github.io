import React from 'react';
import Index from './index'
import Content from '../components/content'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import SEO from '../components/seo';

const Css = styled.div`
    color:${(props)=>props.theme.colors.primaryText}
`;

const Post = ({ data }) => {
    const post = data.mdx
    const title = post.frontmatter.title
    return (
        <Index>
            <SEO
                title={title}
                keywords={[`blog`, `gatsby`, `javascript`, `react`,`github pages`,`${post.frontmatter.category}`]}
            />
            <Content>
                <Css>
                    <MDXRenderer>{post.body}</MDXRenderer>
                </Css>
            </Content>
        </Index>
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