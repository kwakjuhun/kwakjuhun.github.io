// import React from 'react';
// import Index from './index'
// import Content from '../components/content'
// import {graphql, Link} from 'gatsby'
// import PostInfo from '../components/contentComponents/postInfo'
// import SEO from '../components/seo';
// import styled from 'styled-components';

// const PostListElement = styled.div`
//   margin-top: 100px;
// `;

// const PostListCopy = ({ data, pageContext }) => {   
//     const postListData = data.allMdx.edges
//     const category = pageContext.category
//     return (
//         <>
//             <SEO
//               title={category}
//               keywords={[`blog`, `gatsby`, `javascript`, `react`,`github pages`]}
//             />

//             <PostListElement>
//                 {postListData.map((data,index)=>{
//                     const title = data.node.frontmatter.title
//                     const date = data.node.frontmatter.date
//                     const content = data.node.excerpt
//                     const src = "/"+data.node.slug
//                     // const imgPath = "https://kwakjuhun.github.io/"+data.node.frontmatter.img.childrenImageSharp[0].gatsbyImageData.images.fallback.src
      
//                     const imgPath = data.node.frontmatter.img == null? null : data.node.frontmatter.img.childrenImageSharp[0].gatsbyImageData.images.fallback.src
//                     return (
//                       <Link key={index} to={src}>
//                         <PostInfo title={title} date={date} content={content} imgPath={imgPath}></PostInfo>
//                       </Link>
//                     )
//                 })}
//             </PostListElement>
//         </>
//     )
// };

// export default PostListCopy;

// export const pageQuery = graphql`
// query postList($category: String) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMdx(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: {frontmatter: {category: {in: [$category]}}}) {
//       edges {
//         node {
//           slug
//           frontmatter {
//             title
//             category
//             date
//             img {
//                 childrenImageSharp {
//                   gatsbyImageData(formats: AUTO)
//                 }
//               }
//             }
//         excerpt
//         }
//       }
//     }
//   }
//   `