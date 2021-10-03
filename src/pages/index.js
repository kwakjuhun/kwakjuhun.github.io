import React, { useState, createContext } from "react"
import Header from "../components/header"
import {dark, light} from "../styles/theme"
import Test from "../components/test"
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from "../Contexts";

const GlobalStyle = createGlobalStyle`
  html{
    height:200%;
  }
  body{
    padding: 0;
    margin: 0;
    height:200%;
  }
`
const mainStyle = {
  // border: '1px solid black' 
  height:'200%',
}

const IndexPage = () => {
  return (
    <ThemeProvider>
    <main style={mainStyle}>
        <GlobalStyle/>
        <Header></Header>
        <h1>HI</h1>
        {<br></br> * 4000} 
        <Test></Test>
    </main>
    </ThemeProvider>
  )
}

export default IndexPage
