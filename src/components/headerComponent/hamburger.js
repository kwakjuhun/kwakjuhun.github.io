import React from 'react';
import styled from 'styled-components';

const Hamburger = styled.button`
    position: absolute;
    top: 0px;
    left: 0px;
    width : 80px;
    height : 80px;
    border: 0px;
    background:white;
    $checked
`;
const LineWrapper = styled.div`
    cursor:pointer;
    width:56px;  
    height:35px;
    position:relative;
    left:3px;
`;

const Line = styled.div`
    background:black;
    margin-top:6px;
    margin-bottom:6px;
    width:56px;
    height:7px;
    border-radius:2px;
    boxShadow:0 1px 3px rgba(0,0,0,.5);
    position:relative;
`;
const TopLine = styled.div`
    
`
const MidLine = styled.div`

`
const BottomLine = styled.div`

`

// const scrolled = css`
//     box-shadow: 0 4px 4px rgba(31, 35, 46, .15);
//     transition: box-shadow .5s ease-in;
// `;


const hamburger = () => {
    return(
        <Hamburger><LineWrapper>
            <Line></Line>
            <Line></Line>
            <Line></Line>
        </LineWrapper></Hamburger>
    )
};

export default hamburger;