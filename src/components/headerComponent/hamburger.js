import React from 'react';
import styled,{css} from 'styled-components';

const Hamburger = styled.button`
    position: absolute;
    top: 0px;
    left: 0px;
    width : 50px;
    height : 50px;
    border: 0px;
    background-color: rgba(0,0,0,0);

    top: 50%;
    transform: translate(0, -50%);
`;

const LineWrapper = styled.div`
    cursor:pointer;
    width:35px;  
    height:30px;
    position:relative;
    margin: auto;
`;

const Line = styled.div`
    background:black;
    margin-top:5px;
    margin-bottom:5px;
    width:35px;
    height:5px;
    border-radius:2px;
    boxShadow:0 1px 3px rgba(0,0,0,.5);
    position:relative;
    transition: all .2s;
    ${props => props.clicked}
`;

const TopLine = css`
    transform: translateY(10px) rotate(225deg);
`
const MidLine = css`
    transform: rotate(225deg);
`
const BottomLine = css`
    transform: translateY(-10px) rotate(-225deg);
`

const hamburger = ({changeCategoryState, isCategory}) => {
    return(
        <Hamburger onClick={()=>changeCategoryState()}><LineWrapper>
            <Line clicked={isCategory? TopLine:""}></Line>
            <Line clicked={isCategory? MidLine:""}></Line>
            <Line clicked={isCategory? BottomLine:""}></Line>
        </LineWrapper></Hamburger>
    )
};

export default hamburger;