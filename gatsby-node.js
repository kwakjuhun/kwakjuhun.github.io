const path = require(`path`)
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { PassThrough } = require('stream');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const mainPage = path.resolve(`./src/templates/main.js`)
  const postPage = path.resolve(`./src/templates/post.js`)
  const postListPage = path.resolve(`./src/templates/postList.js`)

  return graphql(
    `{
      allMdx {
        group(field: frontmatter___category) {
          fieldValue
        }
        edges {
          node {
            id
            frontmatter {
              category
              title
            }
            slug
          }
        }
      }
    }    
    `
  ).then(result => {
    if (result.errors) {
        throw result.errors
    }
    // const mainPageData = None;
    // 메인 페이지
    createPage({
        path:"/",
        component:mainPage
    })

    // createPage({
    //   path:"/javascript",
    //   component:postListPage,
    //   context:{
    //     category:"javascript"
    //   }
    // })
    // 리스트 페이지
    const listData = result.data.allMdx.group

    listData.forEach((data, index) => {
        createPage({
            path: data.fieldValue,
            component: postListPage,
            context: {
                category:data.fieldValue
            }
        })
    })

    // 포스트 페이지
    const posts = result.data.allMdx.edges

    posts.forEach((post,index) => {
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node
      // const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: post.node.slug,
        component: postPage,
        context:{
          id:post.node.id,
          // previous,
          // next,
        }
      });
    })
  });
};

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `mdx`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }