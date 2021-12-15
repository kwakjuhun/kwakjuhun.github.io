module.exports = {
  siteMetadata: {
    siteUrl: "https://kwakjuhun.github.io",
    title: "k-Blog",
    description:"kwak's IT Blog",
    author:"Juhun Kwak"    
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-KNCZLT7FVG",
        head: true,
        anonymize: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingId: `G-KNCZLT7FVG`, // 측정 ID
    //     head: true, // head에 tracking script를 넣고 싶다면 true로 변경 
    //     anonymize: true,
    //   },
    // },
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
