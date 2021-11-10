import React, {useState} from "react"
import { ThemeProvider, css } from 'styled-components';
import { useThemeState } from './themeContext';
import {dark, light, widthSize } from "../styles/theme";

const Theme = ({children}) => {
    let theme = {}
    theme['colors'] = useThemeState() ? dark:light;
    theme['size'] = widthSize;
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme;