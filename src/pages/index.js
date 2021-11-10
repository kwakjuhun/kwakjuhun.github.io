import React from "react"
import Header from "../components/header"
import styled from  'styled-components'
import GlobalStyle from "../styles/globalStyleTheme"
import ThemeProvider from '../providers/themeProvider';
import { SelectThemeProvider } from "../providers/themeContext"
import CategoryBar from "../components/categoryBar";
import Contents from "../components/content";

import { Helmet } from "react-helmet";
import {graphql} from "gatsby";
const MainElement = styled.main`
  height:200%;
`;

const IndexPage = ({data}) => {
  const categoryData = data.allMdx.group
  const contentData = data.allMdx.edges
  return (
    <SelectThemeProvider>
      <ThemeProvider>
        <GlobalStyle/>
        <MainElement>
          <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"/>
          </Helmet>
          <Header categoryData={categoryData}></Header>
          {/* <CategoryBar></CategoryBar> */}
          <Contents contents={contentData}></Contents>
        </MainElement>
      </ThemeProvider>
    </SelectThemeProvider>
  )
}

export default IndexPage


// 멘 첨 페이지(동적 데이터기 때문에) 아니면 graphql을 못 쓰네 ;ㅠㅠㅠ  딴대서 하려면 스테틱밖에 못씀 그래서 
// 예전 블로그에서 디폴트 인덱스에서 스태틱으로 데이터 가져온듯

export const query = graphql`
query{
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
}
`