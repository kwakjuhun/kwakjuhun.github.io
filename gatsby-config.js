module.exports = {
  siteMetadata: {
    siteUrl: "https://kwakjuhun.github.io",
    title: "k-Blog",
    description:"kwak's IT Blog",
    author:"Juhun Kwak",
    language: 'ko'
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-156560291-1",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `kwakjuhun-github-io`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      option: {
        ssr: true
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    { 
      resolve:"gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: `${__dirname}/contents/`,
      },
      __key: "contents",
    },

  ],
};
