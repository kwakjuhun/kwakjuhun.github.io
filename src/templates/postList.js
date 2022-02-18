import React from 'react';
import Index from './index'
import Content from '../components/content'
import {graphql, Link} from 'gatsby'
import PostInfo from '../components/contentComponents/postInfo'
import SEO from '../components/seo';
import styled from 'styled-components';
import Info from '../components/info';

const PostListElement = styled.div`
  margin-top: 550px;
  margin-bottom: 40px;
`;

const Year = styled.div`
  color: orange;
  font-size: 3em;
  font-weight: bold;
  margin-left: 30px;
`
const Title = styled.div`
  font-size: 1.5em;
  margin-top: 4px;
  margin-left: 50px;
  &:hover{
    font-size: 1.6em;
  }
`

const PostList = ({ data, pageContext }) => {   
    const postListData = data.allMdx.edges
    const category = pageContext.category
    let year = 0;
    return (
        <>
            <SEO
              title={category}
              keywords={[`blog`, `gatsby`, `javascript`, `react`,`github pages`,category]}
            />
            <Info title={category}></Info>
            <PostListElement>
                {
                  postListData.map((data,index)=>{
                    const title = data.node.frontmatter.title
                    const date = data.node.frontmatter.date
                    const [y, w, d] = date.split('-')
                    const src = "/"+data.node.slug
                    // console.log(y)
                    if(year != y){
                      year = y
                      return (
                        <>
                          <Year>{year}</Year>
                          <Link key={index} to={src}><Title>[{w}.{d}] - {title}</Title></Link>
                        </>
                      )
                    }
                    else{
                        return(
                          <Link key={index} to={src}><Title>[{w}.{d}] - {title}</Title></Link>
                        )
                    }
                  })
                }
                {/* {postListData.map((data,index)=>{
                    const title = data.node.frontmatter.title
                    const date = data.node.frontmatter.date
                    const content = data.node.excerpt
                    const src = "/"+data.node.slug
                    // const imgPath = "https://kwakjuhun.github.io/"+data.node.frontmatter.img.childrenImageSharp[0].gatsbyImageData.images.fallback.src
      
                    const imgPath = data.node.frontmatter.img == null? null : data.node.frontmatter.img.childrenImageSharp[0].gatsbyImageData.images.fallback.src
                    return (
                      <Link key={index} to={src}>
                        <PostInfo title={title} date={date} content={content} imgPath={imgPath}></PostInfo>
                      </Link>
                    )
                })} */}
            </PostListElement>
        </>
    )
};

export default PostList;

export const pageQuery = graphql`
query postList($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {category: {in: [$category]}}}) {
      edges {
        node {
          slug
          frontmatter {
            title
            category
            date
            }
        excerpt
        }
      }
    }
  }
  `