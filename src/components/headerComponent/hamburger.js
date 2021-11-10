import React from 'react';
import styled,{css} from 'styled-components';

const Hamburger = styled.button`
    position: absolute;
    top: 0px;
    left: 0px;
    width : 80px;
    height : 80px;
    border: 0px;
    background:white;
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
    -webkit-transition: .4s;
    transition: all .4s;
    ${props => props.clicked}
`;

const TopLine = css`
    ${Hamburger}:checked{
        transform: translateY(15px) rotate(225deg);
        transition-delay: 0.2s;
    }

`
const MidLine = css`
    ${Hamburger}:checked{
        opacity: 0;
        transform: translateX(50px);
        background:white;
    }

`
const BottomLine = css`
    ${Hamburger}:checked{
        transform: translateY(-11px) rotate(-225deg);
        transition-delay: 0.2s;
    }
`

const scrolled = css`
    box-shadow: 0 4px 4px rgba(31, 35, 46, .15);
    transition: box-shadow .5s ease-in;
`;

const Test = styled.input`
    width:50px;
    height:50px;
`;

const hamburger = ({changeCategoryState, isCategory}) => {
    return(
        <Hamburger onClick={()=>changeCategoryState()}><LineWrapper>
            <Line clicked={TopLine}></Line>
            <Line clicked={MidLine}></Line>
            <Line clicked={BottomLine}></Line>
        </LineWrapper></Hamburger>
    )
};

export default hamburger;