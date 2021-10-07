import React, {useState} from "react"
import { ThemeProvider } from 'styled-components';
import { useThemeState, useThemeChange } from './themeContext';
import theme, {dark, light } from "../styles/theme";

const Theme = ({children}) => {
    console.log("theme Provider",useThemeState());
    return (
        <ThemeProvider theme={useThemeState()? dark:light} size={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme;