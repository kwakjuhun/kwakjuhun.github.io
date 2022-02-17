import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { idea } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { idea } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled, {css} from "styled-components";
const custom = css`
    background: rgba(0,0,0,0);
`
const Highlighter = ({children}) => {
    return (
        <SyntaxHighlighter
            language="javascript"
            style={idea}
            // customStyle = {custom}
        >
            {children}
        </SyntaxHighlighter>
    )
}

export default Highlighter;