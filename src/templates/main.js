import React from 'react';
import { Link, graphql } from 'gatsby'
import Index from './index'
import Content from '../components/content'
import styled  from 'styled-components';
import SEO from '../components/seo';
import PostInfo from '../components/contentComponents/postInfo';

const MainPage = styled.div`
    height: 100%;
    // background:${(props)=>props.theme.colors.second}};
    // color:${(props)=>props.theme.colors.secondaryText}};
    background:var(--second);
    color:var(--secondaryText);
`

const Introduce = styled.div`
    height: 500px;
`
const Posts = styled.div`
`
const CategoryPosts = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
	align-items: flex-start;
`


const Main = ({ data }) => {
    // const categoriesPosts = data.allMdx.group
    return (
        <>
            <SEO
                title={"main Page"}
                keywords={[`blog`, `gatsby`, `javascript`, `react`,`github pages`]}
            />
            <Content>
                <MainPage>
                    <Introduce>
                        <h1>간단한 본인 소개 부분</h1>
                    </Introduce>
                    <hr/>
                    <h1>Posts</h1>
                    {/* <Posts>
                        {categoriesPosts.map(posts => {
                            const category = posts.edges[0].node.frontmatter.category
                            return(
                                <div>
                                    <h2>{category}</h2>
                                    <hr/>
                                    <CategoryPosts key={category}>
                                        {posts.edges.map(post => {
                                            const fm = post.node.frontmatter
                                            console.log(fm)
                                            const imgPath = fm.img == null? null:fm.img.childrenImageSharp[0].gatsbyImageData.images.fallback.src
                                            return(
                                                <PostInfo key={fm.title} title={fm.title} imgPath={imgPath}></PostInfo>
                                            )
                                        })}
                                    </CategoryPosts>
                                </div>
                            )
                        })}
                    </Posts> */}
                </MainPage>
            </Content>
        </> 
    )
};

export default Main;

// export const mainPageQuery = graphql`
// query mainQuery {
//     allMdx(sort: {order: DESC, fields: frontmatter___date}) {
//         group(field: frontmatter___category, limit: 6) {
//             edges {
//                 node {
//                 frontmatter {
//                     category
//                     title
//                     img {
//                         childrenImageSharp {
//                             gatsbyImageData(formats: AUTO)
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// `