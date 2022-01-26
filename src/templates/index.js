import React from "react"
import Header from "../components/header"
import styled from  'styled-components'
import GlobalStyle from "../styles/globalStyleTheme"
import ThemeProvider from '../providers/themeProvider';
import { SelectThemeProvider } from "../providers/themeContext"
import Contents from "../components/content";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from 'gatsby';


const MainElement = styled.main`
  // height:200%;
`;

const IndexPage = ({ children }) => {
  return(
    <StaticQuery
      query={graphql`
      {
        allMdx {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
          edges {
            node {
              excerpt
              frontmatter {
                category
                title
              }
            }
          }
        }
        allSite {
          edges {
            node {
              siteMetadata {
                siteUrl
              }
            }
          }
        }
      }
    `}
    render={data => (
      <SelectThemeProvider>
        <ThemeProvider>
          <GlobalStyle/>
          <MainElement>
            <Helmet>
              <meta name="google-site-verification" content="u99Pgo8uqf_UCtZnpHcW9Lq8aXYvHMUEVFfCy83b6sE" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"/>
            </Helmet>
            <Header categoryData={data.allMdx.group}></Header>
            
            {children}
          </MainElement>
         </ThemeProvider>
       </SelectThemeProvider>
    )}
  />
)}

export default IndexPage