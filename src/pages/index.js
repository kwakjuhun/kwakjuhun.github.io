import React from "react"
import Header from "../components/header"
import Test from "../components/test"
import styled from  'styled-components'
import GlobalStyle from "../styles/globalStyleTheme"
import ThemeProvider from '../providers/themeProvider';
import { SelectThemeProvider } from "../providers/themeContext"


const MainElement = styled.main`
  height:200%;
`;

const IndexPage = () => {
  return (
    <SelectThemeProvider>
      <ThemeProvider>
        <GlobalStyle/>
        <MainElement>
          <Header></Header>
          <Test></Test>
        </MainElement>
      </ThemeProvider>
    </SelectThemeProvider>
  )
}

export default IndexPage
